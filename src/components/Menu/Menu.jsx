import './Menu.css';

export default function Menu() {

  return(
    <div className="content-menu">
      <nav>
        <ul className="menu">
          <li><a href="#">Nacional</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Internacional</a></li>
          <li className="active"><a href="#">Saúde</a></li>
          <li><a href="#">Tecnologia</a></li>
          <li><a href="#">Esporte</a></li>
          <li><a href="#">Entretenimento</a></li>
          <li><a href="#">Estilo</a></li>
          <li><a href="#">Viagem & Gastronomia</a></li>
          <li><a href="#">Newsletters</a></li>
          <li><a href="#">Podcasts</a></li>
        </ul>
      </nav>
    </div>
  )
}