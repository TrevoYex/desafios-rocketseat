// export default function initFullScreen() {
//     const imgs = document.querySelectorAll('img');
//     const fullScreenImg = document.querySelector('#full-screen-img');
//     const closeBtn = document.querySelector('.container-2 button');

//     let i;

//     function full(img) {
//         document.body.classList.add('full-screen-img');
//         fullScreenImg.src = img.src
//         i = img.getAttribute('data-number');
//     }

//     function nextImg() {
//         i++
//         if(i > imgs.length - 1) {
//             i = 0
//         }
//         fullScreenImg.src = imgs[i].src
//     }

//     function backImg() {
//         i--
//         if(i < 0) {
//             i = imgs.length
//         }
//         fullScreenImg = imgs[i].src
//     }

//     imgs.forEach(img => {
//         img.addEventListener('click', full);
//     });

//     closeBtn.addEventListener('click', () => {
//         document.body.classList.remove('full-screen-img');
//     });
// }
