import heroimage from '../../assets/fubaheroimage.svg';
import { Button } from '../../containers/Appbar';

const Hero = () => {
	return (
		<div className='bg-[#E9E9E9] h-[557px] flex items-center justify-between mb-16 2xl:px-56'>
			<div className='pl-10'>
				<h1 className='mb-3 text-5xl font-semibold'>Your Freelance Journey Starts Here.</h1>
				<p className='mb-12'>Get access to over 1,000 freelance courses</p>
				<Button
					link="/signup"
					background='bg-[#280D46]'
					text='Get Started'
					color='text-white'
					borderColor='border-[#280D46]'
				/>
			</div>
			<div>
				<img
					src={heroimage}
					alt='heroimage'
				/>
			</div>
		</div>
	);
};

export default Hero;
