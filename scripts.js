// const API_URL = '/example.json?domain=';
const API_URL = 'https://apis.is/isnic?domain=';

/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  let domains;

  funcion fetchData(domain) {
    fetch(`${API_URL}${domain}`)
      .then((response) => {
        debugger;
      })
      .catch((error) => {
        //TODO villumeðhöndlun
        console.error(error);
      } )
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
