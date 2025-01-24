//indirect access in dom(methods in data)
// 1)document.getElementsById("value")
// 2)document.getElementsByClassName("value")
// 3)document.getElementsByTagName("value")
// 4)document.getElementsByName("value")
// 5)document.querySelector("value")
// 6)document.querySelectorAll("value")

let a = document.getElementById("demo")
console.log(a)
console.log(a.textContent)
a.textContent = "batch 5"
a.style.backgroundColor = "red"
a.style.textAlign = "center"

// 2)document.getElementsByClassName("value")

let a1 = document.getElementsByClassName("demo1")
console.log(a1);
console.log(a1[0]);
console.log(a1[0].textContent);
a1[0].textContent = "hello world"
a1[0].style.cplor = "red"
console.log(a1[1]);

// 3)document.getElementsByTagName("value")

let b = document.getElementsByTagName("ol")
console.log(b);
console.log(b[1]);
b[1].style.backgroundColor = "crimson"

// 4)document.getElementsByName("value")

let c = document.getElementsByName("demo2")
console.log(c);
console.log(c[1]);

//document querySelector
//--value should pass using css symbol
//--will return reference of first element

let d=document.querySelector("#demo")
console.log(d);

let f = document.querySelector(".demo1")
console.log(f)


//event is an action performed by enduser on a webpage
//event types:keyboardevent,mouse event,form event and pointer event
//keyboard-keypress,keydown,keyup .again having keyup,keydown,keypress
//mouse event-onmouseover,onmouseleave,dbclick-doubleclick
//form event-inpu event,focus event,blur event
//pointer-click event\