import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/fubalogo.svg';
import search from '../assets/fubasearch.svg';

const Appbar = () => {
	const [searchCourse, setSearchCourse] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();

		alert(`${searchCourse} not available`);
		setSearchCourse('');
	};

	return (
		<div className='flex items-center justify-between px-3 py-1 bg-white 2xl:px-56'>
			<div>
				<img
					src={logo}
					alt='fuba logo'
				/>
			</div>
			<div>
				<ul className='flex gap-5 2xl:gap-8'>
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>About Us</li>
					<li className='cursor-pointer'>Courses</li>
					<li className='cursor-pointer'>Contact Us</li>
				</ul>
			</div>
			<div>
				<form onSubmit={handleSearch}>
					<div className='flex items-center justify-between border border-gray-600 rounded w-80'>
						<div>
							<input
								onChange={(e) => setSearchCourse(e.target.value)}
								className='p-3 w-[260px] bg-transparent outline-none placeholder:text-black'
								placeholder='What do you want to learn?'
								type='text'
							/>
						</div>
						<div>
							<button className='bg-[#280D46] px-4 cursor-pointer h-[53px] flex justify-center items-center'>
								<img
									src={search}
									alt='search icon'
								/>
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className='flex items-center gap-3'>
				<div>
					<Button
						link="/login"
						background='bg-white'
						text='Login'
						color='text-black'
					/>
				</div>
				<div>
					<Button
						link="/signup"
						background='bg-[#280D46]'
						text='Sign Up'
						color='text-white'
            borderColor="border-[#280D46]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Appbar;

export const Button = ({ background, text, color, borderColor, link }) => {
	return (
		<Link to={link}>
		<button
			className={`${background} border ${borderColor} py-2 px-8 rounded ${color} h-[53px]`}>
			{text}
		</button>
		</Link>
	);
};