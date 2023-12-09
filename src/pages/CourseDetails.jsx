import Appbar from "../containers/Appbar";
import Footer from "./components/Footer";

const CourseDetails = () => {
  return (
    <div className="">
      <>
        <Appbar />
      </>
      <div className='bg-[url("/courses.png")] h-[400px] w-full bg-contain flex justify-center items-center mb-14'>
        <div className="text-white flex items-center gap-2">
          <div>
            <p className="text-xl font-medium">Home</p>
          </div>
          <div>
            <img src="/swap.svg" alt="" />
          </div>
          <div>
            <p className="text-xl font-medium">Course Details</p>
          </div>
        </div>
      </div>

      <div>
        <div className="2xl:px-56">
          <div className="flex items-center justify-center mb-3">
            <div>
              <p className="text-sm text-[#FF3D00] mb-2 text-center">
                Checkout New List
              </p>
              <p className="text-3xl font-semibold text-center">
                Explore Courses
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
