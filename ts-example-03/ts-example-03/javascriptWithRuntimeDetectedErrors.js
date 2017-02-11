var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.startTimer = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());

var RandomColorGenerator = (function () {
    function RandomColorGenerator() {
    }
    RandomColorGenerator.prototype.nextRandomColor = function () {
        // http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return RandomColorGenerator;
}());

window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    // Intellisense on greeter class
    // 1. no timer token property
    // 2. excess properties/methods with not a lot of clear distinction between
    // 3. renaming start method on greeter class to startTimer doesn't show error until runtime

    window.onclick = function (clickEvent) {
        var randomColorGenerator = new RandomColorGenerator();
        el.parentElement.style.backgroundclar = randomColorGenerator.nextRandomColor();
    };

    // misspelling background color triggers no error
};
//# sourceMappingURL=app.js.map