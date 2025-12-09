import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../assets/logo.png";
// import resume from "../assets/resume_35.pdf";
import resume from "../assets/Resume.pdf"

const sections = ["home", "about", "services", "projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId;
          }
        }
      });
      setActiveSection(current);
      setIsSticky(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${isSticky ? styles.sticky: ""} ${styles.nav}`}>
      {/* LOGO */}
      <a className={styles.brand} href="#">
        <img src={logo} alt="Logo" className={styles.logo} />
      </a>

      {/* MENU ICON */}
      {!open && (
        <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
      )}

      {/* MENU */}
      <ul className={`${styles.menu} ${open ? styles.show : ""}`} id="sidemenu">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? styles.active : ""}
            >
              {/* TEXT when menu is closed */}
              {!open
                ? id.charAt(0).toUpperCase() + id.slice(1)
                : // ICONS when menu is open
                  <>
                    {id === "home" && <i className="fa-solid fa-house"></i>}
                    {id === "about" && <i className="fa-solid fa-user"></i>}
                    {id === "services" && <i className="fa-solid fa-gear"></i>}
                    {id === "projects" && (
                      <i className="fa-solid fa-diagram-project"></i>
                    )}
                    {id === "contact" && (
                      <i className="fa-solid fa-envelope"></i>
                    )}
                  </>
              }
            </a>
          </li>
        ))}

        <hr />

        {/* RESUME BUTTON */}
        <li className={styles.resume}>
          <button className={styles.btn}>
            <a href={resume}>
              <span className={styles.resumeDesktop}>Resume</span>
              <span className={styles.cv}>CV</span>
            </a>
          </button>
        </li>

        {/* CLOSE ICON */}
        {open && (
          <i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

// // import React from 'react'
// import { useEffect, useState } from "react";
// import styles from "./navbar.module.css";
// import logo from "../assets/logo.png";
// import resume from "../assets/resume_35.pdf";

// const sections = ["home", "about", "services", "projects", "contact"];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "home";
//       sections.forEach((sectionId) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           const { top } = section.getBoundingClientRect();
//           if (top <= window.innerHeight / 2) {
//             current = sectionId;
//           }
//         }
//       });
//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Run on mount
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav className={styles.nav}>
//         <a className={styles.brand} href="#">
//           <img src={logo} alt="Logo" className={styles.logo} />
//           {!open ? (
//             id.charAt(0).toUpperCase() + id.slice(1) // TEXT for desktop
//           ) : (
//             // ICONS for opened mobile menu
//             <>
//               {id === "home" && <i className="fa-solid fa-house"></i>}
//               {id === "about" && <i className="fa-solid fa-user"></i>}
//               {id === "services" && <i className="fa-solid fa-gear"></i>}
//               {id === "projects" && (
//                 <i className="fa-solid fa-diagram-project"></i>
//               )}
//               {id === "contact" && <i className="fa-solid fa-envelope"></i>}
//             </>
//           )}
//         </a>

//         {!open && (
//           <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
//         )}

//         <ul
//           className={`${styles.menu} ${open ? styles.show : ""}`}
//           id="sidemenu"
//         >
//           {sections.map((id) => (
//             <li key={id}>
//               <a
//                 href={`#${id}`}
//                 className={activeSection === id ? styles.active : ""}
//               >
//                 {id.charAt(0).toUpperCase() + id.slice(1)}
//               </a>
//             </li>
//           ))}

//           <hr />

//           <div className={styles.resume}>
//             <button className={styles.btn}>
//               <a href={resume}>Resume</a>
//             </button>
//           </div>

//           {open && (
//             <i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i>
//           )}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
