var test = require('tape')
var dedash = require('./')

var glyphs = {
  figure: '‒',
  en: '–',
  em: '—',
  'horizontal bar': '―',
  swung: '⁓'
}

Object.keys(glyphs).forEach(function (glyph) {
  test('remove ' + glyph + ' dash', function (t) {
    t.plan(1)
    var str = 'hey' + glyphs[glyph] + 'cool!'
    t.equal(dedash(str), 'heycool!')
  })
})
