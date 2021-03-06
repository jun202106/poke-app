// App.jsx

import { Booklist } from "./components/Booklist";
import axios from "axios";


// ð½ è¿½å 
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";


const App = () => {

  // ð½ é¢æ°ãè¿½å 
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://pokeapi.co/api/v2/pokemon/";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };




  const languages = ["1", "2", "3"];
  return (
    // ð½ ç·¨é
    <BrowserRouter>
      <h1>ãã±ã¢ã³app</h1>
      <ul>
        <li>
          <Link to="/1">ãã·ã®ãã</Link>
        </li>
        <li>
          <Link to="/2">ãã·ã®ã½ã¦</Link>
        </li>
        <li>
          <Link to="/3">ãã·ã®ãã</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/1" element={<Booklist language={languages[0]} getData={getDataFromAPI} />} />
        <Route path="/2" element={<Booklist language={languages[1]} getData={getDataFromAPI} />} />
        <Route path="/3" element={<Booklist language={languages[2]} getData={getDataFromAPI} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
