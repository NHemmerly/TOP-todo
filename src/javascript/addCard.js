//Function for adding card to dom using '+' button
function openForm(id) {
    (id == 0) ? renderProjectForm() : renderTaskForm();
}

export function addCard() {
    if (document.getElementById('project') != null) {
        openForm(0);
    } else {
        openForm(1);
    }
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', addCard);