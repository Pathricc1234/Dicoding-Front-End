function splitContent(section,code){
    if(section == 1){
        var getContent = eliminationMap.get(code);
        var split = getContent.split(".");
        return split;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const firstElim = document.getElementById("first-elim");
    const secondElim = document.getElementById("second-elim");
    const thirdElim = document.getElementById("third-elim");
    const expElim = document.getElementById("exp-elim");
    const imgElim = document.querySelector(".ilustrasi-metode-eliminasi img")
    
    //Elimination Method
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