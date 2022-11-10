import mifoto from "../yo.jpg"

export default function Bio() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row pt-10 justify-between gap-10">
                <div className="lg:w-2/5">
                    <img src={mifoto} className="rounded-full mx-auto" alt="Rodrigo" height="450" width="550" />
                </div>
                <div className="bg-grey border border-black p-5 lg:w-3/5">
                    <h1 className="text-5xl mt-5">Rodrigo Fuentes Rodríguez</h1>
                    <h2 className="text-3xl mt-3">Ingeniero Civil Electrónico y Full Stack Web Developer</h2>
                    <h3 className="text-xl mt-3">Email: r.h.fuentes.rodriguez@gmail.com</h3>
                    <h3 className="mt-10 text-xl text-justify">
                        Ingeniero Civil Electrónico titulado de la Pontificia Universidad Católica de Valparaíso y del bootcamp de programación Soy Henry.  Mi principal interés es seguir aumentando mis conocimientos sobre todo en lo que tenga que ver con programación, Internet of Things y Cloud Computing.</h3>

                    <div className="mt-8">
                        <h3 className="text-3xl mt-3">Mis experiencias:</h3>
                        <div >
                            <h3 className="text-justify mt-3">- Trabaje 1 año como electricista de contingencia en el rúbro de la mineria, donde se necesitaban solucionar cualquier problema que surgiera con el fin de mantener la planta en producción en los distintos turnos rotativos (12 horas turno dia o 12 horas turno noche). Esta experiencia me ayudo a desarrollar mi resilencia, capacidad de trabajo bajo presión, pensamiento analitico y creatividad para resolver los problemas de manera rápida y eficiente adaptandome cambios que surjan.
                            </h3>
                            <h3 className="text-justify mt-3">- Estuve 2 años en el área de la pedagogía trabajando como profesor de las especialidades de electricidad y electrónica, siendo profesor jefe de una de las especialidades y coordinador de practicas en periodo de vacaciones, ademas de realizar un semestre de clases en educacion superior. Esta experiencia me sirvio para mejorar mis habilidades de comunicación, manejo de grupos, escucha activa y liderazgo.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



