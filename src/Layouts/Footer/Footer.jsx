import { NavbarItems, SocialMediaData } from "../../assets/dummy";
import LinkSocialMedia from "../../components/ContactUs/LinkSocialMedia";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 lg:fixed -z-10">
      <section className="grid w-full grid-cols-1 gap-2 p-8 px-8 pb-8 leading-relaxed text-slate-300 bg-sky-900 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-14 lg:px-24 lg:p-16 ">
        <ul>
          <h1 className="mt-4 mb-2 text-xl font-bold font-TitrPlus md:text-lg sm:mb-4 text-third-color dark:text-main-color md:mt-0">
            Links
          </h1>

          {NavbarItems.map((item, idx) => {
            return (
              <ul key={idx}>
                <li className="list-disc">
                  <a className="hover:text-third-color" href={item.href}>
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </ul>

        <div>
          <h1 className="mt-4 mb-2 text-xl font-bold font-TitrPlus md:text-lg sm:mb-4 text-third-color dark:text-main-color md:mt-0">
            Social Networks
          </h1>
          <p>You can connect with us by following our social networks</p>
          <div className="flex mt-4">
            {SocialMediaData.map((item, idx) => {
              return <LinkSocialMedia key={idx} href={item.href} icon={item.icon} />;
            })}
          </div>
        </div>

        <div className="flex flex-col ">
          <h1 className="mt-4 mb-2 text-xl font-bold font-TitrPlus md:text-lg sm:mb-4 text-third-color dark:text-main-color md:mt-0">
            Address and Phone Number of the Company
          </h1>
          <p>
            F-22, Devine favor street,Oje, Ibadan
          </p>
          <strong>+2347011307615</strong>
        </div>

        <iframe
          className="h-56 border-2 md:w-80 border-txt-color"
          src="https://maps.google.com/maps?q=university%20of%20ibadan&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" loading="lazy"></iframe>

        {/* <iframe
          className="h-56 border-2 md:w-80 border-txt-color"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d201.04418052069835!2d50.0029880886904!3d36.27089449225425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1689144721569!5m2!1sen!2s"
          loading="lazy"
        ></iframe> */}
      </section>

      <h1
        dir="ltr"
        className="text-lg font-bold text-center text-blue-900 bg-slate-500"
      >
        Created by{" "}
        <a className="text-blue-700" href="https://github.com/Akinz-bobo">
          Adeyemo Akinola
        </a>{" "}
        with ❤️
      </h1>
    </footer>
  );
};

export default Footer;
