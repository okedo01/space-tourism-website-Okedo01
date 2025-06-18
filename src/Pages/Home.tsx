import React from 'react'

const Home: React.FC = () => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "3fr 1fr",
      justifyContent: "space-between",
      alignItems: "cnter",
      marginTop: "30px",
      
      }}>
      <div style={{
        textAlign: "start",
        marginRight: "24em",
        marginLeft: "3em"
      }}>
        <h3>SO, YOU WANT TO TRAVEL TO <span style={{display: "block", fontSize: "90px"}}>SPACE</span></h3>
        <p style={{fontSize: "14px", paddingRight: "4em"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima voluptatem expedita. Tenetur exercitationem, maiores modi eaque vero quae non repudiandae suscipit beatae! Nisi, dolor sequi vitae voluptate fuga officia.</p>
      </div>
      <p style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        width: "6em",
        height: "6em",
        fontSize: "32px",
        fontWeight: "bolder",
        borderRadius: "50%",
        textAlign: "center"
      }}> EXPLORE </p>
    </div>
  )
}

export default Home