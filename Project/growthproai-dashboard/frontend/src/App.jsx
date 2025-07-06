import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <BusinessForm />
      <BusinessCard />
    </div>
  );
}

export default App;
