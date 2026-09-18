export function Footer(){
  return (
    <>
      <img src="/img/lemmings-footer.gif" style={{width:"100%"}} />
      <br />
      <footer>
        <p>NO AFFILIATION WITH SLIMEVR - NOT OFFICIALLY ENDORSED - JUST A SILLY LIL MEME :3</p>
        <p>textures/materials by: brain (thedigitalelf)</p>
        <p>website by: puppy sky (ostlerdev)</p>
        <p>gif sources: <a href="https://github.com/thedigitalelf/ZMerch-Website/blob/main/public/img/assets.md" target="_blank" style={{color: "#FF9900" /* inverse cuz we are flipping color for the p tag so that it works on the "lightshow" background */}}>Internet Archive</a></p>
        <div className="flex flex-row max-h-16 gap-8 justify-center-safe items-center">
          <div><img style={{width:"auto"}} src="/img/aniclawflag.gif" /></div>
          <div><img style={{width:"auto"}} src="/img/rainbow-sparkle.gif" /></div>
          <div><img style={{width:"auto"}} src="/img/counter2.gif" /></div>
          <div><img style={{width:"auto", maxHeight: "50px"}} src="/img/transflaganim.gif" /></div>
          <div><img style={{width:"auto"}} src="/img/Goldn_Puppy.gif" /></div>
        </div>
        <div className="md:hidden">
          <br />
          <br />
        </div>
      </footer>
    </>
  )
}