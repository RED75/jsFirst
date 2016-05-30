/**
 * Created by RED75 on 29.05.2016.
 */
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        if (messageArea)
            messageArea.innerHTML = msg;
        else console.log("messageArea hasn't been found");
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        if(cell)
            cell.setAttribute("class", "hit");
        else console.log("cell hasn't been found");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        if(cell)
            cell.setAttribute("class", "miss");
        else console.log("cell hasn't been found");
    }
};
var model = {};
var controller = {};

var testView = {
    startTest: function(){
        view.displayMiss("00");
        view.displayHit("34");
        view.displayMiss("55");
        view.displayHit("12");
        view.displayMiss("25");
        view.displayHit("26");
        view.displayMessage("Tap tap, is this thing on?");
    }


};
