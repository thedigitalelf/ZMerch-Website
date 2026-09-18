import {
  isRouteErrorResponse,
  Meta,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { AudioProvider, FunMode } from './components/funMode'
import { DVDProvider } from './components/dvd'

import { Header } from './components/header'
import { Footer } from './components/footer'

import "./app.css";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
        <title>zmerch! owo</title>
      </head>
      <body>
        <AudioProvider>
          <DVDProvider>

            <div id="nescss">
              <Header />
              {children}
              <FunMode />
              <Footer />
            </div>
          </DVDProvider>
        </AudioProvider>
        <ScrollRestoration getKey={() => Math.random().toString(36)} /* never remember scroll, always scroll back to top, just a nitpick by this pup */ />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
