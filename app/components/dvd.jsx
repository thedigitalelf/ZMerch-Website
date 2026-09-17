import { useEffect, useRef } from "react";

// credit goes to: https://codepen.io/RobotWizard/pen/rRVKVa
// iz so coool~ i just made it work on react lol
export function DVDLogo() {
  const dvdRef = useRef(null);

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

    const dvdWidth = dvd.clientWidth;
    const dvdHeight = dvd.clientHeight;

    function getNewRandomColor() {
      const currentPallete = [...pallete]
      currentPallete.splice(prevColorChoiceIndex,1)
      const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
      prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;
      const colorChoice = currentPallete[colorChoiceIndex];
      return colorChoice;
    }
    function animate() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (y + dvdHeight >= screenHeight || y < 0) {
        dirY *= -1;
        dvd.style.backgroundColor = getNewRandomColor();
      }
      if (x + dvdWidth >= screenWidth || x < 0) {
        dirX *= -1;

        dvd.style.backgroundColor = getNewRandomColor();
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