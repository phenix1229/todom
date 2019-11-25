document.querySelector('.add-todo').addEventListener('click', function(){
    const inputBox = document.querySelector('.todo-input');
    document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = inputBox.value;
    inputBox.value = '';
});