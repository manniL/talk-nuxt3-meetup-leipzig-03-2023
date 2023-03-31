export default defineEventHandler((event) => {
  const { color } = event.context.params
  return `<h1 style="color: ${color}">I like colors</h1>`
})