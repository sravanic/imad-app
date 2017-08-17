console.log('Loaded!');
//change the text.
var element=document.getElementById('main-text');
element.innerHTML='NEW Value';
//Change the image postion
var img=document.getElementById('mad');
img.onclick=function(){
    img.style.marginLeft='100px'
}