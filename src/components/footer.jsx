import ElementCard from "./elementCard";
import {
  MdHome,
  MdMoney,
  MdPerson2,
  MdReport,
  MdCardMembership,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <ElementCard
          onClick={() => navigate("/")}
          icon={<MdHome size={24} />}
          label={"Home"}
        />
        <ElementCard
          onClick={() => navigate("/rewards")}
          icon={<MdMoney size={24} />}
          label={"Reward"}
        />
        <ElementCard
          onClick={() => navigate("/finance")}
          icon={<MdReport size={24} />}
          label={"Finance"}
        />
        <ElementCard
          onClick={() => navigate("/cards")}
          icon={<MdCardMembership size={24} />}
          label={"Cards"}
        />
        <ElementCard
          onClick={() => navigate("/notifications")}
          icon={<MdPerson2 size={24} />}
          label={"me"}
        />
      </div>
    </>
  );
};

export default Footer;
