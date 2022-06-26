import Head from "next/head";

export default function Depression() {
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
            <img className="float-right rounded-lg w-96 m-8" src="https://www.helpguide.org/wp-content/uploads/teenaged-boy-curled-up-wide-eyes-staring-out-window.jpg"/>
            <h1 className="text-6xl font-semibold my-10">Depression</h1>
            <div className="my-6">
              <h2 className="text-2xl font-medium">What is it</h2>
              <p>Depression is a mental health disorder that affects your mental and physical health that has people feeling intense sadness, moody or low for long periods of time.</p>
            </div>
            <div className="my-6">
            <h2 className="text-2xl font-medium">Sign and Symptons</h2>
            <p className="mb-6 mt-2">A person with depression might have these symptoms:</p>
            <ul className="list-disc translate-x-6">
              <li>Not wanting to go out anymore</li>
              <li>Not getting things done at school/work</li>
              <li>Staying away from close family or friends</li>
              <li>Relying on alcohol and drugs</li>
              <li>Not doing usual enjoyable activities</li>
              <li>Feeling overwhelmed, unhappy, miserable or disappointed in yourself </li>
              <li>Having bad thoughts</li>
              <li>Constant tiredness</li>
              <li>Weight gain or loss</li>
            </ul>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">Strategies for self and others</h2>
                <p>Some strategies could include going to your GP to be referred to a psychologist or to get prescribed medication.</p>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">Support in local community or assistance</h2>
                <p>Places you could go in your local community could be headspace or call either beyond blue, lifeline also headspaces online chat or phone number.</p>
            </div>
            <div className="my-6">
              <h2 className="text-2xl font-medium mb-3">References</h2>
              <p>Beyond Blue (2019d). Signs and symptoms of depression. [online] Beyond Blue. Available at: <a className="visited:text-teal-600 hover:underline text-cyan-500" href="https://www.beyondblue.org.au/the-facts/depression/signs-and-symptoms">https://www.beyondblue.org.au/the-facts/depression/signs-and-symptoms</a> [Accessed 26 Jun. 2022].</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
