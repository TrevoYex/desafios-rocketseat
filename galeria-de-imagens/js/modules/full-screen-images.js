export default function initFullScreen() {
    const imgs = document.querySelectorAll('img');
    const close = document.querySelector('.close');
    const fullScreenImg = document.querySelector('#full-screen-img');

    const next = document.querySelector('.next');
    const back = document.querySelector('.back');
    
    let i;

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('.img-container').classList.add('active');
            fullScreenImg.src = img.src;
            i = img.getAttribute('data-number');
        });
    });

    close.addEventListener('click', () => {
        document.querySelector('.img-container').classList.remove('active');
    });

    function nextImg() {
        i++
        if(i > imgs.length - 1) {
            i = 0
        }
        fullScreenImg.src = imgs[i].src
    }

    function backImg() {
        i--
        if(i < 0) {
            i = imgs.length
        }
        fullScreenImg.src = imgs[i].src
    }

    next.addEventListener('click', nextImg);
    back.addEventListener('click', backImg);
}
