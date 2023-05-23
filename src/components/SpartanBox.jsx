import React from 'react'
import "./spartanBox.css"

const SpartanBox = ({spartan, handleChangeSpartan}) => {
  return (
    <section className="card__container">
        
        <article className="card">
          
            <div className="face front">
                <img url={`${spartan.img}`} alt={`${spartan.name}`}/>
                <h3>{`${spartan.name}`}</h3>
            </div>
            <div className="face back">
                <h3>{`${spartan.name}`}</h3>
                <p>{`${spartan.description}`}</p>
                <p>Project: {`${spartan.project}`}</p>
                <p>Affiliation: {`${spartan.affiliation}`}</p>
                <p>Estatus: {`${spartan.status}`}</p>
                
            </div>  
        </article>
        <button className='btn__change' onClick={handleChangeSpartan} ><i className="fa-solid fa-dice-d6"></i></button>
    </section>
  )
}

export default SpartanBox