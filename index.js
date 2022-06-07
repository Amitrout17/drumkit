var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btn=this.innerHTML;
    playmusic(btn);
    showanimation(btn);
    });
}
document.addEventListener("keypress",function(event){
    var text=event.key;
    playmusic(text);
    showanimation(text);
})
function playmusic(btn)
{
    switch (btn) {
        case "W":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "A":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "S":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        case "D":
            var audio=new Audio("tom-1.mp3")
            audio.play();
            break;
        case "J":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
        case "K":
            var audio=new Audio("tom-3.mp3")
            audio.play();
            break;
        case "L":
            var audio=new Audio("tom-4.mp3")
            audio.play();
            break;

            case "w":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("tom-1.mp3")
            audio.play();
            break;
        case "j":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("tom-3.mp3")
            audio.play();
            break;
        case "l":
            var audio=new Audio("tom-4.mp3")
            audio.play();
            break;
        default:
            break;
    }
}
function showanimation(current)
{
    var obj=document.querySelector("."+current);
    obj.classList.add("animation");
    setTimeout(function(){
        obj.classList.remove("animation");
    },100);
}
