import { LogoutOutlined, StockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../library/firebase";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { email } = user;
  const navigate = useNavigate();

  const onClickLogout = () => {
    signOutUser().then((data) => {
      localStorage.removeItem("user");
      navigate("/");
    });
  };

  return (
    <div className="navbar">
      <h2>  Budget <StockOutlined/> Tracker </h2>
      <ul>
        <li>
          <UserOutlined /> {email}
        </li>
        <li>
          <button onClick={onClickLogout} className="SignOutBtn">
          <LogoutOutlined/>  Signout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
