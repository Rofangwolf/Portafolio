import fotopf from "../PF.jpg"
import solumetric from "../solumetric.jpg"

export default function Projects() {
    return (
        <div className='py-20'>
            <h3 className="text-3xl">
                Mis proyectos:
            </h3>

            <div className='mt-5 flex flex-col lg:flex-row justify-center gap-12 bg-grey p-10 border border-black'>
                <div className="hover:opacity-50 hover:cursor-pointer">
                    <a href="https://don-quijote.vercel.app/">
                        <img src={fotopf} className="rounded-lg lg:w-screen"></img>
                        <h3 className="text-xl">Ecommerce de Libros</h3>
                    </a>
                </div>

                <div className="hover:opacity-50 hover:cursor-pointer lg:w-screen">
                    <a href="www.solumetric.cl">
                        <img src={solumetric} className="rounded-lg "></img>
                        <h3 className="text-xl">SoluMetric</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}




