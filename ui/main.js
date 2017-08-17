console.log('Loaded!');
//change the text.
var element=document.getElementById('main-text');
element.innerHTML='NEW Value';
//Change the image postion
var img=document.getElementById('mad');
var marginLeft=0;
function moveright()
{
   marginLeft= marginLeft+10;
    img.style. marginLeft= marginLeftt+'px'
}
img.onclick=function(){
    var interval=setInterval(moveright,100)
   // img.style.marginLeft='100px'
}