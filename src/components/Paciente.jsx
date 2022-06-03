const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Mascota: {''}
            <span className="font-normal">
                Hook
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal">
                Yenaro
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal">
                correo@correo.com
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de alta: {''}
            <span className="font-normal">
                10 Diciembre 2022
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''}
            <span className="font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, saepe!
            </span>
        </p>
    </div>
  )
}

export default Paciente