import Markdown from 'react-markdown'

import zlahaj from '../../guides/Zlahaj/guide.md?raw'

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
    <Markdown>
      {guideText}
    </Markdown>
  )
}