import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


const Tools = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center pt-12 transition-all" id="tools">
        <h1 className="text-[#1DCD9F] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight font-[Poppins] mb-8">
            Tools
        </h1>
        <div className="flex flex-wrap justify-center gap-6 p-8 rounded-lg shadow-lg mt-10">
             <div className="bg-[#222831] text-4xl flex justify-center gap-5 w-100 rounded-lg p-4 shadow-lg scale-250 ">
                {/*one*/}
                <div className="relative group cursor-pointer">
                    <FaHtml5 className="scale-100 text-[#e34c26] hover:scale-150 duration-200 ease-in-out" />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        HTML
                    </div>
                </div>
                {/*two*/}
                <div className="relative group cursor-pointer">
                    <FaCss3Alt className="scale-100 text-[#264de4] hover:scale-150 duration-200 ease-in-out "/>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        CSS
                    </div>
                </div>
                {/*three*/}
                <div className="relative group cursor-pointer">
                    <IoLogoJavascript className="scale-100 text-[#f0db4f] hover:scale-150 duration-200 ease-in-out " />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        JAVASCRIPT
                    </div>
                </div>
                {/*four*/}
                <div className="relative group cursor-pointer">
                    <FaReact className="scale-100 text-[#61DBFB] hover:scale-150 duration-200 ease-in-out " />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        REACT
                    </div>
                </div>
                {/*five*/}
                <div className="relative group cursor-pointer">
                    <RiTailwindCssFill className="scale-100 text-[#06b6d4] hover:scale-150 duration-200 ease-in-out" />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        TAILWINDCSS
                    </div>
                </div>
                {/*six*/}
                <div className="relative group cursor-pointer">
                  <SiTypescript className="scale-100 text-[#06b6d4] hover:scale-150 duration-200 ease-in-outr" />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        TYPESCRIPT
                    </div>
                </div>
             </div>
        </div>




    </div>
    </>
  )
}

export default Tools
