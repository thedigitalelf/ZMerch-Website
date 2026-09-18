import { useState, useEffect } from 'react'

import { NavLink } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { useAudio } from '../components/funMode'
import { useDVD } from '../components/dvd'
import { DownloadModal } from '../components/downloadModal'

export function Yoga(){
  const { setCurrentSong } = useAudio();
  const { setCurrentDVD } = useDVD();
  const [triggerDownload, setTriggerDownload] = useState(false);

  useEffect(() => {
    setCurrentSong("/audio/yoga-remix.mp3")
    setCurrentDVD("/img/Peace_sign.svg")
  }, [setCurrentSong, setCurrentDVD])

  return (
    <div className="body-container" style={{paddingTop: "0px"}}>
      <div className="flex flex-row">
        <NavLink to="/" className="flex-1"><img className="h-full" src="/img/Back-acid.gif" /></NavLink>
        <div className="flex-9"><div className="h-full" style={{backgroundSize: "80px 100%", backgroundImage: "url(/img/yoga-poses.gif)", backgroundRepeat: "repeat-x"}}>&nbsp;</div></div>
      </div>
      
      <div className="flex flex-row gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <div className="flex flex-row">
            <div className="flex-2">
              <img className="w-full" src="/img/yoga-body.gif" />
              <img className="w-full" src="/img/peace-flag.gif" />
            </div>
            <div className="flex-6">
              <p className="nes-container-title">Z Yoga Mat</p>
              <p>finding inner peace can be a challenge. We often seek it out our entire life.</p>
              <p>the powers of zrock running slimevr's yoga events cannot be understated.</p>
              <p>the peace you will feel can be shocking, but it is okay. do not fear. you are safe here.</p>
              <p>we advise against licking the yoga mats. zrock hasn't had their yearly shower yet, and the paw taste is.... a bit strong... don't ask how I know okay....?</p>
            </div>
            <div className="flex-2">
              <img className="w-full" src="/img/yoga-chicuela.gif" />
              <img className="w-full" src="/img/yoga-tantra.gif" />
            </div>
          </div>
          <div className="flex flex-row mt-4 gap-2">
            <div className="flex-1"><img className="w-full m-auto" src="/img/yoga-2.png" /></div>
            <div className="flex-1"><img className="w-full m-auto" src="/img/yoga-1.png" /></div>
            <div className="flex-1"><img className="w-full m-auto" src="/img/yoga-3.png" /></div>
          </div>
          <NavLink className="mt-6" to="/guides/yoga-mat/">Read Install Guide</NavLink>
          <a href="/guides/yoga-mat/download/yoga-mat-texture_v1-0-0.png" download onClick={() => setTriggerDownload(true)}>
            <div className="flex flex-row h-24 mt-2 items-center">
              <div className="flex-1"><img className="w-full" src="/img/download-mcafee.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download-sparkle.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download-me.gif" /></div>
              <div className="flex-1"><img className="w-full" src="/img/download-rainbow.gif" /></div>
            </div>
          </a>
          <div className="flex flex-row items-center">
            <div className="flex-2"><img className="w-full" src="/img/peace-fingers.gif" /></div>
            <div className="flex-3"><img className="w-full" src="/img/yoga-stretch.gif" /></div>
            <div className="flex-2"><img className="w-full" src="/img/peace-acid.gif" /></div>
            <div className="flex-3"><img className="w-full" src="/img/yoga-stretch.gif" /></div>
            <div className="flex-3"><img className="w-full" src="/img/peace-acid.gif" /></div>
            <div className="flex-3"><img className="w-full" src="/img/yoga-stretch.gif" /></div>
            <div className="flex-2"><img className="w-full" src="/img/peace-acid.gif" /></div>
            <div className="flex-3"><img className="w-full" src="/img/yoga-stretch.gif" /></div>
            <div className="flex-2"><img className="w-full" src="/img/peace-fingers.gif" /></div>
          </div>
          {/*<img className="w-full" src="/img/cbbreadanim.gif" />*/}
          {triggerDownload && <DownloadModal />}
        </div>
      </div>
    </div>
  )
}