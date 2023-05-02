function ArchiveItem(){
    return(
        <div className="archiveItem" >
            <div className="imageBox">
                <div className="image">
                    <img src="https://www.rajasthantak.com/wp-content/uploads/2023/05/unnamed-file-1-1-960x540.jpg" alt="News" />
                </div>
                <div className="credit">
                    तस्वीरः राजस्थान तक
                </div>
            </div>
            <div className="data">
                        <div className="heading">
                            <h2>इंपैक्ट फीचर: खुशखबरी! ‘Just Travel’ घटाएगा आपकी यात्रा और फ्लाइट टिकटों का खर्च</h2>
                        </div>
                        <div className="credentials">
                            <div className="person">
                            <span>BY</span>राजस्थान तक
                            </div>
                            <div className="time">
                            <span><i class="fa-solid fa-calendar-days"></i>{new Date().toLocaleDateString("en-US",{month:"long",year: "numeric",day: "numeric"})}</span>
                            </div>
                        </div>
            </div>
        </div>
    )
}
export default ArchiveItem;