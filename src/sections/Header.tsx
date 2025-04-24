import ThemeToggle from "./Theme-toggle";

export const Header = () => {
  return (
    <div className="sticky top-3 z-50 flex items-center justify-center px-4">
      {/* Centered nav */}
      <nav className="flex gap-1 p-0.5 border rounded-full border-white/15 bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#marquee" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
      </nav>

      {/* Absolute ThemeToggle */}
      <div className="absolute right-6">
        <ThemeToggle />
      </div>
    </div>
  );
};
