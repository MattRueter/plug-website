import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">        
        <Image
          src={"/plug-hero-image.svg"}
          alt="Plug and socket image with title Plug"
          height={500}
          width={500}
          priority={true}
          className="w-2/3"
        />
       <h1>Plug</h1>
       <span>
        Real APIs. Zero Setup. Just Plug In. 
        A growing collection of local-first APIs
        for frontend devs to practice with real
        backends—without boilerplate.
       </span>

      <h2>What is Plug?</h2>
      <ul>
        <li>Simple to intermediate APIs</li>
        <li>Runs locally</li>
        <li>No clooud setup required for most (though some require it)</li>
        <li>Built for frontend devs to get practice integrating clients with apis</li>
      </ul>

      <h2>Why use Plug?</h2>
      <ul>
        <li>Easy set up</li>
        <li>Real CRUD patterns</li>
        <li>Resettable state</li>
        <li>When you are ready you can refactor scale the api</li>
        <li>Level up with Supabase, Mongo, etc...</li>
      </ul>

      <h2>Available APIs</h2>
      <p>Coming soon</p>
      <ul>
        <li>Note taker</li>
        <li>book reservation</li>
        <li>cinema reservation</li>
      </ul>

      <h2>How to use Plug?</h2>
      <span>
        In most cases you can simply clone the repo you want, 
        run the install script and start the api. 
        Your job is to build the front end however you want. 
        More advanced apis may require authentication, creating cloud service account and .env variables.
      </span>

      <h2>Whos is this for?</h2>
      <ul>
        <li>People learning front end development</li>
        <li>Bootcamp students</li>
      </ul>
      <span>Anyone who wants to go deeper on the front end with api integration, state management etc... 
        but hasn't yet learned to create backends or wants a ready made api to practice with.
        This allows you to get away from 'fake data' json or js files without setting up cloud services (like Supabase, Firebase, etc..) or 
        creating your own APIs. Of course you should eventually do those things!
      </span>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <p>© Plug since 2025</p>
      <p>gihub link here</p>
      <p>license here</p>
      </footer>
    </div>
  );
}
