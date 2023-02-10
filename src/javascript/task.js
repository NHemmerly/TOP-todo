//Factory function that creates a task 
export {taskFactory};

const taskFactory = (title, dueDate, priority, desc, completed) => {
    priority = setPriorityColor(priority);
    return {title, dueDate, priority, desc, completed};
} 

//Sets the priority variable to a tailwind color class
function setPriorityColor(priority) {
    switch (priority) {
        case '1':
            priority = 'border-l-green-500'
            return priority;
        case '2':
            priority = 'border-l-yellow-200'
            return priority;
        case '3':
            priority = 'border-l-yellow-400'
            return priority;
        case '4':
            priority = 'border-l-red-300'
            return priority;
        case '5':
            priority = 'border-l-red-600'
            return priority;
    }
}