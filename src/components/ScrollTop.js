function ScrollTop(){
    function onClickHandler(e){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return(
        <div className="scrollTop">
           <div className="scrollFill"><div className="scrollFillBar"></div></div><button onClick={(e)=>{onClickHandler(e)}}><i class="fa-solid fa-arrow-up"></i></button>
        </div>
    )
}
export default ScrollTop;