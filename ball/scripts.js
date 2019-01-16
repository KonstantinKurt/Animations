;var onloads = [];
var doc = document; // Кэшируем документ;
///////////////////////////
function getPlay () {
	var element = doc.getElementById("ball");
    doc.body.style.overflow = "hidden" // Запрет прокрутки;
	doc.body.backgroundImage = 'url(images/field.jpg)';
    var ballRadius = 25;
    var x = 50; //Стартовые координаты удара;
    var y = 50;
    var speedX = 5;  // Кол-во пикселей, проходимых мячем за интервал;
    var speedY = 5;
    
    function kick() {
        if(x + speedX > doc.documentElement.clientHeight - ballRadius || x + speedX < ballRadius) {
            speedX = -speedX;
            console.log('TEST X');
        }
        if(y + speedY > doc.documentElement.clientWidth - ballRadius || y + speedY < ballRadius) {
            speedY = -speedY;
            console.log('TEST Y');
        }
        x += speedX;
        y += speedY;
        element.style.top = x + "px";
        element.style.left = y + "px";
    }
    setInterval(kick, 10);
};
onloads.push(getPlay);
///////////////////////////
window.onload = function() {
    for (var i in onloads) {
    	onloads[i]();
    }
}