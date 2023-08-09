import { useEffect } from 'react';

export const useBgLightblue = () => {
  useEffect(() => {
    //console.log(`mount: ${count}`);
    //console.log("foo");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      //console.log(`unmount: ${count}`);
      //console.log("fuga");
      document.body.style.backgroundColor = "";
    }
  }, []);
}