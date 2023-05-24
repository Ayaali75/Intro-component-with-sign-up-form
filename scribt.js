const form = document.getElementById('form');
// const first = document.getElementById('firstname');
// const last = document.getElementById('lastname');
// const email =  document.getElementById('email');
// const password = document.getElementById('password');
form.addEventListener('submit' , e =>
{
    e.preventDefault();
    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    if(firstName === '')
    {
        const small =  form['firstname'].parentNode.querySelector('small');
        small.innerText = 'First Name is required';
        small.style.opacity = '1';
    }
    if(lastName === '')
    {
        const small =  form['lastname'].parentNode.querySelector('small');
        small.innerText = 'Last Name is required';
        small.style.opacity = '1';
    }
    if(email === '')
    {
        const small =  form['email'].parentNode.querySelector('small');
        small.innerText = 'Email Address is required';
        small.style.opacity = '1';
    }
    if(password === '')
    {
        const small =  form['password'].parentNode.querySelector('small');
        small.innerText = 'Password is required';
        small.style.opacity = '1';
    }

});

function isValid(email)
{
    var re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
}