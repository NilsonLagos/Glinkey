import React from 'react'
import '../styles/exportAreas.css'

const exportAreas = () => (
  <div>
    <div className="blog-card">
      <div className="meta">
        <div className="photo"></div>
        <ul className="details">
          <h2>EL PRODUCTO</h2>
          <p>Tu producto tiene que cortar con los requerimientos necesarios en el país a exportar tanto como textura, sabor.</p>
        </ul>
      </div>
      <div className="description">
        <h1>DISEÑADOR GRÁFICO</h1>
        <p> Un diseñador  gráfico puede ayudarte a adaptar la imagen de tu producto para los mercados extranjeros.</p>
      </div>
    </div>



    <div className="blog-card alt">
      <div className="meta">
        <div className="photo"></div>
        <ul className="details">
          <li className="author"><a href="#">Jane Doe</a></li>
          <li className="date">July. 15, 2015</li>
          <li className="tags">
            <ul>
              <li><a href="#">Learn</a></li>
              <li><a href="#">Code</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Mastering the Language</h1>
        <h2>Java is not the same as JavaScript</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>        
      </div>
    </div>
  </div>
)

export default exportAreas
