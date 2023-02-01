//Entry point for todo
import '../styles/styles.css';
import { domElement } from './factoryDOM';
import { renderNav } from './nav';
import { renderProjectView } from './projectsDOM';
import {addCard} from './addCard';

document.documentElement.classList.add('dark:bg-stone-600');
renderNav();
renderProjectView();

const addButton = document.getElementById('add');
addButton.addEventListener('click', addCard);

console.log('Hi');