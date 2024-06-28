import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <div id="toast-notification"><Toaster /></div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
