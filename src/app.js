import {ex_codes} from "./produceCodes.js";

let currentProduceItem = null;

function setStreak(value){
    document.getElementById("app_streak_counter").children[0].innerHTML = value.toString();
}

function checkInput() {
    if(document.getElementById("input").value === currentProduceItem.code){
        document.getElementById("question_produce_number").style.display = "none";
        document.getElementById("input").value = "";
        setStreak(parseInt(document.getElementById("app_streak_counter").children[0].innerHTML)+1)
        return true;
    }

    document.getElementById("question_produce_number").style.display = "block";
    document.getElementById("input").value = "";
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
    const key = keyEvent.key;

    if((key === "Enter" || key === "+") && checkInput()){
            getNextItem();
    }
})

document.getElementById("input").addEventListener("keydown", function (keyEvent) {
    const key = keyEvent.key;
    // console.log(key);

    if (key === "Backspace" || key === "Delete"){
        document.getElementById("input").value = "";
    }
    else if (key === "*"){
        document.getElementById("input").value = "";
    }

})


getNextItem();