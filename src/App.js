import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1 className='title'>Hola desde SASS</h1>
      <hr />
      <ul>
        <li>
          <a href='https://www.google.com/'>Google</a>
        </li>
        <li>
          <a href='https://www.facebook.com/'>Facebook</a>
        </li>
        <li>
          <a href='https://www.instagram.com/?hl=es'>Instagram</a>
        </li>
      </ul>
      <hr />
      <div className='contador'>
        <h2>Counter: {contador}</h2>
        <Button
          type='btn btn-primary'
          text='+1'
          step={1}
          setContador={setContador}
        />
        <Button
          type='btn btn-primary'
          text='-1'
          step={-1}
          setContador={setContador}
        />
      </div>
    </div>
  );
};

export default App;
