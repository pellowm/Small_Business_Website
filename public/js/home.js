var carouselArray = [
    '/images/carousel/Flower.jpg',
    '/images/carousel/Ballerina.jpg',
    '/images/carousel/Princess.jpg',
    '/images/carousel/Penguin.jpg',
    '/images/carousel/Birthday.jpg',
    '/images/carousel/Butterfly.jpg',
    '/images/carousel/Baby.jpg',
    '/images/carousel/Garden.jpg',
    '/images/carousel/Pink.jpg',
    '/images/carousel/Bridal.jpg'];

initCarouselDots();

var timeoutID;
var carouselIndex = 0;
changeCarouselImage(0);

/* create button elements for image carousel */
function initCarouselDots(){
    
    var leftArrow = document.createElement("button");
    leftArrow.textContent = "<";
    leftArrow.className = "dots";
    leftArrow.addEventListener("click", leftArrowClick);
    document.getElementById('buttonDiv').appendChild(leftArrow);

    /* create one button per image */
    for (var i = 0; i < carouselArray.length; i++){
        var myCarouselDot = document.createElement("button");
        myCarouselDot.textContent = i + 1;
        myCarouselDot.id = "myDot" + i;
        myCarouselDot.className = "dots";
        var callback = (function(x) {return function() {changeCarouselImage(x)}}(i)); 
        myCarouselDot.addEventListener("click", callback);
        document.getElementById('buttonDiv').appendChild(myCarouselDot);
    }

    var rightArrow = document.createElement("button");
    rightArrow.textContent = ">";
    rightArrow.className = "dots";
    rightArrow.addEventListener("click", rightArrowClick);
    document.getElementById('buttonDiv').appendChild(rightArrow);
}

function leftArrowClick() {
    var index;
    if (carouselIndex <= 0){
        index = carouselArray.length - 1;
    }
    else{
        index = carouselIndex - 1;
    }
    changeCarouselImage(index);
}

function rightArrowClick() {
    var index;
    if (carouselIndex >= carouselArray.length - 1){
        index = 0;
    }   
    else{
        index = carouselIndex + 1;    
    }
    changeCarouselImage(index);
}

/* Uses timer to cycle image and highlighted button */
function changeCarouselImage(index){

    var myButton = document.getElementById("myDot" + carouselIndex);
    myButton.style.backgroundColor = "#FFFFFF";

    var myButton = document.getElementById("myDot" + index);
    myButton.style.backgroundColor = "pink";

    var myImage = document.getElementById("carouselImage");
    carouselIndex = index;
    myImage.src = carouselArray[carouselIndex];

    window.clearTimeout(timeoutID);
    timeoutID = window.setTimeout(rightArrowClick, 4000);
} 
