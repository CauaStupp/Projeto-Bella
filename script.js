const menuItens = document.querySelectorAll('.nav-bar a[href^="#"]')


menuItens.forEach(item => {
    item.addEventListener('click', scrollDescer)
});


function scrollDescer(event) {
    event.preventDefault();
    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const para = document.querySelector(id).offsetTop;

    window.scroll({
        top: para - 100,
        behavior: 'smooth'
    });
}










function menuMobile() {
    let menu = document.querySelector('.nav-bar');
    let line = document.querySelector('.l1');
    let line2 = document.querySelector('.l2')


    if (menu.classList.contains('aparecer')) {
        menu.classList.remove('aparecer')
        line2.classList.remove('tt')
        line.classList.remove('tt')
    } else {
        menu.classList.add('aparecer')
        line.classList.add('tt')
        line2.classList.add('tt')
    }
}
