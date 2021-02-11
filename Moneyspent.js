// Question(-answer will be only algorithm)

// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
// Given price lists for keyboards and USB drives and a budget, find the cost to buy them.
// If it is not possible to buy both items, return -1


function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let res = [];
    let out = [];
    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
            res.push(keyboards[i] + drives[j]);
        }
    }
    console.log(res);
    for(let k=0; k<res.length; k++){
        if(res[k] <= b){
            out.push(res[k]);
        }
    }
    console.log(out);
    if(out.length > 0){
        return Math.max(...out);
    }else {
        return -1;
    }
}