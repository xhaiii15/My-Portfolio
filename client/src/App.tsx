import './index.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tools from "./components/Tools"
import WorkExperience from './components/Background/WorkExp';


function App() {

  const workExperiences = [
  {
    company: 'Tech Solutions Inc.',
    title: 'Software Engineer',
    dates: '2023-2025',
    description: 'Developed and maintained web applications using React and Node.js.',
    technologies: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
  },
  ];

  return (
    <>
      <Navbar/>
      <Hero/>
      <Tools/>
      <div className="min-h-screen flex flex-col items-center font-[Poppins]" id='background'>
        <h1 className="text-[#1DCD9F] hover:text-[#FF0B55] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 cursor-pointer">
            Background
        </h1>
        <div className='flex justify-between gap-5 flex-col md:flex-row w-full max-w-5xl'>
          <div>
            <div className='bg-[#FF0B55] p-4 rounded text-white'>
              <h1>WORK EXPERIENCE</h1>
            </div>
          <WorkExperience experiences={workExperiences} />
          </div>
          <div>
            <div className='bg-[#FF0B55] p-4 rounded text-white'>
              <h1>EDUCATION</h1>
            </div>
            <WorkExperience experiences={workExperiences} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
