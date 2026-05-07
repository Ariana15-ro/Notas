import { useState } from 'react'
import './App.css'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [nuevaNota, setNuevaNota] = useState("")
  const [filtro, setFiltro] = useState('todos')

  const [notas, setNotas] = useState([
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
  ])

  const manejarEnvio = (evento) => {

    evento.preventDefault()

    if (nuevaNota.trim() === "") {
      alert("Por favor escribe una nota")
      return
    }

    const nueva = {
      id: Date.now(),
      titulo: nuevaNota,
      fecha: 'Hoy',
      importante: false
    }

    setNotas([nueva, ...notas])

    setNuevaNota("")
  }

  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id))
  }

  const toggleImportante = (id) => {
    setNotas(notas.map(nota => 
      nota.id === id ? { ...nota, importante: !nota.importante } : nota
    ))
  }

  const notasFiltradas = notas.filter(nota => {
    if (filtro === 'importantes') return nota.importante
    if (filtro === 'normales') return !nota.importante
    return true
  })

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

      <button
        className="boton-toggle"
        onClick={() =>
          setMostrarFormulario(!mostrarFormulario)
        }
      >
        {mostrarFormulario
          ? 'Ocultar formulario'
          : 'Agregar nota'}
      </button>

      {mostrarFormulario && (

        <form
          className="formulario"
          onSubmit={manejarEnvio}
        >

          <h2 className="formulario__titulo">
            Nueva nota
          </h2>

          <input
            className="formulario__input"
            type="text"
            value={nuevaNota}
            onChange={(e) =>
              setNuevaNota(e.target.value)
            }
            placeholder="Escribe una nota..."
          />

          <p className="texto-preview">
            Escribiendo: {nuevaNota}
          </p>

          <button
            type="submit"
            className="formulario__boton"
          >
            Guardar
          </button>

        </form>

      )}

      <div className="filtros">
        <button 
          className={filtro === 'todos' ? 'filtro-activo' : ''}
          onClick={() => setFiltro('todos')}
        >
          Todos
        </button>
        <button 
          className={filtro === 'importantes' ? 'filtro-activo' : ''}
          onClick={() => setFiltro('importantes')}
        >
          Importantes
        </button>
        <button 
          className={filtro === 'normales' ? 'filtro-activo' : ''}
          onClick={() => setFiltro('normales')}
        >
          Normales
        </button>
      </div>

      <ul className="lista">

        {notasFiltradas.map(nota => (

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

            <div className="item__acciones">
              <button 
                className="boton-accion"
                onClick={() => toggleImportante(nota.id)}
              >
                {nota.importante ? '★' : '☆'}
              </button>
              
              <button 
                className="boton-accion boton-eliminar"
                onClick={() => eliminarNota(nota.id)}
              >
                ✕
              </button>
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