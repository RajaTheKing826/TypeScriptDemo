export function ValidateUserName(text) {
  if (text.length >= 8) {
    return ''
  }
  return 'error Message'
}
