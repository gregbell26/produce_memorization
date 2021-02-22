import {ex_codes} from "./produceCodes.js";

let currentProduceItem = null;

function setStreak(value){
    document.getElementById("app_streak_counter").children[0].innerHTML = value.toString();
}
function checkInput() {
    if(document.getElementById("question_input").children[0].value === currentProduceItem.code){
        document.getElementById("question_produce_number").style.display = "none";
        document.getElementById("question_input").children[0].value = "";
        setStreak(parseInt(document.getElementById("app_streak_counter").children[0].innerHTML)+1)
        return true;
    }
    document.getElementById("question_produce_number").style.display = "block";
    document.getElementById("question_input").children[0].value = "";
    setStreak(0);
    return false;
}

function getNextItem() {
    currentProduceItem = ex_codes.availableCodes[Math.floor(Math.random() * ex_codes.arr_length)];
    let imageDom = document.getElementById("question_produce_image");
    let numberDom = document.getElementById("question_produce_number");
    if(imageDom.children.length === 0){
        let image = document.createElement("img");
        image.setAttribute("src", currentProduceItem.image);
        imageDom.appendChild(image);
    } else
        imageDom.children[0].setAttribute("src", currentProduceItem.image);
    numberDom.innerText = currentProduceItem.name + " " + currentProduceItem.code;

}


document.getElementById("input").addEventListener('keypress', function (keyEvent){
    if(keyEvent.key === "Enter"){
        if(checkInput())
            getNextItem();


    }
})


window.getNextItem = getNextItem();