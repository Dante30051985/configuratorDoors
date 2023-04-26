export function viewUserAfterinsertDb(parse) {
  
    console.log(parse);

    if (document.querySelector('label')) {
        document.querySelector('label').remove();
    }
   
    if (!document.querySelector('ul.listUser')) {
            const cListUser = document.querySelector('div.cntListUser');

            const listUser = document.createElement('ul');
            listUser.classList.add('listUser');
            cListUser.append(listUser);
   
            const optionUser = document.querySelectorAll('ul.listUser li');
            
            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }
        
            let typeParse = Object.keys(parse);
   
    
            if (typeParse[0] == 'login') {

            for (let i = 0; i < parse['login'].length; i++) {
                const optionSelect = document.createElement('li');
               
                     optionSelect.innerHTML = 
                     '<div class="rowUser"><div>'+parse['login'][i]+'</div>'+
                     '<div>'+parse['passw'][i]+'</div>'+
                     '<input type="checkbox" value="'+parse['login'][i]+'">'+
                     '</div>';

                     listUser.append(optionSelect);
            }
        }

            if (typeParse[0] == 'colorDoors') {
                for (let i = 0; i < parse['colorDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                         optionSelect.innerHTML = 
                         '<div class="rowUser"><div style="width:15px;height;15px;background:'
                         +parse['colorDoors'][i]+';"></div><div>'+parse['colorDoors'][i]+'</div>'+
                         '<div>'+parse['zena'][i]+'</div>'+
                         '<input type="checkbox" value="'+parse['colorDoors'][i]+'">'+
                         '</div>';
    
                         listUser.append(optionSelect);
                }

            }

            if (typeParse[0] == 'colorFilm') {
                for (let i = 0; i < parse['colorFilm'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                         optionSelect.innerHTML = 
                         '<div class="rowUser"><div style="width:15px;height;15px;background:'
                         +parse['colorFilm'][i]+';"></div><div>'+parse['colorFilm'][i]+'</div>'+
                         '<div>'+parse['zena'][i]+'</div>'+
                         '<input type="checkbox" value="'+parse['colorFilm'][i]+'">'+
                         '</div>';
    
                         listUser.append(optionSelect);
                }

            }

            if (typeParse[0] == 'colorHand') {
                for (let i = 0; i < parse['colorHand'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                         optionSelect.innerHTML = 
                         '<div class="rowUser"><div style="width:15px;height;15px;background:'
                         +parse['colorHand'][i]+';"></div><div>'+parse['colorHand'][i]+'</div>'+
                         '<div>'+parse['zena'][i]+'</div>'+
                         '<input type="checkbox" value="'+parse['colorHand'][i]+'">'+
                         '</div>';
    
                         listUser.append(optionSelect);
                }

            }

            if (typeParse[0] == 'widthDoors') {
                for (let i = 0; i < parse['widthDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['widthDoors'][i]+'&nbsp'+'мм'+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['widthDoors'][i]+'">'+
                    '</div>';

    
                         listUser.append(optionSelect);
                }

            }

            if (typeParse[0] == 'heightDoors') {
                for (let i = 0; i < parse['heightDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['heightDoors'][i]+'&nbsp'+'мм'+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['heightDoors'][i]+'">'+
                    '</div>';

    
                         listUser.append(optionSelect);
                }
            }

            if (typeParse[0] == 'openDoors') {
                for (let i = 0; i < parse['openDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['openDoors'][i]+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['openDoors'][i]+'">'+
                    '</div>';

    
                         listUser.append(optionSelect);
                }
            }

            if (typeParse[0] == 'accessories') {
                for (let i = 0; i < parse['accessories'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['accessories'][i]+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['accessories'][i]+'">'+
                    '</div>';

                    listUser.append(optionSelect);
                }
            }

    } else {

        const cntListUser = document.querySelector('div.cntListUser');
        const listUser = document.createElement('ul');

        listUser.classList.add('listUser');
        cntListUser.append(listUser);

        const optionUser = document.querySelectorAll('ul.listUser li');
        

            if (optionUser.length > 0) {
                for (let i = 0; i < optionUser.length; i++) {
                    optionUser[i].remove();
                }
            }
        
            let typeParse = Object.keys(parse);
       
            if (typeParse[0] == 'login') {

            for (let i = 0; i < parse['login'].length; i++) {
                const optionSelect = document.createElement('li');
               
                     optionSelect.innerHTML = 
                     '<div class="rowUser"><div>'+parse['login'][i]+'</div>'+
                     '<div>'+parse['passw'][i]+'</div>'+
                     '<input type="checkbox" value="'+parse['login'][i]+'">'+
                     '</div>';

                     listUser.append(optionSelect);
            }
        }

            if (typeParse[0] == 'colorDoors') {
                for (let i = 0; i < parse['colorDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                         optionSelect.innerHTML = 
                         '<div class="rowUser"><div style="width:15px;height;15px;background:'
                         +parse['colorDoors'][i]+';"></div><div>'+parse['colorDoors'][i]+'</div>'+
                         '<div>'+parse['zena'][i]+'</div>'+
                         '<input type="checkbox" value="'+parse['colorDoors'][i]+'">'+
                         '</div>';
    
                         listUser.append(optionSelect);
                }

            }

            
            if (typeParse[0] == 'colorFilm') {
                for (let i = 0; i < parse['colorFilm'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                         optionSelect.innerHTML = 
                         '<div class="rowUser"><div style="width:15px;height;15px;background:'
                         +parse['colorFilm'][i]+';"></div><div>'+parse['colorFilm'][i]+'</div>'+
                         '<div>'+parse['zena'][i]+'</div>'+
                         '<input type="checkbox" value="'+parse['colorFilm'][i]+'">'+
                         '</div>';
    
                         listUser.append(optionSelect);
                }

            }

            if (typeParse[0] == 'colorHand') {
                for (let i = 0; i < parse['colorHand'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                         optionSelect.innerHTML = 
                         '<div class="rowUser"><div style="width:15px;height;15px;background:'
                         +parse['colorHand'][i]+';"></div><div>'+parse['colorHand'][i]+'</div>'+
                         '<div>'+parse['zena'][i]+'</div>'+
                         '<input type="checkbox" value="'+parse['colorHand'][i]+'">'+
                         '</div>';
    
                         listUser.append(optionSelect);
                }
            }
            
            if (typeParse[0] == 'widthDoors') {
                for (let i = 0; i < parse['widthDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                            optionSelect.innerHTML = 
                            '<div class="rowUser"><div>'+parse['widthDoors'][i]+'&nbsp'+'мм'+'</div>'+
                            '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                            '<input type="checkbox" value="'+parse['widthDoors'][i]+'">'+
                            '</div>';
    
                         listUser.append(optionSelect);
                }

            }
            
            if (typeParse[0] == 'heightDoors') {
                for (let i = 0; i < parse['heightDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['heightDoors'][i]+'&nbsp'+'мм'+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['heightDoors'][i]+'">'+
                    '</div>';

                         listUser.append(optionSelect);
                }
            }

            if (typeParse[0] == 'openDoors') {
                for (let i = 0; i < parse['openDoors'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['openDoors'][i]+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['openDoors'][i]+'">'+
                    '</div>';

    
                         listUser.append(optionSelect);
                }
            }

            
            if (typeParse[0] == 'accessories') {
                for (let i = 0; i < parse['accessories'].length; i++) {
                    const optionSelect = document.createElement('li');
                   
                    optionSelect.innerHTML = 
                    '<div class="rowUser"><div>'+parse['accessories'][i]+'</div>'+
                    '<div>'+parse['zena'][i]+'&nbsp'+'руб.'+'</div>'+
                    '<input type="checkbox" value="'+parse['accessories'][i]+'">'+
                    '</div>';

                    listUser.append(optionSelect);
                }
            }
    } 
}

