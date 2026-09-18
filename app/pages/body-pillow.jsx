import { useState, useEffect } from 'react'

import { NavLink } from 'react-router'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

import { useAudio } from '../components/funMode'
import { DownloadModal } from '../components/downloadModal'

export function BodyPillow(){
  const { currentSong, setCurrentSong } = useAudio();
  const [triggerDownload, setTriggerDownload] = useState(false);

  useEffect(() => {
    setCurrentSong("/audio/Nymano_ft_JK_the_Sage_-_Sleepover.mp3")
  }, [setCurrentSong])

  return (
    <div className="body-container" style={{paddingTop: "0px"}}>
      <div className="flex flex-row">
        <NavLink to="/" className="flex-1"><img className="h-full" src="/img/back-1.gif" /></NavLink>
        <div className="flex-9"><img className="w-full max-h-20" src="/img/pillow-line.gif" /></div>
      </div>
      
      <div className="flex flex-row gap-2">
        <div className="flex-1 nes-container with-title is-centered">
          <div className="flex flex-row">
            <div className="flex-2">
              <img className="w-full" style={{transform: "scaleX(-1) scaleY(-1)"}} src="/img/pillow-greeting.gif" />
              <img className="w-full" src="/img/pillow-head.gif" />
            </div>
            <div className="flex-6">
              <p className="nes-container-title">owo ~body pillow~ uwu</p>
              <p>ever been scared during a movie and need to hold on tight to something safe feeling?</p>
              <p>look no further than our high quality zrock body pillows!</p>
              <p>the perfect thing to put you to sleep in popcorn palace~ just imagine it now!</p>
              <p>you, cuddling right up to zrock, snoozing away, so peaceful, so graceful... so happy!</p>
              <marquee>NOW WITH EXTRA FLUFF! SO SOFT JUST LIKE THE REAL ZROCK! SERIOUSLY! YOU NEED THIS RIGHT NOW! I AM TELLING YOU THIS IS THE GREATEST THING SINCE SLICED BREAD! OR EVEN SLICED UP ZROCK BAGUETTE! YOUR DAD EVEN SLEEPS WITH ONE EVERY NIGHT! I AM SERIOUS! THIS IS THE BEST THING EVER! DON'T FORGET TO TELL YOUR FRIENDS! WOW IS THIS STILL GOING? I WONDER IF THIS PUPPY DOG WILL EVER STOP TYPING... NOPE! HAHA! YOU CAN'T STOP ME!@1! I AM INVINCIBLE AND HAVE INFINITE STAMINA! I JUST WOKE UP FROM THE BEST NAP SNUGGLING WITH MY Z PILLOW, AND I AM SO REFRESHED THAT I COULD TYPE LIKELY FOREVER! *makes another cup of coffee* ZOOOOMMMMMM!!!!! OMG OMG OMG OGOMNMOG OMG ITS TIME FOR THE NEXT MOVIE! I JUST MADE THE POPCORN! TIME TO DROP DOWN MY Z PILLOW AND CUDDLE ON UP! I NEVER FEEL ALONE ANYMORE THANKS TO THIS ASSET! YOU DONT HAVE TO FEEL ALONE EITHER! I AM SERIOUS!!!!!!!!!!!!!!!!!!!!!!!!! WOAH THAT WAS A LOT OF EXCLAMATION POINTS! I WONDER IF AI COULD COME UP WITH SOMETHING THIS ORIGINAL! I SERIOUSLYT DOUBT IT! THIS LEVEL OF UNHINGED ONLY COMES FROM WELL RESTED PUPS! WELL RESTED AND READY FOR THE NEXT MOVIE! WITH MY ULTRA FLUFFY, ULTRA COMFY, ULTRA BESTEST ZROCK BODDY PILLOW! OFFICIALLY ENDORSED BY ZROCK! POSED AND EVERYTHING! ITS JUST SO AMAZING I DONT THINK YOU WILL BE ABLE TO BELIEVE IT UNTIL YOU TRY IT! WHAT ARE YOU WAITING FOR???? GET IN THERE AND DOWNLOAD THE ASSET NOW! COME ON, JUST SCROLL DOWN! I DIDNT MAKE THIS WEBSITE JUST SO YOU COULD SIT HERE AND READ THIS ALL DAY! OR DID i...? i CANT REMEMBER TBH. I AM SO DEEP INTO THE SAUCE THAT I FEEL LIKE I HAVE TO KEEP GOING FOREVER! BUT MEMES DONT WRITE THEMSELVES! MAKE YOUR DREAMS INTO MEMES! I HAD A DREAM ONCE, A DREAM WHERE YOU DOWNLOADED THE ****ING ASSET AND SNUGGLED WITH IT! IT WAS A GOOD DREAM, A SAFE DREAM, A LOVELY DREAM EVEN! WANNA HEAR A LITTLE SECRET? YOU ARE AMAZING. YOU ARE WONDERFUL. YOU ARE LOVED EXACTLY AS YOU ARE. THE MOST IMPORTANT THING IN LIFE IS TO UNAPOLOGETICALLY BE YOURSELF EXACTLY, NO MATTER THE CONSEQUENCE, NO MATTER THE SACRIFICE. YOU ARE LOVED. YOU ARE CARED ABOUT. YOU ARE THOUGHT ABOUT. YOU ARE NEVER ALONE, WE ARE ALL HERE WITH YOU. AND SO IS THIS AMAZING ZROCK BODY PILLOW! okay i really am done typing now, if you are reading this... then 67! gotty! you lost the game! love you all :3</marquee>
            </div>
            <div className="flex-2">
              <img className="w-full" style={{transform: "scaleY(-1)"}} src="/img/pillow-greeting.gif" />
              <img className="w-full" src="/img/pillow-whack.gif" />
            </div>
          </div>
          <div className="flex flex-row mt-4 gap-2">
            <div className="flex-1"><img className="w-full m-auto" src="/img/z-pillow-back.png" /></div>
            <div className="flex-1"><img className="w-full m-auto" src="/img/z-pillow-laying.png" /></div>
            <div className="flex-1"><img className="w-full m-auto" style={{transform: "scaleX(-1)"}} src="/img/z-pillow-sitting.png" /></div>
          </div>
          <NavLink className="mt-6" to="/guides/body-pillow/">Read Install Guide</NavLink>
          <a href="/guides/body-pillow/download/body-pillow-texture_v2-0-0.png" download onClick={() => setTriggerDownload(true)}>
            <div className="flex flex-row mt-2 gap-5 justify-center items-center">
              <div className=""><img className="h-8" src="/img/download-banner-yellow.gif" /></div>
              <div className=""><img className="h-24" src="/img/download-floppy-pink.gif" /></div>
              <div className=""><img className="h-8" src="/img/download-banner-blue.gif" /></div>
              <div className=""><img className="h-24" src="/img/download-floppy-blue.gif" /></div>
              <div className=""><img className="h-8" src="/img/download-banner-orange.gif" /></div>
              <div className=""><img className="h-24" src="/img/download-floppy-yellow.gif" /></div>
              <div className=""><img className="h-8" src="/img/download-banner-pink.gif" /></div>
              <div className=""><img className="h-24" src="/img/download-floppy-green.gif" /></div>
              <div className=""><img className="h-8" src="/img/download-banner-purple.gif" /></div>
            </div>
          </a>
          <p>now with 100% less ai! (f**k ai)</p>
          <div className="flex flex-row">
            <div className="flex-1"><img className="w-full" src="/img/pillow-popup.gif" /></div>
            <div className="flex-1"><img className="w-full" src="/img/pillow-popup.gif" /></div>
            <div className="flex-1"><img className="w-full" src="/img/pillow-popup.gif" /></div>
            <div className="flex-1"><img className="w-full" src="/img/pillow-popup.gif" /></div>
            <div className="flex-1"><img className="w-full" src="/img/pillow-popup.gif" /></div>
          </div>
          <div className="pb-30">
            <img className="w-full absolute" src="/img/pillow-zoom.gif" />
            <img className="w-full absolute" src="/img/pillow-throw.gif" />
            <img className="w-full absolute" src="/img/flying-pillow.gif" />
            <img className="w-full absolute" style={{transform: "scaleX(-1)"}} src="/img/pillow-throw.gif" />
            <img className="w-full absolute" style={{transform: "scaleX(-1)"}}  src="/img/pillow-zoom.gif" />
            <img className="w-full absolute" style={{transform: "scaleX(-1)"}} src="/img/flying-pillow.gif" />
          </div>
          {/*<img className="w-full" src="/img/jootsharkopt.gif" />*/}
          {triggerDownload && <DownloadModal />}
        </div>
      </div>
    </div>
  )
}