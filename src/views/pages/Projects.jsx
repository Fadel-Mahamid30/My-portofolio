import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CardProject from "../component/CardProject";
import Card from "../component/Card";
import Button from "../component/Button";
import { useState, useEffect } from "react";

const Projects = ({ data, setLanguage }) => {
  const [visible, setVisible] = useState(3);
  const [disabledBtn, setDisabledBtn] = useState(false);

  useEffect(() => {
    if (data?.projects) {
      const countData = data.projects.length;
      setDisabledBtn(countData < visible ? true : false);
    }
  }, [data, visible]);

  const loadData = () => {
    setVisible(visible + 3);
  };

  return (
    <div className="bg-pr-black">
      <Navbar selectLanguage={setLanguage} />

      {/* Project  */}
      {data?.projects && (
        <section id="projects" className="min-h-screen w-full font-poppins">
          <div className="pt-28 hp:pt-36 pb-14 hp:pb-28 px-4 hp:px-6 w-full min-h-screen flex justify-center">
            <div className="max-w-[1260px] w-full">
              <h2 className="text-3xl hp:text-5xl font-semibold text-white w-full mb-7 ipad:mb-14">
                <span className="text-white">My</span>{" "}
                <span className="text-pr-lavender">Projects</span>
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {data.projects.slice(0, visible).map((project, index) => (
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
                  <div className="max-w-[350px]">
                    <h3 className="text-2xl mb-10 hp:mb-0 leading-[40px] text-white font-semibold">
                      Click load more to display more projects
                    </h3>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className="w-full hp:w-fit"
                      icon="reload"
                      variant="primary-light"
                      handleClick={loadData}
                      disible={disabledBtn}
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

export default Projects;
