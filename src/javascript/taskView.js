//Renders task view for selected card
import {clearAll} from './clearBoard';
import { domElement } from './factoryDOM';
import { renderAllProjects } from './projectsDOM';

export function makeTaskView(projectTitle) {
    const backButton = domElement('button', {id: 'back-button', type: 'button', class: 'inline-flex align-middle items-center p-2 px-3.5 mr-5 text-2xl font-bold text-white rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200'}, 'X');
    clearAll();
    const project = document.getElementById('project');
    backButton.addEventListener('click', renderAllProjects);
    project.appendChild(backButton);
    project.firstChild.innerText = projectTitle;
    document.getElementById('new-project').classList.add('hidden');
    document.getElementById('new-task').classList.remove('hidden');
}

export function showDetails(taskObj) {
    const modalHeader = document.getElementById('modal-header');
    const defaultModal = document.getElementById('defaultModal');
    const dueDate = document.getElementById('info-due-date');
    const prioName = document.getElementById('info-prio');
    const infoDesc = document.getElementById('info-desc');
    const infoComplete = document.getElementById('info-complete');
    const dimmer = document.getElementById('dimmer');
    defaultModal.classList.remove('hidden');
    dimmer.classList.remove('hidden');
    modalHeader.innerText = taskObj.title;
    dueDate.innerText = taskObj.dueDate;
    prioName.innerText = taskObj.priorityName;
    infoDesc.innerText = taskObj.desc;
    infoComplete.innerText = (taskObj.completed == 1) ? 'no' : 'yes';

    const editButton = document.getElementById('edit-button');
    const deleteButton = document.getElementById('delete-button');

    deleteButton.addEventListener('click', () => deleteTask(taskObj));
}
