'use strict'

const expect = require('chai').expect
const { describe, it } = require('mocha')
const translate = require('../lib/translate')

describe('Translate', () => {
  it('should translate to hex representation', () => {
    expect(translate('Uhura')).to.equal('0xF8E5 0xF8D6 0xF8E5 0xF8E1 0xF8D0')
    expect(translate('tlhIngan Hol Dajatlh’a’?')).to.equal('0xF8E4 0xF8D7 0xF8DC 0xF8D0 0xF8DB 0x0020 0xF8D6 0xF8DD 0xF8D9 0x0020 0xF8D3 0xF8D0 0xF8D8 0xF8D0 0xF8E4 0xF8E9 0xF8D0 0xF8E9')
  })
})
