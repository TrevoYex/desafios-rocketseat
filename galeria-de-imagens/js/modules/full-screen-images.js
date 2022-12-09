export default function initFullScreen() {
    const imgs = document.querySelectorAll('img');
    const close = document.querySelector('.close');
    const view = document.querySelectorAll('.view');
    const fullScreenImg = document.querySelector('#full-screen-img');
    
    let i;

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('.img-container').classList.add('active');
            // document.body.classList.add('full-screen-img');
            fullScreenImg.src = img.src;
            i = img.getAttribute('data-number');
        });
    });

    view.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.img-container').classList.add('active');
        });
    });

    close.addEventListener('click', () => {
        document.querySelector('.img-container').classList.remove('active');
    });
}
