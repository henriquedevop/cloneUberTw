export function Footer() {
    return (
        <footer className="bg-black flex flex-col items-center justify-center py-12 gap-4">
            <img className="w-20" src="src/assets/uberlogo.png"/>
            <span className="text-white">@2024 Henriquedevop</span>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a href="#" className="w-full flex items-center justify-center">
                    <img className="w-2/3 sm:w-4/5" src="src/assets/playstore.png"/>
                </a>
                <a href="#" className="w-full flex items-center justify-center">
                    <img className="w-2/3 sm:w-4/5" src="src/assets/lojapple.png"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;