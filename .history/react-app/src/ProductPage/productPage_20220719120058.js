import Navbar from './Navbar'
import "./index.css";
function ProductPage(){

    return(
    
           <a href=''><main id='home'>
      <Navbar />
      <section className='home'>
        <h1>Koltuk</h1>
      </section>
      <section className='about' id='about'>
        <h1>Yatak Takımı</h1>
      </section>
      <section className='projects' id='projects'>
        <h1>Mutfak Takımı</h1>
      </section>
      <section className='contact' id='contact'>
        <h1>Halılar</h1>
      </section>
      
    </main>
    </a>
    );

}

export default ProductPage;