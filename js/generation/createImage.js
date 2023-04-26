
export function createImageConfig(completeConfig) {
   createWindowImageConfig();
   createImage(completeConfig);
}

function createWindowImageConfig() {

    const cntGenerationImage = document.createElement('div');
    cntGenerationImage.classList.add('cntGenerationImage');
    const canvasImage = document.createElement('canvas');
    canvasImage.id = 'canvasImage';
    canvasImage.width = 500;
    canvasImage.height = 400;

    document.body.append(cntGenerationImage);
    cntGenerationImage.append(canvasImage);
}

function createImage(completeConfig) {

    generationOneDoor(completeConfig);

    const canvas = document.querySelector('canvas#canvasImage')    
    const dataUrl = canvas.toDataURL();


    let doc = new jsPDF();
    let imgData = dataUrl;


 
    let source = document.getElementById('customers');
    doc.addHTML(source, 
        function(){
          doc.addImage(imgData, 'jpeg', 2, 1, 200,180);
          const pdfData = doc.output('dataurlstring');
        
          let xhr = new XMLHttpRequest();
          xhr.open('POST', '../php/savePdf.php', true);
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.onreadystatechange = function() {
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
              
            }
          };
          xhr.send('pdfData=' + encodeURIComponent(pdfData));


        }, 170, 0);
       
 }



function generationOneDoor(completeConfig) {
    const canvas = document.getElementById('canvasImage');
    const ctx = canvas.getContext('2d'); 
  
    const paintWidth = 200;
    const paintHeight = 300;

    const filmColorWidth = 180;
    const filmColorHeightOne = 280;

    const handColorWidth = 30;
    const handColorHeight = 10;

    ctx.fillStyle = completeConfig['paintingColor']['color'];
    ctx.fillRect(35, 30, paintWidth, paintHeight); 

    ctx.fillStyle = completeConfig['paintingColor']['color'];
    ctx.fillRect(245, 30, paintWidth, paintHeight); 

    ctx.fillStyle = completeConfig['filmColor']['color'];
    ctx.fillRect(255, 40, filmColorWidth, filmColorHeightOne); 

    ctx.fillStyle = '#b3b3b3';
    ctx.fillRect(45, 40, filmColorWidth, filmColorHeightOne); 

    if (completeConfig['opening']['type'] === 'левое') {
        
    ctx.fillStyle = completeConfig['handColor']['color'];
    ctx.fillRect(185, 180, handColorWidth, handColorHeight); 

    ctx.fillStyle = completeConfig['handColor']['color'];
    ctx.fillRect(265, 180, handColorWidth, handColorHeight); 
    } 

    if (completeConfig['opening']['type'] === 'правое') {
        console.log('dddqqq');
        ctx.fillStyle = completeConfig['handColor']['color'];
        ctx.fillRect(390, 180, handColorWidth, handColorHeight); 
    
        ctx.fillStyle = completeConfig['handColor']['color'];
        ctx.fillRect(55, 180, handColorWidth, handColorHeight); 
        } 
    
    ctx.font = '16px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('вид снаружи',80, 345);
   
    ctx.font = '16px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('вид изнутри',300, 345);
   
    return true;
}



/*
function saveImage() {
    
    const canvas = document.getElementById('canvasImage');
    const canvasToSave = document.createElement('canvas');
    
    canvasToSave.width = canvas.width;
    canvasToSave.height = canvas.height;
    
    const ctx = canvasToSave.getContext('2d');
    ctx.drawImage(canvas, 0, 0);
    
    const dataUrl = canvasToSave.toDataURL('image/png');
    downloadImage(dataUrl, 'myImage.png');
  }
  

  function downloadImage(dataUrl, filename) { 
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } */