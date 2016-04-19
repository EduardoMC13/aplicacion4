// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$("#dsip table td").eq(3).text(device.model);
		$("#dsip table td").eq(5).text(device.cordova);
		$("#dsip table td").eq(7).text(device.platform);
		$("#dsip table td").eq(9).text(device.version);
		$("#dsip table td").eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistoria('la app se pauso');
		},false);//pause
		document.addEventListener("resume",function(){
			escribehistoria('la app se reinicio');
		},false);//resume
		document.addEventListener("online",function(){
			escribehistoria('la app se conecto a la red');
		},false);//se conecto
		document.addEventListener("offline",function(){
			escribehistoria('la app se desconecto de la red');
		},false);//se desconecto
	
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$("#eHistoria").append('<li>'+accion+'</li>');
}