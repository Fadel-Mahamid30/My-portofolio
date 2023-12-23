const Footer = ({ contacts, content }) => {
  return (
    <div className="w-full flex justify-center bg-tr-black py-8 hp:py-10 ipad:py-[80px] px-6">
      <div className="max-w-[1260px] w-full h-fit">
        <div className="w-full relative">
          <div className="flex flex-col items-start gap-6 hp:max-w-[460px] w-full">
            <h2 className="text-3xl hp:text-4xl text-white font-semibold">
              {content.title}
            </h2>
            <p className="text-base text-white">{content.descriptions}</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-5">
                <span className="flex flex-shrink-0 h-full items-center text-[42px] text-white">
                  <ion-icon
                    className="block"
                    name="person-circle-outline"
                  ></ion-icon>
                </span>
                <div className="flex flex-col">
                  <p className="text-base text-sr-gray">
                    {contacts.phone.title}
                  </p>
                  <p className="text-base text-white">
                    {contacts.phone.contact}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <span className="flex flex-shrink-0 h-full items-center text-[42px] text-white">
                  <ion-icon
                    className="block"
                    name="navigate-circle-outline"
                  ></ion-icon>
                </span>
                <div className="flex flex-col">
                  <p className="text-base text-sr-gray">
                    {contacts.email.title}
                  </p>
                  <p className="text-base text-white">
                    {contacts.email.contact}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <span className="flex flex-shrink-0 h-full items-center text-[42px] text-white">
                  <ion-icon className="block" name="locate-outline"></ion-icon>
                </span>
                <div className="flex flex-col">
                  <p className="text-base text-sr-gray">
                    {contacts.address.title}
                  </p>
                  <p className="text-base text-white">
                    {contacts.address.contact}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex items-center h-full right-0 top-0 opacity-30 hp:opacity-100">
            <img
              src="../public/assets/icon/icon_footer.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
