import React, { useEffect, useState } from 'react'
import type { DestinationData, Tourism } from "../Types"

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
      <p>{planets}</p>
    </div>
  )
}

export default Destination