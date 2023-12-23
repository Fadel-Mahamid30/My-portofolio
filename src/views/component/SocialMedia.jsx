// import CircleIcon from "./CircleIcon";

const SocialMedia = ({ social, className="" }) => {
  const fb = social.facebook;
  const ig = social.instagram;
  const wa = social.whatsApp;
  const ln = social.linkedIn;

  return (
    <div className={`flex flex-row gap-7 items-center w-fit ${className}`}>
      <p className="text-white font-semibold text-xl">Find Me On</p>
      <CircleIcon url={fb.url} icon="logo-facebook" />
      <CircleIcon url={ig.url} icon="logo-instagram" />
      <CircleIcon url={wa.url} icon="logo-whatsapp" />
      <CircleIcon url={ln.url} icon="logo-linkedin" />
    </div>
  );
};

const CircleIcon = ({ url, icon }) => {
  return (
    <a
      href={url}
      className="flex flex-row items-center rounded-full text-2xl text-pr-lavender justify-center w-[50px] h-[50px] bg-pr-lavender bg-opacity-10"
    >
      <ion-icon className="block" name={icon}></ion-icon>
    </a>
  );
};

export default SocialMedia;
