const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

//! Apply the carhed theme on reload


const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}


//! Button Enevt Handlers


darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};


solarButton.onclick = () => {

  if (body.classList.contains('solar')) {
    
    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};

//! logo change

const blackLogo = document.getElementsById('Black-logo');
const whiteLogo = document.getElementById('White-logo');


darkButton.onclick = () => {
  body.classList.remove('Black-logo');
  body.classList.add('White-logo');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.remove('White-logo');
  body.classList.add('Black-logo');
  localStorage.setItem('theme', 'light');
};