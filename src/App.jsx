// App.jsx

import { Booklist } from "./components/Booklist";
import axios from "axios";


// 🔽 追加
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";


const App = () => {

  // 🔽 関数を追加
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://pokeapi.co/api/v2/pokemon/";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };




  const languages = ["1", "2", "3"];
  return (
    // 🔽 編集
    <BrowserRouter>
      <h1>ポケモンapp</h1>
      <ul>
        <li>
          <Link to="/1">フシギダネ</Link>
        </li>
        <li>
          <Link to="/2">フシギソウ</Link>
        </li>
        <li>
          <Link to="/3">フシギバナ</Link>
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
