import { NavLink } from "react-router-dom";
function Navbar(){
    function onMouseEnterHandler(e){
        document.getElementsByClassName('dropdown-menu')[0].style="display:inline;";
        document.querySelectorAll('.dropdown-icon')[0].classList.add('rotate0');
    }
    function onMouseLeaveHandler(e){
        document.getElementsByClassName('dropdown-menu')[0].style="display:none;";
        document.querySelectorAll('.dropdown-icon')[0].classList.remove('rotate0');
    }
    function hamMouseIn(e){
        document.querySelectorAll('.hamburger span').forEach((element)=>{
            element.style="background-color:#FED029;border:1px solid #FED029;";
        })
    }
    function hamMouseOut(e){
        document.querySelectorAll('.hamburger span').forEach((element)=>{
            element.style="background-color:black;border:1px solid black;";
        })
    }
    return (
        <div className="navbar">
            <div className="subNavbar">
                <div className="subNavbarList">
                    <ul>
                        <li><NavLink to="##">Lallantop</NavLink></li>
                        <li><NavLink to="##">Tak.live</NavLink></li>
                        <li><NavLink to="##">SportsTak</NavLink></li>
                        <li><NavLink to="##">AstroTak</NavLink></li>
                        <li><NavLink to="##">CrimeTak</NavLink></li>
                        <li><NavLink to="##">UPTak</NavLink></li>
                        <li><NavLink to="##">MumbaiTak</NavLink></li>
                        <li><NavLink to="##">GujratTak</NavLink></li>
                        <li><NavLink to="##">MPTak</NavLink></li>
                    </ul>
                </div>
                <div className="otherDetails">
                    <div className="date">{new Date().toLocaleDateString("en-US",{month:"long",year: "numeric",day: "numeric"})} | </div>
                    <div className="socials">
                        <div className="title">
                            FOLLOW US AT :
                        </div>
                        <div className="icons">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainNavbar">
                <div className="logo">
                    <img src="https://www.rajasthantak.com/production/logo-main.png" alt="Logo"/>
                </div>
                <div className="navLinks">
                <div>
                    <ul>
                        <li><NavLink to="/" >होम</NavLink></li>
                        <li><NavLink to="/news">वीडियो</NavLink></li>
                        <li><NavLink to="/news">राजनीति</NavLink></li>
                        <li><NavLink to="/news">क्राइम</NavLink></li>
                        <li><NavLink to="/archive">अपना राजस्थान</NavLink></li>
                        <li>
                            <div className="dropdown-list">
                                <div className="dropdown">
                                    <div className="dropdown-title">
                                        <div className="dropdown-link">
                                            <NavLink to="##" onMouseOver={(e)=>{onMouseEnterHandler(e);}} onMouseOut={(e)=>{onMouseLeaveHandler(e);}}>आपका जिला</NavLink>
                                        </div>
                                        <div className="dropdown-icon">
                                            ^
                                        </div>
                                    </div>
                                    <div className="dropdown-menu" onMouseOver={(e)=>{onMouseEnterHandler(e)}} onMouseOut={(e)=>{onMouseLeaveHandler(e)}}>
                                    <div className="dropdown-menu-items">
                                        <ul>
                                        <li><NavLink to="##">जयपुर</NavLink></li>
                                        <li><NavLink to="##">जोधपुर</NavLink></li>
                                        <li><NavLink to="##">भरतपुर</NavLink></li>
                                        <li><NavLink to="##">अजमेर</NavLink></li>
                                        <li><NavLink to="##">कोटा</NavLink></li>
                                        <li><NavLink to="##">बीकानेर</NavLink></li>
                                        <li><NavLink to="##">उदयपुर</NavLink></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><NavLink to="/news">शॉर्ट्स</NavLink></li>
                        <li><NavLink to="/news">वेब स्टोरीज</NavLink></li>
                        <li><NavLink to="/news">गेम्स</NavLink></li>
                    </ul>
                    </div>
                </div>
                <div className="searchIcon">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="hamburger" onMouseOver={(e)=>hamMouseIn(e)} onMouseOut={(e)=>hamMouseOut(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="respNav">
                <div className="hamburger" onMouseOver={(e)=>hamMouseIn(e)} onMouseOut={(e)=>hamMouseOut(e)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo">
                    <img src="https://www.rajasthantak.com/production/logo-main.png" alt="Logo"/>
                </div>
                <div className="searchIcon">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    );
}
export default Navbar;