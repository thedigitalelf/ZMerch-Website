import { useState, useEffect } from 'react'

import { NavLink } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { useAudio } from '../components/funMode'
import { useDVD } from '../components/dvd'
import { DownloadModal } from '../components/downloadModal'

export function Bread(){
  const { setCurrentSong } = useAudio();
  const { setCurrentDVD } = useDVD();
  const [triggerDownload, setTriggerDownload] = useState(false);

  useEffect(() => {
    setCurrentSong("/audio/Anya_Nami_-_Bread_(Official_Music_Video).mp3")
    setCurrentDVD("/img/bread.svg")
  }, [setCurrentSong, setCurrentDVD])

  return (
    <div className="body-container" style={{paddingTop: "0px"}}>
      <div className="flex flex-row">
        <NavLink to="/" className="flex-1"><img className="h-full" src="/img/1bread-back.gif" /></NavLink>
        <div className="flex-9"><div className="h-full" style={{backgroundSize: "75px 75px", backgroundImage: "url(/img/toy-nekopan.gif)", backgroundRepeat: "repeat-x"}}>&nbsp;</div></div>
      </div>
      
      <div className="flex flex-row gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <div className="flex flex-row">
            <div className="flex-2">
              <img className="w-full" src="/img/baganim.gif" />
              <img className="w-full" src="/img/rainbow-bread.gif" />
            </div>
            <div className="flex-6">
              <p className="nes-container-title">WOW! Baguette!!</p>
              <p>have you ever wanted to just bite z? well now you can!</p>
              <p>come on down to the bakery and pick up your very own z flavored baguette!</p>
              <p>why does it taste like zrock? IT JUST DOES OKAY???? CHILL BREH!</p>
              <p>so uh, you gonna download this or just keep reading? cuz I can keep going all day</p>
            </div>
            <div className="flex-2">
              <img className="w-full" src="/img/a-grade-bread.gif" />
              <img className="w-full" src="/img/breadet.gif" />
            </div>
          </div>
          <div className="h-80 flex flex-row mt-4">
            <img className="h-full m-auto" src="/img/breadd-2.png" />
            <img className="h-full m-auto" src="/img/breadd-1.png" />
            <img className="h-full m-auto" src="/img/breadd-3.png" />
          </div>
          <NavLink className="mt-6" to="/guides/baguette/">Read Install Guide</NavLink>
          <a href="/guides/baguette/download/baguette_v1-0-0.jpg" download onClick={() => setTriggerDownload(true)}>
            <div className="flex flex-row h-24 mt-2 items-center">
              <div className="flex-1"><img className="w-full" src="/img/download-com.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download-sparkle.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download-bestgames.gif" /></div>
              <div className="flex-1 overflow-hidden h-24"><img className="w-full h-50 mt-[-50px]" src="/img/download-playnow.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/free-download.gif" /></div>
            </div>
          </a>
          <img className="w-full" src="/img/cbbreadanim.gif" />
          {triggerDownload && <DownloadModal />}
        </div>
      </div>
    </div>
  )
}