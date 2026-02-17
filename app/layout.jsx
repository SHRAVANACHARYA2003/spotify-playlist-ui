import "./globals.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

export const metadata = {
  title: "Spotify Playlist",
  description: "Spotify-like playlist UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          {/* Top Navigation */}
          <Header />

          {/* Main Content Area */}
          <main className="main-content">{children}</main>

          {/* Bottom Navigation */}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
