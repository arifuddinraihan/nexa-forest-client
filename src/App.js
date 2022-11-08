import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes';
import "swiper/css/bundle";

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
