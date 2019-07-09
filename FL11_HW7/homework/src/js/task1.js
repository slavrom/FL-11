const userEmail = 'user@gmail.com';
const adminEmail = 'admin@gmail.com';
const userPass = 'UserPass';
const adminPass = 'AdminPass';
const minEmail = 6;
const minPass = 5;

let email = prompt('Enter your email');


if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < minEmail) {
    alert('I don`t know any emails having name length less than 6 symbols');
} else if (email === userEmail || email === adminEmail) {
    let pass = prompt('Enter your password');
    if (email === '' || email === null) {
        alert('Canceled');
    } else if (email === userEmail && pass === userPass || email === adminEmail && pass === adminPass) {
        let conf = confirm('Do you want to change your password?');
        if (!conf) {
            alert('You have failed the change');
        } else {
            let oldPass = prompt('Enter your current password');
            if (oldPass === pass) {
                let newPass = prompt('Enter your new password');
                if (newPass.length < minPass) {
                    alert('It`s too short password. Sorry.');
                } else if (newPass === null) {
                    alert('You have failed the change');
                } else if (newPass === oldPass) {
                    alert('You cant use your old password');
                } else {
                    let againPass = prompt('Enter your new password again');
                    if (againPass === newPass) {
                        alert('You have successfully changed your password');
                    } else if (againPass === null) {
                        alert('You have failed the change');
                    } else {
                        alert('You wrote the wrong password');
                    }
                }
            } else if (oldPass === null) {
                alert('You have failed the change');
            } else {
                alert('You wrote the wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don`t know you');
}