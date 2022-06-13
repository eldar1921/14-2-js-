//oop - объект ориентированная програмиирование
// class Dog{
//     constructor(weight,height,color){
//         this.weight = weight
//         this.height = height
//         this.color = color
//     }
// }

// const rex = new Dog(
//     10,
//     50,
//     'black'
// )
// console.log(rex)

// const sharik = new Dog(
//     5,
//     25,
//     'pink'
// )

//наследвенность
// class Animal{
//     constructor(type,gender,color,voiceText){
//         this.type = type;
//         this.gender = gender;
//         this.color = color;
//         this.voiceText = voiceText;
//     }
//     voice(){
//         console.log(this.voiceText)
//     }
// }

// class bear extends Animal{
//     constructor(type,gender,color,voiceText,height,weight){
//         super(type,gender,color,voiceText)
//         this.height = height;
//         this.weight = weight;
//     }
//     purpose(){
//         console.log(`bear weight:${this.weight}\n bear color:${this.color}\nbear voice ${this.voiceText}` )
//     }

// }

// const Misha = new bear(
//     'wild',
//     'male',
//     'white',
//     'aaaaaaaa',
//     2,
//     300
// )

// // console.log(Misha)
// // Misha.purpose()
// const Beka = new bear(
//     'pet',
//     'male',
//     'pink',
//     'auf',
//     3,
//     340
// )
// Beka.purpose()

//dz-7
class Cat extends Animal{
    constructor(type,gender,color,voiceText,height,weight,earLength,speed){
        super(type,gender,color,voiceText)
        this.height = height
        this.weight = weight
        this.earLength = earLength
        this.speed = speed
    }
}

const Tom = new Cat(
    'pet',
    'male',
    'black',
    'Myau myau',
    20,
    6,
    5,
    10
)

class building{
    constructor(height,width,color,Door,window,roof,wall,number_of_people,ceiling,floor){
        this.height = height
        this.width = width
        this.color = color
        this.Door = Door
        this.window = window
        this.roof = roof
        this.wall = wall
        this.number_of_people = number_of_people
        this.ceiling = ceiling
        this.floor = floor
    }
}

class home extends building{ 
        constructor(height,width,color,Door,window,roof,wall,number_of_people,ceiling,floor){
        super(height,width,color,Door,window,roof,wall,number_of_people,ceiling,floor)
    }
}

const myHome = new home(
    10,
    15,
    'orange',
    'green',
    8,
    'bkack',
    'brick',
    10,
    'pink',
    'white'
)

console.log(myHome)

class school extends building{
        constructor(height,width,color,Door,window,roof,wall,number_of_people,ceiling,floor,furniture,rooms,wallpaper,table,cupboard){
        super(height,width,color,Door,window,roof,wall,number_of_people,ceiling,floor)
        this.furniture = furniture
        this.rooms = rooms
        this.wallpaper = wallpaper
        this.table = table
        this.cupboard = cupboard
   const mySchool = new schoo    2    4    'orange    'green        'bkack    'brick    1    'pink    'white    'many    4    'various    20    console.log(mySchool)
