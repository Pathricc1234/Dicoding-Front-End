function splitContent(section,code){
    if(section == 1){
        var getContent = eliminationMap.get(code);
        var split = getContent.split(".");
        return split;
    }
    if(section == 2){
        var getContent = graphMap.get(code);
        var split = getContent.split(".");
        return split;
    }
    if(section == 3){
        var getContent = gaussMap.get(code);
        var split = getContent.split(".");
        return split;
    }
    if(section == 4){
        var getContent = gaussJordanMap.get(code);
        var split = getContent.split(".");
        return split;
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
    const firstG = document.getElementById("first-g");
    const secondG = document.getElementById("second-g");
    const thirdG = document.getElementById("third-g");
    const fourthG = document.getElementById("fourth-g");
    const fifthG = document.getElementById("fifth-g");
    const expG = document.getElementById("exp-eg");
    const imgG = document.querySelector(".ilustrasi-metode-gauss img");

    firstG.style.backgroundColor = '#00ADB5';
    var cont = splitContent(3,"first");
    expG.textContent = cont[0];
    imgG.src = cont[1] + ".png";

    if(firstG){
        firstG.addEventListener("click",function(){
            firstG.style.backgroundColor = '#00ADB5';
            secondG.style.backgroundColor = '#222831';
            thirdG.style.backgroundColor = '#222831';
            fourthG.style.backgroundColor = '#222831';
            fifthG.style.backgroundColor = '#222831';
            var cont = splitContent(3,"first");
            expG.textContent = cont[0];
            imgG.src = cont[1] + ".png";
        });
    }
    if(secondG){
        secondG.addEventListener("click",function(){
            firstG.style.backgroundColor = '#222831';
            secondG.style.backgroundColor = '#00ADB5';
            thirdG.style.backgroundColor = '#222831';
            fourthG.style.backgroundColor = '#222831';
            fifthG.style.backgroundColor = '#222831';
            var cont = splitContent(3,"second");
            expG.textContent = cont[0];
            imgG.src = cont[1] + ".png";
        });
    }
    if(thirdG){
        thirdG.addEventListener("click",function(){
            firstG.style.backgroundColor = '#222831';
            secondG.style.backgroundColor = '#222831';
            thirdG.style.backgroundColor = '#00ADB5';
            fourthG.style.backgroundColor = '#222831';
            fifthG.style.backgroundColor = '#222831';
            var cont = splitContent(3,"third");
            expG.textContent = cont[0];
            imgG.src = cont[1] + ".png";
        });
    }
    if(fourthG){
        fourthG.addEventListener("click",function(){
            firstG.style.backgroundColor = '#222831';
            secondG.style.backgroundColor = '#222831';
            thirdG.style.backgroundColor = '#222831';
            fourthG.style.backgroundColor = '#00ADB5';
            fifthG.style.backgroundColor = '#222831';
            var cont = splitContent(3,"fourth");
            expG.textContent = cont[0];
            imgG.src = cont[1] + ".png";
        });
    }
    if(fifthG){
        fifthG.addEventListener("click",function(){
            firstG.style.backgroundColor = '#222831';
            secondG.style.backgroundColor = '#222831';
            thirdG.style.backgroundColor = '#222831';
            fourthG.style.backgroundColor = '#222831';
            fifthG.style.backgroundColor = '#00ADB5';
            var cont = splitContent(3,"fifth");
            expG.textContent = cont[0];
            imgG.src = cont[1] + ".png";
        });
    }
});

document.addEventListener("DOMContentLoaded",function(){
    //Gauss Method
    const firstGJ = document.getElementById("first-gj");
    const secondGJ = document.getElementById("second-gj");
    const thirdGJ = document.getElementById("third-gj");
    const fourthGJ = document.getElementById("fourth-gj");
    const fifthGJ = document.getElementById("fifth-gj");
    const expGJ = document.getElementById("exp-egj");
    const imgGJ = document.querySelector(".ilustrasi-metode-gauss-jordan img");

    firstGJ.style.backgroundColor = '#00ADB5';
    var cont = splitContent(4,"first");
    expGJ.textContent = cont[0];
    imgGJ.src = cont[1] + ".png";

    if(firstGJ){
        firstGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#00ADB5';
            secondGJ.style.backgroundColor = '#222831';
            thirdGJ.style.backgroundColor = '#222831';
            fourthGJ.style.backgroundColor = '#222831';
            fifthGJ.style.backgroundColor = '#222831';
            var cont = splitContent(4,"first");
            expGJ.textContent = cont[0];
            imgGJ.src = cont[1] + ".png";
        });
    }
    if(secondGJ){
        secondGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#222831';
            secondGJ.style.backgroundColor = '#00ADB5';
            thirdGJ.style.backgroundColor = '#222831';
            fourthGJ.style.backgroundColor = '#222831';
            fifthGJ.style.backgroundColor = '#222831';
            var cont = splitContent(4,"second");
            expGJ.textContent = cont[0];
            imgGJ.src = cont[1] + ".png";
        });
    }
    if(thirdGJ){
        thirdGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#222831';
            secondGJ.style.backgroundColor = '#222831';
            thirdGJ.style.backgroundColor = '#00ADB5';
            fourthGJ.style.backgroundColor = '#222831';
            fifthGJ.style.backgroundColor = '#222831';
            var cont = splitContent(4,"third");
            expGJ.textContent = cont[0];
            imgGJ.src = cont[1] + ".png";
        });
    }
    if(fourthGJ){
        fourthGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#222831';
            secondGJ.style.backgroundColor = '#222831';
            thirdGJ.style.backgroundColor = '#222831';
            fourthGJ.style.backgroundColor = '#00ADB5';
            fifthGJ.style.backgroundColor = '#222831';
            var cont = splitContent(4,"fourth");
            expGJ.textContent = cont[0];
            imgGJ.src = cont[1] + ".png";
        });
    }
    if(fifthGJ){
        fifthGJ.addEventListener("click",function(){
            firstGJ.style.backgroundColor = '#222831';
            secondGJ.style.backgroundColor = '#222831';
            thirdGJ.style.backgroundColor = '#222831';
            fourthGJ.style.backgroundColor = '#222831';
            fifthGJ.style.backgroundColor = '#00ADB5';
            var cont = splitContent(4,"fifth");
            expGJ.textContent = cont[0];
            imgGJ.src = cont[1] + ".png";
        });
    }
});