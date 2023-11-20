import React from 'react'

function Home() {
  const footerstyle={
    textAlign: "center",
    backgroundColor: "blue",
    color:"white"
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>HOME</h1>
      <p>Our goal with this website is to make you aware on how to reduce, reuse and recycle. These things are important as our planet is decaying due to bad habits we humans have,
        we need to implement these steps to make a BETTER PLANET.
      </p>
      <iframe width="1271" height="715" src="https://www.youtube.com/embed/OasbYWF4_S8" title="Reduce, Reuse and Recycle, to enjoy a better life | 
      Educational Video for Kids." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <footer style={footerstyle}>
        Contact us at:<br/>
        9820878789<br/>
        nobodypleasedontemailhere@gmail.com
        </footer>
        </div>
        )
}
export default Home