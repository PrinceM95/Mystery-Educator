// import logo from './logo.svg';
import PageSwitch from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import style from './style.modules.scss'
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Header className={style.header}/>
      <div className={style.page}>
        <PageSwitch />
      </div>
      <Footer className={style.footer} />
    </BrowserRouter>
  );
}

export default App;
