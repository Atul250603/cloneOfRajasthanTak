import StoryScroll from "./StoryScroll";

function NewsItem(){
    return(
        <div className="newsItem">
            <div className="newsHeader">
                <div className="heading"><h2>Rajasthan Weather: नागौर में 1 घंटे जमकर हुई ओलावृष्टी, हर तरफ कश्मीर जैसा नजारा, देखें वीडियो</h2></div>
                <div className="credentials">
                    <div className="person">
                    <span>BY</span>केशाराम गढ़वार
                    </div>
                    <div className="time">
                    <span><i class="fa-solid fa-calendar-days"></i>{new Date().toLocaleDateString("en-US",{month:"long",year: "numeric",day: "numeric"})}</span>
                    </div>
                    <div className="clock">
                        <span><i class="fa-regular fa-clock"></i>LESS THAN A MINUTE</span>
                    </div>
                    <div className="views">
                        <span><i class="fa-solid fa-signal"></i>148 VIEWS</span>
                    </div>
                </div>
                <div className="socials">
                    <div className="facebook"><i class="fa-brands fa-facebook-f"></i></div>
                    <div className="twitter"><i class="fa-brands fa-twitter"></i></div>
                    <div className="youtube"><i class="fa-brands fa-youtube"></i></div>
                    <div className="whatsapp"><i class="fa-brands fa-whatsapp"></i></div>
                    <div className="mail"><i class="fa-solid fa-envelope"></i></div>
                </div>
            </div>
            <div className="newsBody">
                <div className="image">
                    <img src="https://www.rajasthantak.com/wp-content/uploads/2023/04/weather-1.jpg-1-1280x700.jpg" alt="news" />
                </div>
                <div className="data">
                <strong>Rajasthan Weather News:</strong> राजस्थान में मौसम में बदलाव के चलते तापमान में गिरावट देखने को मिली है. पश्चिमी विक्षोभ का असर भारत के अन्य राज्यों समेत राजस्थान में भी देखने को मिल रहा है. बीते दिन नागौर में जमकर ओलावृष्टी हुई. यहां नजारा कश्मीर से कम नहीं लग रहा था. नागौर सहित आसपास के क्षेत्रों में कई क्षेत्रों में अच्छी बारिश भी हुई.
                <div className="story">
                    <StoryScroll/>
                </div>

                <div>
                <strong>बारिश से तापमान में गिरावट</strong>
                <br/>
                    बारिश और ओलावृष्टी से राजस्थान में तापमान में 4 से 5 डिग्री की गिरावट आई है. 2-3 मई को भी एक नया पश्चिमी विक्षोभ शुरू होगा. जिसका असर आगामी दो-तीन दिनों तक रहेगा. इस दौरान प्रदेश में आंधी और बारिश की संभावना अधिक रहेगी.
                </div>

                <div>
                <strong>नागौर में धरती पर कश्मीर जैसे नजारे</strong>
                <br/>
                वहीं शनिवार को नागौर जिले के जायल उपखंड के गोट मांगलोद गांव में शाम को करीब 1 घंटे के करीब जमकर बारिश हुई. बारिश के साथ ओलावृष्टि भी जमकर हुई. इतनी ओलावृष्टि हुई मानों वहां के खेत कश्मीर ही बन गए. खेतों में बर्फ की चादर बीच गई. जायल उपखंड के डेह ‘रोल ‘तरनाऊ सहित पूरे जिले में आधे घंटे तक जमकर ओलावृष्टि हुई.
                </div>

                <div>
                <strong>आज भी कई जिलों में बारिश की चेतावनी</strong>
                <br/>
                मौसम विभाग अनुसार राज्य में आगामी दिनों में बैक टू बैक पश्चिमी विक्षोभ के प्रभाव से आंधी बारिश का दौर रहेगा जारी. मौसम विभाग ने आज जोधपुर, बीकानेर, जैसलमेर, नागौर, चूरु, सीकर, झुझुनूं, दौसा, जयपुर, भीलवाड़ा, अजमेर, टोंक, बूंदी, कोटा, बारां जिलों और आसपास के क्षेत्रों मे कहीं-कहीं पर मेघगर्जन हल्की वर्षा होने की संभावना जताई है. मेघ गर्जन के समय सुरक्षित स्थान पर शरण लेने और पेड़ों के नीचे शरण ना लेने की भी सलाह दी है.
                </div>

                <div>
                <strong>ओलावृष्टि से 15 लाख से अधिक का हुआ नुकसान</strong>
                <br/>
                <div className="newsImage">
                <img src="https://www.rajasthantak.com/wp-content/uploads/2023/04/Collage-Maker-30-Apr-2023-09-31-AM-4754.jpg" alt="news"/>
                </div>
                गोट मांगलोद निवासी रामचंद्र दंतुसलिया व राजेंद्र दंतुसलिया मांगलोद के बेटी की शादी थी और बरात आने वाली थी. उस दौरान अचानक ओलावृष्टि होने से पूरी तरीके से व्यवस्था बिगड़ गई. पीड़ित ने बताया कि हमने तो पूरी व्यवस्था की थी लेकिन प्रकृति के आगे हम क्या कर सकते हैं. किसी प्रकार की कोई जनहानि नहीं हुई, सब ठीक है नागौर जिले में और भी कई शादियां थी. ओलावृष्टि और बारिश होने से शादियां में बाधा भी सामने आई.
                </div>
                </div>
            </div>
            <div className="newsFooter">
                <div className="tags">
                    <div>Tags :</div>
                    <div className="tagBtn">
                    <button>rajasthan weather forecast</button>
                    <button>rajasthan weather news</button>
                    <button>rajasthan weather today</button>
                    </div>
                    
                </div>
                <div className="share">
                <div>Share This Post :</div>
                <div className="socials">
                <div className="facebook"><i class="fa-brands fa-facebook-f"></i></div>
                    <div className="twitter"><i class="fa-brands fa-twitter"></i></div>
                    <div className="youtube"><i class="fa-brands fa-youtube"></i></div>
                    <div className="whatsapp"><i class="fa-brands fa-whatsapp"></i></div>
                    <div className="mail"><i class="fa-solid fa-envelope"></i></div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}
export default NewsItem;