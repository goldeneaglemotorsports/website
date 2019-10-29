// function isInViewport(el) {
//
//     const rect = el.getBoundingClientRect();
//     // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
//     const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
//     const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
//
//     // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
//     const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
//     const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
//
//     return (vertInView && horInView);
// }
//
//
// function changeButtonBackground(element, element2, button) {
//       if (isInViewport(element) && !isInViewport(element2)) {
//         button.style.backgroundColor = "#999900";
//       }
//       else {
//         button.style.backgroundColor = "#000000";
//       }
// }
//
// var events = document.getElementById('eventssection');
// var signup = document.getElementById('signup');
// var board = document.getElementById('officers');
// var contactUs = document.getElementById('contactUsSection');
// var eventsButton = document.getElementById('eventsButton');
// var signupButton = document.getElementById('signupButton');
// var boardButton = document.getElementById('boardButton');
// var contactUsButton = document.getElementById('contactUsButton');
//
// window.addEventListener('scroll', function(event) {
//   changeButtonBackground(events, signup, eventsButton);
//   changeButtonBackground(signup, board, signupButton);
//   changeButtonBackground(board, contactUs, boardButton);
//   changeButtonBackground(contactUs, events, contactUsButton);
// }, false);
