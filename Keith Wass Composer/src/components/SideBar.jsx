import "./SideBar.css";

export function Sidebar({ isOpen }) {
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>Film Music</li>
        <li>Game Music</li>
        <li>Experimental Music</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
