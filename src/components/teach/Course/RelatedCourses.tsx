import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useGet from "../../../hooks/useGet";
import useLangContext from "../../../hooks/useLangContext";
import { RelatedCoursesType } from "../../../types/course";
import { currentLanguage } from "../../../utils";

interface ParamsType {
  id: string;
}

const breakpoints = {
  991: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1400: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const RelatedCourses = ({ id }: ParamsType) => {
  const { loading, error, makeRequest } = useGet();
  const [courses, setCourses] = useState<RelatedCoursesType[]>();
  const { isEnglish } = useLangContext();
  const { pathname } = useLocation();
  const path = pathname.split("/").slice(0, -1).join("/");

  useEffect(() => {
    const makeFetch = async () => {
      const response = await makeRequest("courses/related/" + id);
      const relatedCourses = response as RelatedCoursesType[];
      setCourses(relatedCourses);
    };
    makeFetch();
  }, [pathname]);

  return (
    <div className="bg-main-color">
      <Container as="section" className="py-4">
        <h1 className="text-white mb-3">
          {isEnglish ? "Most Popular Courses" : "الكورسات الأكثر شهرة"}
        </h1>
        {courses && courses.length > 0 && (
          <>
            {!loading ? (
              <Swiper dir="ltr" spaceBetween={50} breakpoints={breakpoints}>
                {courses.map((course) => (
                  <SwiperSlide key={course._id} dir={isEnglish ? "ltr" : "rtl"}>
                    <div
                      style={{
                        maxWidth: "400px",
                      }}
                      className="pe-3 bg-white rounded-2 d-flex gap-3 mx-auto m-0 ">
                      <div className="course-slider-image">
                        <img className="h-100" src={course.main_img} />
                      </div>
                      <div className="d-flex flex-column justify-content-between overflow-hidden py-2">
                        <h6>{course.name[currentLanguage(isEnglish)]}</h6>
                        <p className="text-black-50 three-lines-p">
                          {course.description[currentLanguage(isEnglish)]}
                        </p>
                        <Link
                          to={`${path}/${course._id}`}
                          className="main-btn mb-0 rounded-0">
                          {isEnglish ? "Explore Now" : "استكشف الآن"}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <h1 className="text-white text-center fw-normal">Loading...</h1>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default RelatedCourses;
