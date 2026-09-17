import { useEffect } from 'react'
import { NavLink } from 'react-router'

import { useAudio } from '../components/funMode'
import { useDVD } from '../components/dvd'

export function Home() {
  const { setCurrentSong } = useAudio();
  const { setCurrentDVD } = useDVD();

  useEffect(() => {
    setCurrentSong("/audio/BALKAN-TECHNO-REMIX.mp3");
    setCurrentDVD("/img/DVD_logo.svg")
  }, [setCurrentSong, setCurrentDVD]);

  return (
    <div className="body-container" style={{paddingTop: "16px"}}>
      <main className="main-content">
        <div className="nes-container with-title is-centered rainbow-border mb-[-48px]">
          <p className="nes-container-title">
            wow very asset!
          </p>
          <p>
            THE VERY BEST ZROCK MERCH ON THE INTERNET!!1!
          </p>
          <img className="inline" src="/img/new3-3.gif" />
          <img className="inline"  src="/img/download-2.gif" />
        </div>
      </main>
      <img className="m-auto w-[75%]" src="/img/NOWAVAILABLE.gif" />
      <div className="flex flex-row gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <NavLink to="/asset/zlahaj" className="normal-link-text">
            <div className="flex flex-row">
              <div className="flex-2">
                <img style={{width: "100%"}} src="/img/shark.gif" />
              </div>
              <div className="flex-6">
                <p className="nes-container-title">ZLAHAJ SHARKi!1</p>
                <p>omg! be careful u dont get bit! :O!</p>
              </div>
            </div>
            <img className="w-full" src="/img/sharkfin.gif" />
            <img className="w-75 m-auto" src="/img/shorkkkk-smol.png" />
            <img className="m-auto h-12 mt-2" src="/img/View-3.gif" />
            <img className="w-full" src="/img/jootsharkopt.gif" />
          </NavLink>
        </div>
        <div className="flex-1 nes-container with-title is-centered">
          <NavLink to="/asset/bread" className="normal-link-text">
            <div className="flex flex-row">
              <div className="flex-1">
                <img style={{width: "100%"}} src="/img/toast-new.gif" />
              </div>
              <div className="flex-6">
                <p className="nes-container-title">MmMmMMMmm~ Baguette~</p>
                <p>u can bite this one! and it tastes like bread!</p>
                <p>(or does it taste like z i cant remember...)</p>
              </div>
              <div className="flex-1">
                <img src="/img/toast.gif" style={{width: "100%"}} />
              </div>
            </div>
            <img className="w-full" src="/img/breadd-256pixels.png" />
            <img className="inline m-auto h-20 mt-2" src="/img/ch_to_view.gif" />
            <img className="inline" src="/img/wow1-1.gif" />
          </NavLink>
        </div>
      </div>
      <img src="/img/construct.gif" style={{width: "100%"}} />
    </div>
  );
}
