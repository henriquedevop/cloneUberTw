export function Blog() {
    return (
        <section className="w-full px-2 py-8 sm:py-11 max-w-7xl m-auto">
            <div className="w-full flex flex-col">
                <h1 className="font-bold text-2xl max-w-2xl sm:text-4xl mb-5">Preocupados com a segurança, onde quer que voce va</h1>

                <div className="w-full flex flex-col sm:flex-row gap-4">
                    <a href="#" className="flex-1">
                        <article className="flex flex-col gap-2">
                            <img className="opacity-80 hover:opacity-100 hover:scale-95 duration-200" src="/src/assets/post1.png"/>
                            <h2 className="font-bold text-lg">Sua segurança é nossa prioridade</h2>
                            <p className="text-stone-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit voluptates mollitia, adipisci blanditiis eius ipsa. Impedit incidunt est tempore.</p>
                        </article>
                    </a>

                    <a href="#" className="flex-1">
                        <article className="flex flex-col gap-2">
                            <img className="opacity-80 hover:opacity-100 hover:scale-95 duration-200" src="/src/assets/post2.png"/>
                            <h2 className="font-bold text-lg">Colocamos mais de 10.000 cidades em movimento</h2>
                            <p className="text-stone-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit voluptates mollitia, adipisci blanditiis eius ipsa. Impedit incidunt est tempore.</p>
                        </article>
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default Blog;