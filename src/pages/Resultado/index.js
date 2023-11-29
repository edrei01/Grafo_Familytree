import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import familytree from '../../utils/familytree'; 

function relacionEntre(personaje1, personaje2) {
  function buscarRelacion(arbol, nombre) {
    if (arbol.name === nombre) {
      return "mismo personaje";
    }

    if (arbol.spouse === nombre) {
      return "cónyuge";
    }

    if (arbol.father === nombre) {
      return "padre";
    }

    if (arbol.mother === nombre) {
      return "madre";
    }

    if (arbol.children) {
      for (const hijo of arbol.children) {
        const relacion = buscarRelacion(hijo, nombre);
        if (relacion !== null) {
          return relacion === "hijo" ? "hijo" : "descendiente";
        }
      }
    }

    return null;
  }

  const relacion1 = buscarRelacion(familytree.find(persona => persona.name === personaje1), personaje2);
  const relacion2 = buscarRelacion(familytree.find(persona => persona.name === personaje2), personaje1);

  if (relacion1 && relacion2) {
    return `Los personajes ${personaje1} y ${personaje2} están relacionados como ${relacion1} y ${relacion2}.`;
  }

  return `Los personajes ${personaje1} y ${personaje2} no están relacionados en este árbol genealógico.`;
}

export default function Resultado(props) {
  const history = useHistory();
  const { characters } = props.location.state;

  React.useEffect(() => {
    if (!characters || characters.length !== 2) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters]);

  const mostrarRelacion = () => {
    if (characters && characters.length === 2) {
      const relacion = relacionEntre(characters[0]?.name, characters[1]?.name);
      return <p>{relacion}</p>;
    }
    return null;
  };

  return (
    <div className="page">
      <h1>Resultado</h1>
      {characters && characters.map((item) => <p key={item?.name}>{item?.name}</p>)}
      {mostrarRelacion()}
      {characters && characters.length === 2 ? (
        <Link to={{ pathname: "/", state: { characters } }} className="btn">
          VOLTAR
        </Link>
      ) : null}
    </div>
  );
}
