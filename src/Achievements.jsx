import membersIcon from "./assets/images/memberIcon.png";
import clubsIcon from "./assets/images/clubsIcon.png";
import bookingsIcon from "./assets/images/bookingsIcon.png";
import paymentsIcon from "./assets/images/paymentsIcon.png";

import mobileLogInIcon from "./assets/images/mobLogInIcon.svg";

import profileTimSmith from "./assets/images/profileTimSmith.jpg";

import firstLogo from "./assets/images/firstLogo.png";
import secondLogo from "./assets/images/secondLogo.png";
import thirdLogo from "./assets/images/thirdLogo.png";
import fourthLogo from "./assets/images/fourthLogo.png";
import fifthLogo from "./assets/images/fifthLogo.png";
import sixthLogo from "./assets/images/sixthLogo.png";

import rightArrow from "./assets/images/rightArrow.svg";

function Achievements() {
  return (
    <main className="flex justify-center flex-col gap-12">
      <section className="flex flex-row justify-between items-center px-36 py-16 bg-[#F5F7FA]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-[#4D4D4D] text-[36px] font-semibold">
            Helping a local{" "}
            <span className="block text-[#4CAF4F] text-[36px] font-semibold">
              business reinvent itself
            </span>
          </h2>
          <p className="text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center w-[540px]">
          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-row gap-4 items-center w-[255px]">
              <div>
                <img src={membersIcon} alt="" />
              </div>
              <div>
                <h3 className="text-[#4D4D4D] text-[28px] font-bold">
                  2,245,341
                </h3>
                <p className="text-[#717171]">Members</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center w-[255px]">
              <div>
                <img src={clubsIcon} alt="" />
              </div>
              <div>
                <h3 className="text-[#4D4D4D] text-[28px] font-bold">46,328</h3>
                <p className="text-[#717171]">Clubs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[30px]">
            <div className="flex flex-row gap-4 items-center w-[255px]">
              <div>
                <img src={bookingsIcon} alt="" />
              </div>
              <div>
                <h3 className="text-[#4D4D4D] text-[28px] font-bold">
                  828,867
                </h3>
                <p className="text-[#717171]">Event Bookings</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center w-[255px]">
              <div>
                <img src={paymentsIcon} alt="" />
              </div>
              <div>
                <h3 className="text-[#4D4D4D] text-[28px] font-bold">
                  1,926,436
                </h3>
                <p className="text-[#717171]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-row justify-between px-36">
        <div>
          <img src={mobileLogInIcon} alt="" />
        </div>

        <div className="flex flex-col justify-center items-start gap-8 w-[661px]">
          <div className="flex flex-col gap-4 items-start w-[601px]">
            <h2 className="text-[#4D4D4D] text-[36px] font-semibold">
              How to design your site footer like we did
            </h2>
            <p className="text-[#717171] text-[14px]">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <button className="bg-[#4CAF4F] px-8 py-3.5 rounded-sm text-white">
            Learn More
          </button>
        </div>
      </section>

      <section className="flex flex-row px-36 py-8 justify-between gap-[78px] bg-[#F5F7FA]">
        <div className="flex justify-center items-center w-[326px] h-[326px]">
          <img
            className="w-full h-full rounded-lg"
            src={profileTimSmith}
            alt=""
          />
        </div>

        <div className="w-[748px] flex flex-col gap-8 items-center justify-center">
          <div className="w-full">
            <p className="text-[#717171] font-medium mb-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h4 className="text-[#4CAF4F] text-[20px] font-semibold mb-2">
              Tim Smith
            </h4>
            <p className="text-[#89939E] ">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="flex flex-row items-end gap-8">
            <div className="flex flex-row justify-between items-center w-[493px] gap-[41px]">
              <a href="#">
                <img src={firstLogo} alt="" />
              </a>
              <a href="#">
                <img src={secondLogo} alt="" />
              </a>
              <a href="#">
                <img src={thirdLogo} alt="" />
              </a>
              <a href="#">
                <img src={fourthLogo} alt="" />
              </a>
              <a href="#">
                <img src={fifthLogo} alt="" />
              </a>
              <a href="#">
                <img src={sixthLogo} alt="" />
              </a>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 p-2">
              <h4 className="text-[#4CAF4F] font-semibold text-[20px]">
                Meet all customers
              </h4>
              <a className="flex justify-center items-center" href="#">
                <img className="py-2 px-[4.5px]" src={rightArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Achievements;
