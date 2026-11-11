const WINDOWS =
  "https://github.com/Hammad15/notes_maker/releases/download/v1.2.0/LectureText_V1.2.0_Windows_x64.msi"
const MAC =
  "https://github.com/Hammad15/notes_maker/releases/download/v1.2.0/LectureText_V1.2.0_Mac.dmg"

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
      <header>
        <p className="product">
          <span className="sr-only">LectureText</span>
          <span aria-hidden="true">LectureText</span>
        </p>
      </header>
      <main>
        <h1>
          <span>Other tools help you jump back into the video. </span>
          <span className="accent">This one helps you stop needing the video.</span>
        </h1>
        <div className="downloads" role="group" aria-label="Download LectureText">
          <a href={WINDOWS} aria-label="Download for Windows, MSI installer">
            Download for Windows
          </a>
          <a
            className="quiet"
            href={MAC}
            aria-label="Download for Mac, disk image"
            aria-describedby="mac-install"
          >
            Download for Mac
          </a>
        </div>
        <p className="fine" id="mac-install">
          On a Mac, open the disk image, then allow LectureText once in System Settings under Privacy &amp; Security.
        </p>
        <section aria-labelledby="how-it-works">
          <h2 id="how-it-works">How it works</h2>
          <ol>
            <li>Choose a lecture video or audio file that is already on the computer.</li>
            <li>LectureText transcribes that recording on the computer and writes Markdown and PDF study notes.</li>
            <li>Read the notes. The recording can stay closed.</li>
          </ol>
        </section>
        <section aria-labelledby="no-account">
          <h2 id="no-account">No account</h2>
          <p>Local notes need no account. The lecture and the notes stay on the computer.</p>
        </section>
        <section aria-labelledby="on-the-computer">
          <h2 id="on-the-computer">What happens on the computer</h2>
          <p>
            Set up local notes downloads the speech model for the speed you chose, the speech engine, and the notes model
            onto this computer. Make Notes then transcribes the recording here and writes the Markdown. The window shows
            a percent and an estimate of the time remaining for the whole run. The app stores the media path, and the
            transcript stays in the course&apos;s hidden .study folder.
          </p>
        </section>
        <section aria-labelledby="note-contents">
          <h2 id="note-contents">What the notes contain</h2>
          <p>
            The Markdown file is the study notes. The points are bullets. Transcript lines and timestamps are left out.
            Generate PDF writes a PDF beside that Markdown. Notes are English.
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
        <section aria-labelledby="local-notes">
          <h2 id="local-notes">Local notes with no account</h2>
          <p>
            Local notes do not ask for an account or a sign-in. The speech files and the notes model are downloaded to
            this computer, and the Markdown is saved in the course folder you chose.
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
