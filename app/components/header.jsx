import { NavLink } from 'react-router'

export function Header(){
	return (
		<header>
      <div className="flex md:flex-row flex-col md:gap-10 md:mx-32 mx-8 mt-4">
        <div className="flex-col grow nav-brand">
          <NavLink to="/">
            <div className="flex flex-row items-center">
              <img src="/img/logo.png" className="md:h-[80px] h-[40px]" />
              <span className="md:text-3xl text-xl md:mx-[16px]">zmerch.store</span>
              <img src="/img/new.gif" className="md:h-[80px] h-[30px]" />
            </div>
          </NavLink> 
          <p className="md:text-md text-xs">a thank you to slimevr & zrock for all the fun ;p</p>
        </div> 
        <div className="social-buttons flex-col md:visible hidden md:flex">
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