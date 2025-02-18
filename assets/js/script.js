'use strict';
// STORING ELEMENTS INTO VARIABLE

const emailEL = document.querySelector('.email--field')
const btnSubscribe = document.querySelector('.btn-subscribe')
const valiedEmailEL = document.querySelector('.valid--email')
const textColor = document.querySelector('.text-color')
const targetEmail = document.querySelector('.target-email')
const btnDismiss = document.querySelector('.btn-dismiss')

const successPage = document.querySelector('.success');
const signupPage = document.querySelector('.sign--up')


// ADDING EVENT LISTENER TO BUTTON
btnSubscribe.addEventListener('click', function() {
    const email = emailEL.value;
     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/; // Regular expression for email
   
    //1. Check if user inputs email
    if(!email) {
        // 1. valid email should be visible
        valiedEmailEL.classList.remove('hidden')
        //2. border color should change to tomato red
        // 3. background color should change to tomato red
       
    } else if(emailRegex.test(email)) {
        signupPage.classList.add('hidden')
        successPage.classList.remove('hidden')
        targetEmail.textContent = email;
        
    } else {
         valiedEmailEL.classList.remove('hidden')
        //2. border color should change to tomato red
            // 3. background color should change to tomato red
         emailEL.classList.add('error')
         emailEL.classList.add('text-color')
    }
    
})

btnDismiss.addEventListener('click', ()=> {
    successPage.classList.add('hidden');
    signupPage.classList.remove('hidden');
    valiedEmailEL.classList.add('hidden')
    emailEL.classList.remove('error')
    emailEL.value = '';
})
