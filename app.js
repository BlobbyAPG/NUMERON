const greaterThan = document.getElementById("greater-than");
const equalTo = document.getElementById("equal-to");
const lesserThan = document.getElementById("lesser-than");


const number1Box = document.getElementById("number1");
const number2Box = document.getElementById("number2");

var number1 = Math.floor(Math.random()*100);
var number2 = Math.floor(Math.random()*100);

number1Box.innerHTML = number1;
number2Box.innerHTML = number2;

var score = 0;

greaterThan.onclick = ()=>
{
    if(number1 > number2)
    {
        score++;
        resetTime(timerId);
        number1 = Math.floor(Math.random()*100);
        number2 = Math.floor(Math.random()*100);

        number1Box.innerHTML = number1;
        number2Box.innerHTML = number2;
    }
    else
    {
        location.href = "./gameover.html?score"+score;
    }
}
lesserThan.onclick = ()=>
{
    if(number1 < number2)
    {
        score++;
        resetTime(timerId);
        number1 = Math.floor(Math.random()*100);
        number2 = Math.floor(Math.random()*100);
        
        number1Box.innerHTML = number1;
        number2Box.innerHTML = number2;
    }
    else
    {
        location.href = "./gameover.html?score"+score;
    }
}
equalTo.onclick = ()=>
{
    if(number1 == number2)
    {
        score++;
        resetTime(timerId);
        number1 = Math.floor(Math.random()*100);
        number2 = Math.floor(Math.random()*100);
        
        number1Box.innerHTML = number1;
        number2Box.innerHTML = number2;
    }
    else
    {
        location.href = "./gameover.html?score"+score;
    }
}