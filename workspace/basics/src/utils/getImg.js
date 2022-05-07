export const getImg = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href
}
