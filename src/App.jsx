import AboutMe from './components/aboutMe'
import ContactMe from './components/contactMe'
import Hero from './components/hero'
import MyProjects from './components/myProjects'
import Navbar from './components/navbar'
function App() {
  return (
    <>
      <div className='bg-[#1E1E1E] w-full'>
        <div className='max-w-[1065px] mx-auto px-3'>
          <Navbar />
          <Hero />
          <MyProjects />
          <AboutMe />
          <ContactMe />
        </div>
      </div>
    </>
  )
}

export default App
