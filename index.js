const method = [
	'pan-fried',
	'boiled',
	'oven-roasted'
]

const proteins = [
	'beef',
	'chicken',
	'fish',
	'shrimp',
	'tofu',
]

const carbs = [
	'potatos',
	'noodles',
	'naan',
	'cornbread',
	'rice',
	'corn',
	'wheat berries',
	'kasha',
	'root vegables'
]

const veggies = [
	'peppers',
	'endives',
	'cauliflour',
	'rapini',
	'salad',
	'brocolli'
]

const styles = [
	'indian',
	'latin',
	'english',
	'mediterranean',
	'middle-eastern'
]

function r(col) {
	return col[~~(Math.random()*col.length)]
}

function f(col) {
	return `${r(method)} ${r(col)}`
}
for (let i = 0; i < 20; i++) {
	console.log(`${r(styles)} ${f(proteins)} with ${f(carbs)} and ${f(veggies)}\n`)
}