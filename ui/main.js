console.log('Loaded!');
//change the text.
var element=document.getElementById('main-text');
element.innerHTML='NEW Value';
//Change the image postion
var img=document.getElementById('mad');
var marginLeft=0;
function moveright()
{
   marginLeft= marginLeft+5;
    img.style. marginLeft= marginLeft+'px'
}
img.onclick=function(){
    var interval=setInterval(moveright,50)
   // img.style.marginLeft='100px'
}