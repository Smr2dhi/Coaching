const arr=[2,49,7,true,'hello',78.90]
console.log(typeof(arr));  //object
console.log(Array.isArray(arr));

const movies=['Avenger','Simba','TMK','Sholey','Babhubali','Saiyaara']; //const does not let new array naking like movies=[89,97,.. ]something like this
console.log(movies.length);

//Indexing
console.log(movies[4]);
console.log(movies.indexOf('TMK'));
console.log(movies[-1]);// It would actually return undefined, because JavaScript array indexing starts at 0 and only supports non-negative integers as indices. Any negative index is treated as a property on the array object, and if no such property exists (which is usually the case), it returns undefined. 
console.log(movies.at(-1)); //it provide negative indexing
console.log(movies.at(1));

movies[2]='PK' //.at not support to add and replace
console.log(movies);

//Slicing
console.log(movies.slice(2,4)); //pk,sholey
console.log(movies.slice(-2)); // bahubali saiyaara

console.log(movies);

console.log(movies.splice(2,4)); //pk ,Sholey,Bhaubali,Saiyaara
console.log(movies);







