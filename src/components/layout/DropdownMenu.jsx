import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ isAuth, setIsAuth }) {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [];

    if (isAuth) {
      navs.push(
        { name: "Orders", path: "/myorders" },
        { name: "Profile", path: "/me" },
        { name: "Logout", onClick: () => setIsAuth(false) }
      );
    } else {
      navs.push({ name: "Login", path: "/login" });
    }

    setNavLinks(navs);
  }, [isAuth, setIsAuth]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  {d.onClick ? (
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={d.onClick}
                    >
                      {d.name}
                    </button>
                  ) : (
                    <Link to={d.path}>
                      <button className="dropdown-item" type="button">
                        {d.name}
                      </button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;
