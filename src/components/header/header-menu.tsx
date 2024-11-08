import { useDictionary } from "../../hooks/use-dictionary";
import useOnlyHome from "../../hooks/use-only-home";
import AnchorLink from "../anchor-link";
import Instagram from "../icons/instagram";
import Linkedin from "../icons/linkedin";
import Twitter from "../icons/twitter";

export default function HeaderMenu({ toggleMenu }: { toggleMenu: () => void }) {
  const bookDemoText = useDictionary("book-a-demo");
  const isHome = useOnlyHome();
  const textClass = " active:text-[#C2ECF1]";
  return (
    <div className="bg-white pt-[7.2843rem] pb-[1.4218rem] px-4 flex flex-col text-[#7BD6E1] active:text-[#14737F] w-full h-full">
      <div className="flex flex-col gap-[3rem] text-[2.25rem] leading-[1.21em]  font-semibold grow">
        <ul className=" flex flex-col items-start gap-[1.575rem] ">
          <li onClick={toggleMenu} className={textClass}>
            <AnchorLink href="features">Features</AnchorLink>
          </li>
          {isHome && (
            <li onClick={toggleMenu} className={textClass}>
              <AnchorLink href="onboarding">Onboarding</AnchorLink>
            </li>
          )}
          <li onClick={toggleMenu} className={textClass}>
            <AnchorLink href="book-a-demo">{bookDemoText}</AnchorLink>
          </li>
          {/* <li onClick={toggleMenu} className={textClass}>
                    <AnchorLink href='pricing'>Pricing</AnchorLink>
                </li> */}
        </ul>
      </div>
      <div className="text-[0.875rem] leading-[1.21em] font-light text-[#14737F]">
        <span className="font-bold">Right Property</span>
        <br />
        <br />
        Highland House 401
        <br />
        165 The Broadway,
        <br />
        SW19 1NE
        <br />
        London,United Kingdom
        <br />
        <br />
      </div>
      <div className="mobile:flex justify-between items-center hidden ">
        <div className="flex gap-[0.8125rem] text-[#14737F] ">
          <a href="https://twitter.com/ukrightproperty" target="_blank">
            {" "}
            <Twitter className=" w-6" />{" "}
          </a>
          <a href="https://www.instagram.com/rightpropertyapp/" target="_blank">
            {" "}
            <Instagram className=" w-6" />{" "}
          </a>
          <a
            href="https://uk.linkedin.com/company/rightpropertyapp"
            target="_blank"
          >
            {" "}
            <Linkedin className=" w-6" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
