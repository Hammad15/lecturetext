const WINDOWS =
  "https://github.com/Hammad15/notes_maker/releases/latest/download/CreateNotes_V1.0.2_Windows_x64.msi"
const MAC =
  "https://github.com/Hammad15/notes_maker/releases/latest/download/CreateNotes_V1.0.2_Mac.dmg"

export default function Home() {
  return (
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
      </main>
    </div>
  )
}
