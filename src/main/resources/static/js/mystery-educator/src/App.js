// import logo from './logo.svg';
import PageSwitch from './components/app-router';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className={style.page}>
      <PageSwitch />
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
