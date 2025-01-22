import "./globals.css";

export const metadata = {
  title: "Suko Gurung - Portfolio",
  description: "This is my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFeatureSettings: '"ss01" on, "ss03" on, "ss05" on' }} className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
