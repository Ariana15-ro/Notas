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

        <h2>Nueva nota</h2>

        <input
          type="text"
          placeholder="Escribe una nota..."
        />

        <button>
          Guardar
        </button>

      </section>

    </div>
  )
}

export default Apps