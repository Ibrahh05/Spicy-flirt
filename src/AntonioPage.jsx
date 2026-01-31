const AntonioPage = ({ setMostrarAntonio }) => {
  return (
    <div 
      onClick={() => setMostrarAntonio(false)} 
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1d0f0f', 
        cursor: 'pointer',
        position: 'fixed', // Para que tape toda la pantalla de Spicy Flirt
        top: 0,
        left: 0,
        zIndex: 9999
      }}
    >
      <h1 style={{
        fontSize: '8vw', 
        color: '#fa07dd', 
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        margin: 0,
        textShadow: '0 0 20px rgba(255, 77, 77, 0.5)' // Un toque de brillo neón
      }}>
        TODOS LOS DIAS EN DISCORD
      </h1>
    </div>
  );
};

export default AntonioPage;