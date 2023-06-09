import * as param from './libary2.js';

export function createWindow(title, paramBtn) {
    const cover = document.createElement('div');
    const pageY = window.pageYOffset;

    cover.classList.add('cover');
    cover.style.top = pageY + 'px';

    document.body.append(cover);

    const cntFormPaintDoor = document.createElement('div');
    cntFormPaintDoor.classList.add('cntFormPaintDoor');
    cover.append(cntFormPaintDoor);

    const cntTitleChoosePaintDoor = document.createElement('div');
    cntTitleChoosePaintDoor.classList.add('cntTitleChoosePaintDoor');
    cntFormPaintDoor.append(cntTitleChoosePaintDoor);

    const titleChoose = document.createElement('div');
    titleChoose.classList.add('formTitleChoose');
    titleChoose.textContent = title;
    cntTitleChoosePaintDoor.append(titleChoose);

    const closeChoose = document.createElement('div');
    closeChoose.classList.add('closeChoose');
    titleChoose.append(closeChoose);

    if (paramBtn === undefined) {
        closeChoose.onclick = () => {
            document.querySelector('div.cover').remove();
        }
    }

    if (paramBtn === '0') {

        windowUser('login', 'passw', 'Введите логин', 'Введите пароль', 'Добавить пользователя',
            'Удалить пользователя');

        queryInDb('users');

        const btnInsertUser = document.querySelector('button.btnAddUser');

        btnInsertUser.onclick = () => {
            const login = document.querySelector('input[name=login]').value;
            const passw = document.querySelector('input[name=passw]').value;

            const queryDb = 'login=' + encodeURIComponent(login) + '&passw=' + encodeURIComponent(passw);
            fetch('./php/querydb.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryDb
            }).then(response => response.text()).then(result =>
                queryInDb(result)
            )
        }

        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '1') {
        windowUser('paintingDoor', 'zena', 'Укажите цвет', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

        queryInDb('paintingColor');

        const btnInsertColor = document.querySelector('button.btnAddUser');

        btnInsertColor.onclick = () => {
            const color = document.querySelector('input#colorPainting').value;
            const zena = document.querySelector('input[name=zena]').value;

            const queryDb = 'colorPainting=' + encodeURIComponent(color) + '&zena=' + encodeURIComponent(zena);
            fetch('./php/querydb.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryDb
            }).then(response => response.text()).then(result =>
                queryInDb(result)
            )
        }

        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '2') {
        windowUser('filmColor', 'zena', 'Укажите цвет', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

        queryInDb('filmColor');

        const btnInsertColor = document.querySelector('button.btnAddUser');

        btnInsertColor.onclick = () => {
            const color = document.querySelector('input#colorPainting').value;
            const zena = document.querySelector('input[name=zena]').value;

            const queryDb = 'colorFilm=' + encodeURIComponent(color) + '&zena=' + encodeURIComponent(zena);
            fetch('./php/querydb.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryDb
            }).then(response => response.text()).then(result =>
                queryInDb(result)
            )
        }

        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '3') {
        windowUser('handColor', 'zena', 'Укажите цвет', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

        queryInDb('handColor');

        const btnInsertColor = document.querySelector('button.btnAddUser');

        btnInsertColor.onclick = () => {
            const color = document.querySelector('input#colorPainting').value;
            const zena = document.querySelector('input[name=zena]').value;

            const queryDb = 'colorHand=' + encodeURIComponent(color) + '&zena=' + encodeURIComponent(zena);
            fetch('./php/querydb.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryDb
            }).then(response => response.text()).then(result =>
                queryInDb(result)
            )
        }

        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '4') {
        windowUser('widthDoors', 'zena', 'Укажите ширину двери', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

        queryInDb('widthDoors');

        const btnInsertColor = document.querySelector('button.btnAddUser');

        btnInsertColor.onclick = () => {
            const widthDoor = document.querySelector('input[name=widthDoors]').value;
            const zena = document.querySelector('input[name=zena]').value;

            const queryDb = 'widthDoors=' + encodeURIComponent(widthDoor) + '&zena=' + encodeURIComponent(zena);
            fetch('./php/querydb.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: queryDb
            }).then(response => response.text()).then(result =>
                queryInDb(result)
            )
        }


        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '5') {
        windowUser('heightDoors', 'zena', 'Укажите высоту двери', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

            queryInDb('heightDoors');

            const btnInsertColor = document.querySelector('button.btnAddUser');
    
            btnInsertColor.onclick = () => {
                const widthDoor = document.querySelector('input[name=heightDoors]').value;
                const zena = document.querySelector('input[name=zena]').value;
    
                const queryDb = 'heightDoors=' + encodeURIComponent(widthDoor) + '&zena=' + encodeURIComponent(zena);
                fetch('./php/querydb.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    body: queryDb
                }).then(response => response.text()).then(result =>
                    queryInDb(result)
                )
            }

        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '6') {
        windowUser('typeOpening', 'zena', 'Укажите тип открывания двери', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

            queryInDb('openDoors');

            const btnInsertColor = document.querySelector('button.btnAddUser');
    
            btnInsertColor.onclick = () => {
                const openDoor = document.querySelector('input[name=typeOpening]').value;
                const zena = document.querySelector('input[name=zena]').value;
    
                const queryDb = 'openDoors=' + encodeURIComponent(openDoor) + '&zena=' + encodeURIComponent(zena);
                fetch('./php/querydb.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    body: queryDb
                }).then(response => response.text()).then(result =>
                    queryInDb(result)
                )
            }


        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '7') {
        windowUser('accessories', 'zena', 'Укажите акссесуары', 'Укажите цену', 'Добавить в прайс',
            'Удалить из прайса');

            queryInDb('accessories');

            const btnInsertColor = document.querySelector('button.btnAddUser');
    
            btnInsertColor.onclick = () => {
                const accessories = document.querySelector('input[name=accessories]').value;
                const zena = document.querySelector('input[name=zena]').value;
    
                const queryDb = 'accessories=' + encodeURIComponent(accessories) + 
                                                '&zena=' + encodeURIComponent(zena);
                fetch('./php/querydb.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    body: queryDb
                }).then(response => response.text()).then(result =>
                    queryInDb(result)
                )
            }

        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }

    if (paramBtn === '8') {
        windowUser();

        /* TODO withdrawal of completed orders */
        
        const closeChoose = document.querySelector('div.closeChoose');
        closeChoose.classList.remove('closeChoose');
        closeChoose.classList.add('closeParam');

        const closeParam = document.querySelector('div.closeParam');
        closeParam.onclick = () => {
            createWindowParametr();

        }
    }



}


export function createWindowParametr() {
    const titleWindow = 'Параметры конфигуртора';
    document.querySelector('div.cover').remove();
    createWindow(titleWindow);
    
    const cntFormParametrs = document.querySelector('div.cntFormPaintDoor');
    const closeServiceAuth = document.querySelector('div.closeChoose');

    const cntTabs = document.createElement('div');
    cntTabs.classList.add('cntTab');
    cntFormParametrs.append(cntTabs);

    let countTabs = ['Пользователи', 'Цвет покраски', 'Цвет плёнки', 'Цвет ручки', 'Ширина двери',
        'Высота двери', 'Типы открываний', 'Аксессуары', 'Заказы'
    ];

    for (let i = 0; i < countTabs.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('btnParametrs');
        btn.setAttribute('parametrs', i);
        btn.textContent = countTabs[i];
        cntTabs.append(btn);
    }

    const btnParam = document.querySelectorAll('button.btnParametrs');

    for (let i = 0; i < btnParam.length; i++) {
        btnParam[i].onclick = () => {
            document.querySelector('div.cover').remove();
            const titleParam = countTabs[i];
            createWindow(titleParam, btnParam[i].getAttribute('parametrs'));
        }
    }
}



function printResulDb(result) {
    if (result === '1') {
        const cntList = document.querySelector('div.cntListUser');
        const lisUser = document.querySelectorAll('ul.listUser li');

        for (let i = 0; i < lisUser.length; i++) {
            lisUser[i].remove();
        }

        const labelNoRecord = document.createElement('label');
        labelNoRecord.textContent = 'Нет никаких записей';
        cntList.append(labelNoRecord);
    }
     else 
    {
           
        console.log(result);

        const parse = JSON.parse(result);
      
        let typeParse = Object.keys(parse);

        if (typeParse[0] === 'login') {
            
            let user = [];

                param.viewUserAfterinsertDb(parse);
            
                const btnDel = document.querySelector('button.btnDelUser');
                const checkbox = document.querySelectorAll('input[type=checkbox]');     

                for (let i = 0; i < checkbox.length; i++) {
                    checkbox[i].onchange = () => {
                    if (checkbox[i].checked) user.push(checkbox[i].value);
                    }
                }

              btnDel.onclick = () => {
                    delUser(user);
                }
            }
        

        if (typeParse[0] === 'colorDoors') {

            let color = [];

            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) color.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delColor(color);
            }
        }

        if (typeParse[0] === 'colorFilm') {

            let colorFilm = [];
           
            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) colorFilm.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delColorFilm(colorFilm);
            }
        }

        if (typeParse[0] === 'colorHand') {
         
            let colorHand = [];
           
            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) colorHand.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delColorHand(colorHand);
            }
        }
        
        if (typeParse[0] === 'widthDoors') {

            let widthDoors = [];
           
            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) widthDoors.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delWidthDoors(widthDoors);
            }
        }
     

        if (typeParse[0] === 'heightDoors') {

            let heightDoors = [];
           
            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) heightDoors.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delHeight(heightDoors);
            }
        }

        if (typeParse[0] === 'openDoors') {

            let openDoor = [];
           
            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) openDoor.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delOpen(openDoor);
            }
        }

     
        if (typeParse[0] === 'accessories') {

            let accessories = [];
           
            param.viewUserAfterinsertDb(parse);
        
            const btnDel = document.querySelector('button.btnDelUser');
            const checkbox = document.querySelectorAll('input[type=checkbox]');     

            for (let i = 0; i < checkbox.length; i++) {
                checkbox[i].onchange = () => {
                if (checkbox[i].checked) accessories.push(checkbox[i].value);
                }
            }

          btnDel.onclick = () => {
                delAccessories(accessories);
            }
        }

    }

}

function windowUser(arg1, arg2, arg3, arg4, arg5, arg6) {
    const cntFormPaintDoor = document.querySelector('div.cntFormPaintDoor');

    const cntInput = document.createElement('div');
    cntInput.classList.add('cntInput');
    cntFormPaintDoor.append(cntInput);

    if (arg1 && arg2 && arg3 && arg4 && arg5 && arg6) {
        if (arg1 === 'paintingDoor' || arg1 === 'filmColor' || arg1 === 'handColor') {

            const cntColorChoose = document.createElement('div');
            cntColorChoose.classList.add('cntColorChoose');
            cntInput.append(cntColorChoose);

            const inputLogin = document.createElement('input')
            inputLogin.placeholder = arg3;
            inputLogin.name = arg1;
            inputLogin.id = 'colorPainting';
            inputLogin.type = 'color';
            inputLogin.style.padding = 'inherit';
            inputLogin.style.width = '25px';
            cntColorChoose.append(inputLogin);

            const labelColor = document.createElement('label');
            labelColor.for = 'colorPainting';
            cntColorChoose.append(labelColor);

            const colorPicker = document.querySelector('input#colorPainting');

            colorPicker.oninput = () => {
                const selColor = colorPicker.value
                labelColor.textContent = selColor;
            }

        } else {
       
            if (arg1 === 'login' || arg1 === 'typeOpening' || arg1 === 'accessories') {
            const inputLogin = document.createElement('input')
            inputLogin.placeholder = arg3;
            inputLogin.name = arg1;
            inputLogin.type = 'text';
            cntInput.append(inputLogin);
            } else {

                /* TODO  */
             

                const inputLogin = document.createElement('input')
                inputLogin.placeholder = arg3;
                inputLogin.name = arg1;
                inputLogin.type = 'number';
                inputLogin.inputMode = 'numeric';
                inputLogin.pattern = '^\d+(,\d{3})*(\.\d{2})?$';

                cntInput.append(inputLogin);
                
            }
        }

         
        const inputPassw = document.createElement('input')
        inputPassw.placeholder = arg4;
        
        if (arg2 == 'zena') {
            inputPassw.type = 'number';
            inputPassw.inputMode = 'numeric';
            inputPassw.pattern = '^\d+(,\d{3})*(\.\d{2})?$';
        }

        inputPassw.name = arg2;
        cntInput.append(inputPassw);

        const cntBtnUser = document.createElement('div');
        cntBtnUser.classList.add('cntBtnUser');
        cntInput.append(cntBtnUser);

        const btnAddUser = document.createElement('button');
        btnAddUser.textContent = arg5;
        btnAddUser.classList.add('btnAddUser');
        cntBtnUser.append(btnAddUser);

        const btnDelUser = document.createElement('button');
        btnDelUser.textContent = arg6;
        btnDelUser.classList.add('btnDelUser');
        cntBtnUser.append(btnDelUser);
    }

    const cntListUser = document.createElement('div');
    cntListUser.classList.add('cntListUser');
    cntFormPaintDoor.append(cntListUser);

}

/* Функция вывода данных из таблиц в диалоговое окно справочника */////////////////////////////////

function queryInDb(typeQuery) {

    const queryDb = 'typeQuery=' + encodeURIComponent(typeQuery);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        printResulDb(result)
    )
}

/* Функции удаления данных из таблиц *///////////////////////////////////////////////////////////

function delUser(user) {
    const queryDb = 'delUser=' + encodeURIComponent(user);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('users')
   )
}

function delColor(color) {
    const queryDb = 'delColor=' + encodeURIComponent(color);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('paintingColor')
   )
}

function delColorFilm(colorFilm) {
    const queryDb = 'delColorFilm=' + encodeURIComponent(colorFilm);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('filmColor')
   )
}

function delColorHand(colorHand) {
    const queryDb = 'delColorHand=' + encodeURIComponent(colorHand);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('handColor')
   )
}

function delWidthDoors(widthDoors) {
    const queryDb = 'delWidthDoors=' + encodeURIComponent(widthDoors);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('widthDoors')
   )
}

function delHeight(heightDoors) {
    const queryDb = 'delHeightDoors=' + encodeURIComponent(heightDoors);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('heightDoors')
   )
}

function  delOpen(openDoor) {
    const queryDb = 'delOpen=' + encodeURIComponent(openDoor);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('openDoors')
   )
}

function delAccessories(accessories) {
    const queryDb = 'delAccessories=' + encodeURIComponent(accessories);
    fetch('./php/querydb.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: queryDb
    }).then(response => response.text()).then(result =>
        queryInDb('accessories')
   )
}

