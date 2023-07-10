// import { useState } from "react";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  // const [count, setCount] = useState(0);
  const [player, setPlayer] = useState(0);
  const [data, setData] = useState([]);
  const [char, setChar] = useState("");
  const [winner, setWinner] = useState("unKnown");
  function handleCharChange(e) {
    e.preventDefault();
    setChar(e.target.value);
  }

  function handleFinishGame() {
    // calculate winner
    // set winner
    // initial states
  }

  console.log(data);
  return (
    <div className="bg-slate-200 min-h-screen w-5/6 mx-auto">
      <div className="text-2xl text-center py-5">Bazi Esm Famil</div>
      <div className="text-center">Play with character {char}</div>
      <div className="flex felx-col justify-between p-4 ">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="text-3xl py-10">Control</div>
          <label htmlFor="">
            choose Char
            <input
              type="text"
              value={char}
              onChange={(e) => handleCharChange(e)}
              className="ml-3"
              maxLength={1}
            />
          </label>
          <button className="border p-4 " onClick={handleFinishGame}>
            finish Game
          </button>
          <div>winner in {winner || "UnKnown"}</div>
        </div>
        <Form
          key={player}
          player={player}
          setPlayer={setPlayer}
          setData={setData}
        />
        <button></button>
      </div>
    </div>
  );
}

export default App;
