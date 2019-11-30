// type coercion is something like...
// when left side and right side are different types
// one will be converted to other type by js engine
// all languages have type coercion

// in js, use the === sign
// if you use the == sign, there are a lot of weird things it allows

1 === '1' //(this equals true)

if (1) { // js coerces 1 to equal true, logs 5, would turn 0 to false
	console.log(5)
}