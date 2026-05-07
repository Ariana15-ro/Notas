import './App.css'

function App() {

  const notas = [
    {
      id: 1,
      titulo: 'Estudiar React',
      fecha: '07 Mayo 2026',
      importante: true
    },

    {
      id: 2,
      titulo: 'Hacer actividad de ingles',
      fecha: '08 Mayo 2026',
      importante: false
    },

    {
      id: 3,
      titulo: 'Preparar exposicion',
      fecha: '10 Mayo 2026',
      importante: true
    }
  ]

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

      <ul className="lista">

        {notas.map(nota => (
          <article
            className="item"
            key={nota.id}
          >

            <div>

              <h3 className="item__titulo">
                {nota.titulo}
              </h3>

              <p className="item__fecha">
                {nota.fecha}
              </p>

            </div>

            <span className="item__estado">
              {nota.importante ? 'Importante' : 'Normal'}
            </span>

          </article>
        ))}

      </ul>

      <footer className="pie">

        <p className="pie__texto">
          Creado por Ariana · SENA 2026
        </p>

      </footer>

    </div>
  )
}

export default App