import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { FunMode } from '../components/funMode'

export function Home() {
  return (
    <div>
      <div id="nescss">
        <Header />
        <div className="body-container" style={{paddingTop: "32px"}}>
          <main className="main-content">
            <div className="nes-container with-title is-centered">
              <p className="title">
                wow very site
              </p>
              <p>
               very nice, very good
              </p>
            </div>
            <img src="/img/construct.gif" style={{width: "100%"}} />
          </main>
        </div>
      </div>
      <FunMode />
      <Footer />
    </div>
  );
}
