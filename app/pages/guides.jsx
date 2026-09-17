import Markdown from 'react-markdown'

import zlahaj from '../../public/guides/zlahaj/guide.md?raw'

export function Guides({guide}){
  let guideText;
  switch(guide) {
    case "zlahaj":
      guideText = zlahaj;
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