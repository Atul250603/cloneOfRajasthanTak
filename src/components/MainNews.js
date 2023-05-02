function MainNews(props){
    function mouseOverHandler(){
        document.querySelectorAll(`#${props.title} .image img`)[0].classList.add('scaleUpImage');
    }
    function mouseOutHandler(){
        document.querySelectorAll(`#${props.title} .image img`)[0].classList.remove('scaleUpImage');
    }
    return(
        <div className="mainHighlight newsitem" id={props.title} onMouseOver={()=>mouseOverHandler()} onMouseOut={()=>mouseOutHandler()}>
                    <div className="image">
                        <img src="https://www.rajasthantak.com/wp-content/uploads/2023/04/Accident-2-1.jpg" alt="news image" />
                    </div>
                    <div className="mainHighlightData">
                        <div className="heading">
                            <h2>नागौर: शादी का कार्ड बांटने जा रहे दो भाइयों को वाहन ने कुचला, सड़क पर बिखर गए अंग</h2>
                        </div>
                        <div className="credentials">
                            <div className="person">
                            <span>BY</span>केशाराम गढ़वार
                            </div>
                            <div className="time">
                            <span><i class="fa-solid fa-calendar-days"></i>{new Date().toLocaleDateString("en-US",{month:"long",year: "numeric",day: "numeric"})}</span>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default MainNews;