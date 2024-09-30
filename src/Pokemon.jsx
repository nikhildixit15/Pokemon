import React, { useState,useEffect } from 'react'
import "./index.css"
import Carded from "./Carded.jsx"


const Pokemon = () => {
const[pokemon, setpokemon] =useState([]);
const[loading,setloading] = useState(true);//by this we can see loading stag
const[error,seterror] = useState(null);
const[search,setsearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=92";

    const fetchPokemon = async()=>{
        try{
            const res = await fetch(API);//fetch return promise
            const data=await res.json();//res ka data json formate me change karne par
            //console.log(data);

            //hmmne jo API fetch ki hai usme jo url hai usse data ko fech arna hai
            const detailPokemonData = data.results.map(async(curPokemon)=>{
                //console.log(curPokemon.url)

                const res =await fetch(curPokemon.url);
                const data=await res.json();
                return data;
            })
           // console.log(data);

           const detailResponse = await Promise.all(detailPokemonData);//means jab sabhi data correct hoga tabhi ye return kareyega 
           console.log(detailResponse);
           setpokemon(detailResponse);
           setloading(false);
           seterror(error);
        }
        catch(error) {
            console.log(error);
            setloading(false);
        }
    }
    useEffect(()=>{
        fetchPokemon();
    },[]);

            //by this we can search a photos
    const searchData = pokemon.filter((curData)=>   
        curData.name.toLowerCase().includes(search.toLowerCase())
    );

    if(loading){
        return(
            <div>
                <li>Loading...</li>
            </div>
        )};

    if(error){
        return(
            <>
            <h2>{error.message}</h2>
            </>
        )};

  return (
    <>
    <div>
       <section className='container'>
        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>
        <div className='pokemon-search'>
            <input 
                type="text"
                placeholder='search Pokemon'
                value={search}
                onChange={((e)=>setsearch(e.target.value))}
            />
        </div>
       <div>
        <ul className='cards'>
            {/* {pokemon.map((curpokemon)=>{ */}
            {searchData.map((curpokemon)=>{
                return <Carded key={curpokemon.id} item={curpokemon} /> //pass as props

            })}
        </ul>
        </div>
            </section>
    </div>
    </>
  )
}

export default Pokemon;
