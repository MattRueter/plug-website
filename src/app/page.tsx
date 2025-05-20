import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <div className="mt-10 w-full">
          <Image
            src={"/plug-hero-image.svg"}
            alt="Plug and socket image with title Plug"
            height={800}
            width={800}
            priority={true}
          />
        </div>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-4 max-w-[1200px]">
       
       
       <section className="flex flex-col items-end sm:gap-y-10 p-4 ">
        <span className="sm:text-3xl text-2xl font-bold sm:w-1/2">
          Plug is a growing collection of APIs which
          frontend devs can use to learn and practice integrating their apps 
          with backends without worrying about the boilerplate.
        </span>
        <ul className="w-1/2 p-4 ">
          <li>Simple to intermediate APIs</li>
          <li>Run locally</li>
          <li>No cloud setup required for most of the APIs (though some will require this)</li>
        </ul>
       </section>

      <section className="flex flex-col items-end p-4 w-full">
        <h2 className="text-xl font-bold w-1/2">Why use Plug?</h2>
        <ul className="w-1/2 p-4">
          <li>Easy set up</li>
          <li>Real CRUD patterns not just GET from a public api</li>
          <li>Resettable state</li>
          <li>When you are ready to step into backend work you can refactor, customize, scale these APIs and make them your own.</li>
        </ul>
      </section>


      <section className="flex flex-col items-end p-4 w-full">
        <span className="w-1/2">
          <h2 className="text-xl font-bold">Available APIs</h2>
          <p  className="text-sm w-1/2">This project has just begun...Coming soon...</p>
        </span>        
        <ul className="w-1/2 p-4">
          <li>Note taker</li>
          <li>book reservation</li>
          <li>cinema reservation</li>
        </ul>
      </section>

      <section className="max-w-[600px] p-4">
        <h2 className="text-3xl font-bold">How to use Plug?</h2>
        <span>
          In most cases you can simply clone the repo you want, 
          run the install script and start the API. 
          Your job is to build the frontend however you want with whatever tools you are learning.
          More advanced APIs may require authentication, creating cloud service account and .env variables.
        </span>
      </section>


      <section className="p-4 ">
        <h2 className="text-3xl font-bold">Who is this for?</h2>
        <ul className="p-4">
          <li>People learning front end development</li>
          <li>Bootcamp students</li>
          <li>
            Anyone learning a new frontend framework / tool 
            and doesn't want to spend time making an API
          </li>
        </ul>
        <span>Plug APIs can be useful for anyone who wants to go deeper on the frontend with api integration, state management etc... 
          but hasn't yet learned to create backends or wants a ready made api to practice with.
          This allows you to get away from 'fake data' json or js files without setting up cloud services (like Supabase, Firebase, AWS, MongoDB etc...) or 
          creating your own APIs. Of course you should eventually do those things too!
        </span>
      </section>

      </main>
      <footer className="row-start-3 flex sm:gap-[80px] gap-3 flex-wrap items-center justify-center text-amber-600 mt-10">
      <p>© Plug since 2025</p>
      <a href="https://github.com/MattRueter">Made by Matt Rueter</a>
      <p>
        This project is licensed under the 
        <a 
          className="ml-1 px-1 bg-sky-100"
          href="https://github.com/MattRueter/plug-website/blob/main/LICENSE"
          >
             MIT License.
          </a>
      </p>
      </footer>
    </div>
  );
}
