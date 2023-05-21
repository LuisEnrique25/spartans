import React from 'react'

const SpartanBox = ({spartan, handleChangeSpartan}) => {
  return (
    <section>
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
        <button onClick={handleChangeSpartan} >See oher Spartan</button>
    </section>
  )
}

export default SpartanBox