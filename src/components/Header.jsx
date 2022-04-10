import Logo from "../assets/images/logo-aviatur.svg";

export const Header = () => {
  return (
    <header className="c-header u-bg-blue-1 u-d-flex">
      <div>
        <img src={Logo} alt="Logo Aviatur" />
      </div>
    </header>
  );
};
