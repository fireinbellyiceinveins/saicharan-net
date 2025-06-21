import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";
import { ThemeProvider } from "./context/ThemeContext";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return [
    { title: "Saicharan - Personal Website" },
    { name: "description", content: "Personal website of Saicharan" },
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export default function App() {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  );
} 