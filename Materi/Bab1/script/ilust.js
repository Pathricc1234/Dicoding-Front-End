function splitContent(section,code){
    if(section == 1){
        var getContent = eliminationMap.get(code);
        var split = getContent.split(".");
        return split;
    }
    if(section == 2){
        var getContent = graphMap.get(code);
        var split = getContent.split(".");
        return split
    }
}

document.addEventListener("DOMContentLoaded", function() {
    //Elimination Method
    const firstElim = document.getElementById("first-elim");
    const secondElim = document.getElementById("second-elim");
    const thirdElim = document.getElementById("third-elim");
    const expElim = document.getElementById("exp-elim");
    const imgElim = document.querySelector(".ilustrasi-metode-eliminasi img")
    
    firstElim.style.backgroundColor = '#00ADB5';
    secondElim.style.backgroundColor = '#222831';
    thirdElim.style.backgroundColor = '#222831';
    var cont = splitContent(1,"first");
    expElim.textContent = cont[0];
    imgElim.src = cont[1] + "." + "png";

    if (firstElim) {
        firstElim.addEventListener("click", function() {
            firstElim.style.backgroundColor = '#00ADB5';
            secondElim.style.backgroundColor = '#222831';
            thirdElim.style.backgroundColor = '#222831';
            var cont = splitContent(1,"first");
            expElim.textContent = cont[0];
            imgElim.src = cont[1] + ".png";
        });
    } 

    if(secondElim){
        secondElim.addEventListener("click", function(){
            firstElim.style.backgroundColor = '#222831';
            secondElim.style.backgroundColor = '#00ADB5';
            thirdElim.style.backgroundColor = '#222831';
            var cont = splitContent(1,"second");
            expElim.textContent = cont[0];
            imgElim.src = cont[1] + ".png";
        });
    }

    if(thirdElim){
        thirdElim.addEventListener("click", function(){
            firstElim.style.backgroundColor = '#222831';
            secondElim.style.backgroundColor = '#222831';
            thirdElim.style.backgroundColor = '#00ADB5';
            var cont = splitContent(1,"third");
            expElim.textContent = cont[0];
            imgElim.src = cont[1] + "." + cont[2];
        });
    }
});

document.addEventListener("DOMContentLoaded", function(){
    //Graph Method
    const firstGraph = document.getElementById("first-graph");
    const secondGraph = document.getElementById("second-graph");
    const thirdGraph = document.getElementById("third-graph");
    const expGraph = document.getElementById("exp-graph");
    const imgGraph = document.querySelector(".ilustrasi-metode-grafik img");

    firstGraph.style.backgroundColor = '#00ADB5';
    secondGraph.style.backgroundColor = '#222831';
    thirdGraph.style.backgroundColor = '#222831';
    var cont = splitContent(2,"first");
    expGraph.textContent = cont[0];
    imgGraph.src = cont[1] + ".png";


    if(firstGraph){
        firstGraph.addEventListener("click", function(){
            firstGraph.style.backgroundColor = '#00ADB5';
            secondGraph.style.backgroundColor = '#222831';
            thirdGraph.style.backgroundColor = '#222831';
            var cont = splitContent(2,"first");
            expGraph.textContent = cont[0];
            imgGraph.src = cont[1] + ".png";
        });
    }

    if(secondGraph){
        secondGraph.addEventListener("click", function(){
            firstGraph.style.backgroundColor = '#222831';
            secondGraph.style.backgroundColor = '#00ADB5';
            thirdGraph.style.backgroundColor = '#222831';
            var cont = splitContent(2,"second");
            expGraph.textContent = cont[0];
            imgGraph.src = cont[1] + ".png";
        });
    }

    if(thirdGraph){
        thirdGraph.addEventListener("click", function(){
            firstGraph.style.backgroundColor = '#222831';
            secondGraph.style.backgroundColor = '#222831';
            thirdGraph.style.backgroundColor = '#00ADB5';
            var cont = splitContent(2,"third");
            expGraph.textContent = cont[0];
            imgGraph.src = cont[1] + ".png";
        });
    }
});

document.addEventListener("DOMContentLoaded",function(){
    //Gauss Method
    const firstGauss = document.getElementById("first-g");
    const secondGauss = document.getElementById("second-g");
    const thirdGauss = document.getElementById("third-g");
    const expGauss = document.getElementById("exp-g");
    const imgGauss = document.querySelector(".ilustrasi-metode-gauss img");

    firstGauss.style.backgroundColor = '#00ADB5';
    secondGauss.style.backgroundColor = '#222831';
    thirdGauss.style.backgroundColor = '#222831';

    if(firstGauss){
        firstGauss.addEventListener("click",function(){
            firstGauss.style.backgroundColor = '#00ADB5';
            secondGauss.style.backgroundColor = '#222831';
            thirdGauss.style.backgroundColor = '#222831';
        });
    }
    if(secondGauss){
        secondGauss.addEventListener("click",function(){
            firstGauss.style.backgroundColor = '#222831';
            secondGauss.style.backgroundColor = '#00ADB5';
            thirdGauss.style.backgroundColor = '#222831';
        });
    }
    if(thirdGauss){
        thirdGauss.addEventListener("click",function(){
            firstGauss.style.backgroundColor = '#222831';
            secondGauss.style.backgroundColor = '#222831';
            thirdGauss.style.backgroundColor = '#00ADB5';
        });
    }
});

document.addEventListener("DOMContentLoaded",function(){
    //Gauss Method
    const firstGJ = document.getElementById("first-gj");
    const secondGJ = document.getElementById("second-gj");
    const thirdGJ = document.getElementById("third-gj");
    const expGJ = document.getElementById("exp-gj");
    const imgGJ = document.querySelector(".ilustrasi-metode-gauss-jordan img");

    firstGJ.style.backgroundColor = '#00ADB5';
    secondGJ.style.backgroundColor = '#222831';
    thirdGJ.style.backgroundColor = '#222831';

    if(firstGJ){
        firstGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#00ADB5';
            secondGJ.style.backgroundColor = '#222831';
            thirdGJ.style.backgroundColor = '#222831';
        });
    }
    if(secondGJ){
        secondGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#222831';
            secondGJ.style.backgroundColor = '#00ADB5';
            thirdGJ.style.backgroundColor = '#222831';
        });
    }
    if(thirdGJ){
        thirdGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#222831';
            secondGJ.style.backgroundColor = '#222831';
            thirdGJ.style.backgroundColor = '#00ADB5';
        });
    }
});