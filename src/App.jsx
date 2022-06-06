import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const LS = JSON.parse(localStorage.getItem('pacientes')) ?? []

  const [pacientes, setPacientes] = useState(LS)
  const [paciente, setPaciente] = useState({})

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = id => {
    // console.log('Eliminando ', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )

    // console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
