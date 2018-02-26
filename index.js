
'use strict'

const translate = require('./lib/translate')
const getSpecies = require('./lib/stapi/getSpecies')

async function main () {
  if (process.argv.length < 3) {
    console.error('You must pass a character name')
    process.exit(1)
  }

  const input = process.argv.slice(2).join(' ')

  try {
    console.log(translate(input))
    console.log(await getSpecies(input))
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

main()
