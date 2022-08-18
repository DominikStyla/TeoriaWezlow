const buttonLight = document.getElementById('light');
const buttonDark = document.getElementById('dark');
const body = document.body;
var transition = false;

const theme = localStorage.getItem('theme');
if (theme) body.classList.add(theme);
else body.classList.add('dark');

console.log(theme);

buttonLight.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    if (!transition) {
        body.style.transition = 'background-color 200ms ease-in-out, color 400ms ease-in-out';
        transition = true;
    }
};

buttonDark.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    if (!transition) {
        body.style.transition = 'background-color 200ms ease-in-out, color 400ms ease-in-out';
        transition = true;
    }
};