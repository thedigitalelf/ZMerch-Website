import { useState, useRef, useEffect } from 'react';

export function Home() {
  const [showDialog, setShowDialog] = useState(true);
  const [funMode, setFunMode] = useState(false);
  const [funModeActive, setFunModeActive] = useState(false);

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

    if (funMode && !funModeActive) {
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
    <div>
      <div id="nescss">
        <header className="">
          <div className="flex flex-row gap-10 md:mx-32 mx-8 mt-4">
            <div className="flex-col grow nav-brand">
              <a href="https://zmerch.store">
                <div className="flex flex-row items-center">
                  <img src="/img/logo.png" style={{height: "80px"}} />
                  <span style={{fontSize:"32px", margin:"0px 16px"}}>zmerch.store</span>
                  <img src="/img/new.gif" style={{height:"80px"}} />
                </div>
              </a> 
              <p>
                <font dir="auto" style={{verticalAlign: "inherit"}}>
                  <font dir="auto" style={{verticalAlign: "inherit"}}>a thank you to zrock for all the fun ;p</font>
                </font>
              </p>
            </div> 
            <div className="social-buttons flex-col">
              <p>
                <font dir="auto" style={{verticalAlign: "inherit"}}>
                  <font dir="auto" style={{verticalAlign: "inherit"}}>socials</font>
                </font>
              </p>
              <div className="share flex flex-row gap-4">
                <a href="https://discord.com/invite/slimevr" target="_blank">
                  <img src="/img/discord-pixel.png" style={{borderRadius: "8px"}} width="48" />
                </a>
                <a href="https://www.reddit.com/r/SlimeVR/" target="_blank">
                  <img src="/img/reddit-pixel.png" width="48" />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="body-container" style={{paddingTop: "32px"}}>
          <main className="main-content">
            <div className="nes-container with-title is-centered">
              <p className="title">
                <font dir="auto" style={{verticalAlign: "inherit"}}><font dir="auto" style={{verticalAlign: "inherit"}}>wow very site</font></font>
              </p>
              <p>
                <font dir="auto" style={{verticalAlign: "inherit"}}><font dir="auto" style={{verticalAlign: "inherit"}}>very nice, very good</font></font>
              </p>
            </div>
            <img src="/img/construct.gif" style={{width: "100%"}} />
          </main>
        </div>
      </div>
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
      <audio loop controls style={{visibility: "hidden"}}>
        <source src="/audio/BALKAN-TECHNO-REMIX.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
