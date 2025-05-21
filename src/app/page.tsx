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
          Plug is a growing collection of &quot;toy&quot; APIs which 
          frontend devs can use to learn and practice integrating apps
          with backends without worrying about the boilerplate.
        </span>

       </section>

      <section className="flex flex-col items-end p-4 w-full">
        <h2 className="text-xl font-bold w-1/2">Why use Plug?</h2>
        <ul className="w-1/2 p-4">
          <li>Free</li>
          <li>Easy set up</li>
          <li>Real CRUD patterns not just GET from a public api</li>
          <li>Practice reading API documentation</li>
        </ul>
      </section>


      <section className="flex flex-col items-end p-4 w-full">
        <span className="w-1/2">
          <h2 className="text-xl font-bold">Available APIs</h2>
          <p  className="text-sm w-1/2">This project has just begun so check back every once in a while.</p>
        </span>

        <div className="w-1/2 p-4">
          <ul className="">
            <li><a className= "text-amber-600" href="https://github.com/Plug-org/plug-notes-api" target="_blank">notes api</a></li>
          </ul>

          <p className="text-sm mt-2">coming soon...</p>
          <ul className="text-slate-400">
            <li>book reservation</li>
            <li>cinema reservation</li>
          </ul>

        </div>

      </section>

      <section className="max-w-[600px] p-4">
        <h2 className="text-3xl font-bold">How to use Plug?</h2>
        <span>
          In most cases you can simply clone the repo you want, 
          run the install script and start the API. 
          Your job is to build the frontend however you want with whatever tools you are learning.
          More advanced APIs may require authentication, creating cloud service account and .env variables. 
          As you advance you can step into the backend code and refactor, further develop or customize these APIs however you want.
        </span>
      </section>


      <section className="p-4 ">
        <h2 className="text-3xl font-bold">Who is this for?</h2>
        <ul className="p-4">
          <li>People learning front end development</li>
          <li>Bootcamp students</li>
          <li>
            Anyone learning a new frontend framework / tool 
            and doesn&apos;t want to spend time making an API
          </li>
        </ul>
        <span>Plug APIs can be useful for anyone who wants to go deeper on the frontend with api integration, state management etc... 
          but hasn&apos;t yet learned basic backend development.
          This allows you to get away from &quot;fake data&quot; json or js files without setting up cloud services (like Supabase, Firebase, AWS, MongoDB etc...) or 
          creating your own APIs. Of course you should eventually do those things too!
        </span>
        <p className="mt-4 text-lg font-medium flex gap-2 items-center">
          Read more 
          <a className="text-sky-400" href="https://github.com/Plug-org#plug" target="_blank">here</a>
        </p>
        <p className="mt-4 text-lg font-medium flex gap-2 items-center">
          Visit 
          <a className="text-sky-400" href="https://github.com/Plug-org/plug-notes-api" target="_blank">notes api repo</a>
        </p>
      </section>

      </main>
      <footer className="row-start-3 flex sm:gap-[80px] gap-3 flex-wrap items-center justify-center text-amber-600 mt-10">
      <p>© Plug since 2025</p>
      <a href="https://github.com/MattRueter">Made by Matt Rueter</a>
      <p>
        This project is licensed under the 
        <a 
          className="ml-1"
          href="https://github.com/MattRueter/plug-website/blob/main/LICENSE"
          >
             MIT License.
          </a>
      </p>
      </footer>
    </div>
  );
}
