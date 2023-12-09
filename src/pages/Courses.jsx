import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

import coursesData from "../assets/static/courseData";
import Appbar from "../containers/Appbar";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <>
        <Appbar />
      </>
      <div className='bg-[url("/courses.png")] h-[400px] w-full bg-contain flex justify-center items-center mb-40'>
        <div className="text-white flex items-center gap-2">
          <div>
            <p className="text-xl font-medium">Home</p>
          </div>
          <div>
            <img src="/swap.svg" alt="" />
          </div>
          <div>
            <p className="text-xl font-medium">Courses</p>
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
          <>
            <p className="mb-2">Popular Courses</p>
          </>
          <div className="grid grid-cols-3 grid-row-2">
            {coursesData.map((course) => (
              <div
                onClick={() => {
                  navigate("/course_details");
                }}
                key={course.id}
                className="w-[400px] shadow bg-white h-[529px] rounded-lg mb-20 cursor-pointer"
              >
                <div>
                  <img
                    className="rounded-tl-lg rounded-tr-lg"
                    src={course.image}
                    alt=""
                  />
                </div>
                <div className="px-12">
                  <img
                    className="mb-5 -mt-6 rounded-full"
                    src={course.instructorImage}
                    alt=""
                  />
                  <p className="text-sm text-[#FF3D00] mb-4">
                    {course.instructorName}
                  </p>
                  <h2 className="mb-2 text-xl font-semibold">{course.title}</h2>
                  {/* Render stars based on the rating */}
                  <img className="mb-3" src="/stars.svg" alt="" />
                  <p className="mb-6 text-lg font-semibold">#{course.price}</p>
                  <hr />
                  <div className="flex items-center gap-5 mt-6">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
