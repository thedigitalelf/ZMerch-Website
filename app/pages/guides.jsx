import Markdown from 'react-markdown'

import zlahaj from '../../public/guides/zlahaj/guide.md?raw'
import baguette from '../../public/guides/baguette/guide.md?raw'

export function Guides({guide}){
  let guideText;
  switch(guide) {
    case "zlahaj":
      guideText = zlahaj;
      break;
    case "baguette":
      guideText = baguette;
      break;
    default:
      guideText = "## 404 guide not found?"
      break;
  }
  return(
    <div className="body-container" style={{paddingTop: "0px"}}>
      <Markdown>
        {guideText}
      </Markdown>
    </div>
  )
}