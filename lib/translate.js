'use strict'

const translationMap = require('./translationMap')

module.exports = input => {
  if (!input) throw Error('input must be not null')
  let index = 0
  const hexValues = []

  const toggleCase = str => {
    if (/[a-z]/.test(str)) return str.toUpperCase()
    return str.toLowerCase()
  }

  const appendHex = str => {
    let hex = translationMap[str]
    if (!hex) {
      hex = translationMap[toggleCase(str)]
    }
    if (hex) {
      hexValues.push(hex)
    }
  }

  while (index < input.length) {
    const str = input.charAt(index)

    // multiple char tokens.
    if (str === 'c' && input.charAt(index + 1) === 'h') {
      appendHex('ch')
      index += 2
      continue
    }
    if (str === 'g' && input.charAt(index + 1) === 'h') {
      appendHex('gh')
      index += 2
      continue
    }
    if (str === 'n' && input.charAt(index + 1) === 'g') {
      appendHex('ng')
      index += 2
      continue
    }
    if (str === 't' && input.charAt(index + 1) === 'l' && input.charAt(index + 2) === 'h') {
      appendHex('tlh')
      index += 3
      continue
    }

    // single char tokens.
    appendHex(str)

    index++
  }

  return hexValues.join(' ')
}
