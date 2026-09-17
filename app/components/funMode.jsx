import { useState, useRef, useEffect } from 'react';
import { DVDLogo } from './dvd'

export function FunMode () {
  const [showDialog, setShowDialog] = useState(true);
  const [funMode, setFunMode] = useState(false);
  const [funModeActive, setFunModeActive] = useState(true);

  // let funModeRunning = false;
  function funModeENABLED () {
    setShowDialog(false);
    setFunMode(true);
  }
  
  useEffect(() => {
    const audio = document.querySelector("audio");
    const funBtn = document.getElementById("fun-btn")
    const funBtnTxt = document.getElementById("fun-txt")
    const funToggles = document.querySelectorAll('.fun-active')

    if (funMode && funModeActive) {
      // funModeRunning = true;
      funBtn.style.visibility = "visible";
      funBtnTxt.textContent = "FUN ACTIVE!";
      audio.volume = 0.05;
      audio.play();

      funToggles.forEach(element => {
        element.style.display = "inline-block"
      })
    } else if (funMode) {
      // funModeRunning = false;
      funBtnTxt.textContent  = "MOAR FUN PLZ!";
      audio.pause();

      funToggles.forEach(element => {
        element.style.display = "none"
      })
    }
  }, [funMode, funModeActive])

  return (
    <>
      <section>
        {showDialog &&
        <div className="modal-overlay">
          <div className="nes-dialog is-dark is-rounded">
            <form method="dialog">
              <p className="title">WELCOME!!!!! :3</p>
              <p>choose your future~</p>
              <menu className="dialog-menu">
                <button className="nes-btn" onClick={() => setShowDialog(false)}>boring mode plz</button>
                <button className="nes-btn is-rainbow" onClick={() => funModeENABLED()}>
                  I WANT FUN! :3
                </button>
              </menu>
            </form>
          </div>
        </div>}
      </section>
      {funMode && 
        <button id="fun-btn" className="fun-btn nes-btn is-rainbow" onClick={() => setFunModeActive(!funModeActive)}>
          <img className="fun-active" height="100px" src="/img/cat-dance-emoji.gif" style={{margin: "-98px -16px -8px -38px"}} />
          <span id="fun-txt">fun active</span>
        </button>
      }
      {funMode && 
        <div style={{visibility: funModeActive ? "visible" : "hidden"}}><DVDLogo /></div>
      }
      <audio loop controls style={{visibility: "hidden"}}>
        <source src="/audio/BALKAN-TECHNO-REMIX.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}