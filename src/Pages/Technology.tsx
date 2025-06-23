import React, { useEffect, useState } from 'react'
import type { TechnologyData, Tourism } from '../Types'

const Technology: React.FC = () => {
    const [ technology, setTechnology ] = useState<TechnologyData[]>([]);
    const [ selectedIndex, setSelectedIndex ] = useState(0);

    useEffect(() => {
        fetch("data.json")
            .then(resource => {
                if(!resource.ok) {
                    throw new Error("Failed to fetch data");
                }
                return resource.json();
            })
            .then((data: Tourism) => setTechnology(data.technology))
            .catch(error => console.log(error.message))
    }, []);

    const selectedTechnology = technology[selectedIndex]

  return (
    <div className="technology">
      <h1 style={{marginLeft: "100px", paddingTop: "6em", fontSize: "20px", color: "white"}}><span style={{paddingRight: "15px"}}>03</span>SPACE LAUNCH 101</h1>
      <main className="wrapper">
        <section className="circle">
          { technology.map((value, index) => (
            <button onClick={() => setSelectedIndex(index)} style={{
              backgroundColor: selectedIndex === index ? "white" : "transparent",
              color: selectedIndex === index ? "black" : "white"
              }}>
              {index + 1}
            </button>
          ))} 
        </section>
        <section className="contents">
          <p style={{fontSize: "11px", color: "gray"}}>THE TERMINOLOGY...</p>
          { selectedTechnology && (
            <div style={{}}>
              <h2 style={{textTransform: "uppercase", color: "white", fontSize: "46px"}}>{ selectedTechnology.name}</h2>
              <p style={{marginRight: "187px", paddingTop: "20px", color: "gray", fontSize: "14px"}}>{ selectedTechnology.description}</p>
            </div>
          )}
        </section>
        <section className="images">
          { selectedTechnology && (
            <img src={selectedTechnology.images.landscape} alt="technology-image" style={{width: "400px", height: "370px"}}/>
          )}
        </section>
      </main>
    </div>
  )
}

export default Technology