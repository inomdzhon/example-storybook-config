export function clamp(num: number, lower: number, upper: number): number {
  return Math.min(Math.max(num, lower), upper);
}
