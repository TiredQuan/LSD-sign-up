const signUpForm = document.getElementById('signupForm')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phoneNum')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const tos = document.getElementById('TOS')


signUpForm.addEventListener('submit', e =>{
    e.preventDefault() //This stops the submit process entirely, we only use this for testing purposes

    checkValidation()
    //We will put a function name in here after we are one 
})

checkValidation = () => {
    const fullNameVal = fullName.value.trim()
    const emailVal = email.value.trim()
    const phoneNumVal = phoneNum.value.trim()
    const passwordVal = password.value.trim()
    const password2Val = password2.value.trim()
    const tosVal = tos.checked
}
