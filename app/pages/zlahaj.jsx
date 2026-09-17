import { useState, useEffect } from 'react'

import { NavLink } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { useAudio } from '../components/funMode'
import { DownloadModal } from '../components/downloadModal'

export function Zlahaj(){
  const { currentSong, setCurrentSong } = useAudio();
  const [triggerDownload, setTriggerDownload] = useState(false);

  useEffect(() => {
    setCurrentSong("/audio/undersea.mp3")
  }, [setCurrentSong])

  return (
    <div className="body-container" style={{paddingTop: "0px"}}>
      <div className="flex flex-row">
        <NavLink to="/" className="flex-1"><img className="h-full" src="/img/back-1.gif" /></NavLink>
        <div className="flex-9"><img className="w-full max-h-20" src="/img/sharkfin.gif" /></div>
      </div>
      
      <div className="flex flex-row gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <div className="flex flex-row">
            <div className="flex-2">
              <img className="w-full" src="/img/shark-rainbow.gif" />
              <img className="w-full" src="/img/shark-dock.gif" />
            </div>
            <div className="flex-6">
              <p className="nes-container-title">ZLAHAJ SHARKi!1</p>
              <p>omg! the silly z has been turned into a cute lil blahaj!! toss on ur pink, white, n blue thigh highs and cuddle up!</p>
              <p>perfect to pull out in popcorn palace while chillin with the mod team!</p>
              <p>come on~ you know you wanna!!</p>
              <p>DOWNLOAD IT NAOOOOO!!!!!! DONT WAWITTT!!!!</p>
            </div>
            <div className="flex-2">
              <img className="w-full" src="/img/shark-rainbow.gif" />
              <img className="w-full" src="/img/FIN2.gif" />
            </div>
          </div>
          <div className="h-80 flex flex-row mt-4">
            <img className="h-full m-auto" src="/img/shorkkkk-smol.png" />
            <img className="h-full m-auto" src="/img/shork-2.png" />
            <img className="h-full m-auto" src="/img/shorkk-3.png" />
          </div>
          <img className="w-40 m-auto mt-6" src="/img/soon.gif" />
          <NavLink className="mt-6" to="/guides/zlahaj/">Read Install Guide</NavLink>
          <a href="#" onClick={() => setTriggerDownload(true)}>
            <div className="flex flex-row h-24 mt-2 items-center">
              <div className="flex-1"><img className="w-full" src="/img/download-spin-orange.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/mp3-download.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download-click2.gif" /></div>
              <div className="flex-1 overflow-hidden h-24"><img className="w-full h-50 mt-[-50px]" src="/img/Download-Blue-Spin.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/downloads2.gif" /></div>
            </div>
          </a>
          <img className="w-full" src="/img/jootsharkopt.gif" />
          {triggerDownload && <DownloadModal file="/assets/zlahaj_v1-0-0.zip" />}
        </div>
      </div>
    </div>
  )
}