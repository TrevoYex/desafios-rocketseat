export default function initThemeSwitch() {
    const btn = document.querySelector('.button');
    const circle = document.querySelector('.circle');

    // funções
    function handleClick() {
        circle.classList.toggle('checked');
        document.body.classList.toggle('dark-mode');
    }



    // eventos
    btn.addEventListener('click', handleClick);
}