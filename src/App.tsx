import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Controls from './components/Controls';
import List from './components/List';

export default function App() {
  return (
    <div className="app">
      <Controls />
      <List />
    </div>
  )
}