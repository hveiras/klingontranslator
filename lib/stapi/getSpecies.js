'use strict'

const rp = require('request-promise-native')
const { flatten, uniq } = require('ramda')

module.exports = async characterName => {
  if (!characterName || typeof characterName !== 'string') throw Error('You must pass a valid character name.')

  const options = {
    method: 'POST',
    uri: 'http://stapi.co/api/v1/rest/character/search',
    form: {
      name: characterName,
      title: characterName
    },
    json: true
  }

  const res = await rp(options)

  if (res.characters.length === 0) throw Error('No characters found')

  const uids = res.characters.map(x => x.uid)

  const charactersP = uids.map(uid => rp('http://stapi.co/api/v1/rest/character/?uid=' + uid))
  const results = (await Promise.all(charactersP)).map(x => JSON.parse(x).character.characterSpecies)
  return uniq(flatten(results).map(x => x.name)).join(' ')
}
