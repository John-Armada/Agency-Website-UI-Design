import membership from './assets/images/membership.svg'
import association from './assets/images/association.svg'
import groups from './assets/images/groups.svg'

function Community() {
    return (
        <main>
            <section className='flex flex-col justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-[#4D4D4D] text-[36px] font-semibold w-[542px] text-center'>Manage your entire community in a single system</h2>
                    <p className='text-[#717171]'>Who is Nextcent suitable for?</p>
                </div>
                <div className='flex flex-row justify-between items-center w-full px-36'>
                    <div className='flex flex-col justify-center items-center gap-2 px-8 py-6 w-[299px]'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img src={membership} alt="" />
                            <h3 className='text-[28px]/[36px] text-[#4D4D4D] font-bold text-center'>Membership Organisations</h3>
                        </div>
                        <p className='text-[14px] text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 px-8 py-6 w-[299px]'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img src={association} alt="" />
                            <h3 className='text-[28px]/[36px] text-[#4D4D4D] font-bold text-center'>National Associations</h3>
                        </div>
                        <p className='text-[14px] text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 px-8 py-6 w-[299px]'>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <img src={groups} alt="" />
                            <h3 className='text-[28px]/[36px] text-[#4D4D4D] font-bold text-center'>Clubs And Groups</h3>
                        </div>
                        <p className='text-[14px] text-[#717171] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Community