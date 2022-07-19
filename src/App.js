import './App.css';
import './style/style.scss';
import AppHeader from './components/Header/AppHeader';
import AppNav from './components/Header/AppNav';
import AppWelcomeBannerSection from './components/AppMainContent/AppWelcomeSection';
import AppFeaturesSection from './components/AppMainContent/AppFeaturesSection';
import AppBannerFormsSection from './components/AppMainContent/AppBannerFormsSection';
import AppFooter from './components/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <AppNav/>
        <main className="AppMainContent">
          <AppWelcomeBannerSection/>
          <AppFeaturesSection/>
          <AppBannerFormsSection className="app__first__banner__form"/>
          <AppBannerFormsSection className="app__second__banner__form"/>
          <AppBannerFormsSection className="app__third__banner__form"/>
        </main>
        <AppFooter/>
    </div>
  );
}
export default App;
