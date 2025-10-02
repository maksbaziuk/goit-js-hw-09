const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';
checkLocalStorage();

function checkLocalStorage() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.querySelector('[name="email"]').value = formData.email;
    form.querySelector('[name="message"]').value = formData.message;
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
