import Appbar from '../containers/Appbar';
import Hero from './pagesections/Hero';
import { Button } from '../containers/Appbar';
import coursesData from '../assets/static/courseData';
import Footer from './components/Footer';

const Home = () => {
	return (
		<div>
			<>
				<Appbar />
			</>
			<>
				<Hero />
				<SecondSection />
				<AboutUs />
				<Courses />
				<Services />
				<AboutTeam />
				<ContactUs />
				<Footer />
			</>
		</div>
	);
};

export default Home;

const SecondSection = () => {
	const cardData = [
		{
			id: 1,
			image: '/fubaskill.svg',
			title: 'Learn Skills',
			description: 'Description for Card 1',
		},
		{
			id: 2,
			image: '/fubaexperts.svg',
			title: 'Expert Tutors',
			description: 'Description for Card 2',
		},
		{
			id: 3,
			image: '/fubacert.svg',
			title: 'Certification',
			description: 'Description for Card 2',
		},
	];
	return (
		<div className='flex items-center justify-between gap-5 px-20 mb-16 2xl:px-56'>
			{cardData.map((card) => (
				<div
					key={card.id}
					className='bg-white p-10 w-[400px] h-[125px] shadow flex items-center gap-2'>
					<div>
						<img
							src={card.image}
							alt={card.title}
							className=''
						/>
					</div>
					<div>
						<h2 className='text-xl font-bold'>{card.title}</h2>
						<p className='text-sm'>{card.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

const AboutUs = () => {
	return (
		<div
			id='about'
			className='flex gap-5 pr-5 mb-16 2xl:px-56'>
			<div>
				<img
					src='/fubalearning.png'
					alt=''
				/>
			</div>
			<div className='max-w-xl'>
				<div className='mb-3'>
					<p className='text-[#FF3D00] text-xl'>Fuba Learning</p>
				</div>
				<div className='mb-6'>
					<h1 className='text-4xl font-bold'>Welcome to all access learning center</h1>
				</div>
				<div className='mb-4'>
					<p className='text-lg'>
						At Fuba, we believe that the future of work is driven by the power of freelancing. We are a
						passionate community dedicated to helping you unlock your full potential and achieve success in the
						world of freelancing.
					</p>
				</div>
				<div className='mb-9'>
					<div className='flex items-center gap-2 mb-2'>
						<div>
							<img
								src='/charm_circle-tick.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Get unlimited access to 1000+ of our top courses</p>
						</div>
					</div>

					<div className='flex items-center gap-2 mb-2'>
						<div>
							<img
								src='/charm_circle-tick.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Get access to updated topics</p>
						</div>
					</div>

					<div className='flex items-center gap-2 mb-2'>
						<div>
							<img
								src='/charm_circle-tick.svg'
								alt=''
							/>
						</div>
						<div>
							<p>Find the best qualified tutors</p>
						</div>
					</div>
				</div>
				<div>
					<Button
						link='/signup'
						background='bg-[#280D46]'
						text='Explore'
						color='text-white'
						borderColor='border-[#280D46]'
					/>
				</div>
			</div>
		</div>
	);
};

const Courses = () => {
	return (
		<div className='mb-32 2xl:px-56'>
			<div className='flex items-center justify-center mb-3'>
				<div>
					<p className='text-sm text-[#FF3D00] mb-2 text-center'>Checkout New List</p>
					<p className='text-3xl font-semibold text-center'>Explore Courses</p>
				</div>
			</div>
			<>
				<p className='mb-2'>Popular Courses</p>
			</>
			<div className='grid grid-cols-3 grid-row-2'>
				{coursesData.map((course) => (
					<div
						key={course.id}
						className='w-[400px] shadow bg-white h-[529px] rounded-lg mb-20'>
						<div>
							<img
								className='rounded-tl-lg rounded-tr-lg'
								src={course.image}
								alt=''
							/>
						</div>
						<div className='px-12'>
							<img
								className='mb-5 -mt-6 rounded-full'
								src={course.instructorImage}
								alt=''
							/>
							<p className='text-sm text-[#FF3D00] mb-4'>{course.instructorName}</p>
							<h2 className='mb-2 text-xl font-semibold'>{course.title}</h2>
							{/* Render stars based on the rating */}
							<img
								className='mb-3'
								src='/stars.svg'
								alt=''
							/>
							<p className='mb-6 text-lg font-semibold'>#{course.price}</p>
							<hr />
							<div className='flex items-center gap-5 mt-6'>
								<div>
									<p>{course.modules} Modules</p>
								</div>
								<div>
									<p>{course.hours} Hours</p>
								</div>
								<div>
									<p>{course.difficulty}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex items-center justify-center'>
				<Button
					link='/courses'
					background='bg-[#280D46]'
					text='VIEW ALL COURSES'
					color='text-white'
					borderColor='border-[#280D46]'
				/>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<div className='flex items-center justify-between mb-32 2xl:px-56'>
			<div className='w-[402px] h-[275px] bg-[#E3E3E3] shadow rounded flex justify-center items-center px-12'>
				<div>
					<div className='flex justify-center'>
						<img
							className='mb-2'
							src='/ml.svg'
							alt=''
						/>
					</div>
					<p className='mb-1 text-lg font-semibold text-center'>Online Training</p>
					<p className='text-center'>
						We offer a full range of professional courses from well renowed tutors all over the world.
					</p>
				</div>
			</div>

			<div className='w-[402px] h-[275px] bg-[#E3E3E3] shadow rounded flex justify-center items-center px-12'>
				<div>
					<div className='flex justify-center'>
						<img
							className='mb-2'
							src='/ml.svg'
							alt=''
						/>
					</div>
					<p className='mb-1 text-lg font-semibold text-center'>Online Training</p>
					<p className='text-center'>
						We offer a full range of professional courses from well renowed tutors all over the world.
					</p>
				</div>
			</div>

			<div className='w-[402px] h-[275px] bg-[#E3E3E3] shadow rounded flex justify-center items-center px-12'>
				<div>
					<div className='flex justify-center'>
						<img
							className='mb-2'
							src='/ml.svg'
							alt=''
						/>
					</div>
					<p className='mb-1 text-lg font-semibold text-center'>Online Training</p>
					<p className='text-center'>
						We offer a full range of professional courses from well renowed tutors all over the world.
					</p>
				</div>
			</div>
		</div>
	);
};

const AboutTeam = () => {
	return (
		<div className='flex items-center justify-between mb-20 2xl:px-56'>
			<div>
				<img
					className='mb-2'
					src='/team.png'
					alt=''
				/>
			</div>
			<div className='max-w-2xl'>
				<p className='mb-3 text-3xl font-semibold text-center'>About Our Team</p>
				<p className='text-center'>
					We are a dynamic group of highly skilled professionals passionate about creating exceptional digital
					experiences. With a deep understanding of the latest web technologies and trends, we strive to
					deliver innovative and cutting-edge solutions that drive business growth and exceed client
					expectations.
				</p>
				<p className='text-center'>
					We take great pride in our commitment to nurturing and developing individuals through our
					comprehensive selection of professional courses, with a primary focus on freelancing, software
					development, and blockchain expertise. Our confidence in the calibre of our course offerings is
					rooted in their meticulous design, tailored to meet the needs of novices, junior professionals, and
					seasoned experts alike.
				</p>
			</div>
		</div>
	);
};

const ContactUs = () => {
	return (
		<div id="contact" className='flex items-center justify-between mb-32 2xl:px-56'>
			<div>
				<img
					className='mb-2'
					src='/address.png'
					alt=''
				/>
			</div>
			<div>
				<img
					className='mb-2'
					src='/emailcard.png'
					alt=''
				/>
			</div>
			<div>
				<img
					className='mb-2'
					src='/phonecard.png'
					alt=''
				/>
			</div>
		</div>

	);
};
