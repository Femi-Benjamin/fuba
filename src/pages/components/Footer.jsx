import learning from "../../assets/learning.svg";
import fuba from "../../assets/fuba.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
    return (
        <div className="h-[762px] bg-cover bg-no-repeat bg-[#280D46] text-white" style={{ backgroundImage: `url(${learning})` }}>

            <div className="p-16 text-center border-b border-b-purple-900">
                <h1 className="text-[#FAFAFA] text-[32px] font-semibold pb-[18px] leading-normal">Subscribe To Our Newsletter</h1>
                <p className="text-[#FF3D00] text-lg font-medium pb-[32px] leading-normal">Stay updated on latest news</p>
                <div>
                    <form className="flex justify-center">
                        <div className='flex items-center justify-between border border-purple-400 rounded-lg w-[547px]'>
                            <div>
                                <input
                                    className='p-3 w-[380px] bg-transparent outline-none'
                                    placeholder='Enter your email'
                                    type='email'
                                />
                            </div>
                            <div>
                                <button className='bg-[#FF3D00] w-[140px] h-[67px] px-2 cursor-pointer flex justify-center items-center rounded-tr-lg rounded-br-lg'>
                                    <h1>Send</h1>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="p-20 flex justify-between">
                <div>
                    <img src={fuba} alt="" />
                </div>

                <div>
                    <h1 className="text-[#FF3D00] text-2xl font-semibold leading-normal pb-[17px]">Get in touch</h1>
                    <p className="text-xl font-medium leading-normal pb-[21px]">Address:</p>
                    <p className="text-base leading-normal font-normal">55, Thailand Street, <br /> Daha, Abuja , Nigeria.</p>
                </div>
                <div>
                    <h1 className="text-[#FF3D00] text-2xl font-semibold leading-normal pb-[17px]">Get in touch</h1>
                    <p className="text-xl font-medium leading-normal pb-[21px]">Email:</p>
                    <p className="text-base leading-normal font-normal">Futurebuildersagency@gmail.com</p>
                </div>
                <div>
                    <h1 className="text-[#FF3D00] text-2xl font-semibold leading-normal pb-[17px]">Get in touch</h1>
                    <p className="text-xl font-medium leading-normal pb-[21px]">Phone:</p>
                    <p className="text-base leading-normal font-normal">+234 901 842 9887</p>
                </div>
                <div>
                    <h1 className="text-[#FF3D00] text-2xl font-semibold leading-normal pb-[17px]">Follow Us</h1>
                    <div className="flex gap-5">
                        <a href=""><img className="cursor-pointer" src={instagram} alt="" /></a>
                        <a href=""><img className="cursor-pointer" src={twitter} alt="" /></a>
                        <a href=""><img className="cursor-pointer" src={facebook} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-[#FFF] h-[82px] text-black flex justify-center items-center">
                <h1>Copyright - 2023 FUBA</h1>
            </div>
        </div>
    );
};

export default Footer;