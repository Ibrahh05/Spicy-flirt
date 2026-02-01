import { useState } from 'react'
import { listaComidas } from './comidas' 
import JuankyPage from './JuankyPage'
import RubenPage from './RubenPage'
import AntonioPage from './AntonioPage'
import IbraPage from './IbraPage'
import './App.css'

// Mensajes que aparecen en el chat cada vez que das like o dislike
const misFrases = [
  { nombre: "Rios_Usurero", texto: "¡Si quereis una buena comida pincha -> AQUI <- 💸bomboclat" },
  { nombre: "Pablito", texto: "Como estabas @fumo trocical diossss... 💦" },
  { nombre: "Juanaco69", texto: "boof como esta la comida de ...." },
  { nombre: "Sergio", texto: "Malisimo ese batido de tutifruti 🤮" },
  { nombre: "Pikosss", texto: "Ostia sopa de macaquiño 🐒" },
  { nombre: "Rapadisimo", texto: "¡Match! Me lo como todo 😝😝." },
  { nombre: "Paco_Porros", texto: "@rapadisimo Te veo bien pero bien tragon 🤑" },
  { nombre: "Pollo Fango", texto: "@juanaco69 que noche pasamos he guapetón 😘, a ver cuando repetimos" },
  { nombre: "Klara", texto: "Seguir asi mis exclavos." },
  { nombre: "Ruben", texto: "¿Por donde se va a -La Esquina Prohibida-?." },
  { nombre: "Final", texto: "Aaaacho de aquí a la juankyneria 😝🔥" },
  { nombre: "Encarna", texto: "¿Es aquí donde se piden citas medicas? ui que buenos mozos hay por aqui" },
  { nombre: "Ibrah", texto: "No lo mejora ni un prompt 😝" },
  { nombre: "Cipri", texto: "Vale, ¿Quieres aprender Laravel? pibcha -> AQUI <-" },
  { nombre: "Carlos", texto: "mmmm como esta ese pollo fango 😏." }
];

function App() {
  // Variables de estado para controlar la comida actual, el chat y las pantallas ocultas
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [mensajes, setMensajes] = useState([]); 
  const [mostrarJuanky, setMostrarJuanky] = useState(false);
  const [mostrarRuben, setMostrarRuben] = useState(false);
  const [mostrarAntonio, setMostrarAntonio] = useState(false);
  const [mostrarIbra, setMostrarIbra] = useState(false);


  // Función para pasar a la siguiente comida y gestionar sonidos/frases
  const siguiente = (tipo) => {
    // Sonidos según el botón pulsado
    if (tipo === 'like') {
      new Audio('/mmm.mp3').play();
      setLikes(likes + 1); // <--- SUMA LIKE
    } else {
      new Audio('/nomames.mp3').play();
      setDislikes(dislikes + 1); // <--- SUMA DISLIKE
    }
    
    // Elegimos la frase que toca del array misFrases
    const fraseDeTurno = misFrases[index % misFrases.length];
    
    // Guardamos la frase nueva en el chat (solo mostramos las 3 últimas)
    setMensajes((prev) => [...prev.slice(-1), fraseDeTurno]); 

    // Pasamos a la siguiente comida (si llegamos al final, volvemos a la primera)
    setIndex(index < listaComidas.length - 1 ? index + 1 : 0);
  };

  // Obtenemos los datos de la comida que toca mostrar ahora
  const comidaActual = listaComidas[index];

  // Si el usuario pinchó en el banner de Juanky, mostramos su página a pantalla completa
  if (mostrarJuanky) {
    return <JuankyPage setMostrarJuanky={setMostrarJuanky} />;
  }

  // Lo mismo para el banner de Ruben
  if (mostrarRuben) {
    return <RubenPage setMostrarRuben={setMostrarRuben} />; 
  }

  // Lo mismo para el banner de Antonio
  if (mostrarAntonio) {
    return <AntonioPage setMostrarAntonio={setMostrarAntonio} />;
  }

    // Lo mismo para el banner de Antonio
  if (mostrarIbra) {
    return <IbraPage setMostrarIbra={setMostrarIbra} />;
  }

  return (
    <div className="container">
      {/* Cabecera con el logo y el primer banner publicitario */}
      <header className="app-header">
        <img src='./imagenes/logo.png' alt="Logo" className="app-logo" />

        <div className="banner2-container" onClick={() => setMostrarRuben(true)}>
          <img src='./imagenes/banner2.png' alt="Anuncio2" className="banner2" />
        </div>

        <div className="banner-container" onClick={() => setMostrarJuanky(true)}>
          <img src='./imagenes/banner.png' alt="Anuncio" className="app-banner" />
        </div>
      </header>
      
      {/* Área central donde está la tarjeta de la comida */}
      <div className="swipe-area">
        <div className="card">
          <img src={comidaActual.img} alt={comidaActual.nombre} />
          <div className="info">
            <h2>{comidaActual.nombre}</h2>
            <p>{comidaActual.desc}</p>
          </div>
          {/* Botones para dar like o dislike */}
          <div className="actions">
            <button onClick={() => siguiente('dislike')} className="btn btn-no">✖️</button>
            <button onClick={() => siguiente('like')} className="btn btn-yes">❤️</button>
          </div>
        </div>
      </div>
      
      {/* Segundo banner publicitario arriba a la derecha */}
      <div className="banner-derecha" onClick={() => setMostrarAntonio(true)}>
        <img src='./imagenes/banner1.png' alt="Publicidad" className="img-banner-der" />
      </div>

      <div className="banner-derecha1" onClick={() => setMostrarIbra(true)}>
        <img src='./imagenes/banner3.png' alt="Publicidad" className="img-banner-der1" />
      </div>

      {/* Burbujas del chat que aparecen en la esquina inferior derecha */}
      <div className="chat">
        {mensajes.map((msg, i) => (
          <div key={i} className="burbuja">
            <span className="autor">@{msg.nombre}</span>
            <p className="texto">{msg.texto}</p>
          </div>
        ))}
      </div>
      <div className="contadores-sexy">
        <div className="stat">
          <span className="emoji">✖️</span>
          <span className="numero-dislike">{dislikes}</span>
        </div>
        <div className="stat">
          <span className="emoji">❤️</span>
          <span className="numero-like">{likes}</span>
        </div>
      </div>
    </div>

  );
}

export default App;