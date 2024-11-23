export function Header() {
    return (
        <header className="w-full bg-black h-20 px-8">
        <div className="h-20 w-full flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <img className="w-20 mr-7" src="src/assets/uberlogo.png"/>
            <nav className="hidden sm:flex items-center gap-5">
              <a className="text-white font-medium underline hover:text-slate-400" href="">Company</a>
              <a className="text-white font-medium underline hover:text-slate-400" href="">Safety</a>
              <a className="text-white font-medium underline hover:text-slate-400" href="">Help</a>
            </nav>
          </div>
  
          <div className="flex items-center gap-4">
            <a href="#" className="text-white font-medium hover:text-slate-400">Login</a>
            <a href="#" className="bg-white text-black font-medium px-3 py-1 rounded-full hover:text-white hover:bg-black border-solid border-2 border-white duration-300">Sign up</a>
          </div>
        </div>
      </header>
    )
}

export default Header;