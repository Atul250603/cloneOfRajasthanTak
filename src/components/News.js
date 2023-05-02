import { useEffect } from "react";
import Heading from "./Heading";
import NewsItem from "./NewsItem";
import RelatedNewsItem from "./RelatedNewsItem";
function News(){
    useEffect(()=>{
   
    function stickySideBar(){
      let sideBar=document.querySelectorAll('.news-sidePanel')[0];
      let observer=new IntersectionObserver((entries)=>{
        const entry=entries[0];
        entry.isIntersecting===false?sideBar.classList.add('stickySidebar'):sideBar.classList.remove('stickySidebar');
      },{
        root:null,
        rootMargin:"",
        threshold:0
      });
      let observer1=new IntersectionObserver((entries)=>{
        const entry=entries[0];
        entry.isIntersecting===false?sideBar.classList.add('stickySidebar'):sideBar.classList.remove('stickySidebar');
      },{
        root:null,
        rootMargin:"",
        threshold:0
      });
      observer.observe(document.querySelectorAll('.navbar')[0]);
      observer1.observe(document.querySelectorAll('.footer')[0]);
    }
    stickySideBar();
  },[]);
    return(
        <div className="main-data">
            <div className="data news-data">
                <div className="news">
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
                <div className="news-sidePanel">
                    <Heading title="रिलेटेड न्यूज़"/>
                    <RelatedNewsItem/>
                    <RelatedNewsItem/>
                    <RelatedNewsItem/>
                    <RelatedNewsItem/>
                    <RelatedNewsItem/>
                </div>
            </div>
        </div>
    )
}
export default News;