document.querySelector('.remove-todo').addEventListener('click', function(){
    const indexBox = Number(document.querySelector('.index-input').value);
    console.log(document.querySelector(`.todo-list:nth-child(${indexBox})`));
    document.querySelector('.todo-list').removeChild(document.querySelector(`.todo-list li:nth-child(${indexBox})`));
    indexBox.value = '';
})