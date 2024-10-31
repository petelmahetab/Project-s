// // Select all elements
// const getForm=document.querySelector('.form-container')
// const getEmail=document.querySelector('.email')
// const getPass=document.querySelector('.password')
// const getUser=document.querySelector('.username')

// getForm.addEventListener('submit',(e)=>{
//    e.preventDefault();
//    changeValue();
// })
// const setError=(elements,message)=>{
//     const inputControl=elements.parentElement;
//     const errorDisplay=document.querySelector('.error')
   
//     errorDisplay.innerText=message;
//     inputControl.classList.add('error')
//     inputControl.classList.remove('success')
// }
// const setSuccess=(elements)=>{
//     const inputControl=elements.parentElement;
//     const errorDisplay=document.querySelector('.error')
    
//     errorDisplay.innerText='';
//     inputControl.classList.add('success')
//     inputControl.classList.remove('error')
// }

// // For checking valid email
// const ValidEmail=email=>{
//     const result='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
//     return result.test(String(email).toLocaleLowerCase());
// }
// // const ValidPass=pass=>{
// //     const result='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$';
// //     return result.test()
    
// // }
// const changeValue=()=>{
//     const email=getEmail.value.trim();
//     const pass=getPass.value.trim();
//     const UName=getUser.value.trim();

//     // For UserName Validation
//     if(UName === ''){
//         setError(getUser,'This field is Required..')
//     }else{
//         setSuccess(getUser)
//     }

//     //For Email Validation
//     if(email === ''){
//         setError(getEmail,"This field is Required..")
//     }
//     else if(!ValidEmail(email)){
//         setError(getEmail,"Provide Valid Email Address..")
//     }else{
//         setSuccess(getEmail)
//     }

//     // For Password Validation
//     if(pass === ''){
//         setError(getPass,"This field is Required..")
//     }else if(pass.length < 8){
//         setError(getPass,"Password must be 8 digit..")
//     }else{
//         setSuccess(getPass)
//     }
// }
// Select all elements
const getForm = document.querySelector('.form-container');
const getEmail = document.querySelector('.email');
const getUser = document.querySelector('.username');
const getPass = document.querySelector('.password');

getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    changeValue();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// For checking valid email
const ValidEmail = (email) => {
    const result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return result.test(String(email).toLowerCase());
};

// const ValidPass = (pass) => {
//     const result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//     return result.test(pass);
// };

const changeValue = () => {
    const email = getEmail.value.trim();
    const pass = getPass.value.trim();
    const UName = getUser.value.trim();

    // For UserName Validation
    if (UName === '') {
        setError(getUser, 'This field is required.');
    } else {
        setSuccess(getUser);
    }

    // For Email Validation
    if (email === '') {
        setError(getEmail, "This field is required.");
    } else if (!ValidEmail(email)) {
        setError(getEmail, "Provide a valid email address.");
    } else {
        setSuccess(getEmail);
    }

    // For Password Validation
    if (pass === '') {
        setError(getPass, "This field is required.");
    } else if (pass.length < 8) {
        setError(getPass, "Password must be at least 8 characters.");
    } else {
        setSuccess(getPass);
    }
};
