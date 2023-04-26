
export function queryDbGuide(type) {
   
    if (type === '1') {
        const typeQuery = 'paintingColor';
        const queryDb = 'typeQuery=' + encodeURIComponent(typeQuery);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryDb
        }).then(response => response.text()).then(result =>
            colorPaintDoor(result)
        )
    }

    if (type === '2') {
        const typeQuery = 'filmColor';
        const queryDb = 'typeQuery=' + encodeURIComponent(typeQuery);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryDb
        }).then(response => response.text()).then(result =>
            colorPaintDoor(result)
        )
    }

    if (type === '3') {
        const typeQuery = 'handColor';
        const queryDb = 'typeQuery=' + encodeURIComponent(typeQuery);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryDb
        }).then(response => response.text()).then(result =>
            colorPaintDoor(result)
        )
    }

    if (type === '4') {
       
        const typeQuery = 'accessories';
        const queryDb = 'typeQuery=' + encodeURIComponent(typeQuery);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryDb
        }).then(response => response.text()).then(result =>
            accesories(result)
        )
     
    }
    

    if (type === 'paramDoors') {
        
        const doorWidth = 'widthDoors';
        const queryDoorWidth = 'typeQuery=' + encodeURIComponent(doorWidth);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryDoorWidth
        }).then(response => response.text()).then(result =>
            chooseSel(result)
        )

        const doorHeight = 'heightDoors';
        const queryDoorHeight = 'typeQuery=' + encodeURIComponent(doorHeight);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryDoorHeight
        }).then(response => response.text()).then(result =>
            chooseSel(result)
        )

        const typeOpening = 'openDoors';
        const queryTypeOpenDoor = 'typeQuery=' + encodeURIComponent(typeOpening);

        fetch('./php/querydb.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: queryTypeOpenDoor
        }).then(response => response.text()).then(result =>
            chooseSel(result)
        )

    }
 
}


function colorPaintDoor(result) {

    const zena = JSON.parse(result);
    const type = Object.keys(zena);

    document.body.style.overflow = 'hidden';
   
    const cntFormPaintDoor = document.querySelector('div.cntFormPaintDoor');
    const cntColorPaintDoor = document.createElement('div');

    cntColorPaintDoor.classList.add('cntColorPaintDoor');
    cntFormPaintDoor.append(cntColorPaintDoor);

   
    if (type[0] === 'colorDoors') {
      for (let i = 0; i < zena['colorDoors'].length; i++) {
        const colorBox = document.createElement('div');
        
        colorBox.classList.add('colorBox');
        colorBox.dataset.color = zena['colorDoors'][i];
        colorBox.dataset.zena = zena['zena'][i];
        colorBox.style.background = zena['colorDoors'][i];
        cntColorPaintDoor.append(colorBox);

       }
    }
    
    if (type[0] === 'colorFilm') {
        for (let i = 0; i < zena['colorFilm'].length; i++) {
          const colorBox = document.createElement('div');
          
          colorBox.classList.add('colorBox');
          colorBox.dataset.color = zena['colorFilm'][i];
          colorBox.dataset.zena = zena['zena'][i];
          colorBox.style.background = zena['colorFilm'][i];
          cntColorPaintDoor.append(colorBox);
  
          }
        }

    if (type[0] === 'colorHand') {
        for (let i = 0; i < zena['colorHand'].length; i++) {
          const colorBox = document.createElement('div');
          
          colorBox.classList.add('colorBox');
          colorBox.dataset.color = zena['colorHand'][i];
          colorBox.dataset.zena = zena['zena'][i];
          colorBox.style.background = zena['colorHand'][i];
          cntColorPaintDoor.append(colorBox);
  
          }
        }


        }
    

function chooseSel(result) {

    const zena = JSON.parse(result);
    const type = Object.keys(zena);


    if (type[0] === 'openDoors') {
        const chooseOpenDoor = document.querySelector('div.chooseOpening');
        const chooseOpening = document.createElement('select');
        chooseOpenDoor.classList.add('chooseOpening');
        chooseOpenDoor.append(chooseOpening);
        
       for (let i = 0; i < zena['openDoors'].length; i++){
            const optionWidth = document.createElement('option');
            optionWidth.dataset.zena = zena['zena'][i];
            optionWidth.textContent = zena['openDoors'][i];
            chooseOpening.append(optionWidth); 
       }        
    }
    
    if (type[0] === 'heightDoors') {
    
        const chooseWidth = document.querySelector('div.chooseHeight');
        const selectWidth = document.createElement('select');
        selectWidth.classList.add('selHeight');
        chooseWidth.append(selectWidth);
        
       for (let i = 0; i < zena['heightDoors'].length; i++){
            const optionWidth = document.createElement('option');
            optionWidth.dataset.zena = zena['zena'][i];
            optionWidth.textContent = zena['heightDoors'][i] + 'мм'
            selectWidth.append(optionWidth); 
       }        
    } 

    if (type[0] === 'widthDoors') {
    
        const chooseWidth = document.querySelector('div.chooseWidth');
        const selectWidth = document.createElement('select');
        selectWidth.classList.add('selWidth');
        chooseWidth.append(selectWidth);
        
       for (let i = 0; i < zena['widthDoors'].length; i++){
            const optionWidth = document.createElement('option');
            optionWidth.dataset.zena = zena['zena'][i];
            optionWidth.textContent = zena['widthDoors'][i] + 'мм'
            selectWidth.append(optionWidth); 
       }
    
        
    }
}

function accesories(result) {

    const zena = JSON.parse(result);
 
    const cntFormPaintDoor = document.querySelector('div.cntFormPaintDoor');
    const cntCheckbox = document.createElement('div');

    cntCheckbox.classList.add('cntCheckbox');
    cntFormPaintDoor.append(cntCheckbox);


    for (let i = 0; i < zena['accessories'].length; i++) {


        const cntArticule = document.createElement('div');
        cntArticule.classList.add('articule');
        cntCheckbox.append(cntArticule);

        const photoArticule = document.createElement('div');
        photoArticule.classList.add('photoArticule');

        photoArticule.style.width = '50px';
        photoArticule.style.height = '50px';
        photoArticule.style.background = 'orange';
        photoArticule.textContent = zena['accessories'][i];
        cntArticule.append(photoArticule);

        const checkbox = document.createElement('input');
        checkbox.classList.add('checkedAccesories');
        checkbox.dataset.zena = zena['zena'][i];
        checkbox.dataset.articule = zena['accessories'][i];
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