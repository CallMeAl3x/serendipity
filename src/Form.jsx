import Google from "./assets/icons/google.svg"
import Closebutton from "./assets/icons/cancel.svg"
import Nav from "./Nav"
import {Helmet} from "react-helmet";

const Form = () => {
  return (
    <main className="bg-backgroundform h-screen max-sm:h-[120vh] bg-top bg-cover bg-no-repeat text-white relative">
      <Helmet>
        <title>Form</title>
      </Helmet>
      <div className="backdrop-blur-sm h-screen backgroundform">
        <div className="sm:backdrop-blur-none z-20">
        <Nav></Nav>
        </div>
        <section className="sm:p-32 p-6 flex max-sm:flex-col ml-auto mr-auto max-w-[1275px] sm:pb-0 sm:pt-16 pb-0">

          
          <div className="bg-form_img max-sm:bg-left max-w-lg rounded-l-lg max-sm:rounded-r-lg sm:p-12 p-6 text-[20px] shadow-2xl max-sm:text-center max-sm:pb-12 max-sm:background-bottom">
            <h2 className="sm:text-[40px] text-[25px] leading-[1.2] font-semibold">Join a thriving community of creators</h2>
            <p className="mt-1 text-white/70">with Artificial Intelligence</p>
          </div>

          <div className="flex-col flex p-12 max-sm:pt-4 text-[15px] formula sm:pb-24 rounded-r-lg max-sm:rounded-l-lg bgform shadow-2xl relative">
            <div className="sm:ml-6">
              <div>
                  <img src={Closebutton} alt="" className="absolute top-[2%] left-[85%]"
                  draggable="false"/>
                </div>
              <div>
                <h2 className="text-[40px] font-semibold max-sm:text-center">Sign up</h2>
                <p className="mt-2 text-white/70 max-sm:text-center">Sign up now and gain access to exclusive content!</p>
                <div className="flex flex-col gap-2 mt-4 tracking-normal text-[16px]">
                    <label htmlFor="email">
                      Email adress
                    </label>
                    <input type="text" id="email" className="appearance-none rounded-lg p-2 placeholder:p-2" placeholder="name@email.com"/>
                </div>

                <div className="flex flex-col gap-2 mt-4 tracking-normal text-[16px]">
                <label htmlFor="password">
                  Password
                </label>

                <input type="text" id="password" className="appearance-none rounded-lg p-2 placeholder:p-2" placeholder="****"/>
                </div>

                <p className="mt-6">Forgot password? <span className="text-[#00CFFD] font-semibold">Reset Password</span></p>
                <button className="flex items-center rounded-[10px] py-2 w-full mt-2 generate_button font-semibold text-[18px] justify-center tracking-wide drop-shadow-2xl">Sign up</button>
                <p className="mt-4 text-white/70">By clicking on Sign up, you agree to our Terms of service and Privacy policy.</p>
                <div className="flex justify-center items-center mt-6">
                  <span className="h-[0.5px] bg-black/20 w-full"></span>
                  <p className="ml-4 mr-4">or</p>
                  <span className="h-[0.5px] bg-black/20 w-full"></span>
                </div>
                <button className="flex items-center py-2 px-6 ml-auto mr-auto w-full justify-center bg-[#E0EFF6] rounded-[10px] mt-6 drop-shadow-2xl">
                  <img 
                  src={Google} 
                  alt="" 
                  className="mr-3"
                  />
                  <p className="text-[#0E435C] font-semibold">Sign with Google</p>
                </button>
              </div>  
            </div>       
          </div> 
        </section>
      </div>
    </main>
  )
}

export default Form