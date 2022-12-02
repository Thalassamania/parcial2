import Band from './band';
import React from "react";

const { useEffect, useState } = require("react");

function ListBands () {
    var oldest = null
    var oldestAge = -1
    const [bandas, setBandas] = useState([]);
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL).then(data => data.json()).then(data => {
            setBandas(data);
        })
   }, []);

   return(
    <div>
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Pais</th>
          <th scope="col">Genero</th>
          <th scope="col">Fundacion</th>
        </tr>
      </thead>
      <tbody>
        {bandas.map(elem => {
            if(2022 - parseInt(elem.foundation_year) > oldestAge ){
                    oldest = elem.name
                    oldestAge = 2022 - parseInt(elem.foundation_year)
                };
            return (
                <Band id={elem.id} name={elem.name} country={elem.country} genre={elem.genre} foundation_year={elem.foundation_year}/>
            ) 
        })}
      </tbody>
    </table>
    La banda mas antigua es {oldest} y fue fundada hace {oldestAge} años
  </div>
   )
}
export default ListBands;
