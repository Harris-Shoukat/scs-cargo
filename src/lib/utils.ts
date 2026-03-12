/**
 * Utility for merging class names.
 * Install clsx + tailwind-merge for production use.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
