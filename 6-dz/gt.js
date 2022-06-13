const a = ['a'];
const b = ['b'];
const c = ['c'];
const d = ['d'];
const e = ['e'];

const all ={
    ...a, b, c, d, e,
}
console.log(all)

 const obj = {
    key1: 'value',

    key2: 'value',

    key3: 'value',

    key4: 'value',

    key5: 'value'
}
const obj2 = {
    ...obj,
    key1q: "value",
    key2q: "value",
    key3q: "value"
}
console.log(obj2)

const list = [];

const name = document.querySelector("#name")
const knopka = document.querySelector("#knopka")

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(MainDiv)

}
knopka.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value+", hello"
    }
    this.append(list);
    list.push(obj);
    render()
}