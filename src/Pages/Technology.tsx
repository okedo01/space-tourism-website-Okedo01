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
    <div>Technology</div>
  )
}

export default Technology