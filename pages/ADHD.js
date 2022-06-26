import Head from "next/head";

export default function ADHD() {
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
            <img class="float-right rounded-lg w-96 m-8" src="https://kidshealth.tlmlive.com/wp-content/uploads/sites/363/2019/08/file-1.jpg"/>
            <h1 className="text-6xl font-semibold my-10">ADHD</h1>
            <div className="my-6">
              <h2 className="text-2xl font-medium">What is it</h2>
              <p>ADHD is one of the most common mental health disorders in children and is the most diagnosed mental health disorder in childhood and a lot of the time lasts into adulthood. Children with ADHD could have trouble with paying attention or controlling their impulsive behaviour. These difficulties can cause trouble in school, home or being with friends.</p>
            </div>
            <div className="my-6">
            <h2 className="text-2xl font-medium">Sign and Symptons</h2>
            <p className="mb-6 mt-2">A person with ADHD might:</p>
            <ul className="list-disc translate-x-6">
              <li>Daydream a lot</li>
              <li>Misplace things a lot</li>
              <li>Squirm or fidget</li>
              <li>Find it hard to get along with others</li>
              <li>Make careless mistakes or take unnecessary risk with judgment for the consequences</li>
              <li>Have a hard time not giving into temptation</li>
              <li>Find it hard sharing and taking turns</li>
            </ul>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">Strategies for self and others</h2>
              <ul className="list-disc">
                <p>For young children with ADHD it is recommended to try behaviour therapy before consulting your doctor for medication. Another option is to get either friend or some sort of calendar/reminder app to help remind you of events. You could also develop routines and exercise daily.</p>
              </ul>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">References</h2>
              <p>CDC (2021). What Is ADHD? [online] Centers for Disease Control and Prevention. Available at: <a className="visited:text-teal-600 hover:underline text-cyan-500" href="https://www.cdc.gov/ncbddd/adhd/facts.html">https://www.cdc.gov/ncbddd/adhd/facts.html</a> [Accessed 25 Jun. 2022].</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
