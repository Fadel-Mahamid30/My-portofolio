import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import ScrollToTop from "../component/ScrollToTop";

// Aos
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ data, setLanguage }) => {
  AOS.init();

  return (
    <div className="bg-pr-black overflow-hidden w-full">
      <ScrollToTop />
      <Navbar selectLanguage={setLanguage} />

      {data?.profile && (
        <section id="#about" className="min-h-screen w-full font-poppins">
          <div className="pt-28 hp:pt-36 pb-14 hp:pb-20 px-4 hp:px-6 w-full min-h-screen flex justify-center">
            <div className="max-w-[1260px] w-full">
              <div className="flex flex-col tablet:flex-row gap-10 w-full">
                <div
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="w-full tablet:max-w-[400px] max-h-[500px] flex-shrink-0 rounded-xl overflow-hidden"
                >
                  <img
                    src={data.profile.foto_profile_2}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-10">
                  <div
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="flex flex-col gap-5 tablet:gap-8"
                  >
                    <h1 className="text-3xl hp:text-5xl font-semibold text-white">
                      About Me
                    </h1>
                    <div className="flex flex-col gap-4 hp:gap-5">
                      <div className="h-[2px] w-20 bg-sr-gray rounded-sm"></div>
                      <p className="text-lg text-white text-justify font-light">
                        {data.profile.about}
                      </p>
                    </div>
                  </div>
                  {data?.educations && (
                    <div
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      className="flex flex-col gap-5"
                    >
                      <h3 className="text-2xl hp:text-3xl font-semibold text-white">
                        Educations
                      </h3>
                      {data.educations.map((edu, index) => (
                        <Card
                          className="p-4 rounded-[10px] relative"
                          key={index}
                        >
                          <div className="flex flex-row w-full gap-6">
                            <div className="hidden miniHp:flex w-[70px] h-[70px] rounded-lg items-center justify-center flex-shrink-0 bg-white">
                              <img src={edu.img} alt="" className="w-[50px]" />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                              <div className="flex flex-col gap-1">
                                <div className="flex gap-4 flex-row items-center mb-2 miniHp:mb-0">
                                  <div className="flex miniHp:hidden w-[60px] h-[60px] rounded-lg items-center justify-center flex-shrink-0 bg-white">
                                    <img
                                      src={edu.img}
                                      alt=""
                                      className="w-[50px]"
                                    />
                                  </div>
                                  <h4 className="text-xl hp:text-2xl font-semibold text-pr-lavender">
                                    {edu.universitas}
                                  </h4>
                                </div>
                                <p className="text-lg text-sr-gray">
                                  {edu.prodi}
                                </p>
                                <p className="text-lg text-sr-gray">
                                  {edu.study_period}
                                </p>
                              </div>
                              <p className="text-lg font-light text-white">
                                {edu.descriptions}
                              </p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}

                  {data?.careers && (
                    <div
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      className="flex flex-col gap-5"
                    >
                      <h3 className="text-2xl hp:text-3xl font-semibold text-white">
                        Careers
                      </h3>
                      {data.careers.map((career, index) => (
                        <Card
                          className="p-4 rounded-[10px] relative"
                          key={index}
                        >
                          <div className="flex flex-row w-full gap-6">
                            <div className="hidden miniHp:flex w-[70px] h-[70px] rounded-lg items-center justify-center flex-shrink-0 bg-white">
                              <img
                                src={career.img}
                                alt=""
                                className="w-[50px]"
                              />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                              <div className="flex flex-col gap-1">
                                <div className="flex gap-4 flex-row items-center mb-2 miniHp:mb-0">
                                  <div className="flex miniHp:hidden w-[60px] h-[60px] rounded-lg items-center justify-center flex-shrink-0 bg-white">
                                    <img
                                      src={career.img}
                                      alt=""
                                      className="w-[50px]"
                                    />
                                  </div>
                                  <h4 className="text-xl hp:text-2xl font-semibold text-pr-lavender">
                                    {career.position}
                                  </h4>
                                </div>
                                <p className="text-lg text-sr-gray">
                                  {career.company}
                                </p>
                                <p className="text-lg text-sr-gray">
                                  {career.working_period}
                                </p>
                              </div>
                              <p className="text-lg hp:text-lg font-light text-white">
                                {career.descriptions}
                              </p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}

                  {data?.certificate && (
                    <div className="flex flex-col gap-5">
                      <h3 className="text-2xl hp:text-3xl font-semibold text-white">
                        Certificate
                      </h3>
                      {data.certificate.map((value, index) => (
                        <div
                          data-aos="fade-left"
                          data-aos-delay={index == 0 ? 100 : 100 * (index + 2)}
                          data-aos-duration="1000"
                          key={index}
                        >
                          <Card className="p-4 rounded-[10px] relative">
                            <div className="flex flex-row w-full gap-6">
                              <div className="hidden miniHp:flex w-[70px] h-[70px] rounded-lg items-center justify-center flex-shrink-0 bg-white">
                                <img
                                  src={value.img}
                                  alt=""
                                  className="w-[50px]"
                                />
                              </div>
                              <div className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-1">
                                  <div className="flex gap-4 flex-row items-center mb-2 miniHp:mb-0">
                                    <div className="flex miniHp:hidden w-[60px] h-[60px] rounded-lg items-center justify-center flex-shrink-0 bg-white">
                                      <img
                                        src={value.img}
                                        alt=""
                                        className="w-[50px]"
                                      />
                                    </div>
                                    <h4 className="text-xl hp:text-2xl font-semibold text-pr-lavender">
                                      {value.name}
                                    </h4>
                                  </div>
                                  <p className="text-lg text-sr-gray">
                                    {value.publishing_organization}
                                  </p>
                                  <p className="text-lg text-sr-gray">
                                    {value.credential_id}
                                  </p>
                                  <p className="text-lg text-sr-gray">
                                    {value.validity_period}
                                  </p>
                                </div>
                                <p className="text-lg font-light text-white">
                                  <span className="font-semibold">Skill: </span>
                                  {value.skill}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

export default About;
