import React from 'react';
import './Subtitle.css';
import Author from '../../img/author.png';

export default function Subtitle() {

  return(
    <div className="post__excerpt">
      <hr></hr>
      <p>A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavirus</p>
      <figure>
        <img className="author__image" alt="Por Lucas Rocha" src={Author} />
      </figure>
      <hr></hr>
      <section>
        <span className="post__data">
          <p>
            <small>24/08/2021 às 16:44 | Atualizado às 16:56</small>
          </p>
        </span>
      </section>
    </div>
  )
}