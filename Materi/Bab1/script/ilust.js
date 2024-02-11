document.addEventListener("DOMContentLoaded",function(){
    //Elim Method
    var elimIlus = document.querySelectorAll('.elim-method li');
    var dispElim = document.querySelectorAll('.exp-elim li');
    elimIlus[0].style.backgroundColor = '#00ADB5';
    dispElim[0].style.display = "flex";
    for (var i = 0; i < elimIlus.length; i++) {
        elimIlus[i].addEventListener("click", function() {
            for (var j = 0; j < elimIlus.length; j++) {
                elimIlus[j].style.backgroundColor = '#222831';
            }
            this.style.backgroundColor = '#00ADB5';
            var position = Array.from(elimIlus).indexOf(this);
            for (var k = 0; k < dispElim.length; k++) {
                dispElim[k].style.display = "none";
            }
            dispElim[position].style.display = "flex";
        });
    }

    //Graph Method
    var graphIlus = document.querySelectorAll('.graph-method li');
    var dispGraph = document.querySelectorAll('.exp-graph li');
    graphIlus[0].style.backgroundColor = '#00ADB5';
    dispGraph[0].style.display = "flex";
    for(var i = 0; i < graphIlus.length; i++){
        graphIlus[i].addEventListener("click",function(){
            for(var j = 0; j < elimIlus.length;j++){
                graphIlus[j].style.backgroundColor = '#222831';
            }
            this.style.backgroundColor = '#00ADB5';
            var position = Array.from(graphIlus).indexOf(this);
            for(var k = 0; k < dispGraph.length;k++){
                dispGraph[k].style.display = "none";
            }
            dispGraph[position].style.display = "flex";
        });
    }

    //Gauss Method
    var gaussIlus = document.querySelectorAll('.eg-method li');
    var dispGauss = document.querySelectorAll('.exp-gauss li');
    gaussIlus[0].style.backgroundColor = '#00ADB5';
    dispGauss[0].style.display = "flex";
    for(var i = 0; i < gaussIlus.length; i++){
        gaussIlus[i].addEventListener("click",function(){
            for(var j = 0; j < gaussIlus.length;j++){
                gaussIlus[j].style.backgroundColor = '#222831';
            }
            this.style.backgroundColor = '#00ADB5';
            var position = Array.from(gaussIlus).indexOf(this);
            for(var k = 0; k < dispGauss.length;k++){
                dispGauss[k].style.display = "none";
            }
            dispGauss[position].style.display = "flex";
        });
    }

    //Gaus Jordan Method
    var gjIlus = document.querySelectorAll('.egj-method li');
    var dispGJ = document.querySelectorAll('.exp-gj li');
    gjIlus[0].style.backgroundColor = '#00ADB5';
    dispGJ[0].style.display = "flex";
    for(var i = 0; i < gjIlus.length; i++){
        gjIlus[i].addEventListener("click",function(){
            for(var j = 0; j < gjIlus.length;j++){
                gjIlus[j].style.backgroundColor = '#222831';
            }
            this.style.backgroundColor = '#00ADB5';
            var position = Array.from(gjIlus).indexOf(this);
            for(var k = 0; k < dispGJ.length;k++){
                dispGJ[k].style.display = "none";
            }
            dispGJ[position].style.display = "flex";
        });
    }

    var plusBtn = document.querySelectorAll('.soal i');
    var disSol = document.querySelectorAll('.soal .pembahasan-latsol');
    for(var i = 0; i < plusBtn.length;i++){
        plusBtn[i].addEventListener("click",function(){
            var position = Array.from(plusBtn).indexOf(this);
            if(disSol[position].style.display == "none"){
                disSol[position].style.display = "flex";
                plusBtn[position].style.color = '#00ADB5';
            }
            else{
                disSol[position].style.display = "none";
                plusBtn[position].style.color = '#EEEEEE';
            }
        });
    }
});