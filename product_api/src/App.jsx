import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product_page from './assets/pages/Product_page'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/pages/Header';

function App() {
return(
  <>
<BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Product_page/>}></Route>
  </Routes>
</BrowserRouter>
</>
)
}
export default App