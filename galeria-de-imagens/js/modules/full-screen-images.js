export default function initFullScreen() {
    const imgs = document.querySelectorAll('img');
    
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('.img-container').classList.add('active');
        })
    })
}
