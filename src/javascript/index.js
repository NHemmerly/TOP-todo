//Entry point for todo
import '../styles/styles.css';
import { domElement } from './factoryDOM';
import { renderNav } from './nav';
import { renderProjectView } from './projectsDOM';

document.documentElement.classList.add('dark:bg-stone-600');
renderNav();
renderProjectView();


console.log('Hi');