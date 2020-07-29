const form = [...document.querySelectorAll('.form')]; 

const siteInputs = [...document.querySelectorAll('.form__input--site')]; //all 'site' input in array
const userInputs= [...document.querySelectorAll('.form__input--user')]; //all 'user' input in array

const checkButton = document.querySelector('.form__button--check'); //'check' button
const cleanButton = document.querySelector('.form__button--clean'); //'clean' button
const randomButton= document.querySelector('.form__button--random'); //'random' button

const formText=document.querySelector('.form__text');

const checkUserInputs=function(){
    let userInputsValues=userInputs.map(el=>{return el.value});
    if(userInputsValues.indexOf('')!==-1){
        return 'empty';
    }
    for(el of userInputsValues){
        if(el<0||el>48){
            return 'OutOfRage';
        }
    }
    if(new Set(userInputsValues).size !== userInputs.length){
        return 'duplicats';
    }
}
const searchError=function(callback){
    let callbackStatus=callback();
    if(callbackStatus){
        formText.innerHTML=`Error: ${callbackStatus}`;
    }else{
        return false;
    }
}
const giveRandomsValues=function(array){
    let status;
    do{
    status = false;
        for(el of array){
            el.value =Math.floor(Math.random() * (48 - 1 + 1)) + 1;
        }
        let randomValues=array.map(el=>{return el.value});
        if(new Set(randomValues).size !== array.length){
            status = true;
        }
    }while(status);
}
const showSiteInputs=function(){
    for(el of siteInputs){
        el.classList.remove('hidden');
    }
}
const hideSiteInputs=function(){
    for(el of siteInputs){
        el.classList.add('hidden');
    }
}
const removeInputsClass=function(){
    for(el of userInputs){
        el.classList.remove('good');
        el.classList.remove('wrong');
    }
}
const compareValues=function(){
    let guestNumber=0;
    for(firstArray of siteInputs){
        for(secoundArray of userInputs){
            if(firstArray.value == secoundArray.value){
                secoundArray.classList.add('good');
                secoundArray.classList.remove('wrong');
                guestNumber++;
            }else if(secoundArray.classList.contains('good')){
                secoundArray.classList.remove('wrong');
            }else{
                secoundArray.classList.add('wrong');
            }
        }
    }
    formText.style.color='green';
    if(guestNumber===1){
    formText.innerHTML=`you guess ${guestNumber} number`;
    }else if(guestNumber>1){
        formText.innerHTML=`you guess ${guestNumber} numbers`;
    }else{
        formText.style.color='red';
        formText.innerHTML=`you guest nothing`;
    }
}
const cleanInputs=function(){
    for(el of userInputs){
        el.value='';
    }
    for(el of siteInputs){
        el.value='';
    }
}
const removeText = function(){
    formText.innerHTML='';
}

checkButton.addEventListener('click',function(){
    if(searchError(checkUserInputs)===false){
        removeInputsClass();    giveRandomsValues(siteInputs);    compareValues();    showSiteInputs();
    }
},false);
cleanButton.addEventListener('click',function(){
        removeInputsClass();    removeText();    hideSiteInputs();   cleanInputs();
},false);
randomButton.addEventListener('click',function(){
        removeInputsClass();    removeText();  hideSiteInputs();  giveRandomsValues(userInputs);
},false);

form[1].addEventListener('change',function(child){
    child.target.classList.remove('wrong');
    child.target.classList.remove('good');
},false);
form[1].addEventListener('keydown',function(child){
    child.target.classList.remove('wrong');
    child.target.classList.remove('good');
},false);
