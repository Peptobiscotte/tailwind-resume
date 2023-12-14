import idPic from "./idPic.png"
import gitHub from "./gitHub.svg"
import linkedIn from "./linkedIn.svg"
import gitHubWhite from "./github-white.svg"
import linkedInWhite from "./linkedin-white.svg"

function Hero() {

    return (
     <div className="dark:text-white">
        <div className="p-8 md:flex justify-between">
            <div>
                <img src={idPic} alt="profile" className="hidden md:block rounded-full h-48 ml-10"/>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-center font-mono">Maxime Monnier</h1>
                <h2 className="text-xl text-center">Pianiste/Compositeur professionnel</h2>
                <h2 className="text-xl text-center">en reconversion dans le développement web. </h2>
            </div>
            <div className="flex flex-col items-end pt-4">
                <a href="mailto:maxime.monnier@ik.me" className="text-blue-600 dark:text-blue-400">maxime.monnier@ik.me</a>
                <a href="tel:06-65-25-86-24" className="text-blue-600 dark:text-blue-400">06.65.25.86.24</a>
                <p>Vincennes</p>
                <div className="flex gap-2 mt-1">
                    <a href="https://github.com/Peptobiscotte"><img src={gitHub} alt="gitHub" className="h-8 dark:hidden"/></a>
                    <a href="https://www.linkedin.com/in/maxime-monnier-09ba00280/"><img src={linkedIn} alt="linkedIn" className="h-8 dark:hidden"/></a>
                    <a href="https://github.com/Peptobiscotte"><img src={gitHubWhite} alt="gitHub" className="h-8 hidden dark:block"/></a>
                    <a href="https://www.linkedin.com/in/maxime-monnier-09ba00280/"><img src={linkedInWhite} alt="linkedIn" className="h-8 hidden dark:block"/></a>
                </div>
            </div>
        </div>
     </div>
    )
  }
  
  export default Hero
  

                           