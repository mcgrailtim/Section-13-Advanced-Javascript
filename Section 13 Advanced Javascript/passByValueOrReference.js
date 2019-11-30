// variables are immutable, if you change the type then you are really
// creating a new variable with a new value
// objects are pass by reference

// pass by value: copy the value, create the value somewhere else in 
// memory

// pass by reference: objects in js are stored by memory, and passed
// by reference. Values aren't copied like for primitive types.
// when we assign obj1 to obj2, we say this is where the obj
// is in memory. obj1 and obj2 are pointed to same place that 
// contains the same information. If you change value of obj2 or 
// obj1, it will also change it for the other one. 

// arrays are simply objects. They are therefore pass by reference. 


// to COPY an array, you can do var d = [].concat(c); 
// c being the original array

// to COPY an object:
// let obj = {a: 'a', b: 'b', c: 'c'};  <-- the obj you want to copy
// let clone = Object.assign({}, obj); <-- {} empty obj to put it in, obj is source

// second way to COPY an object:
// let clone2 = {...obj}; <-- nice and clean, easy way!!

// each obj gets passed by reference BUT...
// shallow clone: clone the first level, but if theres obj in obj,
// then the inside obj gets passed by reference (only cloning 1st layer)

// deep cloning:
// let superClone = JSON.parse(JSON.stringify(obj))
// the above line turns everything into a string, parses it, then 
// turns it back into an object. This deep clones obj.
// can see some performance decline bc deep cloning obj take a lot





