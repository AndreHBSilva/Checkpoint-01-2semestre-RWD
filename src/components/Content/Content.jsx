import React from 'react';
import './Content.css';
import CNN from '../../img/logo.svg';

export default function Content() {

  return(
    <div className="post__content">
      <div>
        <figure>
          <img className="cnn__logo" alt="Logo da CNN" src={CNN} />
        </figure>
      </div>
      <div>
        <p>
          Por ser uma doença nova, a <a href="#">Covid-19</a> ainda não foi compreendida totalmente pela comunidade
          média global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos
          para a saúde a curto e longo prazos.
        </p>
        <p>
          A <a href="#">variante Delta da Covid-19,</a> originalmente conhecida como B.1.617.2, existe desde o final do ano passado,
          mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível.
          Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa. 
        </p>
      </div>
    </div>
  )
}