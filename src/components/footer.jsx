import ElementCard from "./elementCard";
import {
  MdNetworkCell,
  MdNetworkPing,
  MdTv,
  MdSportsSoccer,
} from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <ElementCard icon={<MdNetworkCell size={24} />} label={"Airtime"} />
        <ElementCard icon={<MdNetworkPing size={24} />} label={"Data"} />
        <ElementCard icon={<MdSportsSoccer size={24} />} label={"Betting"} />
        <ElementCard icon={<MdTv size={24} />} label={"TV"} />
      </div>
    </>
  );
};

export default Footer;
