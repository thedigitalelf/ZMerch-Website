import { useState, useEffect, useRef } from 'react'

import { NavLink } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { useAudio } from '../components/funMode'
import { useDVD } from '../components/dvd'
import { DownloadModal } from '../components/downloadModal'

export function Light(){
  const videoRef = useRef()
  const { funMode, funModeActive, setCurrentSong } = useAudio();
  const { setCurrentDVD } = useDVD();
  const [triggerDownload, setTriggerDownload] = useState(false);

  useEffect(() => {
    setCurrentSong("/audio/oiia.mp3")
    setCurrentDVD("/img/rainbow-cat-oiia.gif")
  }, [setCurrentSong, setCurrentDVD])

  useEffect(() => {
    if (!videoRef.current) return;
    console.log(funModeActive);
    if (funMode && funModeActive)
      videoRef.current.play()
    if (!funMode || !funModeActive)
      videoRef.current.pause()
  }, [funMode, funModeActive])

  return (
    <>
      <div className={`fullscreen-vid-overlay opacity-5 ${funMode && funModeActive ? "visible" : "hidden"}`}>
        <video ref={videoRef} autoPlay muted loop className="w-full h-full" style={{objectFit: "fill"}}>
          <source src="/audio/oiia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="light-page-background" style={{backgroundColor: funMode && funModeActive ? "#000000EE" : "#000"}}>&nbsp;</div>
      <div className="body-container" style={{paddingTop: "0px", color: funMode && funModeActive ? "#FFF" : "#FFF"}}>
        <div className="flex flex-row">
          <NavLink to="/" className="flex-1"><img className="h-full" src="/img/back-3.gif" /></NavLink>
          <div className="flex-9"><div className="h-full" style={{backgroundSize: "75px 75px", backgroundImage: "url(/img/rave-tiny.gif)", backgroundRepeat: "repeat-x"}}>&nbsp;</div></div>
        </div>
        
        <div className="flex flex-row gap-2">
          <div className="flex-1 nes-container with-title is-centered" style={{borderColor: "#FFF"}}>
            <div className="flex flex-row">
              <div className="flex-2">
                <img className="w-full" src="/img/rainbow-cat-oiia.gif" />
                <img className="w-full" src="/img/ravelaserss.gif" />
              </div>
              <div className="flex-6">
                <p className="nes-container-title" style={{color: "#000"}}>ZLIGHT!</p>
                <p>do you ever find yourself in dark areas unsure what to do?</p>
                <p>do you ever need a helping hand and think about reaching out to z?</p>
                <p>do you like being asked hypotheticals?</p>
                <p>do you like going to hypothetical?!</p>
                <p>LOOK NO FURTHER THAN THE ZROCK FLASHLIGHT! THE SOLVER OF ALL YOUR ISSUES! A GOD AMONG MODS!</p>
                <p>WE PROMISE YOU WILL HAVE 1000% SATISFACTION OR WE WILL REFUND YOU 10X MORE THAN YOU PAY FOR THIS ASSET! WE SWEAR ON ZROCKS LIFE YOU WILL BE SATISFIED!</p>
                <p>DOWNLOAD TODAY!!!!</p>
                <p>PLEASE CONTACT ZROCK IF YOU ARE DISSATISFIED! ZROCK HAS NOT AGREED TO HELP YOU! :3c</p>
              </div>
              <div className="flex-2">
                <img className="w-full" src="/img/rainbow-cat-oiia.gif" />
                <img className="w-full" src="/img/pikarave.gif" />
              </div>
            </div>
            <div className="flex flex-row mt-4 gap-2">
              <div className="flex-1"><img className="w-full m-auto" src="/img/light-2.png" /></div>
              <div className="flex-1"><img className="w-full m-auto" src="/img/light-1.png" /></div>
              <div className="flex-1"><img className="w-full m-auto" src="/img/light-3.png" /></div>
            </div>
            <NavLink className="mt-6" to="/guides/flashlight/">Read Install Guide</NavLink>
            <a href="/guides/flashlight/download/flashlight-cookie_v1-0-0.jpg" download onClick={() => setTriggerDownload(true)}>
              <div className="flex flex-row mt-2 items-center">
                <div className="flex-1"><img className="w-full" src="/img/downloaditnow2.gif" /></div>
                <div className="flex-1"><img className="w-full" src="/img/download-rainbow-floppy.gif" /></div>
                <div className="flex-1"><img className="w-full" src="/img/freedownload-explode.gif" /></div>
                <div className="flex-1"><img className="w-full" src="/img/download-yellow-scroll.gif" /></div>
                <div className="flex-1"><img className="w-full" src="/img/download_red-flash.gif" /></div>
              </div>
            </a>
            <img className="w-full" src="/img/ravebar.gif" />
            <h1><em><font size="24"><marquee><font color="FF0000">R<font color="FFA500">a<font color="FFFF00">v<font color="00FF00">e<font color="0000FF">s<font color="A020F0">.<font color="FF0000">.<font color="FFA500">.<font color="FFFF00">R<font color="00FF00">a<font color="0000FF">v<font color="A020F0">e<font color="FF0000">s<font color="FFA500">.<font color="FFFF00">.<font color="00FF00">.<font color="0000FF">R<font color="A020F0">a<font color="FF0000">v<font color="FFA500">e<font color="FFFF00">s<font color="00FF00">.<font color="0000FF">.<font color="A020F0">.<font color="FF0000">R<font color="FFA500">a<font color="FFFF00">v<font color="00FF00">e<font color="0000FF">s<font color="A020F0">.<font color="FF0000">.<font color="FFA500">.<font color="FFFF00">R<font color="00FF00">a<font color="0000FF">v<font color="A020F0">e<font color="FF0000">s<font color="FFA500">.<font color="FFFF00">.<font color="00FF00">.<font color="0000FF">R<font color="A020F0">a<font color="FF0000">v<font color="FFA500">e<font color="FFFF00">s<font color="00FF00">.<font color="0000FF">.<font color="A020F0">.<font color="FF0000">R<font color="FFA500">a<font color="FFFF00">v<font color="00FF00">e<font color="0000FF">s<font color="A020F0">.<font color="FF0000">.<font color="FFA500">.<font color="FFFF00">R<font color="00FF00">a<font color="0000FF">v<font color="A020F0">e<font color="FF0000">s<font color="FFA500">.<font color="FFFF00">.<font color="00FF00">.</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></marquee></font></em></h1>
            <img className="w-full" src="/img/ravebar.gif" />
            {triggerDownload && <DownloadModal />}
          </div>
        </div>
      </div>
    </>
  )
}