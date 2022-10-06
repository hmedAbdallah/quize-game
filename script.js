let y, i, j, choise, m, RandomAnswer2, RandomAnswer1, e1,e2,e3, TrueAnswer;
let choisesCard= document.querySelectorAll('.choise')


let qwizes = [
  ["the biggest country is: ", "russia"],
  ["the first prisident of usa is: ", "George Washington"],
  ["the fastest animal in land is", "cheatah"],
];
let characters = ["ibraham lincolin", "benjamin franklin"];
let countries = ["usa", "canada"];
let animals = ["deer", "horse"];

function QuestionAnswer() {
  y = document.getElementsByClassName("off");
  y[0].style.display = "flex";
  y[1].style.display = "flex";
  choisesCard.forEach((e)=>{
    e.classList.remove('true');
    e.classList.remove('false');
  })

m = Math.floor(Math.random() * 3);

RandomQwestion = qwizes[m][0];
TrueAnswer = qwizes[m][1];
if (m == 0) {
  RandomAnswer1 = countries[0];
  RandomAnswer2 = countries[1];
} else if (m == 1) {
  RandomAnswer1 = characters[0];
  RandomAnswer2 = characters[1];
} else if (m == 2) {
  RandomAnswer1 = animals[0];
  RandomAnswer2 = animals[1];
}
choise = [TrueAnswer, RandomAnswer1, RandomAnswer2];

document.getElementById("question").innerHTML = RandomQwestion;
i = Math.floor(Math.random() * 3);

document.getElementById("choise1").innerHTML = choise[i];
choise.splice(i, 1);
i = Math.floor(Math.random() * 2);
document.getElementById("choise2").innerHTML = choise[i];
choise.splice(i);
document.getElementById("choise3").innerHTML = choise[0];

}
function choose(){
  choisesCard.forEach((e)=>{
    if(e.innerHTML === TrueAnswer){
      e.classList.add('true')
    }
    else{
      e.classList.add('false')
    }
  })


}