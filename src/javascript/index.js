//Entry point for todo
import '../styles/styles.css';
import { domElement } from './factoryDOM';
import { renderNav } from './nav';
import { renderProjectView } from './projectsDOM';
import 'flowbite';

document.documentElement.classList.add('dark:bg-gray-600');
renderNav();
renderProjectView();

console.log('Hi');