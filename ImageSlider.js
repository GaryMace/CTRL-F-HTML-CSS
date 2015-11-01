var i=0;
var path = new Array();

path[0] = "./pictures/Phelps.png";
path[1] = "./pictures/www.fanatik.ro.png";

function swapImage()
{
	document.slide.src = path[i];
	if(i < path.length -1)
	{
		i++;
	}
	else
	{
		i=0;
	}
	setTimeout("swapImage()", 4250);
}

function switch1(){
	
	document.slide.src = path[0];
}
function switch2(){
	document.slide.src = path[1];
}
	
window.onload=swapImage;