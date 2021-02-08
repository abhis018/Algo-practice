// take a sum and an array. Find the first two element of the array whose sum is equal to the variable sum
// var sum = parseInt(process.argv[2]);
// var arr = [];

// for(let i=2; i<process.argv.length; i++){
//     arr.push(parseInt(process.argv[i]));
// }

// for(let i=0; i<arr.length ; i++){
//     for(let j=1; j<arr.length; j++){
//         if(arr[i] + arr[j] === sum){
//             console.log(arr[i]);
//             console.log(arr[j]);
//             return 0;
//         }
//     }
// }


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (answer1) => {
    
    var lines = [];

    rl.on('line', (line) => {
    lines.push(parseInt(line));
    });

    rl.on('close', () => {
        for(let i=0; i<lines.length ; i++){
            for(let j=1; j<lines.length; j++){
                if(lines[i] + lines[j] === parseInt(answer1)){
                    console.log(lines[i]);
                    console.log(lines[j]);
                    console.log(lines);
                    return 0;
                }
            }
        }
    });
});