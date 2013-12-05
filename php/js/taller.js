var carList = new Array();
carList[0] = "coches/astonmartin.jpg";
carList[1] = "coches/audi.jpg";
carList[2] = "coches/bugatti.jpg";
carList[3] = "coches/cadillac.jpg";
carList[4] = "coches/cayman.jpg";
carList[5] = "coches/chevrolet.jpg";
carList[6] = "coches/chrysler300.jpg";
carList[7] = "coches/citroen.jpg";
carList[8] = "coches/delorean.jpg";

var pos=0;


function bup(){
    pos--;
    loadImgs();
}

function bdown(){
    pos++;
    loadImgs();
}

function init(){
    pos=0;
    loadImgs();
    imageMaximize("img1");
}

function loadImgs(){
    loadImg("img1",pos);
    loadImg("img2",pos+1);
    loadImg("img3",pos+2);
    if (pos>=carList.length){
        pos=pos-carList.length;
    }
    if (pos<0){
        pos=pos+carList.length;
    }
}

function loadImg(id,pos){
    posReal = pos;
    if (pos>=carList.length){
        posReal=pos-carList.length;
    }
    if (pos<0){
        posReal=pos+carList.length;
    }
    document.getElementById(id).src=carList[posReal];
}

function imageMaximize(imageId){
    image = document.getElementById(imageId);
    editBox = document.getElementById("divImgMax");
    editBox.innerHTML="";
    var imageElement=document.createElement("img");
    imageElement.src=image.src;
    editBox.appendChild(imageElement);
}

function scaleSize(maxW, maxH, currW, currH){
    var ratio = currH / currW;
    if(currW >= maxW && ratio <= 1){
    currW = maxW;
    currH = currW * ratio;
    } else if(currH >= maxH){
    currH = maxH;
    currW = currH / ratio;
    }
    return [currW, currH];
}