const label = document.querySelector('.label');
let h1 = document.querySelector('h1');

label.addEventListener('click', theme);

function theme() {
    document.body.classList.toggle('dark-mode');
    const circle = document.querySelector('.circle');
    circle.classList.toggle('checked');
    if(document.body.classList == "") {
        h1.innerHTML = 'Light Mode'
    } else {
        h1.innerHTML = 'Dark Mode'
    }
}