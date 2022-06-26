import Head from 'next/head'
import Link from 'next/link'

const items = [
  { title: 'ADHD', href: "ADHD", image: "https://media.istockphoto.com/photos/the-abbreviation-adhd-made-out-of-polymer-clay-letters-picture-id1303169559?b=1&k=20&m=1303169559&s=170667a&w=0&h=46YXobqWjkVsX5UYMkutk70BhakDWjUK83QRsTgbprU=", description: "description" },
  { title: 'PTSD', href: "PTSD", image: "https://media.istockphoto.com/photos/panic-attack-in-public-place-woman-having-panic-disorder-in-city-picture-id1033774292?b=1&k=20&m=1033774292&s=170667a&w=0&h=PY6mrwiNAcCc4_MR49jdYrbIv3kSDX8RGlDMnCjbcu8=", description: "description" },
  { title: 'Depression', href: "Depression", image: "https://media.istockphoto.com/photos/its-okay-to-ask-for-help-with-your-mental-health-picture-id1294430340?b=1&k=20&m=1294430340&s=170667a&w=0&h=TkDySvmR1jb4tQbATz9d8ALBJ5A_gw0nAOsHo2JDV2k=", description: "description" },
  { title: 'Anxiety', href: "Anxiety", image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW54aWV0eXxlbnwwfHwwfHw%3D&w=1000&q=80", description: "description" },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Mental Health</title>
        <meta name="description" content="A PHS student project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-6 list-none'>
          {items.map((item) => (
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
              <a>
                  <img class="rounded-t-lg" src={item.image} alt="" />
              </a>
              <div class="p-5">
              <a>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">{item.description}</p>
                  <button>
                      <Link href={item.href}>
                          <a class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                              Read more
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </Link>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

