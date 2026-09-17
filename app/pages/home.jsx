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
      <div className="flex md:flex-row flex-col gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <NavLink to="/asset/zlahaj" className="normal-link-text">
            <div className="flex flex-row">
              <div className="flex-2">
                <img className="w-full" src="/img/shark.gif" />
              </div>
              <div className="flex-6">
                <p className="nes-container-title">ZLAHAJ SHARKi!1</p>
                <p>omg! be careful u dont get bit! :O!</p>
                <img className="w-full mt-[-20px]" src="/img/shark-rocket.gif" />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img className="w-75 m-auto" src="/img/shorkkkk-smol.png" />
            </div>
            <img className="m-auto h-12 mt-2 mb-[-60px]" src="/img/View-3.gif" />
            <img className="w-full" src="/img/sharkfin.gif" />
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
      <div className="flex md:flex-row flex-col gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <NavLink to="/asset/body-pillow" className="normal-link-text">
            <div className="absolute w-full">
              <img className="w-full" src="/img/pillow-zoom.gif" />
              <img className="w-full" src="/img/pillow-throw.gif" />
              <img className="w-full" src="/img/flying-pillow.gif" />
              <img className="w-full" style={{transform: "scaleX(-1)"}} src="/img/pillow-throw.gif" />
              <img className="w-full" style={{transform: "scaleX(-1)"}}  src="/img/pillow-zoom.gif" />
              <img className="w-full" style={{transform: "scaleX(-1)"}} src="/img/flying-pillow.gif" />
              <img className="w-full opacity-40 mt-8" style={{transform: "scaleY(-1)"}} src="/img/pillow-line.gif" />
            </div>
            <div className="flex flex-row">
              <div className="flex-6">
                <p className="nes-container-title">!1! SNUGLE TIME !1!</p>
                <p>turns out z is a huge snuggler!</p>
                <p>get your zrock approved body pillow today!</p>
              </div>
            </div>
            <img className="w-full ml-[-75px]" src="/img/pillowww-1.png" />
            <img className="h-20 mt-[-150px] ml-[65%] rotate-210 absolute" src="/img/check-it-out.gif" />
          </NavLink>
        </div>
        <div className="flex-1 nes-container with-title is-centered">
          <NavLink to="/asset/bread" className="normal-link-text">
            <div className="flex flex-row">
              <div className="flex-1">
                {/*<img style={{width: "100%"}} src="/img/toast-new.gif" />*/}
              </div>
              <div className="flex-6">
                <p className="nes-container-title">placeholder</p>
                <p>woah placeholder text</p>
              </div>
              <div className="flex-1">
                {/*<img src="/img/toast.gif" style={{width: "100%"}} />*/}
              </div>
            </div>
            {/*<img className="w-full" src="/img/breadd-256pixels.png" />*/}
            {/*<img className="inline m-auto h-20 mt-2" src="/img/ch_to_view.gif" />*/}
            {/*<img className="inline" src="/img/wow1-1.gif" />*/}
          </NavLink>
        </div>
      </div>
      <img src="/img/construct.gif" style={{width: "100%"}} />
    </div>
  );
}
