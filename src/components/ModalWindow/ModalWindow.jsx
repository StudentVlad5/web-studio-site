import ReactDOM from "react-dom";
import {BackDrop, ItemContainer} from "./ModalWindow.styled";
import { AiFillCloseCircle } from "react-icons/ai";
import { closeModalWindow } from "hooks/ModalWindow";
import ReactPlayer from 'react-player';
import video from '../../images/video/IMG_4810.MOV'
import { useState } from "react";

export const ModalWindow = () => {
  const [isPlaying, setPlaying] = useState(false)
    
  function closeModal(e) {
        e.preventDefault();
        setPlaying(false);
        closeModalWindow(e);
      }

    return ReactDOM.createPortal(
        <BackDrop onClick={closeModal}>
          <ItemContainer
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{display:"flex", justifyContent:"center", alignItems:"start", margin:"20px 0"}}>
                <ReactPlayer url={video} playing={isPlaying} controls  width="90%" height="90%" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}/>
                <AiFillCloseCircle style={{width:"25px", height:"25px"}}
                  type="button"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
              </AiFillCloseCircle>
            </div>
            </ItemContainer>
            </BackDrop>, 
    document.querySelector("#popup-root")
  );
}