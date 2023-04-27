import Navbar from './components/navbar/Navbar';
import Hero from './sections/hero/Hero';
import DailyDeals from './sections/dailyDeals/DailyDeals';
import Products from './sections/products/Products';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DailyDeals />
      <Products />
    </main>
  );
}

export default App;
