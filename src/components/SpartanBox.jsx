import React from 'react'
import "./spartanBox.css"

const SpartanBox = ({spartan, handleChangeSpartan}) => {
  return (
    <section className="card__container">
        
        <article className="card">
          
            <div className="face front">
                <img src={`${spartan.img}`} alt="Noble 3"/>
                <h3>{`${spartan.name}`}</h3>
            </div>
            <div className="face back">
                <h3>{`${spartan.name}`}</h3>
                <p>{`${spartan.description}`}</p>
                <p>Project: {`${spartan.project}`}</p>
                <p>Affiliation: {`${spartan.affiliation}`}</p>
                <p>Estatus: {`${spartan.status}`}</p>
                <div className="link">
                    <a href={`${spartan.link}`} target="_blank">More Info</a>
                </div>
            </div>  
        </article>
        <button className='btn__change' onClick={handleChangeSpartan} ><i class="fa-solid fa-dice-d6"></i></button>
    </section>
  )
}

export default SpartanBox