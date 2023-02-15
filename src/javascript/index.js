//Entry point for todo
import '../styles/styles.css';
import { renderNav } from './nav';
import { renderDomCards, renderProjectView, renderDefaultModal } from './projectsDOM';
import 'flowbite';

renderNav();
renderProjectView();
renderDomCards();
renderDefaultModal();
