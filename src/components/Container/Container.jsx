import React from 'react';
import Content from '../Content/Content';
import './Container.css';

export default function Container() {

  return(
    <div className="site__content">
      <div className="container">
        <div className="row">
          <main>
            <article>
              <Content />
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}