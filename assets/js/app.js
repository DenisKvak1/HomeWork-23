function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  let Button = document.getElementById("Button");
  let Input = document.getElementById("Input");
  let Result = document.getElementById("Result");
  let Img = document.getElementById("img");
  let BtnClear = document.getElementById("btnClear");
  let LeftIteration = document.getElementById("Iteration");
  let GuessNumber = document.getElementById("GuessNumber");


  let min=0;
  let max=100;
  let number = getRandomNumber(min, max);
  let iterationInitial = 10;
  let currentIteration = 0;
  LeftIteration.textContent=`Осталось попыток: ${iterationInitial}`;
  GuessNumber.textContent=`Угадай число от ${min} до ${max}`;

  let ipn='';
  let iteration=iterationInitial

Button.addEventListener("click", function () {
    if(Input.value && ipn!=Input.value){
        if (Input.value > max) {
            Input.value = max;
        }
        else if (Input.value < min) {
            Input.value = min;
        }
        if (iteration > currentIteration && Input.disabled==false) {
            if (Input.value == number) {
              Result.textContent = 'ПРАВИЛЬНО';
              Img.src = 'assets/images/yes.png';
              BtnClear.classList.remove('d-none');
              Input.disabled=true;
            } else {
              Img.src = 'assets/images/No.png';
              let ms;
              if (number > Input.value) {
                ms = 'меньше моего числа';
              } else {
                ms = 'больше моего числа';
              }
              Result.textContent = `Ваш вариант ${Input.value} ${ms}`;
            }
            currentIteration++;
            if (iteration <= currentIteration && Input.value != number) {
              Result.textContent = `Попытки кончились, правильный ответ был: ${number}`;
              BtnClear.classList.remove('d-none');
            }
            LeftIteration.textContent=`Осталось попыток: ${iterationInitial-currentIteration}`
            ipn=Input.value;
            Input.value=''
        }
    }
});
BtnClear.addEventListener("click", function () {
    BtnClear.classList.add('d-none');
    Img.src = 'assets/images/What.png';
    number=getRandomNumber(min, max);
    iteration=iterationInitial;
    currentIteration=0;
    Input.disabled=false;
    Input.value='';
    ipn=''
    Result.textContent = ``;
    LeftIteration.textContent=`Осталось попыток: ${iteration}`
});    