1. Create one function with zero parameter having a console statement;
     let x=()=>
{console.log(1)}

2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
     let x=function(y,z)
{console.log("sum of"+y","+z" is "+(y+z))

3.Create one arrow function
    let x=()=>
{console.log(1)}

4."Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();"

ans- undefined

5."Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
"

ans-  undefined 21

6."Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};"

ans  a is not defined

7.Write a function that accepts parameter n and returns factorial of n

 let fact(n)
{
  let f=1
while(n!=0)
{
f*=n;
n--;
}
return f;