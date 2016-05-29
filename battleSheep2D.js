/**
 * Created by RED75 on 29.05.2016.
 */
function placeMiss() {
    if(document.getElementById("guessInput").innerHTML=="A0")
    {
        var cell= document.getElementById("00");
        cell.setAttribute("class", "hit");

    }
    alert(document.getElementById("guessInput").innerHTML.toString());
    //todo: page 354

}