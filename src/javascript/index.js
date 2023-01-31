//Entry point for todo
import '../styles/styles.css';
import { domElement } from './factoryDOM';
import { renderNav } from './nav';

const tailwindTest = domElement('h1', {class: 'bg-red-900 text-white'}, 'Hello World')
document.body.appendChild(tailwindTest);
renderNav();


console.log('Hi');