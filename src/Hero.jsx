import heroImg from "./assets/images/Illustration.png";
import dotWhite from "./assets/images/dot-white.png";
import dotGreen from "./assets/images/dot-green.png";

function Hero() {
  return (
    <main className="bg-[#F5F7FA] flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-center items-center gap-[104px] mx-36 my-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-[64px] font-semibold text-base/[76px] text-[#4D4D4D]">
              Lessons and insights{" "}
              <span className="text-[#4CAF4F] block">from 8 years</span>
            </h1>
            <p className="mt-4 mb-8 text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="bg-[#4CAF4F] px-8 py-3.5 w-32 rounded-sm text-white">
              Register
            </button>
          </div>
          <div>
            <img className="w-[391px] h-[407px]" src={heroImg} alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <img className="cursor-pointer" src={dotGreen} alt="" />
          <img className="cursor-pointer" src={dotWhite} alt="" />
          <img className="cursor-pointer" src={dotWhite} alt="" />
        </div>
      </section>
    </main>
  );
}

export default Hero;
