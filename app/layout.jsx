"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import "./globals.css";
import Navbar from "../components/navbar";
import BasketContextProvider from "../context/basketContext";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <BasketContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* resets default browser styles */}
            <Navbar />
            {children}
          </ThemeProvider>
        </BasketContextProvider>
      </body>
    </html>
  );
}
