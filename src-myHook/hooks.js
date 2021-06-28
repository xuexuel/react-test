import {useEffect,useState} from 'react'

function useScroll() {
  let [state, setState] = useState(0);
  let scroll = () => {
    setState(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    setState(window.scrollY);
    return () => {
      window.removeEventListener("scroll", scroll);
    }
  }, []);
  return [state, (newScroll) => {
    window.scrollTo(0, newScroll);
    setState(window.scrollY);
  }]
}
export { useScroll }