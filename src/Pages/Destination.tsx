
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
      <ul>
        { planets.map((planet, index) => (
          <button key={index} onClick={() => setSelectedIndex(index)}>
            { planet.name }
          </button>
        ))}
      </ul>
      <div className="planet-details">
        
      </div>
    </div>
  )
}

export default Destination