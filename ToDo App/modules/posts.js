import { doneTask, qtyCalc } from './helpers.js'

export function addPost() {
    const input = document.querySelector('.todo-block__input-area_input');
    const parentElement = document.querySelector('.todo-block__posts')
    let inputText;

    if (input.value.length == 0) {
        alert("Fill in the field!");
        return false;
    } else {
        inputText = input.value;
    }

    let newPost = document.createElement('div');
    newPost.className = 'todo-block__posts__container';
    
    parentElement.appendChild(newPost)

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.onchange = doneTask;
    newPost.appendChild(checkbox)

    let newPostTextContainer = document.createElement('div');
    newPostTextContainer.className = 'todo-block__posts__container_text';
    newPostTextContainer.innerText = inputText;
    newPostTextContainer.contentEditable = 'false';
    newPost.appendChild(newPostTextContainer)

    let newPostButtonContainer = document.createElement('div');
    newPostButtonContainer.className = 'todo-block__posts__container_button';
    newPost.appendChild(newPostButtonContainer)

    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    let saveButton = document.createElement('button');

    deleteButton.className = 'todo-block__posts__container_button_styles input-style';
    editButton.className = 'todo-block__posts__container_button_styles input-style';
    saveButton.className = 'todo-block__posts__container_button_styles input-style not-displayed';

    deleteButton.innerText = 'DEL';
    editButton.innerText = 'EDIT';
    saveButton.innerText = 'SAVE';

    deleteButton.onclick = deletePost;
    editButton.onclick = editPost;
    saveButton.onclick = savePost;

    newPostButtonContainer.appendChild(deleteButton);
    newPostButtonContainer.appendChild(editButton);
    newPostButtonContainer.appendChild(saveButton);

    input.value = '';
    qtyCalc()
}

function deletePost(e) {
    const deleteButton = e.target;
    const parent = deleteButton.parentElement.parentElement;
    parent.remove();
    qtyCalc();
}

function editPost(e) {
    const editButton = e.target;
    const saveButton = editButton.parentElement.childNodes[2];
    const editedDiv = editButton.parentElement.parentElement.childNodes[1];
    editedDiv.contentEditable = 'true';
    saveButton.classList.toggle('not-displayed');
    editedDiv.classList.toggle('white-background');
    editButton.classList.toggle('not-displayed');
    editedDiv.focus();
}

function savePost(e) {
    const saveButton = e.target;
    const editButton = saveButton.parentElement.childNodes[1];
    const editedDiv = saveButton.parentElement.parentElement.childNodes[1];
    editedDiv.contentEditable = 'false';
    editedDiv.classList.toggle('white-background');
    saveButton.classList.toggle('not-displayed');
    editButton.classList.toggle('not-displayed');
}