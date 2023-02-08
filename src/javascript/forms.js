import { domElement } from "./factoryDOM";

//Functions to render both forms to DOM
function formBase(id) {
    const formBase = domElement('div', {id: `${id}`, tabindex: '-1',class: 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'},
        domElement('div', {class: 'relative w-full h-full max-w-lg md:h-auto'},
            domElement('div', {class: 'relative bg-white rounded-lg shadow dark:bg-gray-500'})));

    return formBase;
}
export function renderProjectForm() {
    const form = formBase('authentication-modal');
    const formProject = domElement('div', {class: 'px-6 py-6 lg:px-8'},
    domElement('div', {id: 'error-message',class: 'flex content-center p-1 bg-red-400 w-full rounded border border-red-300 hidden'},
        domElement('p', {class: 'text-red-900'}, 'Please Fill Entire Form.')),
    domElement('div', {id: 'error-title',class: 'flex content-center p-1 bg-red-400 w-full rounded border border-red-300 hidden'},
        domElement('p', {class: 'text-red-900'}, 'Title already in use.')),
    domElement('div', {class: 'flex flex-row my-3'},
        domElement('h3', {class: 'mb-4 w-full text-xl font-medium text-black dark:text-white'}, 'Create a Project'),
        domElement('a', {'data-modal-target': 'authentication-modal', 'data-modal-hide': 'authentication-modal', class: 'cursor-pointer mr-1 text-xl text-black dark:text-white'}, 'X')
    ),
        domElement('form', {id: 'project-form',class: 'space-y-6', action: '#'},
            domElement('div', {}, 
                domElement('label', {for: 'title', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Title: '),
                domElement('input', {type: 'text', name: 'title', id: 'title', class: 'bg-gray-100 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 black w-full p-2.5 dark:bg-gray-500 dark:text-white required'})),
            domElement('div', {},
                domElement('label', {for: 'due-date', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Due Date: '),
                domElement('input', {type: 'date', name: 'due-date', id: 'due-date', class: 'bg-gray-100 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 black w-full p-2.5 dark:bg-gray-500 dark:text-white required'})),
            domElement('button', {id: 'project-button', type:'submit', class: 'w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Create New Project'),
            domElement('button', {id: 'close-button', 'data-modal-target': 'authentication-modal', 'data-modal-hide': 'authentication-modal', class: 'close-button w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Close Form')));

    form.firstChild.lastChild.appendChild(formProject);
    return form;
}

export function renderTaskForm() {
    const radioList = ('w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600');
    const radioInput = ('w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500');
    const radioLabel = ('w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300');
    const form = formBase('new-task-modal');
    const formTask = domElement('div', {class: 'px-6 py-6 lg:px-8'},
    domElement('div', {id: 'error-message-task',class: 'flex content-center p-1 bg-red-400 w-full rounded border border-red-300 hidden'},
    domElement('p', {class: 'text-red-900'}, 'Please Fill Entire Form.')),
    domElement('div', {class: 'flex flex-row my-3'},
        domElement('h3', {class: 'mb-4 w-full text-xl font-medium text-black dark:text-white'}, 'Create a Task'),
        domElement('a', {'data-modal-target': 'new-task-modal', 'data-modal-hide': 'new-task-modal', class: 'cursor-pointer mr-1 text-xl text-black dark:text-white'}, 'X')
    ),
        domElement('form', {id: 'task-form',class: 'space-y-6', action: '#'},
            domElement('div', {}, 
                domElement('label', {for: 'title', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Title: '),
                domElement('input', {type: 'text', name: 'title', id: 'title', class: 'bg-gray-100 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 black w-full p-2.5 dark:bg-gray-500 dark:text-white required'})),
            domElement('div', {},
                domElement('label', {for: 'due-date', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Due Date: '),
                domElement('input', {type: 'date', name: 'due-date', id: 'due-date', class: 'bg-gray-100 border border-gray-400 text-black text-sm rounded-lg focus:ring-blue-500 black w-full p-2.5 dark:bg-gray-500 dark:text-white required'})),
            domElement('div', {class: 'mb-5'},
                domElement('label', {for: 'priority', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Priority: '),
                domElement('ul', {class: 'items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'},
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'priority-1', type: 'radio', value: '1', name: 'priority',class: `${radioInput}`}),
                            domElement('label', {for: 'priority-1',class: `${radioLabel}`}, 'low'))),
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'priority-2', type: 'radio', value: '2', name: 'priority',class: `${radioInput}`}),
                            domElement('label', {for: 'priority-2',class: `${radioLabel}`}, '2'))),
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'priority-3', type: 'radio', value: '3', name: 'priority',class: `${radioInput}`}),
                            domElement('label', {for: 'priority-3',class: `${radioLabel}`}, 'med'))),
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'priority-4', type: 'radio', value: '4', name: 'priority',class: `${radioInput}`}),
                            domElement('label', {for: 'priority-4',class: `${radioLabel}`}, '4'))),
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'priority-5', type: 'radio', value: '5', name: 'priority',class: `${radioInput}`}),
                            domElement('label', {for: 'priority-5',class: `${radioLabel}`}, 'high'))))),
            domElement('div', {class: 'mb-4'},
                domElement('label', {for: 'desc', class: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}, 'Description: '),
                domElement('input', {id: 'desc', name: 'desc', rows: '4', class: 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', placeholder: 'Add additional details here...'})),
            domElement('div', {class: 'mb-4'},
                domElement('label', {for: 'completed', class: 'black mb-2 text-sm font-medium text-black dark:text-white'}, 'Completed? '),
                domElement('ul', {class: 'items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white'},
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'yes', type: 'radio', value: '0', name: 'completed',class: `${radioInput}`}),
                            domElement('label', {for: 'yes',class: `${radioLabel}`}, 'yes'))),
                    domElement('li', {class: `${radioList}`},
                        domElement('div', {class: 'flex items-center pl-3'},
                            domElement('input', {id: 'no', type: 'radio', value: '1', name: 'completed',class: `${radioInput}`}),
                            domElement('label', {for: 'no',class: `${radioLabel}`}, 'no'))))),                    
            domElement('button', {id: 'task-button', type:'submit', class: 'w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Create New Task'),
            domElement('button', {id: 'close-button', 'data-modal-target': 'new-task-modal', 'data-modal-hide': 'new-task-modal', class: 'close-button w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center'}, 'Close Form')));

    form.firstChild.lastChild.appendChild(formTask);
    return form;
}