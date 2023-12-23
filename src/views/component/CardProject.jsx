import Card from "./Card";
import LinkButton from "./LinkButton";
import CutSentence from "./CutSentence";

const CardProject = ({ img, title, url, title_color = "#ffffff" }) => {

  return (
    <Card className="py-[16px] sm:py-[24px] ipad:py-[40px] px-[16px] sm:px-[24px] ipad:px-[40px] rounded-[10px] ipad:rounded-[20px]">
      <div className="flex flex-col ipad:flex-row gap-6 ipad:gap-12 item-start ipad:items-center mb-9 ipad:mb-0 ipad:mr-9">
        <div className="w-full ipad:w-80 h-48 sm:h-96 ipad:h-48 font-semibold overflow-hidden relative rounded-[10px] flex-shrink-0">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover absolute"
            style={{ objectPosition: "top" }}
          />
        </div>
        <h2 className="text-2xl ipad:text-3xl font-[600] max-w-[400px] flex-grow">
          <span style={{ color: title_color }}>{CutSentence.firstSentence(title)}</span>{" "}
          <span className="text-white">{CutSentence.lastSentence(title)}</span>
        </h2>
      </div>
      <div className="ipad:w-fit w-full flex justify-end">
        <LinkButton url={url}>
          <span className="text-base w-[98px] font-semibold text-center block whitespace-no-wrap">
            View Details
          </span>
        </LinkButton>
      </div>
    </Card>
  );
};

export default CardProject;
