//----- Nav menu -----//

const navIcon = document.getElementById('nav__icon')
const navMenuEl = document.getElementById('nav-menu-el')

navIcon.addEventListener('click', displayNavMenu)

function displayNavMenu() {    
    navMenuEl.innerHTML = `
        <div class="nav__menu">
            <i class="fa-solid fa-arrow-right" data-close-nav="close-nav-menu-btn"></i>
            <a href="index.html">Home</a>
            <a href="explore.html">Explore</a>
            <a href="log-in.html">Log in</a>
            <a href="sign-up.html">Sign up</a>
        </div> 
    `
}

document.addEventListener('click', e => {
    if (e.target.dataset.closeNav) {
        navMenuEl.innerHTML = `
            <i class="fa-solid fa-bars nav__icon" id="nav__icon" data-nav-icon="nav__icon"></i>
        `
    }
})

document.addEventListener('click', e => {
    if (e.target.dataset.navIcon) {
        displayNavMenu()
    }
})


//----- Log in page -----//

const logInBtn = document.getElementById('log-in-btn')
const logInUsername = document.getElementById('log-in__username')
const logInEmail = document.getElementById('log-in__email')

logInUsername && logInUsername.addEventListener('input', updateLogInBtnStyle) 
logInEmail && logInEmail.addEventListener('input', updateLogInBtnStyle)

function updateLogInBtnStyle() {
    if (logInUsername.value && logInEmail.value ) {
        logInBtn.classList.remove('btn--disabled')
        logInBtn.classList.add('btn--enabled')
    }
}

logInBtn && logInBtn.addEventListener('click', e => {
    e.preventDefault()
    if (logInUsername.value && logInEmail.value) {
        document.getElementById('log-in-wrapper').innerHTML = `
            <h2>Welcome back, ${logInUsername.value}</h2>
        ` 
    }
})


//----- Sign up page-----//

const signUpBtn = document.getElementById('sign-up-btn')
const signUpUsername = document.getElementById('sign-up__username')
const signUpEmail = document.getElementById('sign-up__email')
const signUpNewsletter = document.getElementById('sign-up__newsletter')

signUpUsername && signUpUsername.addEventListener('input', updateSignUpBtnStyle)
signUpEmail && signUpEmail.addEventListener('input', updateSignUpBtnStyle)

function updateSignUpBtnStyle() {
    if (signUpUsername.value && signUpEmail.value ) {
        signUpBtn.classList.remove('btn--disabled')
        signUpBtn.classList.add('btn--enabled')
    }
}

signUpBtn && signUpBtn.addEventListener('click', e => {
    e.preventDefault()
    if (signUpUsername.value && signUpEmail.value && signUpNewsletter.checked) {
        document.getElementById('sign-up-wrapper').innerHTML = `
            <div class="sign-up__message">
                <h2>Welcome, ${signUpUsername.value}!</h2>
                <h5>Thank you for creating a HikeFinder account <br> and signing up for our monthly newsletter.</h5>
            </div>
        `
    }
    else if (signUpUsername.value && signUpEmail.value) {
        document.getElementById('sign-up-wrapper').innerHTML = `
            <div class="sign-up__message">
                <h2>Welcome, ${signUpUsername.value}!</h2>
                <h5>Thank you for creating a HikeFinder account.</h5>
            </div>
        `
    }
})