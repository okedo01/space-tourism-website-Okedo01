import React, { useEffect, useState } from 'react'
import type { DestinationData, Tourism } from '../Types'

const Destination: React.FC = () => {
  const [ planets, setPlanets ] = useState<DestinationData[]>([])
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then(resouurce => {
        if(!resouurce.ok) {
          throw new Error("Failed to fetch Data");
        }
        return resouurce.json();
      })
      .then((data: Tourism) => {
        setIsLoading(false);
        setPlanets(data.destinations);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [])

  if(isLoading) return (
    <div className="loading-screen">
      <div className="spinner">
        <p>Loading...</p>
      </div>
    </div>
  )
  const selectedPlanet = planets[selectedIndex];

  return (
    <div className="destination">
      <section className="img-wrapper">
        <h1><span>01</span>PICK YOUR DESTINATION</h1>
        { selectedPlanet && (
          <img src={selectedPlanet.images.png} alt="destination-img" />
        )}
      </section>
      <main>
        <ul>
          { planets.map((planet, index) => (
            <button key={index} onClick={() => setSelectedIndex(index)} style={{ borderBottom: selectedIndex === index ? '1px solid white' : '1px solid transparent'}}>
              { planet.name }
            </button>
          ))}
        </ul>
        { selectedPlanet && (
          <section className="planet-details">
            <article>
              <h2> { selectedPlanet.name } </h2>
              <p style={{color: "gray", fontSize: "14px"}}>{selectedPlanet.description}</p>
              <div className="info">
                <p>AVG. DISTANCE <span>{selectedPlanet.distance}</span></p>
                <p>EST. TRAVEL TIME <span>{selectedPlanet.travel}</span></p>
              </div>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}

export default Destination