window.onload = function(){
  startingPage();
};

function startingPage(){
  var content = document.getElementById("pagecontent");
  content.innerHTML = document.getElementById("startingPage").innerHTML;

}

function renderInstructionVideo(){
  var content = document.getElementById("pagecontent");
  content.innerHTML = document.getElementById("instructionVideo").innerHTML;

}

function renderFirstQuestion(){
  var content = document.getElementById("pagecontent");
  content.innerHTML = document.getElementById("renderFirstQuestion").innerHTML;
}

function checkFirstQuestion(treatment){
  if(document.getElementById("heparin").checked == true){
    var content = document.getElementById("pagecontent");
    content.innerHTML = document.getElementById("answerFirstQuestion").innerHTML;
    document.getElementById("answersection").appendChild(document.createTextNode("Heparin"));
  }else if(document.getElementById("waran").checked == true){
    var content = document.getElementById("pagecontent");
    content.innerHTML = document.getElementById("answerFirstQuestion").innerHTML;
    document.getElementById("answersection").appendChild(document.createTextNode("Waran"));
  }else if(document.getElementById("antikoagulantia").checked == true){
    var content = document.getElementById("pagecontent");
    content.innerHTML = document.getElementById("answerFirstQuestion").innerHTML;
    document.getElementById("answersection").appendChild(document.createTextNode("Avstår antikoagulantia"));
  }
}

function renderSecondVideo(){
  var content = document.getElementById("pagecontent");
  content.innerHTML = document.getElementById("renderSecondVideo").innerHTML;
}

function answerSecondQuestion(){
  var content = document.getElementById("pagecontent");
  content.innerHTML = document.getElementById("answerSecondQuestion").innerHTML;
}

