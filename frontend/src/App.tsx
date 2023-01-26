import React from 'react';
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";
import ImageBoardForm from "./features/imageBoards/components/ImageBoardForm";
import BoardItems from "./features/imageBoards/components/BoardItems";

function App() {
  return (
    <>
        <AppToolbar/>
        <ImageBoardForm/>
        <BoardItems/>
    </>
  );
}

export default App;
