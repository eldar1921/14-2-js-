//1) Используя регулярные выражения необходимо сделать поле для ввода формата ИНН -
// первыми цифрами должны быть либо 1 либо 0, а затем еще 13 цифр (в общем должно быть 14 цифр)
const innInput = document.querySelector(".innInput");
const innCheck = document.getElementsByClassName("innCheck");
const innResult = document.querySelector(".innResult");

const innValidate = /^1\d{13}|2\d{13}$/;

innCheck[0].addEventListener("click", () => {
  if (innValidate.test(innInput.value)) {
    innResult.innerText = "yes";
    innResult.style.color = "green";
  } else {
    innResult.innerText = "no";
    innResult.style.color = "red";
  }
});

//2) используя рекурсию необходимо заставить блок двигаться по странице.
//Создайте один большой блок и один маленький внутри него. 
//Задайте большому блоку position: relative, а малому absolute. 
//Используя addEventListener изменяйте параметр позиции малого блока (.style.left=`${переменная}px`)
let num = 20;

const move = document.querySelector('.small-block');

move.addEventListener("click",() => {
  num++
  (move.style.left=`${num}px`)
    if(num <20) {
      return move()
    }  
})

move()