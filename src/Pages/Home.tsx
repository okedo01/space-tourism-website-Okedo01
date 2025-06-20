import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="space">
        <h3>SO, YOU WANT TO TRAVEL TO <span style={{display: "block", fontSize: "90px"}}>SPACE</span></h3>
        <p style={{fontSize: "14px", paddingRight: "4em"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima voluptatem expedita. Tenetur exercitationem, maiores modi eaque vero quae non repudiandae suscipit beatae! Nisi, dolor sequi vitae voluptate fuga officia.</p>
      </div>
      <p className="explore"> EXPLORE </p>
    </div>
  )
}

export default Home