/**
 * Used to **avoid** clashing values, IE: "default" key on a <select> form control
 * Does not -- and should not -- perform any security related tasks.
 * This WILL create identical outputs if the same strings are used, so beware of that.
 *
 * @param string generic string to mask
 */
export const hash = (string: string) => {
  let hash = 0
  let char = null

  if (string.length === 0) return hash.toString()
  for (let i = 0, length = string.length; i < length; i++) {
    char = string.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0 // Convert to 32bit integer
  }
  return hash.toString()
}
