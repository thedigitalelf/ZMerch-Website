export function Header(){
	return (
		<header>
      <div className="flex flex-row flex-wrap md:gap-10 md:mx-32 mx-8 mt-4">
        <div className="flex-col grow nav-brand">
          <a href="https://zmerch.store">
            <div className="flex flex-row flex-wrap items-center">
              <img src="/img/logo.png" style={{height: "80px"}} />
              <span style={{fontSize:"32px", margin:"0px 16px"}}>zmerch.store</span>
              <img src="/img/new.gif" style={{height:"80px"}} />
            </div>
          </a> 
          <p>a thank you to zrock for all the fun ;p</p>
        </div> 
        <div className="social-buttons flex-col">
          <p>socials</p>
          <div className="share flex flex-row gap-4">
            <a href="https://discord.com/invite/slimevr" target="_blank">
              <img src="/img/discord-pixel.png" style={{borderRadius: "8px"}} width="48" />
            </a>
            <a href="https://www.reddit.com/r/SlimeVR/" target="_blank">
              <img src="/img/reddit-pixel.png" width="48" />
            </a>
          </div>
        </div>
      </div>
      <div className="slimeBar">&nbsp;</div>
    </header>
	)
}