import NavButton from "./navbutton";

export default function NavMenu({ children }) {
  const link = [
    { name: "홈", endPoint: "/" },
    { name: "Button1", endPoint: "/button1" },
    { name: "Button2", endPoint: "/button2" },
    { name: "Button3", endPoint: "/button3" },
  ];
  return (
    <nav className="w-full h-[60px] flex">
      {link.map((comp) => {
        return <NavButton key={comp.name} pageInfo={comp}></NavButton>;
      })}
      {/* <NavButton pageInfo={{ name: "홈", endPoint: "/" }}></NavButton>
      <NavButton
        pageInfo={{ name: "Button1", endPoint: "/button1" }}
      ></NavButton>
      <NavButton
        pageInfo={{ name: "Button2", endPoint: "/button2" }}
      ></NavButton>
      <NavButton
        pageInfo={{ name: "Button3", endPoint: "/button3" }}
      ></NavButton> */}
      {children}
    </nav>
  );
}
