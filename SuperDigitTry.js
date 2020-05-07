const tailRecursive = (arr , iter ) => {
      
    let strNums =  arr.reduce((prev, currv) => prev + currv)
 
   let res = strNums.split('').reduce((prev, curv) => Number(prev) + Number(curv))

    let newArr = res.toString().split('')

if(iter === 0) {
    return console.log(Number( res )) 
} 

else {
 
     return tailRecursive(newArr , iter - 1) 
 
  }
     



  }
const superDigit = (n, k) => { 

    let workArr = [];
 
    let splitNums = n.toString().split('')

    for(let i = 0; i < k; i++) {
    
        splitNums.map(num => {
            workArr.push(num)
        })
    }
  
 
    tailRecursive(workArr, k)





}
superDigit(148, 3)

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("enter --n-- space --k-- ", function(n) {

// let inputString = n.toString().trim()

// let realN = inputString.substr(0,inputString.indexOf(' '))
// let realK = inputString.substr(inputString.indexOf(' ')+1)

// console.log(realN, realK)
 
    
//     superDigit(realN, realK)
//         rl.close();
     
// });

  

  
