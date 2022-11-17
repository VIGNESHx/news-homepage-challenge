var btn= document.getElementById("menu-open");
btn.addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("menu-close").style.display="block";
})
var btn1=document.getElementById("menu-close");
btn1.addEventListener("click",function(){
    this.style.display="none";
    document.getElementById("menu-open").style.display="block";
})