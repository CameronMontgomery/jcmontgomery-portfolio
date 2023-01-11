import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className='relative min-h-screen'>
      <NavBar />
      <div className='pb-11'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
