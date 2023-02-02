//Entry point for todo
import '../styles/styles.css';
import { domElement } from './factoryDOM';
import { renderNav } from './nav';
import { renderDomCards, renderProjectView } from './projectsDOM';
import 'flowbite';

document.documentElement.classList.add('dark:bg-gray-600');
renderNav();
renderProjectView();
renderDomCards();

console.log('Hi');