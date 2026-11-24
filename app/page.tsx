const WINDOWS =
  "https://github.com/Hammad15/notes_maker/releases/download/v2.0.0/LectureText_V2.0.0_Windows_x64.msi"
const MAC =
  "https://github.com/Hammad15/notes_maker/releases/download/v2.0.0/LectureText_V2.0.0_Mac.dmg"

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "LectureText",
  url: "https://www.lecturetext.com/",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    <div className="page">
      <main>
        <h1>Stop needing the video. Clean and simple. No account or subscription needed.</h1>
        <div className="downloads" role="group" aria-label="Download LectureText">
          <a
            href={WINDOWS}
            aria-label="Download for Windows, MSI installer"
            data-goatcounter-click="download-windows"
          >
            Download for Windows
          </a>
          <a
            className="quiet"
            href={MAC}
            aria-label="Download for Mac, disk image"
            data-goatcounter-click="download-mac"
          >
            Download for Mac
          </a>
        </div>
        <p className="fine">
          A lecture recording becomes notes on your computer, with nothing else to set up for local notes.
        </p>
        <section aria-labelledby="the-app">
          <h2 id="the-app">The app</h2>
          <div className="shots">
            <figure>
              <img
                src="/media/course-list.png"
                width={1120}
                height={760}
                alt="Course list"
              />
              <figcaption>Course list</figcaption>
            </figure>
            <figure>
              <img
                src="/media/create-notes.png"
                width={1120}
                height={760}
                alt="Create notes dialog"
              />
              <figcaption>Create notes</figcaption>
            </figure>
          </div>
        </section>
        <section aria-labelledby="lecture-transcription">
          <h2 id="lecture-transcription">Lecture transcription</h2>
          <ol>
            <li>Choose a lecture video or audio file that is already on the computer.</li>
            <li>LectureText transcribes that recording on your computer and writes study notes.</li>
            <li>Read the notes. The recording can stay closed.</li>
          </ol>
        </section>
        <section aria-labelledby="study-notes">
          <h2 id="study-notes">Study notes</h2>
          <p>
            The Markdown file is the study notes. The points are bullets. Transcript lines and timestamps are left out.
            Generate PDF writes a PDF beside that Markdown. Notes are English.
          </p>
        </section>
        <section aria-labelledby="no-account">
          <h2 id="no-account">No account or subscription needed</h2>
          <p>
            Notes are made on your computer. No account or subscription needed. Local notes need no key. The lecture and
            the notes stay on the computer.
          </p>
        </section>
        <section aria-labelledby="own-api-key">
          <h2 id="own-api-key">Your own API key</h2>
          <p>
            Cloud uses a Groq key you create and keep. It stays on this computer and is sent only to Groq. Local notes
            need no key.
          </p>
        </section>
        <section aria-labelledby="speed">
          <h2 id="speed">Faster and Clearer</h2>
          <p>
            Under Local, choose Faster or Clearer. Faster is quicker and the notes can be rougher. Clearer is slower and
            the notes are better. Each speed has its own English speech model. Switching speed shows setup again until
            that model is on the computer.
          </p>
        </section>
        <section aria-labelledby="install-windows">
          <h2 id="install-windows">Install on Windows</h2>
          <ol>
            <li>Download the Windows MSI installer.</li>
            <li>Run the installer.</li>
            <li>Open LectureText.</li>
          </ol>
        </section>
        <section aria-labelledby="install-mac">
          <h2 id="install-mac">Install on a Mac</h2>
          <ol>
            <li>Download the Mac disk image.</li>
            <li>Open the disk image and move LectureText into Applications.</li>
            <li>Allow LectureText once in System Settings under Privacy &amp; Security, then open LectureText.</li>
          </ol>
        </section>
      </main>
    </div>
    </>
  )
}
