const list = [];

const addButton = document.getElementById('button')
const input = document.getElementById('input')

function change(id) {
    const item = list.findIndex(t=> t.id === id)
    const text = prompt('change');
    list[item].text = text
    render();
}

function deleteObj(id) {
    const index = list.findIndex(t => t.id === id)
    list.splice(index, 1)
    render()
}

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')

    for(let i = 0; i < list.length; i++){
        const div = document.createElement("div");
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        // const inputChange = document.createElement('input')
        // inputChange.setAttribute('class', 'inputChange') 
        // inputChange.innerText = ''
        const changeButton = document.createElement("button");
        changeButton.setAttribute('class','change')
        changeButton.onclick = () =>{
            change(list[i].id)
        }
        changeButton.innerText = 'change'; 

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute("class", 'delete');
        deleteButton.onclick = () =>{
            deleteObj(list[i].id)
        }
        deleteButton.innerText = 'delete';
        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div)
    }     
    const form = document.querySelector('.form');
    document.querySelector('.list').remove()
    form.append(mainDiv)
}
addButton.onclick = function () {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj)
    console.log(list)
    render();
};
