const updateLabel = () => {
  const arrayStored = localStorage.getItem('tasks');
  const arrayStoredparse = JSON.parse(arrayStored);
  const inputs = document.querySelectorAll('.UpdateLabel');

  inputs.forEach((element, i) => {
    element.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        arrayStoredparse[i].description = event.currentTarget.value.trim();
        localStorage.setItem('tasks', JSON.stringify(arrayStoredparse));
        window.location.reload();
      }
    });
  });
};

export default updateLabel;