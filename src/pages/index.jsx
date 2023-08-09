import styles from '../styles/Home.module.css';

import Head from 'next/head';

import { Footer } from 'src/components/Footer';

import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback, useEffect, useState } from 'react';



export default function Home() {

  const [count, setCount] = useState(1); //Arrayに [foo, setFoo] が入ってるだけ
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([1, 2, 3]);

  console.log(text);
  
  //煩雑になる場合にはfunctionの中に書く。(useCallbackで再生成を避ける)
  const handleClick = useCallback((e) => {
    // console.log(e.target.href);
    // e.preventDefault();
    console.log(count);
    if (count < 10) {
      setCount(prevCount => prevCount + 1); //foo + 1だと2で止まっちゃった
    }
    
    //setCount(cnt => cnt + 1);
    
    // alert(foo);
  }, [count, ]); //ここにcountを入れないとずっとuseCallbackの中身のcコードは変わらない

  const handleDisplay = useCallback(() => {
    setIsShow(prevIsShow => !prevIsShow);
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

  //Homeがマウントされた時に実行される
  useEffect(() => {
    console.log(`mount: ${count}`);
    //console.log("foo");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log(`unmount: ${count}`);
      //console.log("fuga");
      document.body.style.backgroundColor = "";
    }
  }, [count, ]);
  //fooが変わるたびにuseEffectの処理が走る。ただし、アンマウントの処理も同時に呼ばれ、再度マウントされるという判定なので注意

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {{
      alert("5文字以内");
      return;
    }}
    setText(e.target.value.trim());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header/>

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>進化する</button>
      <button onClick={ handleDisplay}><h3>{isShow ? "隠す" : "表示する" }</h3></button>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="index" />



      <Footer />


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
