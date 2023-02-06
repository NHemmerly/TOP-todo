//Factory function that creates a task 
export {taskFactory};

const taskFactory = (title, dueDate, priority, desc, completed) => {
    return {title, dueDate, priority, desc, completed};
} 