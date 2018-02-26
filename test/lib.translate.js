'use strict'

const expect = require('chai').expect
const { describe, it } = require('mocha')
const translate = require('../lib/translate')

describe('Translate', () => {
  it('should translate a sentence', () => {
    console.log(translate('Uhura Uhura'))
  })
})
