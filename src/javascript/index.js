//Entry point for todo
import '../styles/styles.css';
import { renderNav } from './nav';
import { renderDomCards, renderProjectView } from './projectsDOM';
import 'flowbite';

renderNav();
renderProjectView();
renderDomCards();

console.log('Hi');