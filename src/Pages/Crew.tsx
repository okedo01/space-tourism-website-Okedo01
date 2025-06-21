import React, { useEffect, useState } from 'react'
import type { Crew, Tourism } from '../Types'

const Crew: React.FC = () => {
  const [ crewValues, setCrewValues ] = useState<Crew[]>([])
  // const [ selectedIndex, setSelectedIndex ] useState(0);

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

  // const selectedCrew = crew[selectedIndex]
  return (
    <div className='crew'>
      { crewValues.map((value, index) => (
        <li key={index}>
          <p> { value.name } </p>
        </li>
      ))}
    </div>
  )
}

export default Crew