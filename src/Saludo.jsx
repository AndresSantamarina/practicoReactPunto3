import { useState } from "react";

const Saludo = () => {
  const [saludo, setSaludo] = useState("Hello my friend");
  return (
    <>
      <h1>{saludo}</h1>
      <button onClick={() => setSaludo(saludo + " (from changed state)!")}>Hacer clic</button>
    </>
  );
};

export default Saludo;
