import { Header, Board, Countries, ModalCustom } from "../../";
import useStyles from "./styles";
import { useState } from "react";

const BoardContainers = () => {
    const [showModal,setShowmodal] = useState(false) 
    const clasess = useStyles()

    return(
  <div className={clasess.root}>
    <Header />
    <div>
      <Board />
      <Countries openModal={setShowmodal}/>
    </div>
    <ModalCustom toggle={showModal} onClose={setShowmodal} />
  </div>
    )}

export default BoardContainers