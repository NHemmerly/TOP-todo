//File for top level of DOM rendering for cards and project view

import { domElement } from "./factoryDOM";
import { makeTaskView } from "./taskView";
import { clearAll } from "./clearBoard";
import { myProjects } from "./project";
import { showDetails } from "./taskView";

//Builds initial heading for the projects tab
export function renderProjectView() {
    const projectView = domElement('div', {id: 'project',class: 'flex self-center justify-between text-2xl p-3 mx-4 px-5 font-semibold whitespace-nowrap text-white border-yellow-400 rounded bg-yellow-400 dark:bg-stone-700'}, 
        domElement('span', {class: 'self-center text-3xl my-2 mx-3 font-semibold whitespace-nowrap text-white'}, 'Projects'));
    
    document.body.appendChild(projectView);
}

//Render all projects that exist in the myProjects array
export function renderAllProjects() {
    clearAll();
    myProjects.forEach(project => createProjectCard(project));
    document.getElementById('project').firstChild.innerText = 'Projects';
    document.getElementById('back-button').remove();
    document.getElementById('new-project').classList.remove('hidden');
    document.getElementById('new-task').classList.add('hidden');
}

//Renders all task cards in a project objects tasks array
function renderAllTasks(tasks) {
    clearAll();
    tasks.forEach(task => createTaskCard(task));
}

//Template for creating project cards to add to DOM
export function createProjectCard(project) {
    const newCard = domElement('button', {id: `${project.title}`,class: 'block max-w-sm min-h-full p-6 bg-white border border-yellow-200 rounded-lg shadow hover:bg-yellow-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer'},
                        domElement('h3', {class: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}, `${project.title}`),
                        domElement('h5', {class: 'font-normal text-gray-700 dark:text-gray-400'}, `Due: ${project.dueDate}`))
    document.getElementById('project-grid').appendChild(newCard);
    newCard.addEventListener('click', () => { 
        makeTaskView(`${project.title}`);
        renderAllTasks(project.tasks);
    });
    return newCard;
}


//Template for creating task cards to add to DOM
export function createTaskCard(task, project) {
    const priorityColor = task.priority;
    const newCard = domElement('button', {id: `${task.title}`, class: `block max-w-sm min-h-full p-6 bg-white border-2 border-l-[14px] ${priorityColor} rounded-lg shadow hover:bg-yellow-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer`},
                        domElement('div', {class: 'flex flex-row my-3'},
                            domElement('h3', {class: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}, `${task.title}`),
                            domElement('a', {class: 'cursor-pointer mr-1 text-xl text-black dark:text-white'}, 'O')),
                        domElement('h5', {class: 'font-normal text-gray-700 dark:text-gray-400'}, `Due: ${task.dueDate}`));
    newCard.classList.add(`border-${priorityColor}`);
    document.getElementById('project-grid').appendChild(newCard);
    newCard.addEventListener('click', () => {
        showDetails(getTaskObj(project, task.title));
    });
    return newCard;
}

//Builds the grid that houses both project and task cards
export function renderDomCards() {
    const cardGrid = domElement('div', {class: 'p-3 m-3 mx-4'},
    domElement('div', {id: 'project-grid',class: 'grid grid-cols-2 md:grid-cols-4 gap-4'})
    )
    document.body.appendChild(cardGrid);
}

function getTaskObj(project, taskTitle) {
    return project.tasks.find(task => task.title == taskTitle);
}

export function renderDefaultModal() {
    const defaultModal = domElement('div', {id: 'defaultModal', tabindex: '-1', 'aria-hidden': 'true', class: 'flex mx-auto sm:w-3/4 md:w-2/4 z-50 fixed inset-x-0 inset-y-0 p-4 overflow-x-hidden overflow-y-auto'},
                            domElement('div', {class: 'relative w-full h-full max-w-2xl md:h-auto'}, 
                                domElement('div', {class: 'relative bg-white rounded-lg shadow dark:bg-gray-700'},
                                    //Task Title
                                    domElement('div', {class: 'flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'},
                                        domElement('h3', {id: 'modal-header', class: 'text-xl font-semibold text-gray-900 dark:text-white'}),
                                        domElement('a', {id: 'close-info','data-modal-target': 'defaultModal', 'data-modal-hide': 'defaultModal', class: 'cursor-pointer mr-1 text-xl text-black dark:text-white'}, 'X')),
                                    //Task Info
                                    domElement('div', {class: 'p-6 space-y-6'},
                                        domElement('h4', {class: 'text-xl font-semibold text-gray-900 dark:text-white'}, 'Due: '),
                                        domElement('p', {id: 'info-due-date',class: "mx-3 text-base leading-relaxed text-gray-500 dark:text-gray-400"}),
                                        domElement('h4', {class: 'text-xl font-semibold text-gray-900 dark:text-white'}, 'Priority: '),
                                        domElement('p', {id: 'info-prio',class: "mx-3 text-base leading-relaxed text-gray-500 dark:text-gray-400"}),
                                        domElement('h4', {class: 'text-xl font-semibold text-gray-900 dark:text-white'}, 'Description: '),
                                        domElement('p', {id: 'info-desc',class: "break-normal mx-3 text-base leading-relaxed text-gray-500 dark:text-gray-400"}),
                                        domElement('h4', {class: 'text-xl font-semibold text-gray-900 dark:text-white'}, 'Complete?'),
                                        domElement('p', {id: 'info-complete',class: "mx-3 text-base leading-relaxed text-gray-500 dark:text-gray-400"}),
                                    //Edit and Delete buttons
                                    domElement('button', {id: 'edit-button', class: 'w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Edit'),
                                    domElement('button', {id: 'delete-button', class: 'close-button w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Delete Task')
                                    ))));
    const dimmer = domElement('div', {id: 'dimmer', class: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 hidden'})

    document.body.appendChild(defaultModal);
    document.body.appendChild(dimmer);
    document.getElementById('close-info').addEventListener('click', () => {
        document.getElementById('dimmer').classList.add('hidden');
    });
}
