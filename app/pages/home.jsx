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
            <img className="w-full opacity-40" style={{transform: "scaleY(-1)"}} src="/img/pillow-line.gif" />
          </NavLink>
        </div>
        <div className="flex-1 nes-container with-title is-centered">
          <NavLink to="/asset/yoga-mat" className="normal-link-text">
            <div className="flex flex-row">
              <div className="flex-1">
                <img className="w-full" src="/img/yoga-tantra.gif" />
                <img className="w-full" src="/img/yoga-word-anim.gif" />
              </div>
              <div className="flex-6">
                <p className="nes-container-title">~ yoga mat ~</p>
                <p>get the limited edition zrock yoga mat today!!</p>
                <p>tastes like z's paws!</p>
              </div>
              <div className="flex-1">
                <img className="w-full" src="/img/yoga-word-anim.gif" />
                <img className="w-full" src="/img/yoga-tantra.gif" />
              </div>
            </div>
            <img className="w-full" src="/img/yoga-home.png" />
            <img className="absolute mt-[-100px]" src="/img/peace-text-rainbow.gif" />
          </NavLink>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-2">
        <div className="flex-1"></div>
        <div className="flex-2 nes-container with-title is-centered">
          <NavLink to="/asset/flashlight" className="normal-link-text">
            <div className="flex flex-row">
              <div className="flex-1">
                <img className="w-full" src="/img/light-spotlight-1.gif" />
                <img className="w-full" style={{transform: "scaleX(-1)"}} src="/img/light-gun.gif" />
              </div>
              <div className="flex-6">
                <p className="nes-container-title">zrock flashlight</p>
                <p>find your way through your darkest moments...</p>
                <p>WITH THE ALL NEW ZROCK FLASHLIGHT!!!</p>
              </div>
              <div className="flex-1">
                <img className="w-full" src="/img/light-spotlight-2.gif" />
                <img className="w-full" src="/img/light-gun.gif" />
              </div>
            </div>
            <img className="w-full" src="/img/light-home.png" />
            <img className="absolute right-[-30px] mt-[-75px]" src="/img/light-scuba.gif" />
            <img className="absolute mt-[-100px] left-[40%]" src="/img/view-rainbow.gif" />
          </NavLink>
        </div>
        <div className="flex-1"></div>
      </div>
      <img src="/img/coming-soon-more.gif" style={{width: "100%"}} />
      <img src="/img/construct.gif" style={{width: "100%"}} />
    </div>
  );
}
