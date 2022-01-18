export function doneTask(e) {
    const checkbox = e.target;
    const parent = checkbox.parentElement;
    let child = parent.childNodes;
    child[1].classList.toggle('todo-done');
    qtyCalc()
}

export function qtyCalc() {
    let tasksQtyContainer = document.getElementById('totalTasksQty');
    let doneTasksQtyContainer = document.getElementById('doneTasksQty');
    let todoTasksQtyContainer = document.getElementById('todoTasksQty')

    let totalTasksQty = document.getElementsByClassName('todo-block__posts__container').length;
    let doneTasksQty = document.getElementsByClassName('todo-done').length;
    let todoTasksQty = totalTasksQty - doneTasksQty;
    
    tasksQtyContainer.innerText = totalTasksQty;
    doneTasksQtyContainer.innerText = doneTasksQty;
    todoTasksQtyContainer.innerText = todoTasksQty;
}
