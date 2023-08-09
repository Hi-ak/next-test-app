import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {{
      alert("5文字以内");
      return;
    }}
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback((e) => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)) { //itemの中にtextと同じものがあったら
        alert("don't input the same txt.")
        return prevArray;
      }
      //prevArray.push(1) としても、assignされてるreference_idが変わらないので、再レンダリングされない
      //const newArray = [...prevArray, prevArray.pop() + 1]; //スプレッド構文
      
      //const newArray = [...prevArray, text];
      //return newArray //イミュータブルにしないとだめ

      return [...prevArray, text]
    })
  }, [text]); //ここにtextを入れて監視

  return {text, array, handleChange, handleAdd}

}
