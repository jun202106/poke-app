// Booklist.jsx

// 🔽 追加
import { useState, useEffect } from "react";


export const Booklist = ({ language, getData }) => {


  // 🔽 ここから追加 変数を保管する
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);






  return (
    <ul>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (


          <p>ポケモンの英名：{JSON.stringify(bookData.data.name)} </p>


      )}
    </ul>
  );






};
