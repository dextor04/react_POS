import "./In_Header.css";
function Header() {
  return (
    <div>
      <table className="tablefirst">
        <tbody>
          <tr>
            <td>
              <img
                src={require("./images/home_icon.png")}
                alt="home_icons"
                className="home_icon"
              />
            </td>
            <td id="heading">
              <p className="heading">Inventory</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Header;
