//Renders task view for selected card
import {clearAll} from './clearBoard';
import { domElement } from './factoryDOM';

function renderTasks() {

}

export function makeTaskView(projectTitle) {
    const backButton = domElement('button', {type: 'button', class: 'inline-flex align-middle items-center p-2 px-3.5 ml-3 text-2xl font-bold text-white rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200'}, 'X');
    clearAll();
    const project = document.getElementById('project');
    project.appendChild(backButton);
    project.firstChild.innerText = projectTitle;
}