import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const About = ({ data, setLanguage }) => {
  return (
    <>
      <section className="min-h-screen min-w-screen bg-pr-black">
        <Navbar selectLanguage={setLanguage} />
        <div className="pt-28 px-6 w-full min-h-screen flex justify-center">
          <div className="max-w-[1260px] w-full">
            <div
              style={{ height: "100%" }}
              className="w-full flex items-center justify-center"
            >
              <h1 className="text-4xl text-white font-bold">About</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        {data?.contacts && data?.footerContent && (
          <Footer contacts={data.contacts} content={data.footerContent} />
        )}
      </section>
    </>
  );
};

export default About;
