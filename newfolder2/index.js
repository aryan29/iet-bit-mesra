$(document).ready(function(){
    $("#list").css({
        "background-color" : "#510d51",
        "font-size" : "20px",
        "color" : "#fff"
    });
});
setTimeout(function(){
    document.getElementById("list").innerHTML=("<ul><li>hey buddy</li><li>hello</li></ul>");
},15000);
let fontItem="";
for(var i=15;i<50;i++){
    console.log("hello");
    fontItem= '<li id="font'+i+'">I am font size:'+i+'</li>';
    red=Math.floor(Math.random()*256);
    blue=Math.floor(Math.random()*256);
    green=Math.floor(Math.random()*256);
    $("#list").append(fontItem);
    $("#font"+i).css({
        "background-color": "rgb("+red+","+blue+","+green+")",
        "font-size": i+"px"
    })
}

  

