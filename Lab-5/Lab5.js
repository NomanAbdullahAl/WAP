let customAnimation = ["Blank", "Exercise", "Juggler", "Bike", "Dive"];
var myInterval;

function startAnimation() {
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    let count = 0;
    myInterval = setInterval(function () {
        document.getElementById("text-area").value = ANIMATIONS[customAnimation[count++]];
        if (count == 5)
            count = 0;
    }, 250);
}

function stopAnimation() {
    clearInterval(myInterval);
    let x = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[x];
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("turbo").checked = false;
}


function animationOnChange() {
    document.getElementById("text-area").value = "";
    let x = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[x];
}


function fontSizeOnChange() {
    let fontSize = document.getElementById("fontsize").value;
	
    if(fontSize == "Tiny"){
	document.getElementById("text-area").style.fontSize = "Small";
	document.getElementById("text-area").style.fontSize = "50%";
    }
    else if(fontSize == "Extra Large"){
	document.getElementById("text-area").style.fontSize = "Large";
	document.getElementById("text-area").style.fontSize = "200%";
    }
    else if(fontSize == "XXL"){
	document.getElementById("text-area").style.fontSize = "Large";
	document.getElementById("text-area").style.fontSize = "400%";
    }
    else{
    	document.getElementById("text-area").style.fontSize = fontSize;
   }
}


function checkUncheck() {    
    let count = 0;
    if(document.getElementById("turbo").checked) { 
        clearInterval(myInterval);    
        myInterval = setInterval(function () {
            document.getElementById("text-area").value = ANIMATIONS[customAnimation[count++]];
            if (count == 5)
                count = 0;
        }, 50);
    } else {
        clearInterval(myInterval);
        myInterval = setInterval(function () {
            document.getElementById("text-area").value = ANIMATIONS[customAnimation[count++]];
            if (count == 5)
                count = 0;
        }, 250);
    }
}