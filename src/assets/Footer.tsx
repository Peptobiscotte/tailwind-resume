import tailwind from "./tailwindcss.svg"

function Footer() {
    return (
        <div className="bg-gray-50 h-32 flex justify-center">
            <div className="flex justify-center items-center">
                <p>Made with</p>
                <img src={tailwind} alt="tailwindcss" className="h-6 mx-1"/>
                <p>by Maxime Monnier</p>
            </div>
        </div>
    )
}

export default Footer