document.getElementById('color-changer-btn').addEventListener("click",function(event){
    event.preventDefault();
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    let rgb="rgb("+x+","+y+","+z+")";

    document.body.style.background=rgb;
})