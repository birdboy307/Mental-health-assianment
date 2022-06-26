import Head from 'next/head'

export default function PTSD() {
  return (
    <>
      <Head>
        <title>Mental Health</title>
        <meta name="description" content="A PHS student project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <div className="w-3/4 h-fit">
          <article className="text-lg">
            <img class="float-right rounded-lg w-96 m-8" src="https://americanheadachesociety.org/wp-content/uploads/2016/05/n1.jpg"/>
            <h1 className="text-6xl font-semibold my-10">PTSD</h1>
            <div className="my-6">
              <h2 className="text-2xl font-medium">What is it</h2>
              <p>PTSD or Post-traumatic stress disorder is a mental health disorder that can develop over time by going through a traumatic event which had threaten the life or safety of themselves or others. PTSD is typically caused by sexual assault, car accidents, war or torture.</p>
            </div>
            <div className="my-6">
            <h2 className="text-2xl font-medium">Sign and Symptons</h2>
            <p className="mb-6 mt-2">Some symptoms could include:</p>
            <ul className="list-disc translate-x-6">
              <li>Panic attacks</li>
              <li>Extreme fear</li>
              <li>Reliving the event</li>
              <li>Avoiding reminders of the event</li>
              <li>Feeling emotionally numb</li>
              <li>Upsetting memories</li>
              <li>Blaming themselves for the event</li>
            </ul>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">Strategies for self and others</h2>
              <ul className="list-disc">
                <li>For young children with ADHD it is recommended to try behaviour therapy before consulting your doctor for medication</li>
                <li>Getting friends to help remind you of events and other importaint tasks</li>
                <li>Using a calendar app to tell you when something important is happening</li>
              </ul>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">References</h2>
              <p>Beyond Blue (2019b). Post-traumatic Stress Disorder (PTSD). [online] Beyondblue.org.au. Available at: <a className='visited:text-teal-600 hover:underline text-cyan-500' href='https://www.beyondblue.org.au/the-facts/anxiety/types-of-anxiety/ptsd'>https://www.beyondblue.org.au/the-facts/anxiety/types-of-anxiety/ptsd</a> [Accessed 26 Jun. 2022].</p>
            </div>
          </article>
        </div>
      </div>
    </>
    
  )
}
