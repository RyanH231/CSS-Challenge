var div = document.body;
var circleOne = document.getElementById("circleOne");
var square = document.getElementById("square");

div.addEventListener("mousemove", function(e) {
    x = e.offsetX;
    y = e.offsetY;
    percentX = (x/window.innerWidth) * 100;
    

    div.style.background = `linear-gradient(90deg, #ffffff ${percentX}%, #840b0b ${percentX}%, #e3516e ${percentX+.3}%)`;
    if(percentX < 5)
    {
        circleOne.classList.add("active");
        circleOne.classList.remove("inactive");
        square.classList.add("inactive");
    }
    else if(percentX > 10)
    {
        square.classList.add("active");
        square.classList.remove("inactive");
        circleOne.classList.add("inactive");
    }
})