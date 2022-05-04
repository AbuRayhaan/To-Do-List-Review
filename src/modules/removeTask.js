import updateId from './updateId.js';

const removeTask = () => {
  const removeList = document.querySelectorAll('.hide1');
  const taskStored = JSON.parse(localStorage.getItem('tasks'));
  removeList.forEach((a, i) => {
    document.getElementById(`idBtn${i}`).addEventListener('click', () => {
      const taskFiltered = taskStored.filter((task) => task.index !== i + 1);
      localStorage.setItem('tasks', JSON.stringify(taskFiltered));
      window.location.reload();
      updateId();
    });
  });
};

export default removeTask;