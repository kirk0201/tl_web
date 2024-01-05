import "./globals.css";
import NavButton from "../components/navbutton";
import NavMenu from "../components/navmenu";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title className="test">My tl site</title>
      </head>
      <body>
        <div className="w-[1366px] m-auto bg-slate-600">
          <header>
            <h1>My t1 site</h1>
          </header>
          <NavMenu />
          {children}
          <footer>
            <div>footer</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
