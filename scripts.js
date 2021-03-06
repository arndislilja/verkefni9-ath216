// const API_URL = '/example.json?domain=';
const API_URL = 'https://apis.is/isnic?domain=';

document.addEventListener('DOMContentLoaded', function() {
  const domains = document.querySelector('.domains');

  program.init(domains);
});

/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  let domains;

  function displayError(error) {
    const container = domains.querySelector('.results');

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(document.createTextNode(error));
  }

  funcion fetchData(text) {
    fetch(`${API_URL}${text}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Villa við að sækja gögn');
      })
      .then((data) => {
        displayDomain(data.results);
      })
      .catch((error) => {
        displayError('Lén er ekki skráð')
        console.error(error);
      })
  }

  function onSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');

    //TODO höndla tómastreng

    fetchData(input.value);
  }

  function init(_domains) {
    domains = _domains;
    
    const form = domains.querySelector('form');
    form.addEventListener('Submit', onSubmit);

  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  program.init(domains);
});
