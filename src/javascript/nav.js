import { domElement } from "./factoryDOM";
import { renderProjectForm, renderTaskForm} from './forms';
import { addProjectCard } from "./addCard";

export function renderNav(){
    const nav = domElement('nav', {class: 'p-3 m-3 mx-4 border-yellow-400 rounded bg-yellow-400 dark:bg-stone-700 dark:border-yellow-700'},
        domElement('div', {id: 'nav-setting',class: 'container flex flex-wrap items-center justify-between mx-auto'},
            domElement('span', {class: 'self-center text-4xl mx-3 font-semibold whitespace-nowrap text-white'}, 'Dayly'),
            renderAddBtn('authentication-modal', 'new-project'),
            renderAddBtn('new-task-modal', 'new-task'),
            renderProjectForm(),
            renderTaskForm()
            )
            )

    document.body.appendChild(nav);
    document.getElementById('new-project').classList.remove('hidden');

    const newProjectButton = document.getElementById('project-button');
    newProjectButton.addEventListener('click', addProjectCard);

    const newTaskButton = document.getElementById('task-button');
    newTaskButton.addEventListener('click', addProjectCard);

    const closeBtns = document.querySelectorAll('.close-button')
    closeBtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('error-message').classList.add('hidden');}));

}

export function renderAddBtn(target, id) {
    const addButton = domElement('button', {id: `${id}`, 'data-modal-target': `${target}`, 'data-modal-toggle': `${target}`,type: 'button', class: 'inline-flex align-middle items-center p-2 pb-3 px-3.5 ml-3 text-4xl font-bold text-white rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-200 hidden'}, '+');
    return addButton;
}