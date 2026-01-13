import {
  MdNetworkCell,
  MdNetworkPing,
  MdOpenInNew,
  MdAddBox,
  MdCheckBox,
  MdSportsSoccer,
  MdTv,
  MdAttachMoney,
} from "react-icons/md";
import ElementCard from "./elementCard";
function SalesItem() {
  return (
    <>
      <div className="salesItem">
        <ElementCard icon={<MdNetworkCell size={24} />} label={"Airtime"} />
        <ElementCard icon={<MdNetworkPing size={24} />} label={"Data"} />
        <ElementCard icon={<MdSportsSoccer size={24} />} label={"Betting"} />
        <ElementCard icon={<MdTv size={24} />} label={"TV"} />
        <ElementCard icon={<MdAddBox size={24} />} label={"Safebox"} />
        <ElementCard
          icon={<MdAttachMoney size={24} />}
          label={"Spend & Save"}
        />
        <ElementCard icon={<MdCheckBox size={24} />} label={"Check-in"} />
        <ElementCard icon={<MdOpenInNew size={24} />} label={"More"} />
      </div>
    </>
  );
}

export default SalesItem;
