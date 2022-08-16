import React,{useState} from 'react'
import {FaBars, FaTimes,FaGithub, FaLinkedin,FaFacebook } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi';
import { BsFilePersonFill } from "react-icons/bs";
import {Link} from 'react-scroll';


//imports above
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick =()=>setNav(!nav);

//Navbar switching functions


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000] text-gray-300">
      <div>
        <h1 className="text-2xl">Mambwe</h1>
      </div>

      {/**Menu */}
      <div>
        <ul className="hidden md:flex font-bold">
          <li className="cursor-pointer px-4">
            <Link  to="home"  smooth={true}  duration={500}>
          Home
        </Link>
          </li>
          <li className="cursor-pointer px-4">
                <Link  to="about"  smooth={true}  duration={500}>
          About
        </Link>
          </li>
          <li className="cursor-pointer px-4">
                <Link  to="skills"  smooth={true}  duration={500}>
          Skill
        </Link>
          </li>
          <li className="cursor-pointer px-4">
                <Link  to="work"  smooth={true}  duration={500}>
          Works
        </Link>
          </li>
          <li className="cursor-pointer px-4">
              <Link  to="contact"  smooth={true}  duration={500}>
          Contact
        </Link></li>
        </ul>
      </div>
      {/**Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/**Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center cursor-pointer"
        }
      >
        <li className="py-6 text-4xl">
           <Link onClick={handleClick } to="home"  smooth={true}  duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick } to="about"  smooth={true}  duration={500}>
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick } to="skills"  smooth={true}  duration={500}>
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick } to="work"  smooth={true}  duration={500}>
          Works
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick } to="contact"  smooth={true}  duration={500}>
          Contact
        </Link>
        </li>
      </ul>
      {/**Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-4">
        <ul>
          <li className="w-[160px] h-[60px] px-2 flex justify-between items-center ml-[-130px] bg-blue-600 hover:ml-[-20px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/mike-mambwe-06518a1b2/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] px-2 flex justify-between items-center ml-[-130px] bg-blue-800 hover:ml-[-20px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/profile.php?id=100082750740856"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] px-2 flex justify-between items-center ml-[-130px] bg-[#333] hover:ml-[-20px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Faeprodigy%3Ffbclid%3DIwAR36EjjHRXelSxpe_p452rM-OfBZa-wa--cn7UrZWZ9DM-nbtei9z7nazto&h=AT38h2jVOrPZmJrQr7Xo9UsAMrOXk65sECr9EQIocQJ3EMU-Mb1o8sZ_09vIFgXMvY38a5WqmC4jppElPvK9XVGvJl97DLuX9IHQMplWooJ-BPxrOMQ25wHTh5gH2UIxKMTZPw"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] px-2 flex justify-between items-center ml-[-130px] bg-red-500 hover:ml-[-20px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] px-2 flex justify-between items-center ml-[-130px] bg-[#565f79] hover:ml-[-20px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Resume`<BsFilePersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar