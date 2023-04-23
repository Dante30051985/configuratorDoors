`use strict`
import * as func from './libary.js';

const btnServiceAuth = document.querySelector('div.cntBtnService');


btnServiceAuth.onclick = () => {
    const title = 'Авторизация входа в параметры';
    func.createWindow(title);    

    if (document.querySelector('div.cntFormPaintDoor'))
    {
        const cntFormEnter = document.querySelector('div.cntFormPaintDoor');
        
        const formAuth = document.createElement('div');
        formAuth.classList.add('formAuth');
        cntFormEnter.append(formAuth);

        const formBtn = document.createElement('div');
        formBtn.classList.add('formAuth');
        cntFormEnter.append(formBtn);

        const enterLogin = document.createElement('input');
        enterLogin.type = 'text';
        enterLogin.placeholder = 'Введите логин';
        formAuth.append(enterLogin);

        const enterPassw = document.createElement('input');
        enterPassw.type = 'password';
        enterPassw.placeholder = 'Введите пароль';
        formAuth.append(enterPassw);

        const btnAuth = document.createElement('button');
        btnAuth.textContent = 'Войти';
        formBtn.append(btnAuth);

        btnAuth.onclick = () => {
            const login = enterLogin.value;
            const passw = enterPassw.value;
                sendAuth(login, passw);
        }

    }



 }

function sendAuth(login, passw) {
   const auth = 'login='+encodeURIComponent(login)+'&passw='+encodeURI(passw);

            fetch('./php/auth.php', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    body: auth
                }).then(response => response.text()).then(result => 
                                                        param(result)
    ) 
}

function param(result) {
    if (result === '1') {
        func.createWindowParametr();
    }
}
