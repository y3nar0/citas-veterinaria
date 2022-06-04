const Paciente = ({ paciente }) => {
    const {mascota, propietario, email, fecha, sintomas} = paciente

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Mascota: {''}
            <span className="font-normal">
                {mascota}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal">
                {propietario}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal">
                {email}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de alta: {''}
            <span className="font-normal">
                {fecha}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''}
            <span className="font-normal">
                {sintomas}
            </span>
        </p>
    </div>
  )
}

export default Paciente