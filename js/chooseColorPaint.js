const choosePaint = document.querySelector('div.choosePaintingColor');
const chooseFilmColor = document.querySelector('div.chooseFilmColor');
const chooseHandColor = document.querySelector('div.chooseHandColor');

const chooseWidth = document.querySelector('div.chooseWidth');
const chooseHeight = document.querySelector('div.chooseHeight');

const chooseAccessories = document.querySelector('div.chooseAccessories');

const zena = {
    'paintingColor': {
        'red': ['240'],
        'blue': ['201'],
        'yellow': ['512'],
        'green': ['128']
    },

    'chooseFilmColor': {
        'red': ['200'],
        'blue': ['271'],
        'yellow': ['312'],
        'green': ['178']
    },
    'colorHand': {
        'red': ['131'],
        'blue': ['311'],
        'yellow': ['211'],
        'green': ['300']
    },
    'sizeWidth': {
        '870 мм': ['1200'],
        '880 мм': ['1112'],
        '890 мм': ['1411'],
        '900 мм': ['1911'],
        '910 мм': ['1320'],
        '920 мм': ['1021']
    },
    'sizeHeight': {
        '2040 мм': ['1410'],
        '2050 мм': ['1010'],
        '2060 мм': ['1511'],
        '2070 мм': ['1211'],
        '2080 мм': ['1711'],
        '2090 мм': ['1911']
    },
    'opening': {
        'leftOpen': ['921'],
        'rightOpen': ['843']
    },
    'accesosires': {
        'A1': ['411'],
        'A2': ['512'],
        'A3': ['721'],
        'A4': ['910']
    }

};

let readyMadeEquipment = {
    'opening': {
        'type': [],
        'zena': []
    },
    'paintingColor': {
        'color': [],
        'zena': []
    },
    'filmColor': {
        'color': [],
        'zena': []
    },
    'handColor': {
        'color': [],
        'zena': []
    },
    'widthDoor': {
        'width': [],
        'zena': []
    },
    'heightDoor': {
        'height': [],
        'zena': []
    },
    'accesories': {
        'article': [],
        'price': []

    }


};



console.log(readyMadeEquipment);

const chooseOpening = document.querySelector('select#chooseOpening');


window.onload = () => {
    selectWidthHeight(zena);
}

chooseOpening.onchange = (e) => {
    const selectedOption = chooseOpening.options[chooseOpening.selectedIndex];
    const value = selectedOption.value;

    if (value === 'Левое') {
        const insideView = document.querySelector('div.insideView');
        const outsideView = document.querySelector('div.outsideView');

        insideView.setAttribute('style', 'transform: scale(1,1);');
        outsideView.setAttribute('style', 'transform: scale(-1, 1);');

        if (readyMadeEquipment.handColor.color) {
            insideView.setAttribute('style', 'transform: scale(1,1); background:'+
            readyMadeEquipment.filmColor.color+';');
        }

        addReadyMade(zena.opening.leftOpen[0], type = 'opening', nameOpen = 'Левое');

    }

    if (value === 'Правое') {
        const insideView = document.querySelector('div.insideView');
        const outsideView = document.querySelector('div.outsideView');

        insideView.setAttribute('style', 'transform: scale(-1,1);');
        outsideView.setAttribute('style', 'transform: scale(1, 1);');

        if (readyMadeEquipment.handColor.color) {
            insideView.setAttribute('style', 'transform: scale(-1,1); background:'+
            readyMadeEquipment.filmColor.color+';');
        }

        addReadyMade(zena.opening.rightOpen[0], type = 'opening', nameOpen = 'Правое');

    }
}

chooseAccessories.onclick = () => {
    createWindow(title = 'Выбор акссесуаров');
    accessories(zena);
    addEventArticle();
}

chooseHandColor.onclick = () => {
    createWindow(title = 'Выбор цвета ручки');
    colorPaintDoor(zena, type = '3');
    addEventWindow(type = '3');
}

chooseFilmColor.onclick = () => {
    createWindow(title = 'Выбор цвета плёнки');
    colorPaintDoor(zena, type = '2');
    addEventWindow(type = '2');
}

choosePaint.onclick = () => {
    createWindow(title = 'Выбор цвета покраски');
    colorPaintDoor(zena, type = '1');
    addEventWindow(type = '1');

}

function totalBuy() {
     if (readyMadeEquipment.paintingColor.color) {
        document.querySelector('div.nalOutside').style.background = 
            readyMadeEquipment.paintingColor.color;
     }

     if (readyMadeEquipment.filmColor.color) {
        document.querySelector('div.insideView').style.background = 
            readyMadeEquipment.filmColor.color;
     }


     if (readyMadeEquipment.handColor.color) {
        document.querySelector('div.handOutside').style.background = 
            readyMadeEquipment.handColor.color;
        document.querySelector('div.handInside').style.background = 
            readyMadeEquipment.handColor.color;

            
     }
}


setInterval(function(){
   let summa = 0;
    summa += Number(readyMadeEquipment.paintingColor.zena);
    summa += Number(readyMadeEquipment.filmColor.zena);
    summa += Number(readyMadeEquipment.handColor.zena);
    summa += Number(readyMadeEquipment.opening.zena);
    summa += Number(readyMadeEquipment.widthDoor.zena);
    summa += Number(readyMadeEquipment.heightDoor.zena);
    
    for (let i = 0; i < Object.keys(readyMadeEquipment.accesories.price).length; i++) {
           summa += Number(readyMadeEquipment.accesories.price[i]);
    }

    document.querySelector('div.price').innerHTML = summa;
}, 1000)

function accessories(zena) {
    const cntFormPaintDoor = document.querySelector('div.cntFormPaintDoor');

    const cntCheckbox = document.createElement('div');

    cntCheckbox.classList.add('cntCheckbox');
    cntFormPaintDoor.append(cntCheckbox);


    for (let i = 0; i < Object.keys(zena.accesosires).length; i++) {


        const cntArticule = document.createElement('div');
        cntArticule.classList.add('articule');
        cntCheckbox.append(cntArticule);

        const photoArticule = document.createElement('div');
        photoArticule.classList.add('photoArticule');

        photoArticule.style.width = '50px';
        photoArticule.style.height = '50px';
        photoArticule.style.background = 'orange';
        photoArticule.textContent = Object.keys(zena.accesosires)[i];
        cntArticule.append(photoArticule);

        const checkbox = document.createElement('input');
        checkbox.classList.add('checkedAccesories');
        checkbox.dataset.zenaArticule = Object.values(zena.accesosires)[i];
        checkbox.dataset.articule = Object.keys(zena.accesosires)[i];
        checkbox.type = 'checkbox';
        cntArticule.append(checkbox);
    }

    const cntBtnConfirmArticule = document.createElement('div');
    cntBtnConfirmArticule.classList.add('cntBtnArticle');
    cntFormPaintDoor.append(cntBtnConfirmArticule);

    const btnConfirm = document.createElement('button');
    btnConfirm.textContent = 'ОК';
    cntBtnConfirmArticule.append(btnConfirm);
}

function selectWidthHeight(zena) {
    const chooseWidth = document.querySelector('div.chooseWidth');
    const chooseHeight = document.querySelector('div.chooseHeight');
    
    const menuWidthDoors = document.createElement('select');
    const menuHeightDoors = document.createElement('select');

    chooseWidth.append(menuWidthDoors);
    chooseHeight.append(menuHeightDoors);

    const elMenuWidth = document.querySelector('div.chooseWidth select');
    const elMenuHeight = document.querySelector('div.chooseHeight select');


    for (let i = 0; i < Object.keys(zena.sizeWidth).length; i++) {
        const optionWidth = document.createElement('option');
        optionWidth.textContent = Object.keys(zena.sizeWidth)[i];
        optionWidth.dataset.zenaWidth = Object.values(zena.sizeWidth)[i];

        elMenuWidth.append(optionWidth);
    }

    for (let i = 0; i < Object.keys(zena.sizeHeight).length; i++) {
        const optionHeight = document.createElement('option');
        optionHeight.textContent = Object.keys(zena.sizeHeight)[i];
        optionHeight.dataset.zenaHeight = Object.values(zena.sizeHeight)[i];
        elMenuHeight.append(optionHeight);
    }
    eventSelectWidthHeightDoors();
}

function eventSelectWidthHeightDoors() {
    const selWidthHeight = document.querySelectorAll('select');

    selWidthHeight[0].onchange = (e) => {
        const selIndx = selWidthHeight[0].options[selWidthHeight[0].selectedIndex];

        const widthDoor = selIndx.value;
        const zenaDoor = selIndx.dataset.zenaWidth;

        addReadyMade(widthDoor, type = 'widthDoor', zenaDoor);
    }

    selWidthHeight[1].onchange = (e) => {
        const selIndx = selWidthHeight[1].options[selWidthHeight[1].selectedIndex];

        const heightDoor = selIndx.value;
        const zenaDoor = selIndx.dataset.zenaHeight;

        addReadyMade(heightDoor, type = 'heightDoor', zenaDoor);
    }


}

function colorPaintDoor(zena, typePaint) {
    document.body.style.overflow = 'hidden';
    const cntFormPaintDoor = document.querySelector('div.cntFormPaintDoor');
    const cntColorPaintDoor = document.createElement('div');

    cntColorPaintDoor.classList.add('cntColorPaintDoor');
    cntFormPaintDoor.append(cntColorPaintDoor);


    for (let i = 0; i < Object.keys(zena.paintingColor).length; i++) {
        const colorBox = document.createElement('div');
        const color = Object.keys(zena.paintingColor)[i];

        colorBox.classList.add('colorBox');
        colorBox.setAttribute('data-color', color);

        if (typePaint === '1') {
            const zenaPaint = Object.values(zena.paintingColor)[i];
            colorBox.dataset.zenaPaint = zenaPaint;
        }

        if (typePaint === '2') {
            const zenaPaint = Object.values(zena.chooseFilmColor)[i];
            colorBox.dataset.zenaPaint = zenaPaint;
        }

        if (typePaint === '3') {
            const zenaPaint = Object.values(zena.colorHand)[i];
            colorBox.dataset.zenaPaint = zenaPaint;
        }

        colorBox.style.width = '30px';
        colorBox.style.height = '30px';
        colorBox.style.background = Object.keys(zena.paintingColor)[i];

        cntColorPaintDoor.append(colorBox);
    }

}

function addEventArticle() {
    const article = document.querySelectorAll('input.checkedAccesories');
    const btnOk = document.querySelector('div.cntBtnArticle button');

    btnOk.onclick = () => {
    for (let i = 0; i < article.length; i++) {
        if (article[i].checked == true ) {
              
            readyMadeEquipment.accesories.article.push(article[i].dataset.articule);   
            readyMadeEquipment.accesories.price.push(article[i].dataset.zenaArticule);   

            }
        }
        document.querySelector('div.cover').remove();
        document.body.style.overflow = 'scroll';
    }

}

function addReadyMade(data, type, nameCompl) {

    

    if (type == 'heightDoor') {
        if (!readyMadeEquipment.heightDoor.width) {

            readyMadeEquipment.heightDoor.height = data;
            readyMadeEquipment.heightDoor.zena = nameCompl;
        } else {
            readyMadeEquipment.heightDoor.height = data;
            readyMadeEquipment.heightDoor.zena = nameCompl;

        }
    }

    if (type == 'widthDoor') {
        if (!readyMadeEquipment.widthDoor.width) {

            readyMadeEquipment.widthDoor.width = data;
            readyMadeEquipment.widthDoor.zena = nameCompl;
        } else {
            readyMadeEquipment.widthDoor.width = data;
            readyMadeEquipment.widthDoor.zena = nameCompl;

        }
    }

    if (type == 'handColor') {
        if (!readyMadeEquipment.handColor.color) {
            readyMadeEquipment.handColor.color = nameCompl;
            readyMadeEquipment.handColor.zena = data;
        } else {
            readyMadeEquipment.handColor.color = nameCompl;
            readyMadeEquipment.handColor.zena = data;

        }
    }

    if (type == 'filmColor') {
        if (!readyMadeEquipment.filmColor.color) {
            readyMadeEquipment.filmColor.color = nameCompl;
            readyMadeEquipment.filmColor.zena = data;
        } else {
            readyMadeEquipment.filmColor.color = nameCompl;
            readyMadeEquipment.filmColor.zena = data;

        }
    }

    if (type == 'paintingColor') {
        if (!readyMadeEquipment.paintingColor.color) {
            readyMadeEquipment.paintingColor.color = nameCompl;
            readyMadeEquipment.paintingColor.zena = data;

        } else {
            readyMadeEquipment.paintingColor.color = nameCompl;
            readyMadeEquipment.paintingColor.zena = data;

        }
    }

    if (type == 'opening') {
        if (!readyMadeEquipment.opening.type) {
            readyMadeEquipment.opening.type = nameCompl;
            readyMadeEquipment.opening.zena = data;
        } else {
            readyMadeEquipment.opening.type = nameCompl;
            readyMadeEquipment.opening.zena = data;

        }
    }
}

function addEventWindow(type) {
    const closeWindow = document.querySelector('div.closeChoose');
    const chooseColor = document.querySelectorAll('div.colorBox');


    for (let i = 0; i < chooseColor.length; i++) {

        chooseColor[i].onclick = (e) => {
            const colorDoor = e.target.dataset.color;
            const zenaColorDoor = e.target.dataset.zenaPaint;

            if (type == '1') addReadyMade(zenaColorDoor, type = 'paintingColor', colorDoor);
            if (type == '2') addReadyMade(zenaColorDoor, type = 'filmColor', colorDoor);
            if (type == '3') addReadyMade(zenaColorDoor, type = 'handColor', colorDoor);

            document.querySelector('div.cover').remove();
            document.body.style.overflow = 'scroll';
            totalBuy();
        }

    }

    closeWindow.onclick = () => {
        document.querySelector('div.cover').remove();
        document.body.style.overflow = 'scroll';
    }
}

function createWindow(title) {
    const cover = document.createElement('div');
    const pageY = window.pageYOffset;
    
    cover.classList.add('cover');
    cover.style.top = pageY+'px';
    
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
}