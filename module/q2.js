const http = require('http');
const arithmetic = require('./module');
http.createServer((req,res)=>{
	res.end("Hey  check Terminal");
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${arithmetic.add(num1, num2)}`);
console.log(`Subtraction: ${arithmetic.subtract(num1, num2)}`);
console.log(`Multiplication: ${arithmetic.multiply(num1, num2)}`);
console.log(`Division: ${arithmetic.divide(num1, num2)}`);
}).listen(3000,()=>{
	console.log("server is running on http://localhost:3000");
})
