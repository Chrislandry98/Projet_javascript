var link = document.querySelectorAll("li");
var section2 = document.querySelector(".section2");
var nav = document.querySelector("nav");
var button = document.querySelector("button");
console.log(section2);



link.forEach(Element =>{
    Element.addEventListener("click",function(e){
       e.preventDefault();
        var fileName = this.dataset.name;
        section2.innerHTML = `<iframe width=\"100%\"src=\"${fileName}/index.html\" name=\"myFrame\" id=\"myFrame\" sandbox=\"allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation\" scrolling=\"auto\"></iframe>`;
        var child = this.lastElementChild;
        var color = this.dataset.color;
        child.style.color =color;
        section2.style.background = "white";
        button.style.boxShadow =`1px 1px 1px 1px ${color}`;
        nav.style.boxShadow = `1px 1px 0.5px 1px ${color}` ; 
    
    },false);
})



