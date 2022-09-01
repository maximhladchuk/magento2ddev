let mainPageModalContainer = document.getElementsByClassName("main-page-modal-container"),
    bodyElement = document.getElementsByTagName('body'),
    toggleModalWindowStatus = true;



if (!localStorage.getItem('modalVisibilityData')){
    localStorage.setItem('modalVisibilityData', 'visible');
} else if (localStorage.getItem('modalVisibilityData') == 'invisible'){
    mainPageModalContainer[0].classList.toggle('modal-display-none')
    bodyElement[0].style.overflow = "visible";
}


document.getElementById('button-cancel-modal-fever').addEventListener('click', function () {
    event.preventDefault();

    localStorage.setItem('modalVisibilityData', 'invisible');

    mainPageModalContainer[0].classList.toggle('modal-display-none')
    bodyElement[0].style.overflow = "visible";

});

document.getElementById('button-cancel-modal-session').addEventListener('click', function () {
    event.preventDefault();

    mainPageModalContainer[0].classList.toggle('modal-display-none')
    bodyElement[0].style.overflow = "visible";

});








// let mainModalWindowCheckStatus = false;
// require([
//         "jquery",
//         "Magento_Ui/js/modal/modal"
//     ],
//
//     function ($, modal
//     ) {
//
//         var options = {
//             type: 'popup',
//             responsive: true,
//             autoOpen: true,
//             title: '',
//             clickableOverlay: false,
//             buttons: [{
//                 text: $.mage.__('Close'),
//                 class: '',
//                 click: function () {
//                     if (mainModalWindowCheckStatus) {
//                         this.closeModal();
//                     }
//                 }
//             }, {
//                 text: $.mage.__('I`m older than 18'),
//                 class: '',
//                 click: function () {
//                     mainModalWindowCheckStatus = true;
//                 }
//             }]
//         };
//
//         var popup = modal(options, $('#modal'));
//         $("#button").click(function() {
//             $('#modal').modal('openModal');
//         });
//     })
// ;
