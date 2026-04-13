export function normalizeText(input) {
  let value = String(input);

  for (let index = 0; index < 500; index += 1) {
    value = value
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .join(" ");
  }

  return value.toLowerCase();
}
