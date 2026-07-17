import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const NavButton = ({ mobile = false }) => {
  return (
    <div
      className={
        mobile
          ? "flex flex-col gap-3"
          : "hidden md:flex items-center gap-4"
      }
    >
      <Link to="/login">
        <Button
          variant="outline"
          className={mobile ? "w-full" : ""}
        >
          Login
        </Button>
      </Link>

      <Link to="/register">
        <Button
          className={mobile ? "w-full" : ""}
        >
          Join Now
        </Button>
      </Link>
    </div>
  );
};

export default NavButton;