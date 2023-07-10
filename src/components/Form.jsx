import { useRef } from "react";

function Form({ player, setPlayer, setData }) {
  const esmRef = useRef("");
  const shahrRef = useRef("");
  const rangRef = useRef("");
  const ghazaRef = useRef("");

  function handleSubmit() {
    setPlayer((c) => c + 1);
    let playerResult = {
      esm: esmRef.current.value,
      shahr: shahrRef.current.value,
      rangRef: rangRef.current.value,
      ghazaRef: ghazaRef.current.value,
    };

    setData((data) => [...data, playerResult]);
  }

  return (
    <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
      player number :{player + 1}
      <label htmlFor="">
        Esm:
        <input className="ml-3" type="text" ref={esmRef} />
      </label>
      <label htmlFor="">
        Shahr:
        <input className="ml-3" type="text" ref={shahrRef} />
      </label>
      <label htmlFor="">
        Rang:
        <input className="ml-3" type="text" ref={rangRef} />
      </label>
      <label htmlFor="">
        Ghaza
        <input className="ml-3" type="text" ref={ghazaRef} />
      </label>
      <button type="submit">Ok</button>
    </form>
  );
}

export default Form;
