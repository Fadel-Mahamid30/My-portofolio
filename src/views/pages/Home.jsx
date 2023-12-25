import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LinkButton from "../component/LinkButton";
import Button from "../component/Button";
import SocialMedia from "../component/SocialMedia";
import CardProject from "../component/CardProject";
import Card from "../component/Card";
import { useNavigate } from "react-router-dom";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../public/css/swiper.css";

const Home = ({ data, setLanguage }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-pr-black">
      <Navbar selectLanguage={setLanguage} />

      {/* Home */}
      {data?.profile && (
        <section id="profile" className="min-h-screen w-full font-poppins">
          <div className="pt-32 pb-14 hp:pb-20 px-4 hp:px-6 w-full min-h-screen flex justify-center">
            <div className="max-w-[1260px] w-full">
              <div className="w-full flex flex-col-reverse tablet:flex-row items-center justify-between h-full gap-6 hp:gap-9">
                <div className="w-full tablet:max-w-[640px]">
                  <div className="flex gap-10 flex-col">
                    <div className="flex flex-col gap-1 hp:gap-3">
                      <h1 className="text-4xl hp:text-5xl leading-normal hp:leading-[72px] font-semibold">
                        <span className="text-white">{data.profile.intro}</span>{" "}
                        <span className="text-pr-lavender">
                          {data.profile.name}
                        </span>
                      </h1>
                      <h6 className="text:lg hp:text-xl text-sr-gray">
                        {data.profile.occupation}
                      </h6>
                      <h2 className="text-2xl hp:text-3xl text-white font-semibold">
                        {data.profile.regards}
                      </h2>
                    </div>

                    <div className="flex flex-col gap-5">
                      <div className="h-[2px] w-20 bg-sr-gray rounded-sm"></div>
                      <p className="text-lg text-white font-light">
                        {data.profile.visi}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 hp:flex-row hp:gap-6 items-center">
                      <LinkButton
                        className="w-full hp:w-44"
                        url="#contactMe"
                        icon="call"
                        variant="primary-lavender"
                      >
                        <span className="text-base font-semibold block">
                          Contact Me
                        </span>
                      </LinkButton>
                      <Button
                        className="w-full hp:w-44 hover:bg-white hover:text-pr-black"
                        handleClick={() => navigate("/about")}
                        variant="outline-light"
                      >
                        <span className="text-base font-semibold block">
                          About Me
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-fit flex flex-col gap-5 hp:gap-10 items-center hp:items-start">
                  <div className="max-w-[250px] hp:max-w-[450px] tablet:max-w-[310px] overflow-hidden">
                    <img
                      src={data.profile.foto_profile_1}
                      alt=""
                      className="w-full"
                    />
                  </div>

                  {data?.contacts && (
                    <SocialMedia
                      social={data.contacts}
                      className="gap-4 hp:flex-shrink-0 noteBook:gap-7 scale-90 hp:scale-100"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Home */}

      {/* Project  */}
      {data?.projects && (
        <section id="projects" className="min-h-screen w-full font-poppins">
          <div className="py-14 hp:py-20 px-4 hp:px-6 w-full min-h-screen flex justify-center">
            <div className="max-w-[1260px] w-full">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white w-full text-center mb-14">
                Latest Project
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {data.projects.slice(0, 3).map((project, index) => (
                  <CardProject
                    img={project.img}
                    title={project.title}
                    category={project.category}
                    url={project.url}
                    title_color={project.title_color}
                    key={index}
                  />
                ))}
                <Card className="p-[16px] sm:p-[24px] ipad:p-[40px] rounded-[10px] ipad:rounded-[20px]">
                  <div className="flex flex-col gap-3 mb-10 ipad:mb-0">
                    <h3 className="text-2xl text-white font-semibold">
                      See More Projects
                    </h3>
                    <p className="text-lg text-sr-gray">
                      See more projects I have made
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className="w-full hp:w-fit"
                      icon="list-circle"
                      variant="primary-light"
                    >
                      <span className="text-base font-semibold block">
                        See More
                      </span>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Project  */}

      {/* Advantages  */}
      {data?.advantages && (
        <section id="advantages" className="w-full font-poppins">
          <div className="py-14 hp:py-20 px-4 hp:px-6 w-full flex justify-center">
            <div className="max-w-[1260px] w-full">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white w-full text-center mb-14">
                Why Here Me
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 noteBook:grid-cols-4 gap-9 justify-start">
                {data.advantages.map((advant, index) => (
                  <div
                    className={`w-full flex-shrink-0 justify-start items-center flex flex-col gap-6 ipad:gap-10`}
                    key={index}
                  >
                    <img
                      src={advant.icon}
                      className="w-[200px] ipad:w-[236px] h-[200px] ipad:h-[236px]"
                      alt=""
                    />
                    <div className="flex flex-col justify-center gap-2 ipad:gap-4">
                      <h3 className="text-[28px] text-white font-semibold w-full text-center">
                        {advant.advantage}
                      </h3>
                      <p className="text-sr-gray text-lg w-full text-justify">
                        {advant.descriptions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Advantages  */}

      {/* Testimonial  */}
      {data?.testimonials && (
        <section id="testimonials" className="w-full font-poppins">
          <div className="py-14 hp:py-20">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl max-w-[1260px] px-4 hp:px-6 font-semibold text-white w-full text-center mb-14">
                Testimonials
              </h2>
              <div className="w-full bg-tr-black py-10 flex px-4 hp:px-6 justify-center">
                <div className="max-w-[1260px] w-full ">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    style={{
                      paddingBottom: "48px",
                      paddingLeft: "43px",
                      paddingRight: "43px",
                    }}
                  >
                    {data.testimonials.map((testi, index) => (
                      <SwiperSlide key={index}>
                        <div className="w-full flex flex-col ipad:flex-row items-start gap-10 bg-tr-black">
                          <div className="p-0 ipad:p-4 w-full ipad:w-fit bg-qt-black flex-shrink-0 flex rounded-xl">
                            <img
                              src={testi.img}
                              alt=""
                              className="w-full h-full ipad:h-60"
                            />
                          </div>
                          <div className="flex flex-col gap-5 pt-0 ipad:pt-4">
                            <div className="flex flex-col gap-1">
                              <h4 className="text-[28px] font-semibold text-pr-lavender">
                                {testi.name}
                              </h4>
                              <p className="text-white text-lg font-medium">{testi.as}</p>
                            </div>
                            <p className="text-sr-gray text-lg font-light">
                              {testi.evaluation}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Testimonial  */}

      {/* Skill */}
      {data?.skills && (
        <section id="skills" className="w-full font-poppins">
          <div className="pt-14 pb-14 hp:pt-20 hp:pb-24 px-4 hp:px-6 w-full flex justify-center">
            <div className="max-w-[1260px] w-full">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white w-full text-center mb-9 hp:mb-14">
                Skills and Tools
              </h2>
              <div className="w-full">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={0}
                  slidesPerView={2}
                  loop={true}
                  breakpoints={{
                    500: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    600: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    700: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    800: {
                      slidesPerView: 4,
                      spaceBetween: 0,
                    },
                    900: {
                      slidesPerView: 4,
                      spaceBetween: 0,
                    },
                    1145: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  style={{
                    paddingBottom: "48px"
                  }}
                >
                  {data.skills.map((skill, index) => (
                    <SwiperSlide className="w-fit" key={index}>
                      <div className="flex-shrink-0 w-[182px] h-[182px] scale-[0.65] miniHp:scale-75 miniTablet:scale-90 tablet:scale-100 grid items-center justify-center box-skill">
                        <img className="w-28 flex-shrink-0" src={skill.img} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Skill  */}

      {/* Footer  */}
      <section id="contactMe">
        {data?.contacts && data?.footerContent && (
          <Footer contacts={data.contacts} content={data.footerContent} />
        )}
      </section>
      {/* End Footer */}
    </div>
  );
};

export default Home;
