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
                        Ingeniero Civil Electrónico titulado de la Pontificia Universidad Católica de Valparaíso y del bootcamp de programación Soy Henry.  Mi principal interés es seguir aumentando mis conocimientos, particulamente en las áreas de programación, Internet of Things y Cloud Computing.</h3>

                    <div className="mt-8">
                        <h3 className="text-3xl mt-3">Mis experiencias:</h3>
                        <div >
                            <h3 className="text-justify mt-3">
                                - Ingeniero de desarrollo de software y front-end, creando algoritmos y códigos de programación relacionados con IoT y AWS aplicados en dispositivos con sistema operativo Raspberry Pi OS, tambien programando el front-end del proyecto Full Metric para la empresa SoluMetric. Esta experiencia me sirvió para desarrollar mi autoaprendizaje, pensamiento lógico, gestion del tiempo, adaptabilidad y resolución de problemas.
                            </h3>
                            <h3 className="text-justify mt-3">
                                - Electricista de contingencia en el rúbro de la mineria en divison Gabriela Mistral, donde se necesitaban solucionar todo tipo de problemas, con el fin de mantener la planta en producción en los distintos turnos rotativos (12 horas turno dia o 12 horas turno noche). Esta experiencia me ayudó a desarrollar mi resilencia, capacidad de trabajo bajo presión, pensamiento analítico y creatividad para resolver los problemas de manera rápida y eficiente adaptándome a los cambios que surjan.
                            </h3>
                            <h3 className="text-justify mt-3">
                                - Docente en enseñanza básica, media y superior, realizando clases de especialidad de electricidad y electrónica en CFT y en colegio TP, y clases de Tecnología a nivel de básica y media. Con jefatura de curso, lo que implica el seguimiento de estudiantes y atención de apoderados. Coordinador de prácticas profesionales con responsabilidades de monitorear, retroaliemntar y aconsejar estudiantes. Estas experiencias me sirvieron para mejorar mis habilidades de comunicación, manejo de grupos, escucha activa y liderazgo.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



