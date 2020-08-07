import { lowerCase, upperCase, stripXmlTagsFromString } from '../string.js'

test('Uppercase string transforms to lowercase', () => {
  expect(lowerCase('TOBELOWERCASE')).toBe('tobelowercase')
})

test('Lowercase string transforms to uppercase', () => {
  expect(upperCase('tobeuppercase')).toBe('TOBEUPPERCASE')
})

test('XML or HTML tags in string are removed', () => {
  expect(
    stripXmlTagsFromString('Click <tag>here</tag> or <a href="#">here</a>')
  ).toBe('Click here or here')
})
