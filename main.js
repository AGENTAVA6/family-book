var images=["dad.jpeg","mom.jpeg","Avyakt.jpeg","kv.jpeg"];

var names=["Ashish Agarwal","Richhi Agarwal","Avyakt Agarwal","Kaivalya Agarwal"];
var i=0;

console.log(images);
console.log(names);

function next(){
document.getElementById("i1").src=images[i];
document.getElementById("p1").innerHTML=names[i];
i++;
};