let rootNode = document.getElementById('root');

const maxLi = 10;
let ul = document.getElementById('myList');
let del = document.getElementsByClassName('delete');
let pen = document.getElementsByClassName('pen');
let addBtn = document.getElementById('btn-action');
let mainInput = document.getElementById('text');

addBtn.addEventListener('click', addLi);
ul.addEventListener('click', delLi);
ul.addEventListener('click', changeText); 
mainInput.addEventListener('input', onMainInputChange);

function addLi (e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list-item';
    
    let leftDiv = document.createElement('div');
    leftDiv.className = 'left-side';
    li.appendChild(leftDiv);

    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.className = 'check';
    leftDiv.appendChild(check);

    let span = document.createElement('span');
    span.className = 'inf';
    let text = document.getElementById('text').value;
    span.appendChild(document.createTextNode(text));
    leftDiv.appendChild(span);
    
    let penBtn = document.createElement('i');
    penBtn.className = 'material-icons pen';
    penBtn.appendChild(document.createTextNode('edit'));
    leftDiv.appendChild(penBtn);

    let delBtn= document.createElement('i');
    delBtn.className = 'material-icons delete';
    delBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(delBtn);
    
    ul.appendChild(li);
}

function delLi (e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
}

function changeText (e) {
    if (e.target.classList.contains('pen')) {
        let inputText = document.createElement('input');
        let saveBtn = document.createElement('i');
        let li = e.target.parentElement;
        
        inputText.setAttribute('type', 'text');
        li.appendChild(inputText);
        saveBtn.className = 'material-icons save';
        saveBtn.appendChild(document.createTextNode('save'));
        li.appendChild(saveBtn);

        ul.addEventListener('click', function (e){
            edit(e, inputText, saveBtn, li);
        });
    }
}

function edit (e, inputText, saveBtn, li) {
    if (e.target.classList.contains('save')) {
        let lis = e.target.parentElement.querySelector('.inf');
        lis.textContent = inputText.value;
        li.removeChild(inputText);
        li.removeChild(saveBtn);
    }
}

function onMainInputChange (e) {
    if (e.currentTarget.value) {
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }
}