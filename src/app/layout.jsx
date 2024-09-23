import Provider from "../components/provider";
import "./globals.css";

export const metadata = {
  title: "Opulent Hub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="main">
          {children}
        </body>
      </Provider>
    </html>
  );
}
