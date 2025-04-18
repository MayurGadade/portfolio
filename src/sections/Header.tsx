export const Header = () => {
  return (
    <div className="flex justify-center items-center sticky top-3 z-50">
      <nav className="flex gap-1 p-0.5 border rounded-full border-white/15 bg-white/10 backdrop-blur ">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
      </nav>
    </div>
  );
};
