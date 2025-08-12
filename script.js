const h1=document.querySelector("h1")
h1.innerHTML=h1.textContent.split("").map(letter=>`<span>${letter}</span>`).join("")

anime({
  targets:".name span",
  translateY:[
    {value:-50, duration:500,easing:"easeOutExpo"},
    {value:0,duration:800,easing:"easeOutBounce", delay:100}
  ],
  rotate:"1turn",
  delay:anime.stagger(50),
  loop:true
})


