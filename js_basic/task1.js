const arr1 = [1,2,3]
const arr2 = [4,5,6]

//method1
const arr3 = arr1.concat(arr2)
console.log(arr3);

//method2
const arr4 = [...arr1, ...arr2]
console.log(arr4)

//method3 
const arr5 = arr1
arr5.push(4,5,6)
console.log(arr5);

//method4
let arr6;
for(let i=0; i<arr1.length+arr2.length; i++){
    i<
    arr6[i] + arr1[i]
}