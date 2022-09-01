let mainPageModalContainer = document.getElementsByClassName("main-page-modal-container"),
    bodyElement = document.getElementsByTagName('body'),
    toggleModalWindowStatus = true;

debugger;

if (!localStorage.getItem('modalVisibilityData')) {
    localStorage.setItem('modalVisibilityData', 'visible');
    mainPageModalContainer[0].classList.toggle('modal-display-block')
    bodyElement[0].style.overflow = "hidden";
}
else if (localStorage.getItem('modalVisibilityData') == 'visible'){
    mainPageModalContainer[0].classList.toggle('modal-display-block')
    bodyElement[0].style.overflow = "hiiden";
}else if (localStorage.getItem('modalVisibilityData') == 'invisible'){
    bodyElement[0].style.overflow = "visible";
}



document.getElementById('button-cancel-modal-fever').addEventListener('click', function () {
    event.preventDefault();


    localStorage.setItem('modalVisibilityData', 'invisible');
    mainPageModalContainer[0].classList.toggle('modal-display-block')
    bodyElement[0].style.overflow = "visible";


});

document.getElementById('button-cancel-modal-session').addEventListener('click', function () {
    event.preventDefault();

    mainPageModalContainer[0].classList.toggle('modal-display-block')
    bodyElement[0].style.overflow = "visible";

});








































// let mainPageModalContainer = document.getElementsByClassName("main-page-modal-container"),
//     bodyElement = document.getElementsByTagName('body'),
//     toggleModalWindowStatus = true;
//
// localStorage.setItem('modalVisibilityData', 'invisible');
//
// console.log(localStorage.getItem('modalVisibilityData'))
//
//
//
// document.getElementById('button-cancel-modal-fever').addEventListener('click', function () {
//     event.preventDefault();
//
//     mainPageModalContainer[0].classList.toggle('modal-display-none')
//     bodyElement[0].style.overflow = "visible";
//
//
// });
//
// document.getElementById('button-cancel-modal-session').addEventListener('click', function () {
//     event.preventDefault();
//
//     mainPageModalContainer[0].classList.toggle('modal-display-none')
//     bodyElement[0].style.overflow = "visible";
//
// });
