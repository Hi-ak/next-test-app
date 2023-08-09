//15/17回までやった

import styles from '../styles/Home.module.css';

import Head from 'next/head';

import { Footer } from 'src/components/Footer';

import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';

import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightblue } from 'src/hooks/useBgLightblue';






export default function Home() {
  //React関数はuseから始める
  //Componentは自由度が低いが、Custom hooksはUIに小さい変更を加えたりできる
  const { count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAdd} = useInputArray();

  //fooが変わるたびにuseEffectの処理が走る。ただし、アンマウントの処理も同時に呼ばれ、再度マウントされるという判定なので注意
  useBgLightblue(); 
  
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
