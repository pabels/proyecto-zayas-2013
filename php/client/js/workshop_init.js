var carList = new Array();
carList[0] = "coches/astonmartin1.jpg";
carList[1] = "coches/audi1.jpg";
carList[2] = "coches/jeep4.jpg";
carList[3] = "coches/mustang6.jpg";
carList[4] = "coches/morgan1.jpg";
carList[5] = "coches/hummer3.jpg";
carList[6] = "coches/bugatti4.jpg";
carList[7] = "coches/delorean2.jpg";


function load(){

	$('#carSelect a').click(function(){
		var id=$(this).attr('id');
	 	$('#imagetoedit').attr("src", carList[id]);
	});

}
load();

