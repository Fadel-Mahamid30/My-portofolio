import Card from "./Card";
import Button from "./Button";
import CutSentence from "./CutSentence";

const CardProject = ({
  img,
  title,
  category,
  url,
  title_color = "#ffffff",
}) => {
  const link = (url) => {
    window.location.href = url;
  }
  return (
    <Card className="p-[16px] sm:p-[24px] ipad:p-[40px] rounded-[10px] ipad:rounded-[20px]">
      <div className="flex flex-col ipad:flex-row gap-6 ipad:gap-12 item-start ipad:items-center mb-9 ipad:mb-0 ipad:mr-9">
        <div className="w-full ipad:w-80 h-48 sm:h-96 ipad:h-48 font-semibold overflow-hidden relative rounded-[10px] flex-shrink-0">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover absolute"
            style={{ objectPosition: "top" }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl ipad:text-3xl font-[600] flex-grow">
            <span style={{ color: title_color }}>
              {CutSentence.firstSentence(title)}
            </span>{" "}
            <span className="text-white">
              {CutSentence.lastSentence(title)}
            </span>
          </h2>
          <p className="text-xl text-sr-gray">{category}</p>
        </div>
      </div>
      <div className="ipad:w-fit w-full flex justify-end">
        <Button handleClick={() => link(url)} disible={url === "#"? true : false} className="w-full hp:w-fit" icon="logo-github">
          <span className="text-base font-semibold text-center block text-nowrap">
            Github
          </span>
        </Button>
      </div>
    </Card>
  );
};

export default CardProject;
