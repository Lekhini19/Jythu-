import React from 'react'
import './Team.css'
import scrollTxt from '../../assets/scroll-text.svg'
import member1 from '../../assets/member1.png'
import member2 from '../../assets/member2.png'
import member3 from '../../assets/member3.png'
import Button from '../Button/Button'

const Team = () => {
  return (
    <section id="team" className='w-full py-8 flex flex-col items-center gap-16 lg:gap-4'>
        <div className="scroll-div w-full h-40 flex items-center">
            <img src={scrollTxt} alt="" />
            <img src={scrollTxt} alt="" />
            <img src={scrollTxt} alt="" />
            <img src={scrollTxt} alt="" />
        </div>

        <div className="team-card-container flex items-center justify-center flex-wrap gap-20 px-2 lg:py-16">
          
            <div className="team-card flex flex-col gap-6 items-center py-20 px-16 rounded-full overflow-hidden ">
                <div className="team-img px-2 py-2 flex items-center justify-center rounded-full  ">
                    <img src={member1} alt="" className='' />
                </div>
                <div className="team-info text-center text-white pb-12 relative flex flex-col items-center transition-all ease-in duration-300">
                    <h2 className='text-3xl font-bold py-2'>RACHINA SHETH</h2>
                    <p className='text-sm '>FULL STACK DEVELOPER</p>

                    <div className="team-social absolute px-4 -bottom-20 opacity-0 transition-all ease-in duration-300">
                    <ul className='flex items-center justify-center gap-3'>
                        <li><a href="#"><i class="fab fa-facebook-f text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] px-4 py-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                    </ul>
                </div>
                </div>
                
            </div>

            <div className="team-card flex flex-col gap-6 items-center py-20 px-16 rounded-full overflow-hidden ">
                <div className="team-img px-2 py-2 flex items-center justify-center rounded-full  ">
                    <img src={member2} alt="" className='' />
                </div>
                <div className="team-info text-center text-white pb-12 relative flex flex-col items-center transition-all ease-in duration-300">
                    <h2 className='text-3xl font-bold py-2'>RACHINA SHETH</h2>
                    <p className='text-sm '>FULL STACK DEVELOPER</p>

                    <div className="team-social absolute px-4 -bottom-20 opacity-0 transition-all ease-in duration-300">
                    <ul className='flex items-center justify-center gap-3'>
                        <li><a href="#"><i class="fab fa-facebook-f text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] px-4 py-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                    </ul>
                </div>
                </div>
                
            </div>

            <div className="team-card flex flex-col gap-6 items-center py-20 px-16 rounded-full overflow-hidden ">
                <div className="team-img px-2 py-2 flex items-center justify-center rounded-full  ">
                    <img src={member3} alt="" className='' />
                </div>
                <div className="team-info text-center text-white pb-12 relative flex flex-col items-center transition-all ease-in duration-300">
                    <h2 className='text-3xl font-bold py-2'>RACHINA SHETH</h2>
                    <p className='text-sm '>FULL STACK DEVELOPER</p>

                    <div className="team-social absolute px-4 -bottom-20 opacity-0 transition-all ease-in duration-300">
                    <ul className='flex items-center justify-center gap-3'>
                        <li><a href="#"><i class="fab fa-facebook-f text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] px-4 py-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in text-base text-center flex items-center justify-center border-2 border-white rounded-[50%] p-3"></i></a></li>
                    </ul>
                </div>
                </div>
                
            </div>
            
            
        </div>

        <Button text='VIEW ALL TEAM' />
    </section>
  )
}

export default Team