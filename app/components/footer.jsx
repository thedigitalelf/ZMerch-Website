export function Footer(){
  return (
    <>
      <img src="/img/lemmings-footer.gif" style={{width:"100%"}} />
      <br />
      <footer>
        <p>website by: puppy sky (ostlerdev)</p>
        <p>textures/materials by: brain (thedigitalelf)</p>
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