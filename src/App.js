import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>

      <div className="contact-grid">
        {contacts.map((item) => (
          <Contact key={item.name} data={item} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
