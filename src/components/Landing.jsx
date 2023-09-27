import generate_img from '../assets/icons/generate_img.svg';
import icon_intro from '../assets/icons/intro.svg';
import icon_linked from '../assets/icons/linked.svg';
import icon_play from '../assets/icons/play.svg';
import icon_release from '../assets/icons/release.svg';
import icon_sound from '../assets/icons/sound.svg';
import icon_status from '../assets/icons/status.svg';
import icon_arrow_right from '../assets/icons/arrow_right.svg';

const Landing = () => {
  return (
    <section className='flex justify-between ml-auto mr-auto max-w-[1700px] max-[800px]:flex-col max-sm:text-center'>
    <div className='p-12'>
        <div className='max-sm:flex-col-reverse max-sm:flex'>
      <div className='flex items-center rounded-full intro_button text-white gap-1 w-fit pr-2 sm:mt-40 max-sm:ml-auto max-sm:mr-auto max-sm:mb-6'>
        <img src={icon_intro} alt="" className='ml-2' />
        <p>Introducing Image Feature</p>
      </div>

      <h1 className='max-w-lg max-sm:text-[40px] max-sm:leading-normal max-sm:mb-5'>Imagine with Serendipity</h1>
      </div>
      <p className='text-white text-[15px] text-white/60 max-w-lg mt-2'>Discover a vibrant community of creators on Serendipity! Connect with thousands 
      of like-minded individuals on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable 
      characters, bring your short text descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey o
      f endless creativity!</p>

      <button className='flex items-center rounded-[10px] py-2 px-6 mt-8 generate_button max-sm:ml-auto max-sm:mr-auto max-sm:mt-6'>
        <img src={generate_img} alt="" />
         <p className='ml-4 text-white'>Generate Images</p>
          </button>
    </div>



    <div className='p-6 update_container mt-8 flex flex-col justify-center items-center max-sm:text-center sm:mr-12 bg-updateback max-sm:m-auto'>
      <h3 className='text-white font-semibold text-3xl sm:ml-16 pb-12 mt-4 sm:mr-auto'>Updates</h3>

      <div className='update_box flex items-center justify-center gap-6 mb-2 max-sm:mb-4'>
          <img src={icon_play} alt=""
          className='ml-[10px]' />
          <div className='flex-col'>
            <h4 className='text-xl font-semibold tracking-wide mb-3 text-white text-start'>Upload Image</h4>
            <p className='text-white/60'>New Feature - Apr 30, 2023</p>    
          </div>         
      </div>

      <div className='update_box flex items-center justify-center gap-6 mb-2 max-sm:mb-4'>
          <img src={icon_sound} alt="" className='ml-[10px]' />
          <div className='flex-col'>
            <h4 className='text-xl font-semibold tracking-wide mb-3 text-white text-start'>Permutation</h4>
            <p className='text-white/60'>New Feature - Apr 21, 2023</p>    
          </div>         
      </div>

      <div className='update_box flex items-center justify-center gap-6 mb-2 max-sm:mb-4'>
          <img src={icon_status} alt="" className='ml-[10px]' />
          <div className='flex-col'>
            <h4 className='text-xl font-semibold tracking-wide mb-3 text-white text-start'>Status Page</h4>
            <p className='text-white/60'>New Content - Apr 16, 2023</p>    
          </div>         
      </div>

      <div className='update_box flex items-center justify-center gap-6 mb-2 max-sm:mb-4'>
          <img src={icon_release} alt="" className='ml-[10px]' />
          <div className='flex-col'>
            <h4 className='text-xl font-semibold tracking-wide mb-3 text-white text-start'>V2.1 Release</h4>
            <p className='text-white/60'>New Release - Apr 15, 2023</p>    
          </div>         
      </div>

      <div className='update_box flex items-center justify-center gap-6 mb-2 max-sm:mb-4'>
          <img src={icon_linked} alt="" className='ml-[10px]' />
          <div className='flex-col'>
            <h4 className='text-xl font-semibold tracking-wide mb-3 text-white text-start'>Linked Roles</h4>
            <p className='text-white/60'>New Feature - Apr 10, 2023</p>    
          </div>         
      </div>

      <button className='flex items-center justify-center mt-4 view_more max-sm:mb-4'>
        <img 
        src={icon_arrow_right} 
        alt="" 
        className='mr-3'
        />
        <p>View more</p>
      </button>
    </div>


  </section>
  )
}

export default Landing