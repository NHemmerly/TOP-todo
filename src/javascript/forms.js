import { domElement } from "./factoryDOM";

//Functions to render both forms to DOM
function formBase() {
    const formBase = domElement('div', {id: 'authentication-modal', tabindex: '-1',class: 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'},
        domElement('div', {class: 'relative w-full h-full max-w-lg md:h-auto'},
            domElement('div', {class: 'relative bg-white rounded-lg shadow dark:bg-gray-500'})));

    return formBase;
}
export function renderProjectForm() {
    const form = formBase();
    const formProject = domElement('div', {class: 'px-6 py-6 lg:px-8'},
        domElement('h3', {class: 'mb-4 text-xl font-medium text-black dark:text-white'}, 'Create a Project'),
        domElement('form', {id: 'new-project',class: 'space-y-6', action: '#'},
            domElement('div', {}, 
                domElement('label', {for: 'title', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Title: '),
                domElement('input', {type: 'text', name: 'title', id: 'title', class: 'bg-gray-100 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 black w-full p-2.5 dark:bg-gray-500 dark:text-white'})),
            domElement('div', {},
                domElement('label', {for: 'due-date', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Due Date: '),
                domElement('input', {type: 'date', name: 'due-date', id: 'due-date', class: 'bg-gray-100 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 black w-full p-2.5 dark:bg-gray-500 dark:text-white'})),
            domElement('button', {id: 'project-button',type:'submit', class: 'w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Create New Project')));
    form.firstChild.lastChild.appendChild(formProject);
    return form;
}