import React from 'react'

function Reuse() {
  const styling ={
    fontFamily: "cursive",
    fontSize: "23px"
  }
  function throwit(){
    document.getElementById("throwing").style.display="block"
    alert("This is what happens if you continue to keep throwing out non-biodegradable things, the earth is already dying why help the cause, it will always end in out deaths.")
    document.getElementById("reusing").style.display="none"
  }
  function reuseit(){
    document.getElementById("reusing").style.display="block"
    alert("Well done! See, these are the great things we can achieve by not throwing out waste. This is one of many ways to reuse things!")
    document.getElementById("throwing").style.display="none"
  }
  return (
    <div style={{textAlign: "center"}}>
      <h1>REUSE</h1>
      <p style={styling}>
Sure, reusing stuff is all about being clever with what you've got! First off, pick things that last and are good quality. Fix stuff when it breaks, and get creative by turning old 
items into something new. Donating things you don't need anymore helps others out too. Ever heard of upcycling? It's like giving a second life to old things by making them cool again. Also, consider 
borrowing or lending things with neighbors and friends instead of buying something you'll only use once. Simple steps, right? It's all about making the most of what we've got! 🌱♻️</p>
<h2>To see more about this, play this simple game...</h2>
<img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iX8uHhd0Hap8/v1/-1x-1.jpg' height={"500px"}/><br/>
What do you think will happen to this if you...
<button onClick={throwit}>Throw it</button>or
<button onClick={reuseit}>Reuse it</button>
<img src='https://i.guim.co.uk/img/media/4476f3d3cf425e235722866523c0696a279159e5/0_130_3888_2333/master/3888.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=bc6f87105906b4c546cc791a1c415eb4' height={"200px"} style={{display: "none"}} id='throwing'/>
<img src='https://i.pinimg.com/736x/8b/85/87/8b85873524840d9fcf81a76d88587d3f.jpg' height={"200px"} style={{display: "none"}} id='reusing'/>
    </div>
  )
}
export default Reuse