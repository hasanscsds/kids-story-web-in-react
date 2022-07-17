import './App.css';
import './style/style.scss';
import AppHeader from './components/Header/AppHeader';
import AppNav from './components/Header/AppNav';
import AppFooter from './components/AppFooter/AppFooter';
function App() {
  return (
    <div className="App">
        <AppHeader/>
        <AppNav/>
        <main className="AppMainContent">

        </main>
        <AppFooter/>
    </div>
  );
}
export default App;
