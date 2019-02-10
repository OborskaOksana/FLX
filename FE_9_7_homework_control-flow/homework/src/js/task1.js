// Your code goes here
let login = prompt('Please enter your login', '');
if (login === '' || login === null) {
    alert('Canceled')
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols")
} else if (login !== 'User') {
    alert('I don’t know you')
} else if (login === 'User' || login === 'Admin') {
    let password = prompt('Please enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled')
    } else if (login === 'User' && password === 'UserPass') {
        alert('Corect password')
    } else if (login === 'Admin' && password === 'RootPass') {
        alert('Corect password')
    } else {
        alert('Wrong password')
    }
    if (new Date().getHours() < 20 && login === 'User') {
        alert('Good day, dear User!')
    } else if (new Date().getHours() > 20 && login === 'User') {
        alert('Good evening, dear User')
    } else if (new Date().getHours() < 20 && login === 'Admin') {
        alert('Good day, dear Admin!')
    } else if (new Date().getHours() > 20 && login === 'Admin') {
        alert('Good evening, dear Admin')
    }
}