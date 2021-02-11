// Question(-answer will be only algorithm)
//There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


function getTotalX(a, b) {
    let arr =[];
    let res = [];
    let out = 0; 
    for(let i=a[a.length-1]; i<=b[0]; i++){
        arr.push(i);
    }
    console.log(arr);
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<b.length; j++){
            if(b[j] % arr[i] === 0){
                if(j === b.length-1){
                   res.push(arr[i]); 
                }
            }else {
                break;
            }
        }
    }
    console.log(res);
    for(let i=0; i<res.length; i++){
        for(let j=0; j<a.length; j++){
            if(res[i] % a[j] === 0){
                if(j === a.length-1){
                   out += 1; 
                }
            }else {
                break;
            }
        }
    }
    return out;
}