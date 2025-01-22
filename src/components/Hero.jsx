
import { ButtonPrimary, ButtonOutline } from "./Button"
import React from 'react';

const Hero = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Charles_Wilson_Resume_Final.pdf';
        link.download = 'My_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    return (
        <section 
        className="pt-28 lg:pt-36"
        id="home"
        
        >

        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>

                <div className="flex items-center gap-3">
                    {/* <figure className="img-box w-9 h-9 rounded-lg">
                        <img 
                        src="/images/Hamline_Headshot.jpg" 
                        width = {40} 
                        height={40} 
                        alt="Charlie Wilson portrait" 
                        className="img-cover" />
                    </figure> */}

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 roudned-full bg-emerald-400">
                            <span className="absolute inset-0 roudned-full bg-emerald-400 animate-ping"></span>
                        </span>

                        Looking for work

                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                Charlie Wilson's Portfolio

                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label="Download CV"
                        icon="download"
                        href='/Charles_Wilson_Resume_Final.pdf'
                        download='/Charles_Wilson_Resume_Final.pdf'
                    />

                    <ButtonOutline
                    href = "#about"
                    label="Scroll Down"
                    icon="arrow_downward"
                    />
                </div>
            </div>
            <div className="lg:block">
                <figure className="w-full max-w-[250px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img 
                    src="/images/Headshot_Hamline.png" 
                    widht={656}
                    heigh={800}
                    alt="Charlie Wilson" 
                    className="w-full" />
                </figure>
            </div>
            </div>    
        </section>
    )
}

export default Hero