//sync
/*
function greet(){
	console.log("one");
	console.log("two");
}
greet();
*/

// async

/*
function greet1(call){
	console.log("one");
	call(greet2);
}
function greet2(){
	console.log("three")
}
function greet3(greet){
	console.log("two");
	greet(greet2)
}
greet1(greet3);

*/

//callback Function

/*
var count=0;
setTimeout(function(){
	count++;
	console.log(`count${count}`);
	setTimeout(function(){
		count++;
		console.log(`count${count}`);
		setTimeout(function(){
			count++;
			console.log(`count${count}`)
		},3000)
	},2000)
},1000);
*/
