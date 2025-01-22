
const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/chazwilson01'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/charles-wilson-19527125a/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/chazwilson01?lang=en'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/charliewilson_16/'
    },
  ];
const Footer = () => {
    return(
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10"></div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href}, key) => (
                                <li key={key}>
                                    <a 
                                    href={href} 
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>
                            <ul>
                                {socials.map(({ label, href}, key) => (
                                <li key={key}>
                                    <a 
                                    href={href} 
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer