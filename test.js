const assert = require('assert')
const w = require('whew')
const fncArgs = require('./')

let testAsync = true

try {
	async () => {}
}
catch (err) {
	console.log('Disabling async tests as async is not supported in environment.')
	testAsync = false
}

w.add('Arrow, no arguments', (result) => {
	assert.deepStrictEqual(fncArgs(() => {}), [])
	result(true, 'Results were as expected.')
})

w.add('Arrow', (result) => {
	assert.deepStrictEqual(fncArgs((hey, hi) => {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.add('Function, basic', (result) => {
	assert.deepStrictEqual(fncArgs(function (hey, hi) {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.add('Function, basic, no arguments', (result) => {
	assert.deepStrictEqual(fncArgs(function () {}), [])
	result(true, 'Results were as expected.')
})

if (testAsync) w.add('Async function', (result) => {
	assert.deepStrictEqual(fncArgs(async function (hey, hi) {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

if (testAsync) w.add('Async arrow', (result) => {
	assert.deepStrictEqual(fncArgs(async (hey, hi) => {}), ['hey', 'hi'])
	result(true, 'Results were as expected.')
})

w.add('Arrow without parentheses', (result) => {
	assert.deepStrictEqual(fncArgs(hey => {}), ['hey'])
	result(true, 'Results were as expected.')
})

if (testAsync) w.add('Async arrow without parentheses', (result) => {
	assert.deepStrictEqual(fncArgs(async hey => {}), ['hey'])
	result(true, 'Results were as expected.')
})

w.test()