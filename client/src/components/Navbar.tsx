

function Navbar() {
  return (
    <>
    <nav className="fixed w-full bg-black text-[#F2F2F2] px-5 py-2.5 flex items-center justify-between font-[Poppins]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1DCD9F] cursor-pointer transition-colors duration-300 hover:text-[#FF0B55]">
        <a href="#">MY PORTFOLIO</a>
      </h2>
      <ul className="hidden md:flex gap-6 text-white text-lg">
       <li className="hover:text-[#1DCD9F] cursor-pointer"><a href="#tools">Tools</a></li>
        <li className="hover:text-[#1DCD9F] cursor-pointer"><a href="#background">Background</a></li>
        <li className="hover:text-[#1DCD9F] cursor-pointer"><a href="#projects">Projects</a></li>
        <li className="hover:text-[#86a89f] cursor-pointer"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
