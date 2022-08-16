const signUpForm = document.getElementById('signupForm')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phoneNum')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const tos = document.getElementById('TOS')


signUpForm.addEventListener('submit', e =>{
    e.preventDefault()

    checkValidation()
    //We will put a function name in here after we are done
})

checkValidation = () => {
    const fullNameVal = fullName.value.trim()
    const emailVal = email.value.trim()
    const phoneNumVal = phoneNum.value.trim()
    const passwordVal = password.value.trim()
    const password2Val = password2.value.trim()
    const tosVal = tos.checked

    let submitPnts = 0

    const errorArr = document.getElementsByClassName('error')

    //name
    if(fullNameVal === ''){
        errorArr[0].classList.add('error-show')
    } else {errorArr[0].classList.remove('error-show'); submitPnts++}
    //email
    if(!checkEmail(emailVal)){
        errorArr[1].classList.add('error-show')
    } else {errorArr[1].classList.remove('error-show'); submitPnts++}
    //phone
    if(phoneNumVal === ''){
        errorArr[2].classList.add('error-show')
    } else {errorArr[2].classList.remove('error-show'); submitPnts++}
    //pass
    if(passwordVal.length < 6){
        errorArr[3].classList.add('error-show')
    } else {errorArr[3].classList.remove('error-show'); submitPnts++}
    //pass2
    if(password2Val !== passwordVal || password2Val ===''){
    errorArr[4].classList.add('error-show')
    } else {
        errorArr[4].classList.remove('error-show'); submitPnts++
    }
    //name
    if(!tosVal){
        errorArr[5].classList.add('error-show')
    } else {errorArr[5].classList.remove('error-show'); submitPnts++}
    if(submitPnts == 6) signUpForm.submit()
}
function checkEmail(x) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(x);
}