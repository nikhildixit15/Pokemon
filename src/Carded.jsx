import React from 'react'
import "./index.css";
const Carded = ({item}) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img src={item.sprites.other.dream_world.front_default} 
          alt={item.name}
          className='pokemon-image'/>
        </figure>
          <h1 className="pokemon-name">{item.name}</h1>
          <div className='pokemon-info pokemon-highlight'>
            <p>
              {item.types.map((curtype)=> curtype.type.name).join(", ")};
            </p>
          </div>

          <div className='grid-three-cols'>
            <p className='pokemon-info'>
              <span>Height:</span> {item.height}
            </p>
            <p className='pokemon-info'>
              <span>Weight:</span> {item.weight}
            </p>
            <p className='pokemon-info'>
              <span>Speed:</span> {item.stats[5].base_stat}
            </p>
          </div>
          <div className='grid-three-cols'>
            <div className='pokemon-info'>
              <p>{item.base_experience}</p>
              <span>Experience</span>
            </div>
            <div>
              <p>{item.stats[1].base_stat}</p>
              <span>Attack:</span>
            </div>
            <div className='pokemon-info'>
              <p>
                {item.abilities
                .map((abilityinfo)=>abilityinfo.ability.name)
                .slice(0,1)
                .join(", ")}
              </p>
              <span>Abilities</span>
            </div>
          </div>
      </li>
    </>
  )
}

export default Carded;
