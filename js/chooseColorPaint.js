`use strict`
import * as func from './libary.js'
import * as queryDb from './query/queryDb.js';
import * as generation from './generation/createImage.js';

const choosePaint = document.querySelector('div.choosePaintingColor');
const chooseFilmColor = document.querySelector('div.chooseFilmColor');
const chooseHandColor = document.querySelector('div.chooseHandColor');
const chooseAccessories = document.querySelector('div.chooseAccessories');


const order = document.querySelector('td#order');
const paintdoor = document.querySelector('td#paintdoor');
const filmcolor = document.querySelector('td#filmcolor');
const colorhand = document.querySelector('td#colorhand');
const widthdoor = document.querySelector('td#widthdoor');
const heightdoor = document.querySelector('td#heightdoor');
const typeopening = document.querySelector('td#typeopening');
const accessories = document.querySelector('td#accessories');
const amount = document.querySelector('td#amount');


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


const btnSendCompletation = document.querySelector('div.sendEquipment');

btnSendCompletation.onclick = () => {

   generation.createImageConfig(readyMadeEquipment);
 


}


window.onload = () => {
  queryDb.queryDbGuide('paramDoors');
  
}

setTimeout(function(){
    const chooseWidth = document.querySelector('select.selWidth');
    const chooseHeight = document.querySelector('select.selHeight');

    chooseWidth.onchange = () => {
        const selIndx = chooseWidth.options[chooseWidth.selectedIndex];

        const widthDoor = selIndx.value;
        const zenaDoor = selIndx.dataset.zena;
        const type = 'widthDoor';

        addReadyMade(widthDoor, type, zenaDoor);
    }

     chooseHeight.onchange = (e) => {
        const selIndx = chooseHeight.options[chooseHeight.selectedIndex];

        const heightDoor = selIndx.value;
        const zenaDoor = selIndx.dataset.zena;
        const type = 'heightDoor';
        addReadyMade(heightDoor, type, zenaDoor);
    }

const chooseOpening = document.querySelector('div.chooseOpening select')

chooseOpening.onchange = (e) => {

    const selectedOption = chooseOpening.options[chooseOpening.selectedIndex];
    const value = selectedOption.value;

    if (value === 'левое') {
        const insideView = document.querySelector('div.insideView');
        const outsideView = document.querySelector('div.outsideView');

  
        insideView.setAttribute('style', 'transform: scale(1,1);');
        outsideView.setAttribute('style', 'transform: scale(-1, 1);');

        if (readyMadeEquipment.handColor.color) {
            insideView.setAttribute('style', 'transform: scale(1,1); background:'+
            readyMadeEquipment.filmColor.color+';');
        }
        const type = 'opening';
        addReadyMade(selectedOption.dataset.zena, type, value);

    }

    if (value === 'правое') {
        const insideView = document.querySelector('div.insideView');
        const outsideView = document.querySelector('div.outsideView');

        insideView.setAttribute('style', 'transform: scale(-1,1);');
        outsideView.setAttribute('style', 'transform: scale(1, 1);');

        if (readyMadeEquipment.handColor.color) {
            insideView.setAttribute('style', 'transform: scale(-1,1); background:'+
            readyMadeEquipment.filmColor.color+';');
        }

        const type = 'opening';
        const nameOpen = 'правое';
        addReadyMade(selectedOption.dataset.zena, type, value);

    }
}

}, 2000);

chooseAccessories.onclick = () => {
    const title = 'Выбор акссесуаров';
    const type = '4';
    func.createWindow(title);
    queryDb.queryDbGuide(type);
    setTimeout(function(){
        addEventArticle();
    }, 1000)
}

chooseHandColor.onclick = () => {
    const title = 'Выбор цвета ручки';
    const type = '3';
    func.createWindow(title);
    queryDb.queryDbGuide(type);
    
    setTimeout(function(){
        addEventWindow(type);
    }, 1000)
}

chooseFilmColor.onclick = () => {
    const title = 'Выбор цвета плёнки';
    const type = '2';
    func.createWindow(title);
    queryDb.queryDbGuide(type);
    
    setTimeout(function(){
        addEventWindow(type);
    }, 1000)
}

choosePaint.onclick = () => {
    const title = 'Выбор цвета покраски';
    const type = '1';
    func.createWindow(title);
    queryDb.queryDbGuide(type);
  
    setTimeout(function(){
        addEventWindow(type);
    }, 1000)
    
}

function totalBuy() {
     if (readyMadeEquipment.paintingColor.color) {
        document.querySelector('div.nalOutside').style.background = 
            readyMadeEquipment.paintingColor.color;
        document.querySelector('div.nalInside').style.background = 
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

    document.querySelector('div.price').textContent = 
                 summa.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

    miniatureChoose();
    
     //  order = Math.random(10,100);
        paintdoor.textContent = readyMadeEquipment.paintingColor.color;
        filmcolor.innerHTML = readyMadeEquipment.filmColor.color;
        colorhand.innerHTML = readyMadeEquipment.handColor.color; 
        widthdoor.innerHTML = readyMadeEquipment.widthDoor.width;
        heightdoor.innerHTML = readyMadeEquipment.heightDoor.height;
        typeopening.innerHTML = readyMadeEquipment.opening.type;
        accessories.innerHTML = readyMadeEquipment.accesories.article; 
        amount.innerHTML = document.querySelector('div.price').textContent;




}, 500)

function miniatureChoose(){
    
    const minPaint = document.querySelector('div.minPaint');
    const minFilmColor = document.querySelector('div.minFilmColor');
    const minHandColor = document.querySelector('div.minHandColor');
    const widthValueDoors = document.querySelector('div.valueWidth');
    const heightValueDoors = document.querySelector('div.valueHeight');
    const valueOpening = document.querySelector('div.valueOpening');
    const valueAccessories = document.querySelector('div.valueAccessories');

    
    if (readyMadeEquipment.paintingColor.color.length == 0) {
        document.querySelector('div.nalInside').style.background = '#b3b3b3';
        document.querySelector('div.nalOutside').style.background = '#b3b3b3';
        minPaint.style.background = '#b3b3b3';
    } else 
    {
        minPaint.style.background =
        readyMadeEquipment.paintingColor.color;
    }

    if (readyMadeEquipment.filmColor.color.length == 0) {
        minFilmColor.style.background = '#b3b3b3';
    } else {
        minFilmColor.style.background = 
        readyMadeEquipment.filmColor.color;
    }

    if (readyMadeEquipment.handColor.color.length == 0) {
        minHandColor.style.background = '#b3b3b3';
    } else {
        minHandColor.style.background = 
        readyMadeEquipment.handColor.color;
    }

    if (readyMadeEquipment.widthDoor.width.length) 
          widthValueDoors.textContent = readyMadeEquipment.widthDoor.width;

    if (readyMadeEquipment.heightDoor.height.length) 
          heightValueDoors.textContent = readyMadeEquipment.heightDoor.height;

    if (readyMadeEquipment.opening.type.length) 
          valueOpening.textContent   = readyMadeEquipment.opening.type;

    if (readyMadeEquipment.opening.type.length) 
          valueOpening.textContent   = readyMadeEquipment.opening.type;
    
    if (readyMadeEquipment.accesories.article.length) {
        if (valueAccessories.textContent.length > 0) {
            valueAccessories.textContent = readyMadeEquipment.accesories.article.join(',');
        }

            
    }

}








function addEventArticle() {
    const article = document.querySelectorAll('input.checkedAccesories');
    const btnOk = document.querySelector('div.cntBtnArticle button');

    btnOk.onclick = () => {
        
        readyMadeEquipment.accesories.article.length = 0;
        readyMadeEquipment.accesories.price.length = 0;
        
    for (let i = 0; i < article.length; i++) {
        if (article[i].checked == true ) {
              
            readyMadeEquipment.accesories.article.push(article[i].dataset.articule);   
            readyMadeEquipment.accesories.price.push(article[i].dataset.zena);   

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
            console.log(nameCompl);
            console.log(data);
            readyMadeEquipment.paintingColor.color = nameCompl;
            readyMadeEquipment.paintingColor.zena = data;

        } else {
            readyMadeEquipment.paintingColor.color = nameCompl;
            readyMadeEquipment.paintingColor.zena = data;
            console.log(nameCompl);
            console.log(data);
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
            const zenaColorDoor = e.target.dataset.zena;

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

