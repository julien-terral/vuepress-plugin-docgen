module.exports = function(preview) {
  if (preview.length === 0) return ''
  return `
  ## Preview
  ${preview}
  `
}