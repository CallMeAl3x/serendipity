import icon_discord from'../assets/icons/discord.svg';
import icon_explore from'../assets/icons/explore.svg';
import icon_join_discord from'../assets/icons/join_discord.svg';
import icon_started from'../assets/icons/started.svg';
import icon_user_guide from'../assets/icons/user_guide.svg';
import icon_view_doc from'../assets/icons/view_doc.svg';
import line from '../assets/icons/Line.svg'
import discord from '../assets/images/using_discord.png';
import started from '../assets/images/getting_started.png';
import user_guide from '../assets/images/user_guide.png';

const SecondPart = () => {
  return (
        <section className='flex sm:justify-around justify-center text-white max-xl:flex-col max-sm:max-w-[370px] max-sm:p-2'>
            <div className='flex-col flex justify-center pb-6 w-fit'>
            <img 
            src={discord} 
            alt="" 
            className=' rounded-t-xl'
            />
            <div className='rounded-t-3xl rounded-b-2xl cardbg -mt-10 flex-col flex p-6 relative backdrop-blur'>
                <img 
                src={icon_discord} 
                alt="" 
                className='absolute -top-16 left-[75%] max-sm:left-[65%]'
                />
                <h5 className='font-semibold text-xl'>Using Discord</h5>
                <img src={line} alt="" />
                <p className='text-lg font-medium'>Mastering the Art of Prompt Writing</p>
                <p className='max-w-[300px] mt-3 text-white/60'>Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea </p>

                <button className='flex items-center  justify-center view_more ml-auto mr-auto mt-3'>
                <img 
                src={icon_join_discord} 
                alt="" />
                <p className='ml-3'>Join Discord</p>
                </button>
            </div>
            </div>

            <div className='flex-col flex justify-center w-fit rounded-full pb-6'>
            <img 
            src={started} 
            alt="" 
            className=' rounded-t-xl'
            />
            <div className='rounded-t-3xl rounded-b-2xl cardbg -mt-10 flex-col flex p-6 relative backdrop-blur'>
                <img 
                src={icon_started} 
                alt="" 
                className='absolute -top-16 left-[75%] max-sm:left-[65%]'
                />
                <h5 className='font-semibold text-xl'>Getting Started</h5>
                <img src={line} alt="" />
                <p className='text-lg font-medium'>Streamlining Collaborative Workflows</p>
                <p className='max-w-[300px] mt-3 text-white/60'>Use the Midjourney Bot on Discord to effortlessly generate designs and artworks for your project. Simply enter a command </p>
                <button className='flex items-center  justify-center view_more ml-auto mr-auto mt-3'>
                <img src={icon_explore} alt="" />
                <p className='ml-3'>Explore Now</p>
                </button>
            </div>
            </div>

            <div className='flex-col flex justify-center w-fit pb-6'>
            <img 
            src={user_guide} 
            alt="" 
            className=' rounded-t-xl'
            />
            <div className='rounded-t-3xl rounded-b-2xl cardbg -mt-10 flex-col flex p-6 relative backdrop-blur'>
                <img 
                src={icon_user_guide} 
                alt="" 
                className='absolute -top-16 left-[75%] max-sm:left-[65%]'
                />
                <h5 className='font-semibold text-xl'>User Guide</h5>
                <img src={line} alt="" />
                <p className='text-lg font-medium'>Unraveling the Mystery of Version</p>
                <p className='max-w-[300px] mt-3 text-white/60'>Explore key concepts like versions and parameters when using Midjourney. Versions refer to different variations of a </p>

                <button className='flex items-center  justify-center view_more ml-auto mr-auto mt-3'>
                <img src={icon_view_doc} alt="" />
                <p className='ml-3'>View Documents</p>
                </button>
            </div>
            </div>
        </section>
  )
}

export default SecondPart