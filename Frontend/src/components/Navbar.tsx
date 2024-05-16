import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800  justify-center items-center">
      <div className="max-w-7xl h-[100px] mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.urcfQ2YG9PS3mtS8cP38wQHaHa%26pid%3DApi&f=1&ipt=1adfcfd876e4db5e2c8e28ee704c958b9ccc72d9342ae95c135cc29325868110&ipo=images" alt="Logo" className="w-8 h-8" />
          <Link to="https://adirayglobal.com/" className="text-white font-extrabold text-lg hover:text-gray-200 transition duration-300 cursor-pointer">
            Adiray
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-8">
            <Link to="/" className="relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content-['']
    after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 
    after:transition after:duration-300 after:origin-center ">
              Blog
            </Link>
            <Link to="/" className="relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content-['']
    after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 
    after:transition after:duration-300 after:origin-center">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
