import About from 'components/About';
import Cases from 'components/Cases';
import ContactUs from 'components/ContactUs';
import Electricity from 'components/Electricity';
import Faq from 'components/Faq';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

export default App;
