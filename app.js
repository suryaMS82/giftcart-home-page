var fabars= document.querySelector('.fa-bars');
var slidem= document.querySelector('.click-side-menu');
var fatimes= document.querySelector('.fa-times');

fabars.addEventListener('click',function(){
var value= slidem.classList.contains('appkk');

if(value){
    slidem.classList.remove('appkk');
}
else{
    slidem.classList.add('appkk');
    //console.log('its adding');
}
});

fatimes.addEventListener('click',function(){
    var calc= slidem.classList.contains('appkk');
    console.log(calc);
    
    if(calc){
        slidem.classList.remove('appkk');
    }
    else{
        slidem.classList.add('appkk');
    }
    });

