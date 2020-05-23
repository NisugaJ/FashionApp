export function hasNumerics(string) {
  return /\d/.test(string)
}

export function hasOnlyNumerics(string) {
  return /^\d+$/.test(string)
}
