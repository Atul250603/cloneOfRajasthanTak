import WebStory from "./WebStory";
function StoryScroll(){
    function rightClickHandler(e){
        const stories = document.getElementById('storyPanelmain');
        const content_scroll_width = stories.scrollWidth;
        let content_scoll_left = stories.scrollLeft;
        content_scoll_left += 200;
        if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width;}
        stories.scrollLeft = content_scoll_left;
    }
    function leftClickHandler(e){
        const stories = document.getElementById('storyPanelmain');
        let content_scoll_left = stories.scrollLeft;
        content_scoll_left -= 200;
            if (content_scoll_left <= 0) {
                content_scoll_left = 0;
            }
            stories.scrollLeft = content_scoll_left;
    }
    return(
        <div className="storyPanel">
            <div className="storyPanelmain" id="storyPanelmain">
                <div>
                    <WebStory/>
                    <WebStory/>
                    <WebStory/>
                    <WebStory/>
                    <WebStory/>
                    <WebStory/>
                    <WebStory/>
                    <WebStory/>
                </div>
            </div>
            <div className="leftBtn" onClick={(e)=>{leftClickHandler(e)}}>
            <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div className="rightBtn" onClick={(e)=>{rightClickHandler(e)}}>
            <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    )
}
export default StoryScroll;