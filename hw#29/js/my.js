const closeBtn = document.querySelector('.btn-close');
const alertMenu = document.querySelector('.alert');


function ButtonClose() {

    alertMenu.classList.remove('show')

}

closeBtn.addEventListener('click', ButtonClose);


const closeBtn = document.querySelectorAll('.btn-close');
const alertMenu = document.querySelectorAll('.alert');

closeBtn.forEach((allBtnClose) => {

    allBtnClose.addEventListener('click', function (event) {
        event.target.classList.add('displ-none')
    });
});
