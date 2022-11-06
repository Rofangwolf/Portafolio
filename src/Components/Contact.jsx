export default function Contact() {
    return (
        <div className="pb-10">
            <h3 className="text-3xl">
                Si quieres saber más de mi, no dudes en contactarme, te dejo mis perfiles de:
            </h3>

            <div className="flex justify-center gap-12 pt-5 bg-grey border border-black">
                <div className="hover:opacity-50">
                    <a href="https://www.linkedin.com/in/rodrigo-fuentes-rodr%C3%ADguez-7043aa19a/">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="100"></img>
                        <h3>Linkedin</h3>
                    </a>
                </div>

                <div className="hover:opacity-50">
                    <a href="https://github.com/Rofangwolf">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="100"></img>
                        <h3>GitHub</h3>
                    </a>
                </div>
            </div>
        </div>
    )
}