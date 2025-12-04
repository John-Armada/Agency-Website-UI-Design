import firstLogo from './assets/images/firstLogo.png'
import secondLogo from './assets/images/secondLogo.png'
import thirdLogo from './assets/images/thirdLogo.png'
import fourthLogo from './assets/images/fourthLogo.png'
import fifthLogo from './assets/images/fifthLogo.png'
import sixthLogo from './assets/images/sixthLogo.png'
import seventhLogo from './assets/images/seventhLogo.png'


function Clients() {
    return (
        <main className='flex flex-col justify-center items-center px-36 my-10 '>
            <section className='flex flex-col justify-center items-center gap-4 w-full'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-[#4D4D4D] text-[36px] font-semibold'>Our Clients</h2>
                    <p className='text-[#717171] '>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className='flex flex-row justify-between items-center w-full h-[98px]'>
                    <a href="#"><img src={firstLogo} alt="" /></a>
                    <a href="#"><img src={secondLogo} alt="" /></a>
                    <a href="#"><img src={thirdLogo} alt="" /></a>
                    <a href="#"><img src={fourthLogo} alt="" /></a>
                    <a href="#"><img src={fifthLogo} alt="" /></a>
                    <a href="#"><img src={sixthLogo} alt="" /></a>
                    <a href="#"><img src={seventhLogo} alt="" /></a>
                </div>
            </section>
        </main>
    );
}

export default Clients