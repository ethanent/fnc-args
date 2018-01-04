const assert = require('assert')
const w = require('whew')
const fncArgs = require('./')

w.add('Arrow', (result) => {
	assert.deepStrictEqual(fncArgs((hey, hi) => {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.add('Function, basic', (result) => {
	assert.deepStrictEqual(fncArgs(function (hey, hi) {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.add('Async function', (result) => {
	assert.deepStrictEqual(fncArgs(async function (hey, hi) {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.add('Async arrow', (result) => {
	assert.deepStrictEqual(fncArgs(async (hey, hi) => {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.test()