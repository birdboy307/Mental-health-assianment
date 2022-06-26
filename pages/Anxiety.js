import Head from "next/head";

export default function Anxiety() {
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
            <img class="float-right rounded-lg w-96 m-8" src="https://www.helpguide.org/wp-content/uploads/woman-suffering-an-anxiety-attack-alone-in-the-night-picture.jpg"/>
            <h1 className="text-6xl font-semibold my-10">Anxiety</h1>
            <div className="my-6">
              <h2 className="text-2xl font-medium">What is it</h2>
              <p>Anxiety is the most common mental disorder in Australia with one in four people experiencing anxiety at some point in their life. Anxiety can make people feel anxious at time where there is no reason for it or sometimes feeling anxious from something else long after.</p>
            </div>
            <div className="my-6">
            <h2 className="text-2xl font-medium">Sign and Symptons</h2>
            <p className="mb-6 mt-2">A person with Anxiety might have these symptoms:</p>
            <ul className="list-disc translate-x-6">
              <li>Physical: frequent panic attacks, hot or cold flushes, racing heart rate, tightened chest, fast breathing and restlessness</li> 
              <li>Psychological: excessive fear, worry, obsessive thinking</li>
              <li>Behaviour: avoiding certain situations that could make you feel anxious this could possibly impact in on studying, school, social or everyday life.</li>
            </ul>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">Strategies for self and others</h2>
                <p>Some strategies could be removing yourself from the situation that’s giving you bad anxiety and taking a few minutes to calm down or deep breath to help calm down.</p>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">Support in local community or assistance</h2>
                <p>Places you could go in the local community could be headspace or a psychiatrist through your local GP. Places you could go for assistance could be online or from friends or family.</p>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">References</h2>
              <p>CDC (2021). What Is ADHD? [online] Centers for Disease Control and Prevention. Available at: <a className="className='visited:text-teal-600 hover:underline text-cyan-500 " href="https://www.cdc.gov/ncbddd/adhd/facts.html">https://www.cdc.gov/ncbddd/adhd/facts.html</a> [Accessed 25 Jun. 2022].</p>
              <p>CDC (2021). What Is ADHD? [online] Centers for Disease Control and Prevention. Available at: <a className="className='visited:text-teal-600 hover:underline text-cyan-500 mt-3" href="https://www.cdc.gov/ncbddd/adhd/facts.html">https://www.cdc.gov/ncbddd/adhd/facts.html</a> [Accessed 25 Jun. 2022].</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
