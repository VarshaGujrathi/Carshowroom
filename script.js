let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// header
let search = document.querySelector('header');

window.addEventListener(
    'scroll' , () =>{
        search.classList.toggle('shadow, window.scrollY> 0');
    }
);