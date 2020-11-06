import React, { useState, useEffect } from "react";
import axios from "axios";

const Body = () => {
  const [abilities, setAbility] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
        setAbility(res.data.abilities);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemon();
  }, []);

  const abilitiesData = abilities.map((abi, index) => {
    return <p key={index}> {abi.ability.name} </p>;
  });
  return (
    <div>
      <h1>Body </h1>
      {loading ? <p>Loading...</p> : abilitiesData}
    </div>
  );
};

export default Body;

//
