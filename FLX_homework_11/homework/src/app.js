const rootNode = document.getElementById('root');
const todocatlist = rootNode.querySelector('#todocatlist');
const minLength = 0;
const maxItems = 10;
const renderItem = (text) => {
  const newItem = document.createElement('li');
  newItem.classList.add('todocatlist-item');
  newItem.classList.add('dragged-item');
  newItem.draggable = 'true';
  newItem.innerHTML = `
    <i class="material-icons todocatlist-status">check_box_outline_blank</i>
    <span>${text}</span>
    <i class="material-icons todocatlist-delete">delete</i>
`;
  return newItem;
}

window.onload = function () {
  document.getElementById('display-input').onkeyup = (event) => {
    if (event.target.value.length > minLength) {
      document.getElementById('display').classList.remove('display-button-disabled');
    } else {
      document.getElementById('display').classList.add('display-button-disabled');
    }
  }
  document.getElementById('display').onclick = (event) => {
    if (event.currentTarget.classList.contains('display-button-disabled')) {
      return false;
    }

    const input = document.getElementById('display-input');
    const newItem = renderItem(input.value);

    todocatlist.appendChild(newItem);
    input.value = '';
    document.getElementById('display').classList.add('display-button-disabled');
    initEvents();
    initDrag();
    displayMax();
  }
  const initEvents = () => {
    const todoItems = document.querySelectorAll('.todocatlist-item');
    todoItems.forEach((todo) => {
      const checkbox = todo.querySelector('.todocatlist-status');
      const deleteIcon = todo.querySelector('.todocatlist-delete');
      checkbox.onclick = (event) => {
        event.currentTarget.innerHTML = 'check_box';
      }
      deleteIcon.onclick = (event) => {
        const parent = event.currentTarget.parentNode;
        parent.remove();
        displayMax();
      }
    });
  }

  const displayMax = () => {
    const todolistLength = document.querySelectorAll('.todocatlist-item').length;
    if (todolistLength >= maxItems) {
      const message= document.createElement('p');
      message.classList.add('error');
      message.innerHTML = 'Maximum item per list are created';
      document.getElementById('display-input').disabled = 'true';
      document.querySelector('.wrapper header').appendChild(message);
    } else {
      document.getElementById('display-input').disabled = 0;
      if (document.querySelector('.error')) {
        document.querySelector('.error').remove();
      }
    }
  }
}

const initDrag = () => {
  const items = document.getElementsByClassName('dragged-item')
  for (const item of items) {
    item.addEventListener('dragover', dragover);
    item.addEventListener('dragenter', dragenter);
    item.addEventListener('dragleave', dragleave);
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('drop', drop);
  }
}

let dragged = 0;
const dragover = (event) => {
  event.preventDefault()
}
const dragenter = (event) => {
  event.preventDefault()
}
const dragleave = (event) => {
  event.preventDefault()
}
const dragstart = (event) => {
  dragged = event.currentTarget;
}
const drop = (event) => {
  if (event.currentTarget.classList.contains('dragged-item')) {
    const parent = event.currentTarget.parentNode;
    parent.insertBefore(dragged, event.currentTarget);
  }
}