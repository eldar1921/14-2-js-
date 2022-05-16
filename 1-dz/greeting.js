//1.создать переменную которая будет спрашивать имя и потом приветствовать по вашему имени
const name = prompt('Как тебя зовут?')

alert(name+ 'Здравствуйте')

// 2.создаёте 2 массива и сравниваете их длину, с помощью length
let fruits = ['Ананас','Мандарин','Арбуз']
let vegetables = ['Помидор','Капуста']

console.log(fruits.length)
console.log(vegetables.length)


let numbers = [[1,2,3][4,5,6]]

console.log(numbers.length)

// 3. Изучите switch case, сделайте светофор
let traffic_lights = prompt('цвет светофора');

switch (traffic_lights) {
  case 'зеленый':
    alert( 'можешь переходить дорогоу' )
    break
  case 'желтый':
    alert( 'готовься!' )
    break
  case 'красный':
    alert( 'остановись!' )
    break
  default:
    alert( "Нет такого цвета в светофоре" )
    break
}