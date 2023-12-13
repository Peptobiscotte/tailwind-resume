import idPic from "./idPic.png"
import gitHub from "./gitHub.svg"
import linkedIn from "./linkedIn.svg"

function Hero() {

    return (
     <div>
        <div className="p-8 flex justify-between">
            <div>
                <img src={idPic} alt="profile" className="rounded-full h-48 ml-10"/>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-center">Maxime Monnier</h1>
                <h2 className="text-xl text-center">Pianiste/Compositeur professionnel</h2>
                <h2 className="text-xl text-center">en reconversion dans le développement web. </h2>
            </div>
            <div className="flex flex-col items-end pt-4">
                <a href="mailto:maxime.monnier@ik.me" className="text-blue-600">maxime.monnier@ik.me</a>
                <a href="tel:06-65-25-86-24" className="text-blue-600">06.65.25.86.24</a>
                <p>Vincennes</p>
                <div className="flex gap-2 mt-1">
                    <a href="https://github.com/Peptobiscotte"><img src={gitHub} alt="gitHub" className="h-8"/></a>
                    <a href="https://www.linkedin.com/in/maxime-monnier-09ba00280/"><img src={linkedIn} alt="linkedIn" className="h-8"/></a>
                </div>
            </div>
        </div>
     </div>
    )
  }
  
  export default Hero
  

                           