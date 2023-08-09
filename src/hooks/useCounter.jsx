import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(1); //Arrayに [foo, setFoo] が入ってるだけ
  const [isShow, setIsShow] = useState(true);

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

  return { count, isShow, handleClick, handleDisplay}
}