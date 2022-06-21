// const obj ={
//     name: "Jonh",
//     age:"20",
// }

// console.log(obj,"obj");

// const data = JSON.stringify(obj) //stringify - это общий формат для представления значений и объектов.

// console.log(data,"string")
// console.log(JSON.parse(data),"parse") //parse - предвратить что-то в объект чтобы данные можно было пользоваться

// const btn = document.querySelector(".btn")

// btn.addEventListener("click",() =>{ //это базовые запросы
//     const reqest = new XMLHttpRequest() //создание запроса
//     reqest.open("GET","data.json") //тип запрос\сервер
//     reqest.setRequestHeader("Content-type","application/json")//тип данных запроса
//     reqest.send()//отправка запроса на сервер
//     reqest.addEventListener("load",()=>{//ожидание запроса
//         const data = JSON.parse(reqest.response)//принимаем данные с сервера //мы паршим данные которые нам приходят,а response - это то и что нам вернет запрос которого мы вызвали(data.json)
//         console.log(reqest.response)
//         console.log(data)
//         document.querySelector(".name").innerHTML = data.name
//         document.querySelector(".age").innerHTML = data.age
//     })
// })

//null undef boolean string num nan - primitive
//obj arr fun - obj

//так работает примитивные данные
// const num = 5

// let num2 = num +10

// console.log(num)
// console.log(num2)

// //неудобный вариант
// const obj = {
//     name:"Alex",
//     num:"0507005446",
// }

// const obj2 = obj 

// obj2.name ="John"

// console.log(obj)
// console.log(obj2)

// //реструктуризация
// const obj2 = {...obj} //легкий вариант

// obj2.name = "John"
// console.log(obj2)


//Node.js !!!
let http = require("http")//создаем сервер таким же типом,для начало мы его инициализируем

http
    .createServer((reqest,response)=>{ //создание сервера
        response.writeHead(200,{"Content-type":'text/plain'})//200 code - успешный
        response.end("Hello world")//то что должен выводить на экран
    })
    .listen(8081)//port

    console.log("server running at http://127.0.0.1:8081")