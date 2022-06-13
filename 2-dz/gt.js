//1 задание
function numbers(num1, num2){
    if(num1 < num2){
        console.log('num1 < num2');
    }else if(num2 < num1){
        console.log('num2 < num1')
    }else{
        console.log('они равны')
    }
}
numbers(2, 9)

// 2 задание
function countChar(arr1,arr2){
    console.log(arr1.length, arr2.length)
}
const arr1 = [1414,241,141,5647]
const arr2 = [144,41,1341]

countChar(arr1,arr2)
