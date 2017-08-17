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
//count the button click.
var button=document.getElementById('counter');
var counter=0;
button.onClick=function()
{
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};