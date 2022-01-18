import { qtyCalc } from './modules/helpers.js';
import { addPost } from './modules/posts.js';

window.onload = qtyCalc;
document.querySelector('.todo-block__input-area_button').addEventListener('click', addPost);