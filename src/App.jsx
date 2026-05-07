import './App.css'

function App() {
  return (
    <div className="app">

      <header className="encabezado">
        <h1 className="encabezado__titulo">
          Mis Notas
        </h1>

        <p className="encabezado__subtitulo">
          Organiza tus apuntes diarios
        </p>
      </header>

      <section className="formulario">

        <h2 className="formulario__titulo">
          Nueva nota
        </h2>

        <input
          className="formulario__input"
          type="text"
          placeholder="Escribe una nota..."
        />

        <button className="formulario__boton">
          Guardar
        </button>

      </section>

      <footer className="pie">
        <p className="pie__texto">
          Creado por Ariana · SENA 2026
        </p>
      </footer>

    </div>
  )
}

export default App