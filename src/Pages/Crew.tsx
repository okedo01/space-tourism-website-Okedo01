import React, { useEffect, useState } from 'react'
import type { CrewData, Tourism } from '../Types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Crew: React.FC = () => {
  const [ crewValues, setCrewValues ] = useState<CrewData[]>([])
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then(resource => {
        if(!resource.ok) {
          throw new Error("Failed to fetch data");
        }
        return resource.json();
      })
      .then((data: Tourism) => {
        setTimeout(() => {
          setCrewValues(data.crew);
          setIsLoading(false);
        }, 1000);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [])

  if (isLoading) return (
    <div className="loading-screen">
      <div className="spinner" />
    </div>
  );
  if(error) return (
    <div className="error">
      <p>{ error }</p>
    </div>
  )
  if(!crewValues.length) return null;
  const selectedCrew = crewValues[selectedIndex];

  return (
    <div className="crew">
      
      <main className="container">

        <header>
          <h1><span>02</span>MEET YOUR CREW</h1>
        </header>
          <div className="crew-img">
            <img src={selectedCrew.images.png} alt="crew-img" />
          </div>
          <section className="btn">
            { crewValues.map((_, index) => (
            <button key={index} onClick={() => setSelectedIndex(index)} style={{color: selectedIndex === index? "white" : "gray"}}>
              <FontAwesomeIcon icon={faCircle} style={{width: "70%"}}/>
            </button>
          ))}
          </section>
          <section className="wrapper">
            { selectedCrew && ( 
              <article className="contents">
                <span>{ selectedCrew.role }</span>
                <h2>{ selectedCrew.name }</h2>
                <p>{ selectedCrew.bio }</p>
              </article>
          )}
          </section>
        
      </main>
    </div>
  )
}

export default Crew