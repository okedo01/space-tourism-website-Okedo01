
import React, { useEffect, useState } from 'react'
import type { DestinationData, Tourism } from '../Types'

const Destination: React.FC = () => {
  const [ planets, setPlanets ] = useState<DestinationData[]>([])
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then(resouurce => {
        if(!resouurce.ok) {
          throw new Error("Failed to fetch Data");
        }
        return resouurce.json();
      })
      .then((data: Tourism) => setPlanets(data.destinations))
      .catch(error => console.log(error.message));
  }, [])

  const selectedPlanet = planets[selectedIndex];

  return (
    <div className="destination">
      <section className="img">
        <h1><span>02</span>PICK YOUR DESTINATION</h1>
        { selectedPlanet && (
          <img src={selectedPlanet.images.png} alt="" />
        )}
      </section>
      <main>
        <ul>
          { planets.map((planet, index) => (
            <button key={index} onClick={() => setSelectedIndex(index)}>
              { planet.name }
            </button>
          ))}
        </ul>
        { selectedPlanet && (
          <section className="planet-details">
            <article>
              <h2> { selectedPlanet.name } </h2>
              <p>{selectedPlanet.description}</p>
              <span>{selectedPlanet.distance}</span>
              <span>{selectedPlanet.travel}</span>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}

export default Destination