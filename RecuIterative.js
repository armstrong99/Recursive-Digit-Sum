const superDigit = (n, k) => {

    let workArr = [];
    let resArr = [];

 
    let splitNums = n.toString().split('')

     
    for(let i = 0; i < k; i++) {
    
        splitNums.map(num => {
            workArr.push(num)
        })
    }
 
resArr.push(workArr.reduce((prev, currv) => Number(prev) + Number(currv))
)

 let ans = resArr[0].toString().split('').length
if(ans !== 1) {
    for (let i = 0; i < ans; i++) {
      let respoArr =  resArr[i].toString().split('').reduce((prev, currv) => Number(prev) + Number(currv))
      resArr.push(respoArr)
        
    }

}

console.log(Number( resArr.slice(-1)[0] ))
 



}
 
 