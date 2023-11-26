import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GiftRecipientForm from "./Components/GiftRecipientForm";
import Header from "./Components/Header";
import GiftList from "./Components/GiftLists";
import BeautifulProduct from "./Components/BeautifulProduct";
import ToyProduct from "./Components/ToyProduct";
import BabisProduct from "./Components/BabisProduct";
import ElectronicProduct from "./Components/ElectronicProduct";
import Blog from "./pages/Blog";
import AIGiftIdeas from "./pages/AIGiftIdeas";
import Lists from "./pages/Lists";
import GiftExchange from "./pages/GiftExchange";
import Shop from "./pages/Shop";
import Occasions from "./pages/Occasions";
import Ecards from "./pages/Ecards";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<GiftRecipientForm />} />
          <Route path="/gift-lists" element={<GiftList />} />
          <Route path="/beautifulProduct" element={<BeautifulProduct />} />
          <Route path="/toyProduct" element={<ToyProduct />} />
          <Route path="/electronicProduct" element={<ElectronicProduct />} />
          <Route path="/babisProduct" element={<BabisProduct />} />
          <Route path="/AIGiftIdeas" element={<AIGiftIdeas />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/giftExchange" element={<GiftExchange />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/ecards" element={<Ecards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
