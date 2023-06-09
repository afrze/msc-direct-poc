import {
  Cart,
  Hamburger,
  Info,
  MscLogo,
  MscMobileLogo,
  User,
} from "../../assets/icons";
import { useWindowSize } from "../../hooks";
import Input from "../Input";

type Props = {};

const Header = (props: Props) => {
  const { width } = useWindowSize();

  // This is for mobile and tab devices
  if (width && width < 700) {
    return (
      <div className="my-4 mx-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div>
              <Hamburger />
            </div>
            <div>
              <MscMobileLogo />
            </div>
          </div>
          <div className="flex gap-2">
            <span>
              <Info />
            </span>
            <span>
              <User />
            </span>
            <span>
              <Cart />
            </span>
          </div>
        </div>
        <div className="mt-2">
          <Input />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center mx-4 my-4 gap-5 bg-white">
      <div className="flex gap-4 items-center grow pr-4">
        <div>
          <MscLogo />
        </div>
        <div className="w-full">
          <Input />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <Info />
        </span>
        <span>
          <User />
        </span>
        <span>
          <Cart />
        </span>
      </div>
    </div>
  );
};

export default Header;
