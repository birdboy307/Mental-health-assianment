import Link from 'next/link'

function Navbar() {
  return (
    <div className='fixed top-0 w-full rounded-lg drop-shadow-lg'>
        <nav className="top-0 z-10 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                <span className="text-2xl text-gray-900 font-semibold">
                  <Link href="/">
                      <a>Mental Health</a>  
                  </Link>
                </span>
                <div className="flex space-x-4 text-gray-900">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                    <span>|</span>
                    <Link href="/ADHD">
                      <a>ADHD</a>  
                    </Link>
                    <Link href="/Anxiety">
                      <a>Anxiety</a>  
                    </Link>
                    <Link href="/Depression">
                      <a>Depression</a>  
                    </Link>
                    <Link href="/PTSD">
                      <a>PTSD</a>  
                    </Link>   
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar