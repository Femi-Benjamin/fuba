import { Link } from 'react-router-dom'

import Appbar from '../../containers/Appbar';

const Signup = () => {
  return (
    <div className=''>
      <Appbar />
      <div className='flex'>
        <div className='w-[50%] h-screen bg-cover bg-no-repeat bg-[url("/fubaman.png")] flex justify-center items-center'>
        <Link to="/learner-signup">
          <div className='bg-white w-[328px] h-[236px] rounded-lg shadow flex justify-center items-center cursor-pointer'>
          <div>
            <p className='mb-5 text-xl font-semibold text-center text-'>Register as</p>
            <p className='text-3xl font-bold text-center'>Learner</p>
          </div>
          </div>
        </Link>
        </div>
        <div className='w-[50%] h-screen bg-cover bg-no-repeat bg-[url("/fubalaptop.png")] flex justify-center items-center'>
        <Link to="/tutor-signup">
          <div className='bg-white w-[328px] h-[236px] rounded-lg shadow flex justify-center items-center cursor-pointer'>
          <div>
            <p className='mb-5 text-xl font-semibold text-center text-'>Register as</p>
            <p className='text-3xl font-bold text-center'>Tutor</p>
          </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup