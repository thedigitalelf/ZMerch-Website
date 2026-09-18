import Markdown from 'react-markdown'

import zlahaj from '../../public/guides/zlahaj/guide.md?raw'
import baguette from '../../public/guides/baguette/guide.md?raw'
import bodyPillow from '../../public/guides/body-pillow/guide.md?raw'
import yoga from '../../public/guides/yoga-mat/guide.md?raw'

export function Guides({guide}){
  let guideText;
  switch(guide) {
    case "zlahaj":
      guideText = zlahaj;
      break;
    case "baguette":
      guideText = baguette;
      break;
    case "body-pillow":
      guideText = bodyPillow;
      break;
    case "yoga-mat":
      guideText = yoga;
      break;
    default:
      guideText = "## 404 guide not found?"
      break;
  }
  return(
    <div className="body-container" style={{paddingTop: "0px"}}>
      <div className="flex justify-center"><a className="shrink" href="#" onClick={() => history.back()}><img src="/img/back-3.gif" /></a></div>
      <Markdown>
        {guideText}
      </Markdown>
    </div>
  )
}