const Paciente = ({ paciente, setPaciente }) => {
    const {mascota, propietario, email, fecha, sintomas} = paciente

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700">
            Mascota: {''}
            <span className="font-normal">
                {mascota}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Propietario: {''}
            <span className="font-normal">
                {propietario}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Email: {''}
            <span className="font-normal">
                {email}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Fecha de alta: {''}
            <span className="font-normal">
                {fecha}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Síntomas: {''}
            <span className="font-normal">
                {sintomas}
            </span>
        </p>

        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={ () => setPaciente(paciente) }
            >
                Editar
            </button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente