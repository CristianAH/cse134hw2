function init()
{
    let firstCanvas = document.getElementById("demoCanvas");
    if(firstCanvas == null)
    {
        console.log("Something bad");
    }
    else
    {
        alert("good");
    }
    let ctx = firstCanvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillrect(0,0,100,10);
}