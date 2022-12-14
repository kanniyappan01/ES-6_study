// promise

//.then
//.catch

/*
var value = new Promise(function(resolve,reject){
	resolve([1,2,3,4,5]);
})
value.then(function(arr){
	console.log(`promise value resolve with data ${arr}`)
});
*/

/*
var value = new Promise(function(resolve,reject){
//	reject("Error");
	resolve("Success");
	
});
value.then(function(data){
	console.log(`promise value resolved with data "${data}"`);
}).catch(function(data){
	console.log(`promise value reject with data "${data}"`);
});
*/
/*
var value = new Promise(function(resolve,reject){
	var num = Math.random();
	if(num < 0.5){
		resolve(num);
	}else{
		reject(num);
	}
});
value.then(function(data){
	console.log(`"Success" : ${data}`)
}).catch(function(data){
	console.log(`"Error" : ${data}`)
})

*/
