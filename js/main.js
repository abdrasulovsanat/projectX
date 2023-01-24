// account logic
// show modal logic
let registerUserModalBtn = document.querySelector('#registerUser-modal');
let loginUserModalBtn = document.querySelector('#loginUser-modal');
let registerUserModalBlock = document.querySelector('#registerUser-block');
let loginUserModalBlock = document.querySelector('#loginUser-block');

let registerUserBtn = document.querySelector('#registerUser-btn');
let loginUserBtn = document.querySelector('#loginUser-btn');
let logoutUserBtn = document.querySelector('#logoutUser-btn');
// console.log(registerUserModalBtn, loginUserModalBtn, registerUserModalBlock, loginUserModalBlock, registerUserBtn, loginUserBtn, logoutUserBtn);

registerUserModalBtn.addEventListener('click', () => {
    registerUserModalBlock.setAttribute('style', 'display: flex !important;');
    registerUserBtn.setAttribute('style', 'display: flex !important;');
    loginUserModalBlock.setAttribute('style', 'display: none !important;');
    loginUserBtn.setAttribute('style', 'display: none !important;');
});

loginUserModalBtn.addEventListener('click', () => {
    registerUserModalBlock.setAttribute('style', 'display: none !important;');
    registerUserBtn.setAttribute('style', 'display: none !important;');
    loginUserModalBlock.setAttribute('style', 'display: flex !important;');
    loginUserBtn.setAttribute('style', 'display: flex !important;');
});