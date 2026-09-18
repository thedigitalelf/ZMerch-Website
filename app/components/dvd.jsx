import { useState, useRef, useEffect, createContext, useContext } from 'react';

const DVDContext = createContext(null);
export function DVDProvider({ children }) {
  const [currentDVD, setCurrentDVD] = useState(["", "200px", "100px"]);
  return (
    <DVDContext.Provider value={{ currentDVD, setCurrentDVD }}>
      {children}
    </DVDContext.Provider>
  );
}
export const useDVD = () => useContext(DVDContext);

// ty to stack overflow lol (https://stackoverflow.com/questions/22692134/detect-similar-colours-from-hex-values)
function hexColorDelta(color1, color2) {
  let hex1 = color1.substr(1, 7)
  let hex2 = color2.substr(1, 7)
  // get red/green/blue int values of hex1
  var r1 = parseInt(hex1.substring(0, 2), 16);
  var g1 = parseInt(hex1.substring(2, 4), 16);
  var b1 = parseInt(hex1.substring(4, 6), 16);
  // get red/green/blue int values of hex2
  var r2 = parseInt(hex2.substring(0, 2), 16);
  var g2 = parseInt(hex2.substring(2, 4), 16);
  var b2 = parseInt(hex2.substring(4, 6), 16);
  // calculate differences between reds, greens and blues
  var r = 255 - Math.abs(r1 - r2);
  var g = 255 - Math.abs(g1 - g2);
  var b = 255 - Math.abs(b1 - b2);
  // limit differences between 0 and 1
  r /= 255;
  g /= 255;
  b /= 255;
  // 0 means opposite colors, 1 means same colors
  return (r + g + b) / 3;
}

// credit goes to: https://codepen.io/RobotWizard/pen/rRVKVa
// iz so coool~ i just made it work on react lol
export function DVDLogo() {
  const dvdRef = useRef(null);

  const { currentDVD } = useDVD();

  useEffect(() => {
    let dvd = dvdRef.current
    if (!dvd) return
    // mask: url("/img/DVD_logo.svg") no-repeat center / contain;
    // -webkit-mask: url("/img/DVD_logo.svg") no-repeat center / contain;
    dvd.style.mask = `url("${currentDVD[0]}") no-repeat center / contain`
    dvd.style['-webkit-mask'] = `url("${currentDVD[0]}") no-repeat center / contain`
    // let control width/height for more accurate corner bouncing, make sure to add "px" when setting width/height x_x
    dvd.style.width = currentDVD[1]
    dvd.style.height = currentDVD[2]
  }, [dvdRef, currentDVD])

  useEffect(() => {
    let x = 0,
      y = 0,
      dirX = 1,
      dirY = 1;
    const speed = 3;
    let prevColorChoiceIndex = 0;
    const pallete = [
      "#ff0000", "#ff7a00", "#fff400", "#ff3d00", "#ffb700",
      "#00ff66", "#00ffe0", "#00a3ff", "#00ffa3", "#00e0ff",
      "#cb00ff", "#ff00b7", "#ff003d", "#ff00f4", "#ff007a",
      "#cbff00", "#51ff00", "#00ff28", "#8eff00", "#14ff00",
      "#0065ff", "#1400ff", "#8e00ff", "#0028ff", "#5100ff"
    ];
    let dvd = dvdRef.current;
    dvd.style.backgroundColor = pallete[0];

    function getNewRandomColor() {
      const currentColor = pallete[prevColorChoiceIndex]

      const currentPallete = [...pallete]
      currentPallete.splice(prevColorChoiceIndex,1)
      const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
      const colorChoice = currentPallete[colorChoiceIndex];

      // make sure that the color shifted enough and isn't basically the same one
      let colorSimilarity = hexColorDelta(currentColor, colorChoice)
      if (colorSimilarity > 0.7) {
        // console.log(`colors too similar: ${currentColor} vs ${colorChoice}\n`)
        return getNewRandomColor()
      }
      
      // only update if we are keeping the selected color
      prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;

      return colorChoice;
    }
    function animate() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      // calc width/height each time cuz we are changing dimensions on fly wit new images
      const dvdWidth = dvd.clientWidth;
      const dvdHeight = dvd.clientHeight;

      let changeColor = false
      if (y + dvdHeight >= screenHeight || y < 0) {
        dirY *= -1;
        changeColor = true
      }
      if (x + dvdWidth >= screenWidth || x < 0) {
        dirX *= -1;
        changeColor = true
      }
      // dont change twice
      if (changeColor){
        dvd.style.backgroundColor = getNewRandomColor()
      }
      x += dirX * speed;
      y += dirY * speed;
      // use translate instead of dead offsets cuz we want to do it based on the inner width/height :p - puppy sky
      dvd.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="dvd-overlay">
      <div className="dvd" ref={dvdRef} />
    </div>
  );
}