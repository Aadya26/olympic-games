canvas = document.getElementById("canvas1");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle= "white"
ctx.lineWidth=3;
ctx.rect(110,143,430,200);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle= "Blue"
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2* Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle= "black"
ctx.arc(320,210,40,0,2* Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle= "red"
ctx.arc(390,210,40,0,2* Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle= "green"
ctx.arc(290,260,40,0,2* Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle= "yellow"
ctx.arc(360,260,40,0,2* Math.PI);
ctx.stroke();









