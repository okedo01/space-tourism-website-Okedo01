import React, { useEffect, useState } from 'react'
import type { CrewData, Tourism } from '../Types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
      .catch(error => console.log(error.message));
  }, [])

  const selectedCrew = crewValues[selectedIndex];

  return (
    <div className="crew">
      <h1><span>01</span>MEET YOUR CREW</h1>

      <main className='crew-details'>
        { selectedCrew && (
          <main style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5em"}}>
            
            <article className="contents">
              <span>{ selectedCrew.role }</span>
              <h2>{ selectedCrew.name }</h2>
              <p>{ selectedCrew.bio }</p>
            </article>
            <img src={selectedCrew.images.png} alt="crew-img" style={{width: "30%"}}/>
          </main>
        )}
      
      </main>
            { crewValues.map((value, index) => (
              <button key={index} onClick={() => setSelectedIndex(index)} style={{color: selectedIndex === index? "white" : "gray"}}>
                <FontAwesomeIcon icon={faCircle} style={{width: "70%"}}/>
              </button>
            ))}
      
    </div>
  )
}

export default Crew