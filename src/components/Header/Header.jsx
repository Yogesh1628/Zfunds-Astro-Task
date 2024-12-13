import "./header.css";
import Logo from "../../assets/ZfundsLogo.png";
import Arrow from "../../assets/Arrow Icon.png";
import Cart from "../../assets/Cart Icon.png";
import Search from "../../assets/Search Icon.png";

function Header() {
  function handleCart() {
    const link = document.createElement("a");
    link.href = "/cart";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleBack() {
    window.history.back(); 
  }

  return (
    <div className = "Header-container">
      <div className = "left-container" onClick = {handleBack}>
        <img src = {Arrow.src} alt = "Arrow"/>
        <p>Back</p>
      </div>
      <div className="logo-container">
        <img src={Logo.src} alt="Zfunds-Logo" />
      </div>
      <div className="right-container">
        <img src={Search.src} alt="Search" />
        <img src={Cart.src} alt="Cart" onClick={handleCart} />
      </div>
    </div>
  );
}

export default Header;
