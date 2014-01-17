
var carList = new Array();
carList[0] = "coches/astonmartin1.jpg";
carList[1] = "coches/astonmartin2.jpg";
carList[2] = "coches/astonmartin3.jpg";
carList[3] = "coches/astonmartin4.jpg";
carList[4] = "coches/astonmartin5.jpg";
carList[5] = "coches/astonmartin6.jpg";
carList[6] = "coches/astonmartin7.jpg";
carList[7] = "coches/audi1.jpg";
carList[8] = "coches/audi2.jpg";
carList[9] = "coches/audi3.jpg";
carList[10] = "coches/audi4.jpg";
carList[11] = "coches/audi5.jpg";
carList[12] = "coches/audi6.jpg";
carList[13] = "coches/audi7.jpg";
carList[14] = "coches/bugatti1.jpg";
carList[15] = "coches/bugatti2.jpg";
carList[16] = "coches/bugatti3.jpg";
carList[17] = "coches/bugatti4.jpg";
carList[18] = "coches/bugatti5.jpg";
carList[19] = "coches/bugatti6.jpg";
carList[20] = "coches/bugatti7.jpg";
carList[21] = "coches/bugatti8.jpg";
carList[22] = "coches/challenger1.jpg";
carList[23] = "coches/challenger2.jpg";
carList[24] = "coches/challenger3.jpg";
carList[25] = "coches/challenger4.jpg";
carList[26] = "coches/challenger5.jpg";
carList[27] = "coches/challenger6.jpg";
carList[28] = "coches/challenger7.jpg";
carList[29] = "coches/delorean1.jpg";
carList[30] = "coches/delorean2.jpg";
carList[31] = "coches/delorean3.jpg";
carList[32] = "coches/delorean4.jpg";
carList[33] = "coches/delorean5.jpg";
carList[34] = "coches/delorean6.jpg";
carList[35] = "coches/delorean7.jpg";
carList[36] = "coches/hummer1.jpg";
carList[37] = "coches/hummer2.jpg";
carList[38] = "coches/hummer3.jpg";
carList[39] = "coches/hummer4.jpg";
carList[40] = "coches/hummer5.jpg";
carList[41] = "coches/hummer6.jpg";
carList[42] = "coches/hummer7.jpg";
carList[43] = "coches/jeep1.jpg";
carList[44] = "coches/jeep2.jpg";
carList[45] = "coches/jeep3.jpg";
carList[46] = "coches/jeep4.jpg";
carList[47] = "coches/jeep5.jpg";
carList[48] = "coches/jeep6.jpg";
carList[49] = "coches/jeep7.jpg";
carList[50] = "coches/morgan1.jpg";
carList[51] = "coches/morgan2.jpg";
carList[52] = "coches/morgan3.jpg";
carList[53] = "coches/morgan4.jpg";
carList[54] = "coches/morgan5.jpg";
carList[55] = "coches/morgan6.jpg";
carList[56] = "coches/morgan7.jpg";
carList[57] = "coches/mustang1.jpg";
carList[58] = "coches/mustang2.jpg";
carList[59] = "coches/mustang3.jpg";
carList[60] = "coches/mustang4.jpg";
carList[61] = "coches/mustang5.jpg";
carList[62] = "coches/mustang6.jpg";
carList[63] = "coches/mustang7.jpg";

var i=0;
var j=0;
var random = new Array();
while(i<=5){
	random.push(Math.floor(Math.random() * (carList.length)));
	i++;
}
x=Math.floor(Math.random() * (carList.length));


	while(j<10){
		if(random[j]==random[j+1] || random[j]==random[j+2] || random[j]==random[j+3]|| random[j]==random[j+4]|| random[j]==random[j+5]){
			random[j]=Math.floor(Math.random() * (carList.length));
		}else{
			j++;
		}

	}




t=0;
for(var i=0;i<6;i++){
	x=random[t];
    document.getElementById("indeximg"+i).src=carList[x];
    var z=document.getElementById("indeximage"+i).getElementsByTagName("p");
    z[0].innerHTML=carList[x].substring(7,carList[x].length-5);
    z=document.getElementById("indeximage"+i).getElementsByTagName("a");
    z[0].href="portfolio-"+carList[x].substring(7,carList[x].length-5)+".html";
    t++;

}

