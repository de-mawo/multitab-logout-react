import React from 'react'
import './Nav.modules.css'

const Navula = ({children}) => {


    const links = [
        {
            url: "/app/dashboard",
            i_class: "bx bxs-dashboard ",
            link_title: "Dashboard",
            key: 0
        },
        {
            url: "products",
            i_class: "bx bxs-shopping-bag-alt ",
            link_title: "Products",
            key: 1
        },
        {
            url: "users",
            i_class: "bx bxs-user ",
            link_title: "Users",
            key: 2
        },
        {
            url: "sales",
            i_class: "bx bxs-wallet ",
            link_title: "Sales",
            key: 3
        },
        {
            url: "deliveries",
            i_class: "bx bxs-truck ",
            link_title: "Deliveries",
            key: 4
        },
        {
            url: "messages",
            i_class: "bx bxs-message-dots ",
            link_title: "Messages",
            key: 5
        },
        {
            url: "settings",
            i_class: "bx bxs-cog ",
            link_title: "Settings",
            key: 6
        },
    ];

  return (
    <div>
    <header className='header' id="admin-dash-header">
        <div className="header_toggle">
            <i className='bx bx-menu' id="header-toggle" ></i>
        </div>
        <div className="dropdown sidebar-profile">
            <span className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" alt="avatar" className="avatar rounded-circle" />
            </span>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                <li>
                    <a className="dropdown-item" href="/my-account">
                        Profile
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <button className="dropdown-item" >
                        Sign out
                    </button>
                </li>
            </ul>
        </div>
    </header>

    <aside className='sidebar' id="admin-dash-nav">
        <nav className="admin-dash-nav">
            <div>
                <a href={"/"} className="nav_logo">
                    {" "}
                    <img src="/img/logo.png" alt="logo" className="logo" /> <span className="nav_logo-name">DaPelican</span>{" "}
                </a>
                <div className="nav_list">
                    {links.map((link) => (
                        <a href={link.url} className="nav_link " key={link.key}>
                            <i className={`${link.i_class}  nav_icon`}></i> <span className="nav_name">{link.link_title}</span>{" "}
                        </a>
                    ))}
                </div>
            </div>
            <span className="nav_link" >
                {" "}
                <i className="bx bx-log-out bx-sm nav_icon"></i> <span className="nav_name">SignOut</span>{" "}
            </span>
        </nav>
    </aside>

    <main className= "main">{children}</main>
</div>
  )
}

export default Navula