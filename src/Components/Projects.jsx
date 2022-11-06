import fotopf from "../PF.jpg"

export default function Projects() {
    return (
        <div className='py-20'>
            <h3 className="text-3xl">
                Mis proyectos:
            </h3>

            <div className='mt-5 flex justify-center gap-12 bg-grey py-5 border border-black'>
                <div className="hover:opacity-50 hover:cursor-pointer">
                    <a href="https://don-quijote.vercel.app/">
                        <img src={fotopf} width="600"></img>
                        <h3 className="text-xl">Ecommerce de Libros</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}