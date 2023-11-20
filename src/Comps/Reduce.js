import React from 'react'

function Reduce() {
  const styling={
    textAlign: "center",
    background:"lineargradient(green, blue)"
  };
  const stylingproperties={
    fontSize: '25px',
    fontFamily: "cursive"
  }
  function plastictb(){
    alert("Plastic is not a biodegradable material and so when you throw it away it harms the planet we should REDUCE plastic waste.")
  }
  function bambootb(){
    alert("Correct answer! Bamboo is very easily biodegradable!")
  }
  function plasticbottle(){
    alert("Plastic is not a biodegradable material and so when you throw it away it harms the planet we should REDUCE plastic waste.")
  }
  function metalbottle(){
    alert("Correct answer! Metal is much better for the environment than plastic!")
  }
  function plasticmask(){
    alert("Plastic is not a biodegradable material and so when you throw it away it harms the planet we should REDUCE plastic waste.")
  }
  function clothmask(){
    alert("Correct answer! Cloth masks are reusable, and you dont throw them out, so its more eco-friendly!")
  }
  return (
    
    <div style={styling}>
      <h1>REDUCE</h1>
<p style={stylingproperties}>Hey, you know how we all sort our trash into recycling and regular bins? That's cool, but have you ever thought about what happens to our waste afterward and how it affects nature?<br/>
Recycling is awesome, right? It feels like we're saving the Earth when we do it! But guess what's even cooler? Reducing waste! That means creating less trash in the first place. In Australia, we're running out of places to put our garbage, especially organic waste. We should totally recycle, but we also need to find ways to use less and reuse stuff too.<br/>
It's not that hard! Like, instead of using plastic bottles, you can carry a keep-cup for your coffee, and skip buying bottled water. Small steps, big difference! If everyone pitches in, we can really make our planet happier. Let's do it! 🌍😊</p>
<h2>If you want, just to check if you are being eco-friendly, take this quick test</h2><br/>
Would you rather use:
<table style={{textAlign: "center"}}>
  <tr>
    <td><img src='https://www.pascogifts.com/en/media/cache/resolve/square/files/tandenborstel-rood-5b1690fe46fbd.jpg'/></td>
    <td>or</td>
    <td><img src='https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImM2MGI2ZDFiZTE2MTQyYzY5ZDk2NDA1M2M2MDkxMWM3LmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=0e2e8ecb1ad9dbdee2fc83ae8112fedf10389a94c0fbd5aea4e02da54d280cb5'/></td>
  </tr>
  <tr>
    <td><button onClick={plastictb}>Plastic Toothbrush</button></td>
    <td>|</td>
    <td><button onClick={bambootb}>Bamboo Toothbrush</button></td>
  </tr>

  <tr>
    <td><img src='https://5.imimg.com/data5/ES/BO/MY-56291496/stainless-steel-water-bottle.jpg'/></td>
    <td>or</td>
    <td><img src='https://cpimg.tistatic.com/07096830/b/4/High-Quality-Plastic-Bottle.jpg'/></td>
  </tr>
  <tr>
    <td><button onClick={metalbottle}>Metal Bottle</button></td>
    <td>|</td>
    <td><button onClick={plasticbottle}>Plastic Bottle</button></td>
  </tr>

  <tr>
    <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOuCkd2rU2_hWwM1xQCHZAMDwxqs2LmIRltruJJDsyVnehLaRmsyaNBgPfBZj78CzVRk&usqp=CAU'/></td>
    <td>or</td>
    <td><img src='https://static.myfigurecollection.net/upload/items/1/1137148-65af7.jpg'/></td>
  </tr>
  <tr>
    <td><button onClick={plasticmask}>Plastic Mask</button></td>
    <td>|</td>
    <td><button onClick={clothmask}>Cloth Mask</button></td>
  </tr>
</table>
    </div>
  )
}
export default Reduce