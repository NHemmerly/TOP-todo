import { domElement } from "./factoryDOM";

//Functions to render both forms to DOM
function formBase() {
    const formBase = domElement('div', {id: 'form-base', tabindex: '-1',class: 'form-holder fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'},
        domElement('div', {class: 'relative w-full h-full max-w-md md:h-auto'},
            domElement('div', {class: 'relative bg-yellow-200 rounded-lg shadow dark:bg-stone-500'})));

    return formBase;
}
export function renderProjectForm() {
    const form = formBase();
    const formProject = domElement();
    form.appendChild(formProject);
    return form;
}