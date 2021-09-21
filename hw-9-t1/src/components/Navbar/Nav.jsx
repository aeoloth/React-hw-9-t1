import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
    </nav>
  );
};

export default Navbar;
