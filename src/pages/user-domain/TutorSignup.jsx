import { useNavigate } from 'react-router-dom';

import fubalogo from '../../assets/fubalogo.svg';

const TutorSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault() ;

    navigate("/dashboard")
  }
  
	return (
		<div className='flex '>
			<div className='h-screen w-[50%]'>
				<img
					src='/fubatutorman.png'
					alt=''
				/>
			</div>
			<div className='w-[50%] flex justify-center'>
				<div className=''>
					<div className='flex justify-center'>
						<img
							className=''
							src={fubalogo}
							alt=''
						/>
					</div>

					<div>
						<p className='text-2xl text-center'>Sign Up</p>
					</div>

					<div className='mb-9'>
						<form onSubmit={handleSubmit}>
							<label>
								Full name
								<input
									className='block w-[559px] p-3 border border-[#000] rounded outline-none mb-7'
									placeholder='Enter your name'
									type='text'
								/>
							</label>
							<label>
								Email
								<input
									className='block w-[559px] p-3 border border-[#000] rounded outline-none mb-7'
									placeholder='Enter your email'
									type='email'
								/>
							</label>
							<label>
								Password
								<input
									className='block w-[559px] p-3 border border-[#000] rounded outline-none mb-7'
									placeholder='Enter your password'
									type='text'
								/>
							</label>
							<label>
								Confirm password
								<input
									className='block w-[559px] p-3 border border-[#000] rounded outline-none mb-7'
									placeholder='Confirm password'
									type='text'
								/>
							</label>
							<button className='text-center text-white bg-[#280D46] w-[559px] p-3 rounded'>SIGN UP</button>
						</form>
					</div>

					<>
						<p className='text-sm text-center'>
							By creating an account, you agree with our Terms of service
							<br /> and Privacy Policy
						</p>
					</>
				</div>
			</div>
		</div>
	);
};

export default TutorSignup;
