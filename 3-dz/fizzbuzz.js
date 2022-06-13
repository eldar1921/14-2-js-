//dz3
function FizzBuzz(num){
    for(let i = 1;i < num + 1;i++){
        if(i % 3 === 0 && i % 5 != 0){
            console.log('Fizz')
        }else if(i % 5 === 0 && i % 3 != 0){
            console.log('Buzz')
        }else if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else{
            console.log(i)
        }
    }
}
FizzBuzz(100) 