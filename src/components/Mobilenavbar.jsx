import {files} from '../assets/assets.jsx'

const Mobilenavbar = ({hamburger, setHamburger}) => {


  return (
    <div className={`md:hidden fixed top-0 left-0 w-full z-50 transform duration-300 ease-in-out  overflow-hidden bg-[var(--mobileNavbar-bg)] transition-transform ${hamburger ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex justify-end p-4'>
        <img src={files.remover} alt="" className='w-6 cursor-pointer transition-all duration-300 hover:scale-110' onClick={() => setHamburger(false)} />
        </div>
      <ul className='flex flex-col items-center gap-3 mt-1 px-4 text-lg font-medium'>
        <a onClick={() => setHamburger(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>Home</a>
        <a onClick={() => setHamburger(false)} href="#About" className='px-4 py2 rounded-full inline-block'>About Us</a>
        <a onClick={() => setHamburger(false)} href="#Projects" className='px-4 py2 rounded-full inline-block'>Projects</a>
        <a onClick={() => setHamburger(false)} href="#Reviews" className='px-4 py2 rounded-full inline-block'>Reviews</a>
      </ul>
    </div>
  )
}

export default Mobilenavbar
