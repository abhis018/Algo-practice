// take a sum and an array. Find the first two element of the array whose sum is equal to the variable sum
var sum = parseInt(process.argv[2]);
var arr = [];

for(let i=2; i<process.argv.length; i++){
    arr.push(parseInt(process.argv[i]));
}
console.log(sum);
console.log(arr);

for(let i=0; i<arr.length ; i++){
    for(let j=1; j<arr.length; j++){
        if(arr[i] + arr[j] === sum){
            console.log(arr[i]);
            console.log(arr[j]);
            return 0;
        }
    }
}