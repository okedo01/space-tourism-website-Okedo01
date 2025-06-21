import React, { useEffect, useState } from 'react'
import type { CrewData, Tourism } from '../Types'

const Crew: React.FC = () => {
  const [ crewValues, setCrewValues ] = useState<CrewData[]>([])
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then(resource => {
        if(!resource.ok) {
          throw new Error("Failed to fetch data");
        }
        return resource.json();
      })
      .then((data: Tourism) => setCrewValues(data.crew))
      // .then(data => console.log(data.crew))
      .catch(error => console.log(error.message));
  }, [])

  const selectedCrew = crewValues[selectedIndex];

  return (
    <div className='crew'>
      <h1><span>01</span>MEET YOUR CREW</h1>
      { selectedCrew && (
        <main>
          <article>
            <span>{ selectedCrew.role }</span>
            <h2>{ selectedCrew.name }</h2>
            <p>{ selectedCrew.bio }</p>
          </article>
          <img src={selectedCrew.images.png} alt="crew-img" />
        </main>
      )}
      { crewValues.map((value, index) => (
        <button key={index} onClick={() => setSelectedIndex(index)}>
          { value.name }
        </button>
      ))}
    </div>
  )
}

export default Crew