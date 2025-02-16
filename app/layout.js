import React from "react"
import Layout from "./components/Layout"
import "./globals.css"
import ThemeProvider from "./components/ThemeProvider"

export const metadata = {
  title: "Suko Gurung - Portfolio",
  description: "This is my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFeatureSettings: '"ss01" on, "ss03" on, "ss05" on' }} className='antialiased leading-8 overflow-x-hidden'
      >
        <ThemeProvider>
        <Layout>
        {children}
        </Layout>  
        </ThemeProvider>      
      </body>
    </html>
  );
}
