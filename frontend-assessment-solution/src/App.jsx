import './App.css';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';

function App() {
  return (
    <div className="w-screen flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
