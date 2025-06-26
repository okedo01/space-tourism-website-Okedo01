import React, { useEffect, useState } from 'react'
import type { TechnologyData, Tourism } from '../Types'

const Technology: React.FC = () => {
    const [ technology, setTechnology ] = useState<TechnologyData[]>([]);
    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
      setIsLoading(true)
        setTimeout(() => {
          fetch("data.json")
            .then(resource => {
                if(!resource.ok) {
                  throw new Error("Failed to fetch data");
                }
                return resource.json();
            })
            .then((data: Tourism) => {
              setIsLoading(false);
              setTechnology(data.technology);
            })
            .catch(error => {
              setIsLoading(false);
              setError(error.message)
            })
        }, 1000);
    }, []);

    if(error) return (
      <div style={{color: "red"}}>
        <p>{ error }</p>
      </div>
    )
   
     if (isLoading) return (
    <div className="loading-screen">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );

    if(!technology.length) return null;

    const selectedTechnology = technology[selectedIndex]

  return (
    <div className="technology">
      <h1><span>03</span>SPACE LAUNCH 101</h1>
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
          <p>THE TERMINOLOGY...</p>
          { selectedTechnology && (
            <div className="selected">
              <h2>{ selectedTechnology.name}</h2>
              <p>{ selectedTechnology.description}</p>
            </div>
          )}
        </section>
        <section className="images">
          { selectedTechnology && (
            <img src={selectedTechnology.images.portrait} alt="technology-image" />
          )}
        </section>
      </main>
    </div>
  )
}

export default Technology