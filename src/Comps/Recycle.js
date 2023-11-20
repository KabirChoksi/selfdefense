import React from 'react'

function Recycle() {
  function submitted(){
    var a = document.getElementsByTagName("input")[0].value;
    if(a=="recycle"){
      alert("Thats a correct answer!")
    }
    if(a=="throw"){
      alert("That is the wrong answer")
    }
    else{
      alert("That is not an option")
    }
  }
  return (
    <div style={{textAlign: "center"}}>
      <h1>RECYCLE</h1>
      <p>If you have lots of cardboard and newspaper lying at home, what should you do?(options are 'recycle' or 'throw')</p>
      <form onSubmit={submitted}>
        <input type='text'/>
        <input type='submit'/>
      </form><br/><br/>
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/6jQ7y_qQYUA" title="Recycling for Kids | Recycling Plastic, Glass and Paper | Recycle Symbol | Kids Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  )
}
export default Recycle