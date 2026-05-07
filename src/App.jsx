import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [nuevaNota, setNuevaNota] = useState("")
  const [filtro, setFiltro] = useState('todos')
  const [editandoId, setEditandoId] = useState(null)

  const [notas, setNotas] = useState(() => {
    const guardadas = localStorage.getItem('notas')
    return guardadas ? JSON.parse(guardadas) : [
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
  })

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas))
  }, [notas])

  const manejarEnvio = (evento) => {

    evento.preventDefault()

    if (nuevaNota.trim() === "") {
      alert("Por favor escribe una nota")
      return
    }

    if (editandoId !== null) {
      setNotas(notas.map(nota => 
        nota.id === editandoId ? { ...nota, titulo: nuevaNota } : nota
      ))
      setEditandoId(null)
    } else {
      const nueva = {
        id: Date.now(),
        titulo: nuevaNota,
        fecha: 'Hoy',
        importante: false
      }

      setNotas([nueva, ...notas])
    }

    setNuevaNota("")
  }

  const editarNota = (id) => {
    const nota = notas.find(n => n.id === id)
    if (nota) {
      setNuevaNota(nota.titulo)
      setEditandoId(id)
      setMostrarFormulario(true)
    }
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
            Mis Ideas
           </h1>

<p className="encabezado__subtitulo">
            Tu espacio para ideas brillantes
           </p>

      </header>

<button
         className="boton-toggle"
         onClick={() => {
           setMostrarFormulario(!mostrarFormulario)
           if (editandoId !== null) {
             setEditandoId(null)
             setNuevaNota("")
           }
         }}
       >
         {mostrarFormulario
           ? '✕ Cancelar'
           : '+ Agregar nota'}
       </button>

      {mostrarFormulario && (

        <form
          className="formulario"
          onSubmit={manejarEnvio}
        >

<h2 className="formulario__titulo">
             {editandoId !== null ? 'Editar nota' : 'Nueva nota'}
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

           <button
             type="submit"
             className="formulario__boton"
           >
             {editandoId !== null ? 'Guardar cambios' : 'Agregar nota'}
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
                className={nota.importante ? "boton-accion boton-importante-activo" : "boton-accion boton-importante"}
                onClick={() => toggleImportante(nota.id)}
              >
                {nota.importante ? '★ Quitar importante' : '☆ Marcar importante'}
              </button>
              
              <button 
                className="boton-accion boton-editar"
                onClick={() => editarNota(nota.id)}
              >
                ✎
              </button>
              
              <button 
                className="boton-accion boton-eliminar"
                onClick={() => eliminarNota(nota.id)}
              >
                ✕
              </button>
            </div>

             <span className={nota.importante ? "item__estado item__estado--importante" : "item__estado"}>
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