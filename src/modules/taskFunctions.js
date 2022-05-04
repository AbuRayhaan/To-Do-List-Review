const steerChecked = () => {
  const storeCheck = JSON.parse(localStorage.getItem('tasks'));
  const checkBoxs = document.querySelectorAll('.check');
  storeCheck.forEach((a, i) => {
    if (a.completed === true) {
      checkBoxs[i].checked = true;
      document.getElementById(`pTask${i}`).style.textDecoration = 'line-through rgb(68, 68, 68)';
    }
  });
};

const removeChecked = () => {
  const buttonRemove = document.getElementById('button-clear');
  const checkBoxs = document.querySelectorAll('.check');
  const TasksR = JSON.parse(localStorage.getItem('tasks'));
  checkBoxs.forEach((check, i) => {
    check.addEventListener('click', () => {
      if (TasksR[i].completed === true) {
        TasksR[i].completed = false;
        checkBoxs[i].checked = false;
        document.getElementById(`pTask${i}`).style.textDecoration = 'none';
        localStorage.setItem('tasks', JSON.stringify(TasksR));
      } else {
        TasksR[i].completed = true;
        checkBoxs[i].checked = true;
        document.getElementById(`pTask${i}`).style.textDecoration = 'line-through rgb(68, 68, 68)';
        localStorage.setItem('tasks', JSON.stringify(TasksR));
      }
    });

    buttonRemove.addEventListener('click', () => {
      const taskFiltered = TasksR.filter((task) => task.completed !== true);
      localStorage.setItem('tasks', JSON.stringify(taskFiltered));
      window.location.reload();
    });
  });
};

export { steerChecked, removeChecked };