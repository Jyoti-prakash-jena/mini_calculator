const buttons=document.querySelectorAll("#but");
const inputs=document.querySelector("#inp");



function change(e){
 switch(e.target.value){
  case '7':inputs.value+='7';
  break;
  case '8':inputs.value+='8';
  break;
  case '9':inputs.value+='9';
  break;
  case '*':inputs.value+='*';
  break;
  case '4':inputs.value+='4';
  break;
  case '5':inputs.value+='5';
  break;
  case '6':inputs.value+='6';
  break;
  case '-':inputs.value+='-';
  break;
  case '1':inputs.value+='1';
  break;
  case '2':inputs.value+='2';
  break;
  case '3':inputs.value+='3';
  break;
  case '+':inputs.value+='+';
  break;
  case '00':inputs.value+='00';
  break;
  case '0':inputs.value+='0';
  break;
  case '=':inputs.value=eval(inputs.value);
  break;
  case 'AC':inputs.value='';
  break;
  case 'DE':inputs.value=inputs.value.toString().slice(0,-1);
  break;
  case '.':inputs.value+='.';
  break;
  case '/':inputs.value+='/';
  break;
 }

}

buttons.forEach(function(but){
    console.log(but);
    but.addEventListener('click',function (e){
      change(e);
    });
    });
