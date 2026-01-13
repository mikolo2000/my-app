import { MdContactMail, MdAccountBalance, MdOpenInNew } from "react-icons/md";
import ElementCard from "./elementCard";
function PaymentCard() {
  return (
    <>
      <div className="paymentCard">
        <ElementCard icon={<MdContactMail size={24} />} label={"To Opay"} />
        <ElementCard icon={<MdAccountBalance size={24} />} label={"To Bank"} />
        <ElementCard icon={<MdOpenInNew size={24} />} label={"To Opay"} />
      </div>
    </>
  );
}

export default PaymentCard;
