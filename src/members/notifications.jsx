import ListItem from "../components/ListItem";
import { FaImage, FaChevronRight } from "react-icons/fa";

const Notifications = () => {
  return (
    <>
      <div className="listContainer">
        <ListItem
          majorText="OWealth Interest Earned"
          minorText="Jan 20th, 03:20:23"
          spanText=" "
          icon={<FaImage className="icons" />}
          button={<FaChevronRight className="icons chevron" size={14} />}
          styleS="circle"
        />
        <ListItem
          majorText="OWealth Interest Earned"
          minorText="Jan 20th, 03:20:23"
          spanText=" "
          icon={<FaImage className="icons" />}
          button={<FaChevronRight className="icons chevron" size={14} />}
          styleS="circle"
        />
      </div>
    </>
  );
};

export default Notifications;
