import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MyProfile from "../assets/MyProfilePic.jpg";
import Swal from 'sweetalert2';


const Hero = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default navigation
    Swal.fire({
        text: 'Sure ka na pupunta ka sa Facebook ko?',
        icon: 'question',
        showCloseButton: true,
        confirmButtonText: 'Yes, proceed',
    }).then((result) => {
      if (result.isConfirmed) {
        // Open in a new tab
        window.open('https://www.facebook.com/charlie.melorin.1', '_blank');
      }
    });
  };
  return (
    <>
    <div id="hero" className="flex flex-col md:flex-row items-center justify-center min-h-150 gap-8 pt-15 " >
        {/*My Image*/}
        <div className="flex-shrink-0">
            <img
            src={MyProfile}
            alt="Charlie Melorin"
            className="w-60 h-60 md:w-100 md:h-100 object-cover rounded-md leading-relaxed max-w-[90vw]"/>
        </div>
        {/*My Name*/}
        <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-[#1DCD9F] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight font-[Poppins]">
            <a className="hover:text-[#FF0B55] cursor-pointer" onClick={handleClick}>CHARLIE MELORIN</a>
            </h1>
            {/*My Short Description*/}
            <p className="text-white mt-2 text-lg md:text-xl font-[Poppins] text-justify sm:px-10 md:pl-4 lg:px-0 leading-relaxed max-w-[90vw]">
                Aspiring Frontend Developer and third-year BSIT student,
                I'm passionate about creating user-friendly and responsive web interfaces.  
                eager to use academic knowledge and develop practical 
                HTML, CSS, JavaScript, and React skills through internships and real-world projects.
            </p>
            {/*My Github and LinkedIn*/}
            <div className="flex justify-center md:justify-start gap-6 mt-4 text-white text-3xl sm:px-10 md:pl-4 lg:px-0">
            <a href="https://github.com/xhaiii15" target="_blank" aria-label="GitHub" className="hover:text-[#FF0B55]">
                <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#FF0B55]">
                <FaLinkedin />
            </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
