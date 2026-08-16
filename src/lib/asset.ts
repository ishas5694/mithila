/**
 * Prefix a public-folder asset path with the site's basePath.
 *
 * Kept in sync with `next.config.ts`. When deploying under a subpath like
 * `<user>.github.io/<repo>/`, Next.js prepends `basePath` to Link/Image URLs,
 * but plain <img>/<video> tags and any values built at runtime (from data
 * arrays, joined strings, etc.) do NOT get the prefix — wrap those with this.
 *
 * Runtime lookup order: NEXT_PUBLIC_BASE_PATH env → hardcoded fallback.
 */
const BASE =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_BASE_PATH) ||
  "/mithila";

export function asset(path: string | undefined): string {
  if (!path) return path ?? "";
  if (/^https?:\/\//i.test(path)) return path; // absolute external URL
  if (!path.startsWith("/")) return path; // leave relative paths alone
  if (!BASE) return path;
  if (path === BASE || path.startsWith(BASE + "/")) return path; // already prefixed
  return BASE + path;
}
