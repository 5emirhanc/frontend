import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./AboutUs.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
    return(
    <Container>
        <Row >
        <img className="" style={{ width: 250, height: 150 }} src="https://www.karabayyazilim.com/uploads/blogs/reactjs-nedir-2019-06-24-091546/reactjs-nedir-2019-06-24-091546-0.jpg" alt=""></img>
        <img className="" style={{ width: 250, height: 150 }} src="https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/61bb05edca00197f2e7a19cf_Csharp_Logo.png" alt=""></img>
        <img className="" style={{ width: 250, height: 150 }} src="https://muhammeddincer.com/wp-content/uploads/2019/10/java-logo.jpg" alt=""></img>
        <img className="" style={{ width: 250, height: 150 }} src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" alt=""></img>
        <img className="" style={{ width: 250, height: 150 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt=""></img>
        <img className="" style={{ width: 250, height: 150 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt=""></img>
        </Row>
        <Row>
        <p>
                Lise zamanımda başlamış olduğum yazılım sektörüne ilk olarak c# application la başlamış ve c# form üzerinde devam ettim.
                Veri tabanı olarak kullanadığım MySqll di .
                Lise yaşamım boyunca c# form da ve MySqll de kendimi geliştidim. 
                Çok ileri seviyelere gelmesem de artık istenilen düzeyde ve okul düzeyinde başarılır bir öğrenim sağladım.
                Üniversiteye geçdiğimde yine c# ile MySqll yazdığımızdan dolayı başka bir dile yoğunlaşmadım.
                Üniversite'de Java,Php,Pyhton,React Native,C# ve MySqll göstermişlerdi.
                Biz 3 arkadaş staj zamanında başka bir dile yoğunlaşmak istedik ve şuanda kendi şirketi BUKYTALK olan Emre abinin yanına girdik.
                Orada flutter ile bilgi yarışması uygulaması yapmamız istendi .
                Ama başaramadık yapamadık çalışamadık kendimizi disiplinli bir şekilde çalıştırmadık ve son verdik.
                Üniversitem bittiğinde Emre abinin yanında eğitilmek için girdim.
                Şimdi ise hiç bilmediğim bir dilde JavaScript ve React ile Web uygulaması yapıyorum.
                Veri kontolünü ve Api yi MongoDb ve NodeJs ile gerçekleştirceğim.
        </p>
        </Row>
        <Row>
            <img src="https://i.ytimg.com/vi/mMSw9x960aA/maxresdefault.jpg" style={{width:500,height:450}}className="m-5"></img>
        </Row>
    </Container>
    );
}

export default About;