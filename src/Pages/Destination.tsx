// import React, { useState } from 'react'
// import data from '../data.json';

// const Destination: React.FC = () => {
//   const [ planets ] = useState(data);
//   const [value, setValue ] = useState(1)


//   const { name, images, description, distance, travel } = planets.Tourism.destinations[value];

//   return (
//     <div>
//         <h2>PICK YOUR DESTINATION</h2>
//         <img src={images.png} alt="" />
//         <aside>
//             {/* <Sidebar /> */}
//             <h2>{name}</h2>
//             <p>{description}</p>
//             <p>{distance}</p>
//             <p>{travel}</p>
//         </aside>
//     </div>
//   )
// }

// export default Destination



import React, { useState } from 'react';
import data from '../data.json';
import type { Tourism } from '../Types';

const Destination: React.FC = () => {
  const [planets] = useState<{ Tourism: Tourism }>(data);
  const [value, setValue] = useState(0); // Start with first destination

  const { name, images, description, distance, travel } = planets.Tourism.destinations[value];

  return (
    <div>
      <h2>PICK YOUR DESTINATION</h2>

      <img src={images.png} alt={name} />

      <div>
        {planets.Tourism.destinations.map((dest, index) => (
          <button key={index} onClick={() => setValue(index)}>
            {dest.name}
          </button>
        ))}
      </div>

      <aside>
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>Distance:</strong> {distance}</p>
        <p><strong>Travel Time:</strong> {travel}</p>
      </aside>
    </div>
  );
};

export default Destination;
