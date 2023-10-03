

export default function Frontend() {
    


    const darkReveal = () => {
        if (localStorage.theme === 'dark') {
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		} else {
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		}
    }

    return <div className="text-black dark:text-off-white transition-all duration-500 bg-white dark:bg-transparent">
    <div className="grid lg:grid-cols-12 gap-10 md:gap-20 h-full md:h-screen w-full px-10 py-10 xl:py-20 container mx-auto">
        <div className="lg:col-span-6 flex flex-col gap-10">
            <div>
                <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl tracking-tight">christopher hare</h1>
            </div>
            <div>
                <p className="font-sans text-base md:text-lg ">chris</p>
                <p className="font-sans text-base md:text-lg ">(he-him)</p>
            </div>
            <div className="flex flex-col">
                <div>
                    <a href="mailto:chrishare.png@gmail.com" className="font-sans text-base md:text-lg ">email</a>
                </div>
                <div>
                    <a href="https://github.com/chrishare10" target="_blank" className="font-sans text-base md:text-lg ">github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/chris-hare-46924411a/" target="_blank" className="font-sans text-base md:text-lg ">linkedin</a>
                </div>
                <div>
                    <a href="https://www.instagram.com/chrishare.png/" target="_blank" className="font-sans text-base md:text-lg ">instagram</a>
                </div>
                <div>
                    <a href="https://www.goodreads.com/user/show/78003696-chris-hare" target="_blank" className="font-sans text-base md:text-lg ">goodreads</a>
                </div>
                
            </div>
        </div>
        <div className="lg:col-span-6 grid grid-cols-1 xl:grid-cols-2  gap-10 md:gap-20 ">

                <div className="flex flex-col gap-10 justify-end h-full">
                    <div>
                        <h2 className="font-serif text-2xl tracking-tight">technical skills and tool proficiencies</h2>
                        <div className="flex flex-col items-end justify-end">
                            <div className="text-right">
                                <p className="font-sans text-base">javascript</p>
                                <ul className="px-5 italic">
                                    <li>react</li>
                                    <li>vite</li>
                                    <li>nextjs</li>
                                    <li>threejs</li>
                                    <li>gsap</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">graphql</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">css</p>
                                <ul className="px-5 italic">
                                    <li>tailwind</li>
                                    <li>sass</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">html</p>
                                <ul className="px-5 italic">
                                    <li>astro</li>
                                    <li>twig</li>
                                </ul>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">craftcms</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">docker</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">git</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">figma</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-serif text-2xl tracking-tight">selected work</h2>
                        <div className="flex flex-col items-end justify-end">
                            
                            <div className="text-right">
                                <a href="https://mbx.supergiantweb.com/" target="_blank" className="font-sans text-base">mbx</a>
                            </div>
                            <div className="text-right">
                                <a href="https://holtlunsford.supergiant.agency/" target="_blank" className="font-sans text-base">holt lunsford</a>
                            </div>
                            <div className="text-right">
                                <a href="https://www.google.com/" target="_blank" className="font-sans text-base">grailhold (wip)</a>
                            </div>
                            <div className="text-right">
                                <div>
                                    <a href="https://geosteeringvision.com/" target="_blank" className="font-sans text-base">geovision</a> / <a href="https://dataloggs.com/" target="_blank" className="font-sans text-base">datalog</a>
                                </div>
                            </div>
                            <div className="text-right">
                                <a href="hhttps://www.giftcardbank.org/" target="_blank" className="font-sans text-base">gift card bank</a>
                            </div>
                            <div className="text-right">
                                <a href="https://roger.bank/" target="_blank" className="font-sans text-base">roger bank</a>
                            </div>
                            <div className="text-right">
                                <a href="https://rosewood.supergiantweb.com/" target="_blank" className="font-sans text-base">rosewood court</a>
                            </div>
                            <div className="text-right">
                                <a href="https://www.eatatspark.com/" target="_blank" className="font-sans text-base">spark</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 justify-end h-full">
                    <div>
                        <h2 className="font-serif text-2xl tracking-tight">passions and recreations</h2>
                        <div className="flex flex-col items-end justify-end">
                            
                            <div className="text-right">
                                <p className="font-sans text-base">tabletop gaming</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">ultimate frisbee</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">soccer</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">video game news</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">emo music in all forms</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">artful films</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-serif text-2xl tracking-tight">personal and interpersonal team skills</h2>
                        <div className="flex flex-col items-end justify-end">
                            
                            <div className="text-right">
                                <p className="font-sans text-base">loquaciousness</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">honesty</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">supportiveness</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">kindness</p>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">optimism</p>
                            </div>
                            <div className="text-right">
                                <button id="abstract-btn" onClick={darkReveal} className="font-sans text-base">182938883829</button>
                            </div>
                            <div className="text-right">
                                <p className="font-sans text-base">logic</p>
                            </div>
                        </div>
                    </div>
                </div>
        
        </div>
        
    </div>
    
</div>
}