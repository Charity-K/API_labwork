//Event handling
//1. Using special attributes in certain elements

var number1_element = document.getElementById('num1');
var number2_element = document.getElementById('num2');

function divideThem(){

  //getting values from our DOM 
  var number1 = number1_element.value;
  var number2 = number2_element.value;

 
  //check whether number1 and number2 are empty

  if( number1 == ""){

    //to avoid duplication, we add a span tag for errors

    document.getElementById('num1Error').innerHTML = "Number one is empty";

    document.getElementById('num1Error').style.display = 'block';

    //we can shift the focus to number one
    number1_element.focus();

    //If not null display error


  }else if( number2 == ""){

    //to avoid duplication, we add a span tag for errors

    document.getElementById('num2Error').innerHTML = "Number two is empty";

    document.getElementById('num2Error').style.display = 'block';

    //we can shift the focus to number one
    number2_element.focus();


  }else{
    
    //Division by zero

    if( number2 != '0' ){
      result = number1 / number2;
    }else{
      document.getElementById('num2Error').innerHTML = "Error! Can't devide by zoro :(";

      document.getElementById('num2Error').style.display = 'block';

      //we can shift the focus to number one
      number2_element.focus();

      //we can also delete the zero
      number2_element.value = "";

      //we can give number 2 focus
      number2_element.focus();

    }



    var result_span = document.getElementById('results');
    result_span.innerHTML = result;



  }


}

// Using javascript addEventListener methods

var divide_them = document.getElementById('divide-them');
//few remeinders on EventListeners
/*
target.addEventListener(type, listener [, options]);

target is divide_them -- our button
type is click
listener is a function to be executed.

divide_them.addEventListener('click',function(){
  alert('I am not implemented also!');
});
*/
//we can use the first approach for now..


//let us get rid of the error once someone fills in a value...

//let us check out the different events..

//clear error message if there is input
number1_element.addEventListener('focusout',(event)=>{
  if(number1_element.value != ""){
    document.getElementById('num1Error').innerHTML = '';
    document.getElementById('num1Error').style.display = 'none';
  }
});

//clear error message if there is input
number2_element.addEventListener('focusout',(event)=>{
  if(number2_element.value != ""){
    document.getElementById('num2Error').innerHTML = '';
    document.getElementById('num2Error').style.display = 'none';
  }
});


