import {NavLink} from 'react-router-dom'
function Footer(){
    function onMouseHandler(e){
        if(e.target.parentElement.firstElementChild.className==="bullet"){
            let bullet=e.target.parentElement.firstElementChild.firstElementChild;
        bullet.classList.remove('greyColor');
        bullet.classList.add('blueColor');
        }
    }
    function onMouseOutHandler(e){
        if(e.target.parentElement.firstElementChild.className==="bullet"){
            let bullet=e.target.parentElement.firstElementChild.firstElementChild;
        bullet.classList.remove('blueColor');
        bullet.classList.add('greyColor');
        }
    }
    function onMouseLinkHandler(e){
        if(e.target.firstElementChild){
            e.target.firstElementChild.classList.add('socialLinkAnimate');
            
        }
        
    }
    function outMouseLinkHandler(e){
        if(e.target.firstElementChild){
            e.target.firstElementChild.classList.remove('socialLinkAnimate');
        }
        
    }
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="https://www.rajasthantak.com/production/logo-main.png" alt="Logo"/>
            </div>
            <div className="footer-links">
                <ul>
                    <li><NavLink to='##'>Home</NavLink></li>
                    <li onMouseOver={(e)=>{onMouseHandler(e)}} onMouseOut={(e)=>{onMouseOutHandler(e)}}><span className='bullet'><i class="fa-solid fa-circle greyColor"></i></span><NavLink to='##'>Privacy Policy</NavLink></li>
                    <li onMouseOver={(e)=>{onMouseHandler(e)}} onMouseOut={(e)=>{onMouseOutHandler(e)}}><span className='bullet'><i class="fa-solid fa-circle greyColor"></i></span><NavLink to='##'>Terms & Conditions</NavLink></li>
                    <li onMouseOver={(e)=>{onMouseHandler(e)}} onMouseOut={(e)=>{onMouseOutHandler(e)}}><span className='bullet'><i class="fa-solid fa-circle greyColor"></i></span><NavLink to='##'>Contact</NavLink></li>
                </ul>
            </div>
            <div className="footer-socials">
                <div className="footer-hr">
                    <div></div>
                </div>
                <div className="footer-social-links">
                    <div onMouseEnter={(e)=>{onMouseLinkHandler(e)}} onMouseLeave={(e)=>{outMouseLinkHandler(e)}}><i class="fa-brands fa-facebook-f"></i></div>
                    <div onMouseEnter={(e)=>{onMouseLinkHandler(e)}} onMouseLeave={(e)=>{outMouseLinkHandler(e)}}><i class="fa-brands fa-twitter"></i></div>
                    <div onMouseEnter={(e)=>{onMouseLinkHandler(e)}} onMouseLeave={(e)=>{outMouseLinkHandler(e)}}><i class="fa-brands fa-youtube"></i></div>
                    <div onMouseEnter={(e)=>{onMouseLinkHandler(e)}} onMouseLeave={(e)=>{outMouseLinkHandler(e)}}><i class="fa-brands fa-instagram"></i></div>
                </div>
                <div className="footer-hr">
                    <div></div>
                </div>
            </div>
            <div className="copyright">
                © 2022. All Rights Reserved by <NavLink to="##">RajasthanTak</NavLink>
                </div>
        </div>
    )
}
export default Footer;