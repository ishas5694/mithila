export function clsx(
  ...args: (string | number | false | null | undefined)[]
): string {
  return args.filter(Boolean).join(" ");
}
