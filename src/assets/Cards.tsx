function Cards() {

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-8 m-8 text-lg">
            <div className="bg-green-400 col-span-1 row-span-1 rounded p-5 transition ease-in-out duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-white mb-2">Code Projects</h2>
                <ul className="pl-6 underline underline-offset-4">
                    <li><a href="https://github.com/Peptobiscotte/react-tenzies">React-tenzies</a></li>
                    <li><a href="https://github.com/Peptobiscotte/react-meme">React-meme</a></li>
                    <li><a href="https://github.com/Peptobiscotte/react-airbnb-clone">React-airbnb-clone</a></li>
                    <li><a href="https://github.com/Peptobiscotte/react-static">React-static</a></li>
                    <li><a href="https://github.com/Peptobiscotte/devinombre">Devinombre</a></li>
                    <li><a href="https://github.com/Peptobiscotte/Peptobiscotte.github.io">Curriculum Vitae</a></li>
                    <li><a href="https://github.com/Peptobiscotte/js-course">JS Course</a></li>
                </ul>
            </div>
            <div className="bg-cyan-400 col-span-1 row-span-2 rounded p-5 transition ease-in-out duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-white">Expérience Professionelle</h2>
                <h3 className="text-xl text-white mb-2">2014 - 2023</h3>
                <div>
                    <h4 className="mb-2">Pianiste <a href="https://www.facebook.com/LeBscuit/?locale=fr_FR" className="underline underline-offset-4">@Le Biscuit</a></h4>
                    <ul className="list-disc mb-2 pl-8">
                        <li>Pratique du piano: Concerts, résidences, répétitions.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2">Pianiste/Compositeur <a href="https://web.archive.org/web/20220418135427/https://spacedukes.com/" className="underline underline-offset-4">@Space Dukes</a></h4>
                    <ul className="list-disc mb-2 pl-8">
                        <li>Pratique du piano Concerts, composition, résidences, répétitions.</li>
                        <li>Organisation des concerts Démarchage des salles, communication, logistique.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2">Facteur en CDD <a href="https://www.laposte.fr/" className="underline underline-offset-4">@La Poste</a></h4>
                </div>
            </div>
            <div className="bg-indigo-400 col-span-1 row-span-3 rounded p-5 transition ease-in-out duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-white">Éducation</h2>
                <h3 className="text-xl text-white mb-2">2013 - 2023</h3>
                <div>
                    <h4 className="mb-2">Autoformation @Home</h4>
                    <ul className="list-disc mb-2 pl-8">
                        <li>Apprentissage supervisé par un dev expérimenté des technos web HTML, CSS et JS.</li>
                        <li>Familiarisation avec les outils du développeur : linux, git, vscode.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2">Piano <a href="https://conservatoires.paris.fr/conservatoires/debussy" className="underline underline-offset-4">@Conservatoire Claude Debussy</a></h4>
                    <ul className="list-disc mb-2 pl-8">
                        <li>Formation de pianiste professionnel en 3 ans.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-2">Piano <a href="https://conservatoires.paris.fr/conservatoires/debussy" className="underline underline-offset-4">@Cim - École de Jazz</a></h4>
                    <ul className="list-disc mb-2 pl-8"> 
                        <li>Pratique de l'instrument, musicologie, démarchage.</li>
                    </ul>
                </div>
                <div>
                    <h4>Baccalauréat <a href="http://dev.lyceedarsonval.fr/" className="underline underline-offset-4">@Lycée D'Arsonval</a></h4>
                    <ul className="list-disc mb-2 pl-8">
                        <li>Filière L option théâtre Mention Bien.</li>
                    </ul>
                </div>
            </div>
            <div className="bg-purple-300 col-span-1 row-span-1 rounded p-5 transition ease-in-out duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-white mb-2">Stack</h2>
                <ul className="list-disc pl-8">
                    <li>HTML / CSS</li>
                    <li>Javascript</li>
                    <li>npm</li>
                    <li>git</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="bg-amber-300 col-span-2 row-span-1 rounded p-5 transition ease-in-out duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-white mb-10">Intérêts</h2>
                <ul className="list-disc pl-8">
                    <li>🔪J'adore la cuisine. Je me documente souvent, pour avoir de l'inspiration, améliorer ma technique.</li>
                    <li>🎮J'aime jouer aux jeux-vidéo parfois solo mais le plus souvent multi-joueur.</li>
                    <li>🎵La musique fait bien évidemment aussi partie de mes passions.</li>
                </ul>
            </div>
        </div>
    )
  }
  
  export default Cards