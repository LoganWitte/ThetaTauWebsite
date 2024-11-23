import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";

const Footer = () => {
  return (
    <div className="border-t border-black flex align-center justify-center">
      <div className="p-3">
        <strong>Theta Tau</strong>
        <br />
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Rho Gamma Chapter
        </a>
        <br />
        <a
          href="https://www.ucf.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          University of Central Florida
        </a>
        <br />
        <a
          href="https://www.thetataupg.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          2020 Theta Tau Rho Gamma Chapter
        </a>
      </div>
      <div className="p-3">
        <strong>General</strong>
        <br />
        <a
          href="https://thetatau.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          National Theta Tau
        </a>
        <br />
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          About
        </a>
      </div>
      <div className="p-3">
        <strong>Recruitment</strong>
        <br />
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          FAQ
        </a>
        <br />
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Apply
        </a>
      </div>
      <div className="p-3 flex flex-col align-center">
        <strong className="text-center">Socials</strong>
        <div className="flex">
          <a
            href="https://www.instagram.com/thetatau.ucf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="px-1" src={instagram} alt="instagram logo" />
          </a>
          <a
            href="https://www.facebook.com/ThetaTauPG/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="px-1" src={facebook} alt="facebook logo" />
          </a>
          <a
            href="https://x.com/ThetaTauUCF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="px-1" src={twitter} alt="x/twitter logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
