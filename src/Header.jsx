import icon from "./assets/images/Icon.png";
import iconName from "./assets/images/Nexcent.png";

function Header() {
  return (
    <header className="bg-[#F5F7FA]">
      <div className="flex flex-row justify-center items-center bg-[#F5F7FA]">
        <div className="flex flex-row gap-2 mr-[166.01px] my-[30px] ">
          <img className="w-[35px] h-6" src={icon} alt="" />
          <img className="w-[111.4904px] h-[20.6619px]" src={iconName} alt="" />
        </div>
        <nav className="flex justify-center items-center">
          <ul className="flex flex-row gap-[50px]">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li className="mr-[124.5px]">FAQ</li>
          </ul>
        </nav>
        <div className="flex flex-row gap-[3.5] justify-center items-center">
          <button className="cursor-pointer flex justify-center items-center px-5 py-2.5 text-[#4CAF4F] h-10">
            Login
          </button>
          <button className="cursor-pointer px-5 py-2.5 w-[120px] text-white bg-[#4CAF4F] rounded-md text-center">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
