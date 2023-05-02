import Heading from "./Heading";
import MainNews from "./MainNews";
import SidePanel from "./SidePanel";
import StoryScroll from "./StoryScroll";

function Home(){
    
    return(
        <div className="main-data">
       <div className="data">
       <Heading title={"मुख्य खबरें"}/>
        <div className="dataPanel">
            <div>
                <div className="mainNews">
                    <MainNews title={"मुख्यखबरें"}/>
                </div>
                <div className="sidePanel">
                    <SidePanel/>
                    <SidePanel/>
                    <SidePanel/>
                </div>
            </div>
        </div>
       </div>
       <div className="data" style={{"backgroundColor":"#F1F2FA"}}>
       <Heading title={"वेब स्टोरीज"}/>
        <StoryScroll/>
        <div className="btn">
            <button onMouseOver={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-right'); e.target.children[0].classList.add('fa-arrow-left')}}} onMouseOut={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-left'); e.target.children[0].classList.add('fa-arrow-right')}}}>और देखें <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       <div className="data">
       <Heading title={"वीडियो"}/>
        <div className="dataPanel">
            <div>
                <div className="mainNews">
                    <MainNews title={"वीडियो"}/>
                </div>
                <div className="sidePanel">
                    <SidePanel/>
                    <SidePanel/>
                    <SidePanel/>
                </div>
            </div>
        </div>
        <div className="btn">
            <button onMouseOver={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-right'); e.target.children[0].classList.add('fa-arrow-left')}}} onMouseOut={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-left'); e.target.children[0].classList.add('fa-arrow-right')}}}>और देखें <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       <div className="data" style={{"backgroundColor":"#F1F2FA"}}>
       <Heading title={"राजनीति"}/>
        <div className="dataPanel">
            <div>
                <div className="mainNews">
                    <MainNews title={"राजनीति"}/>
                </div>
                <div className="sidePanel">
                    <SidePanel/>
                    <SidePanel/>
                    <SidePanel/>
                </div>
            </div>
        </div>
        <div className="btn">
            <button onMouseOver={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-right'); e.target.children[0].classList.add('fa-arrow-left')}}} onMouseOut={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-left'); e.target.children[0].classList.add('fa-arrow-right')}}}>और देखें <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       <div className="data">
       <Heading title={"क्राइम"}/>
        <div className="dataPanel">
            <div>
                <div className="mainNews">
                    <MainNews title={"क्राइम"}/>
                </div>
                <div className="sidePanel">
                    <SidePanel/>
                    <SidePanel/>
                    <SidePanel/>
                </div>
            </div>
        </div>
        <div className="btn">
            <button onMouseOver={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-right'); e.target.children[0].classList.add('fa-arrow-left')}}} onMouseOut={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-left'); e.target.children[0].classList.add('fa-arrow-right')}}}>और देखें <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       <div className="data" style={{"backgroundColor":"#F1F2FA"}}>
       <Heading title={"अपना राजस्थान"}/>
        <div className="dataPanel">
            <div>
                <div className="mainNews">
                    <MainNews title={"अपनाराजस्थान"}/>
                </div>
                <div className="sidePanel">
                    <SidePanel/>
                    <SidePanel/>
                    <SidePanel/>
                </div>
            </div>
        </div>
        <div className="btn">
            <button onMouseOver={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-right'); e.target.children[0].classList.add('fa-arrow-left')}}} onMouseOut={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-left'); e.target.children[0].classList.add('fa-arrow-right')}}}>और देखें <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       <div className="data">
       <Heading title={"आपका जिला"}/>
        <div className="dataPanel">
            <div>
                <div className="mainNews">
                    <MainNews title={"आपकाजिला"}/>
                </div>
                <div className="sidePanel">
                    <SidePanel/>
                    <SidePanel/>
                    <SidePanel/>
                </div>
            </div>
        </div>
        <div className="btn">
            <button onMouseOver={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-right'); e.target.children[0].classList.add('fa-arrow-left')}}} onMouseOut={(e)=>{if(e.target.children.length>0){e.target.children[0].classList.remove('fa-arrow-left'); e.target.children[0].classList.add('fa-arrow-right')}}}>और देखें <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       </div>   
    )
}
export default Home;