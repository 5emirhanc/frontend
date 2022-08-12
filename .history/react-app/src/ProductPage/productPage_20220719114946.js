import Navbar from './Navbar'
import "./index.css";
function ProductPage(){

    return(
    
           <main id='home'>
      <Navbar />
      <section className='home'>
        <h1>Köşe Koltuk</h1>
      </section>
      <section className='about' id='about'>
        <h1></h1>
      </section>
      <section className='projects' id='projects'>
        <h1>projects</h1>
      </section>
      <section className='contact' id='contact'>
        <h1>contact</h1>
      </section>
      
    </main>
        
    );

}

export default ProductPage;