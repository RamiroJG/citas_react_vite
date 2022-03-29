import Pacientes from "./Pacientes.jsx"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
          <div>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administras tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
    
            {/* Usamos .map para iterar sobre un arreglo y que roterno uno nuevo */}
            {pacientes.map( (paciente) =>{
              return(
                <Pacientes
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              )
            })}
          </div>
        ) : (
          <div>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
            </p>
          </div>
        )}
    </div>
  )
}

export default ListadoPacientes