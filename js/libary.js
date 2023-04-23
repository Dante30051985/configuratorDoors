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

function printResulDb(result) {
    
    console.log(result);

    if (result === '1') {
        document.querySelector('select.listUser').remove();
        const cntList = document.querySelector('div.cntListUser');
        cntList.style.padding = '65px';
        const labelNoRecord = document.createElement('label');
        labelNoRecord.textContent = 'Нет никаких записей';
        cntList.append(labelNoRecord);
    } else {

        const parse = JSON.parse(result);
        const listUser = document.querySelector('select.listUser');

        let typeParse = Object.keys(parse);

        if (typeParse[0] === 'login') {
            const optionUser = document.querySelectorAll('select.listUser option');

            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }


            for (let i = 0; i < parse['login'].length; i++) {
                const optionSelect = document.createElement('option');
                optionSelect.value = parse['passw'][i];
                optionSelect.dataset.user = parse['login'][i];
                optionSelect.textContent = parse['login'][i];
                listUser.append(optionSelect);
            }

            listUser.onchange = () => {
                const selIndx = listUser.options[listUser.selectedIndex];
                const user = selIndx.dataset.user;

                const btnDel = document.querySelector('button.btnDelUser');

                btnDel.onclick = () => {
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

            }
        }

        if (typeParse[0] === 'colorDoors') {
            const optionUser = document.querySelectorAll('select.listUser option');

            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }


            for (let i = 0; i < parse['colorDoors'].length; i++) {
                const optionSelect = document.createElement('option');
                optionSelect.value = parse['zena'][i];
                optionSelect.dataset.user = parse['colorDoors'][i];
                optionSelect.innerHTML = parse['colorDoors'][i] +
                    '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + parse['zena'][i] + 'руб.';
                listUser.append(optionSelect);
            }

            listUser.onchange = () => {
                const selIndx = listUser.options[listUser.selectedIndex];
                const color = selIndx.dataset.user;

                document.querySelector('input#colorPainting').value = color;
                const btnDel = document.querySelectorAll('button')[2];




                btnDel.onclick = () => {
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

            }
        }

        if (typeParse[0] === 'colorFilm') {
            console.log(parse);
            const optionUser = document.querySelectorAll('select.listUser option');

            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }


            for (let i = 0; i < parse['colorFilm'].length; i++) {
                const optionSelect = document.createElement('option');
                optionSelect.value = parse['zena'][i];
                optionSelect.dataset.user = parse['colorFilm'][i];
                optionSelect.innerHTML = parse['colorFilm'][i] +
                    '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + parse['zena'][i] + 'руб.';
                listUser.append(optionSelect);
            }

            listUser.onchange = () => {
                const selIndx = listUser.options[listUser.selectedIndex];
                const color = selIndx.dataset.user;

                document.querySelector('input#colorPainting').value = color;
                const btnDel = document.querySelectorAll('button')[2];


                btnDel.onclick = () => {
                    const queryDb = 'delColorFilm=' + encodeURIComponent(color);
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

            }
        }

        if (typeParse[0] === 'colorHand') {
            console.log(parse);
            const optionUser = document.querySelectorAll('select.listUser option');

            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }


            for (let i = 0; i < parse['colorHand'].length; i++) {
                const optionSelect = document.createElement('option');
                optionSelect.value = parse['zena'][i];
                optionSelect.dataset.user = parse['colorHand'][i];
                optionSelect.innerHTML = parse['colorHand'][i] +
                    '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + parse['zena'][i] + 'руб.';
                listUser.append(optionSelect);
            }

            listUser.onchange = () => {
                const selIndx = listUser.options[listUser.selectedIndex];
                const color = selIndx.dataset.user;

                document.querySelector('input#colorPainting').value = color;
                const btnDel = document.querySelectorAll('button')[2];


                btnDel.onclick = () => {
                    const queryDb = 'delColorHand=' + encodeURIComponent(color);
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

            }
        }
        
        if (typeParse[0] === 'widthDoors') {
            console.log(parse);
            const optionUser = document.querySelectorAll('select.listUser option');

            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }


            for (let i = 0; i < parse['widthDoors'].length; i++) {
                const optionSelect = document.createElement('option');
                optionSelect.value = parse['zena'][i];
                optionSelect.dataset.user = parse['widthDoors'][i];
                optionSelect.innerHTML = parse['widthDoors'][i] +
                    '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + parse['zena'][i] + 'руб.';
                listUser.append(optionSelect);
            }

            listUser.onchange = () => {
                const selIndx = listUser.options[listUser.selectedIndex];
                const widthDoor = selIndx.dataset.user;

                const btnDel = document.querySelectorAll('button')[2];


                btnDel.onclick = () => {
                    const queryDb = 'delWidthDoors=' + encodeURIComponent(widthDoor);
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
            const inputLogin = document.createElement('input')
            inputLogin.placeholder = arg3;
            inputLogin.name = arg1;
            inputLogin.type = 'text';
            cntInput.append(inputLogin);
        }

        const inputPassw = document.createElement('input')
        inputPassw.placeholder = arg4;
        inputPassw.type = 'text';
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

    const listUser = document.createElement('select');
    listUser.classList.add('listUser');
    listUser.setAttribute('multiple', 'multiple');
    cntListUser.append(listUser);
}