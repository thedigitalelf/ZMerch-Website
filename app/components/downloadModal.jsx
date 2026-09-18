import { useState, useEffect } from 'react'

export function DownloadModal({file}){
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <>
      {modalOpen &&
        <div className="modal-overlay">
          <div className="nes-dialog is-dark is-rounded">
            <form method="dialog">
              <p className="title text-3xl">tank u for download!</p>
              <p>the assets are completely free, and we hope you like em.</p>
              <p className="text-xl">!!!plz donate some money to one of these great organizations!!!</p>
              <p className="text-2xl pt-4">save a life today!</p>
              <menu className="dialog-menu">
                <button className="nes-btn is-rainbow is-rainbow-trans" onClick={() => {
                  window.open("https://give.translifeline.org/give/461718#!/donation/checkout", '_blank')
                  setModalOpen(false)
                }}>Donate to Trans Lifeline!</button>
                <button className="nes-btn is-rainbow" onClick={() => {
                  window.open("https://give.thetrevorproject.org/campaign/844047/donate", '_blank')
                  setModalOpen(false)
                }}>Donate to Trevor Project!</button>
              </menu>
              <a href="#" onClick={() => setModalOpen(false)}>(i cant donate im sorry...)</a>
              <div className="flex flex-row items-center justify-center mt-8 gap-8">
                <img src="/img/downloading_cop_checking.gif" />
                <img src="/img/humor_banner_download.gif" />
                <img src="/img/downloading-devil.gif" />
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}