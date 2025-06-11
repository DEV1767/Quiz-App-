const questiondata=[
    {
        question:"How many ICC trophy INDIA has won under Kohli Captancy ?",
        options: ["3","0","4","5"],
        correct:"0"

    },
    {
        question:"Which is the smallest planet in our solar system ?",
        options :["Earth","Mars","Mercury","Venus"],
        correct:"Mercury"
    },
    {
      question: " What gas do plants absorb from the atmosphere for photosynthes is ?",
      options:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],
      correct:"Carbon Dioxide"
    },
    {
      question:" Who was the first President of the United States?",
      options:["Thomas Jefferson","Abraham Lincoln","George Washington","John Adams"],
      correct:"George Washington"
    },
    {
      question:"Which is the largest ocean in the world?",
      options:["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"],
      correct:"Pacific Ocean"
    },
    { question:"What does HTTP stand for in a website address?",
      options:["HyperText Transfer Protocol","Hyper Technical Text processor","High Transmission Transfer Process","Host Terminal Text Protocol"],
      correct:"HyperText Transfer Protocol"
    },
    {
      question:"What is the square root of 144?",
      options:["10","11","12","13"],
      correct:"12",
    }

];
const question1=document.getElementsByClassName("quest")[0]
const answer1=document.querySelectorAll(".answer")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const sumbit=document.getElementById("sumbit")
const restart=document.getElementById("restart")
const start=document.getElementById("st")
const start1=document.querySelector(".start1")
const section1=document.querySelector(".section1")
const sv6=document.querySelector(".sv6")
const sv1=document.querySelector(".sv1")
const sv4=document.querySelector(".sv4")

start.addEventListener("click",function start(){
start1.style.display="none"
section1.style.display="flex"
})
let quiz=0;
let score=0;
loadquiz()
 
function loadquiz() {
  deselect();
   let quizdata=questiondata[quiz];
   question1.innerText=quizdata.question;
   a_text.innerText=quizdata.options[0]
   b_text.innerText=quizdata.options[1]
   c_text.innerText=quizdata.options[2]
   d_text.innerText=quizdata.options[3]
}
function restartquiz(){
  quiz=0
  score=0
  loadquiz()
}

 function nextquestiondata(){
  quiz++
  if(quiz<questiondata.length){
    loadquiz()
  }
  else{
      document.querySelector("#sumbit").style.display="none"
      document.querySelector(".section1").style.display="none"
      document.querySelector(".section2").style.display="flex"

  }
}
function select(){
   let selected=null
    answer1.forEach((input) => {
      if(input.checked){
        selected=input.nextElementSibling.innerText.trim()
      }
    });
    return selected;

}
function deselect(){
  answer1.forEach((input)=>input.checked=false)

}

sumbit.addEventListener("click",function(){
  const selected=select()
  if (selected){
       if(selected==questiondata[quiz].correct){
        score++
      }
    nextquestiondata()
    finalscore()
  
}
  else{
    alert("Please select an answer before submitting.")
  } 
})
restart.addEventListener("click",function(){
 restartquiz()   
})
function finalscore(){
   let newscore=score
   totalscore=document.querySelector(".section2 .marks")
   totalscore.innerText=" Your Score= "+newscore
   bar()
   sv6.style.width="0%"
   setTimeout(()=>{
   if (score===1){
      sv6.style.width="20%"
   }
   else if(score===2){
      sv6.style.width="45%"
   }
   else if(score===3){
      sv6.style.width="55%"
   }
   else if(score===4){
      sv6.style.width="75%"
   }
   else if(score===5){
     sv6.style.width="85%"
   }
   else if(score===6){
    sv6.style.width="90%"
   }
   else{
    sv6.style.width="100%"
   }
  },400);
  }
  function bar(){
       sv1.style.width="0%"
        sv4.style.width="0%"
     setTimeout(()=>{
        sv1.style.width="100%"
        sv4.style.width="100%"
     },300)
  }


  