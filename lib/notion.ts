/**
 * Notion REST API helper (no SDK dependency — uses native fetch for stability
 * across Notion SDK versions).
 *
 * Environment variables required:
 *   NOTION_API_KEY          — your Notion Integration secret
 *   NOTION_PROMO_DB_ID      — the Database ID for promo themes (optional)
 */

const NOTION_API_BASE = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28'; // stable public version

export const NOTION_API_KEY = process.env.NOTION_API_KEY ?? '';
export const NOTION_PROMO_DB_ID = process.env.NOTION_PROMO_DB_ID ?? '';

/** Shared headers for all Notion API requests. */
function notionHeaders() {
  return {
    Authorization: `Bearer ${NOTION_API_KEY}`,
    'Notion-Version': NOTION_VERSION,
    'Content-Type': 'application/json',
  };
}

/**
 * Query a Notion database.
 * @param databaseId  The Notion database ID.
 * @param body        Optional request body (filter, sorts, page_size, etc.).
 */
export async function queryNotionDatabase(
  databaseId: string,
  body?: Record<string, unknown>
): Promise<NotionQueryResponse> {
  const res = await fetch(`${NOTION_API_BASE}/databases/${databaseId}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: body ? JSON.stringify(body) : undefined,
    // ISR-friendly: revalidate every 60 s on the server
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(
      `[Notion] queryDatabase failed: ${res.status} ${res.statusText}`
    );
  }

  return res.json() as Promise<NotionQueryResponse>;
}

// ─── Minimal Notion response types ────────────────────────────────────────────

export interface NotionRichText {
  plain_text: string;
}

export interface NotionTitleProperty {
  type: 'title';
  title: NotionRichText[];
}

export interface NotionRichTextProperty {
  type: 'rich_text';
  rich_text: NotionRichText[];
}

export interface NotionSelectProperty {
  type: 'select';
  select: { name: string } | null;
}

export interface NotionDateProperty {
  type: 'date';
  date: { start: string; end: string | null } | null;
}

export type NotionProperty =
  | NotionTitleProperty
  | NotionRichTextProperty
  | NotionSelectProperty
  | NotionDateProperty
  | Record<string, unknown>;

/**
 * Ambil tanggal start & end dari property bertipe date.
 * Return null jika property tidak ada atau bukan tipe date.
 */
export function getDateRange(
  prop: NotionProperty | undefined
): { start: Date; end: Date | null } | null {
  if (!prop || prop.type !== 'date') return null;
  const d = (prop as NotionDateProperty).date;
  if (!d?.start) return null;
  return {
    start: new Date(d.start),
    end: d.end ? new Date(d.end) : null,
  };
}

/**
 * Cek apakah hari ini masih dalam rentang tanggal promo.
 * - Jika tidak ada tanggal sama sekali → dianggap selalu aktif (return true)
 * - Jika ada end date dan sudah lewat → return false (promo expired)
 * - Jika ada start date dan belum mulai → return false
 */
export function isPromoActive(prop: NotionProperty | undefined): boolean {
  const range = getDateRange(prop);
  if (!range) return true; // tidak ada tanggal = selalu aktif

  const now = new Date();
  // Normalisasi ke awal hari agar tidak bergantung jam
  now.setHours(0, 0, 0, 0);

  if (now < range.start) return false; // belum mulai
  if (range.end) {
    const endOfDay = new Date(range.end);
    endOfDay.setHours(23, 59, 59, 999);
    if (now > endOfDay) return false; // sudah selesai
  }
  return true;
}

export interface NotionPage {
  object: 'page';
  id: string;
  properties: Record<string, NotionProperty>;
}

export interface NotionQueryResponse {
  object: 'list';
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
}

/** Extract plain text from a title or rich_text property safely. */
export function getPlainText(prop: NotionProperty | undefined): string {
  if (!prop) return '';
  if (prop.type === 'title') return (prop.title as NotionRichText[]).map((t: NotionRichText) => t.plain_text).join('');
  if (prop.type === 'rich_text') return (prop.rich_text as NotionRichText[]).map((t: NotionRichText) => t.plain_text).join('');
  return '';
}
