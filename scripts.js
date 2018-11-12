// const API_URL = '/example.json?domain=';
const API_URL = 'https://apis.is/isnic?domain=';

document.addEventListener
('DOMContentLoaded', function () {
  const domain = document.querySelector('.domains');

  program.init(domains);
});

/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  let domains;

  function onSubmit(e) {
    e.preventDefault();

    console.log(e);
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
