//Entry point for todo
import '../styles/styles.css';
import { domElement } from './factoryDOM';

const tailwindTest = domElement('h1', {class: 'bg-red-900 text-white'}, 'Hello World')
document.body.appendChild(tailwindTest);


console.log('Hi');