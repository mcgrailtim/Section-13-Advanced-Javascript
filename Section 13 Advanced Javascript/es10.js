// .flat() method that can be used on arrays
// condenses nested arrays
// this will flatten arrays default by 1 level, BUT you can 
// say how many levels you want it to be flattened by..
const array = [1,2,[3,4,[5]]]
array.flat(2) // this flattens twice, returns new array with no nest

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat() // cleans up the data, no more extra commas


// .flatMap() allows us to use flat and map together on arrays
// allows us to use basic map function, flattens result to depth of 1
const arrayChaos = array.flatMap(number => number + '🦖');


// trimStart() and trimEnd()
const userEmail = '           eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com           '
console.log(userEmail.trimStart()) // trims the start
console.log(userEmail2.trimEnd()) // trims the end


// fromEntries transforms list of key value pairs into an obj
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

const obj = Object.fromEntries(userProfiles)
Object.entries(obj) // turns it back into an array


// update to try/catch
// allow us to try a piece of code, if any errors, catch them
try {
	bob + 'hi'
} catch {
	console.log("Please try again")
}






