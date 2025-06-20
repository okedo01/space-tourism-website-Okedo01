import React, { useEffect, useState } from 'react'
import type { DestinationData, Tourism } from "../Types"
import { Link } from 'react-router-dom'

const Destination: React.FC = () => {
  const [ planets, setPlanets ] = useState<DestinationData[]>([])

  useEffect(() => {
    fetch("/data.json")
      .then(resource => {
        if(!resource.ok) {
          throw new Error("Failed to fetch Data")
        }
        return resource.json();
      })
      .then((data: Tourism) => {
        setPlanets(data.destinations)
      })
      .catch(error => console.log(error.message))
  }, [])

  return (
    <div className="destination">
      <h1><span>01</span>PICK YOUR DESTINATION</h1>
      <ul>
        { planets.map((planet, index) => (
          <li key={index}>
            <Link to="/destination">
              <p>{planet.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Destination