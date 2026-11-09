const WINDOWS =
  "https://github.com/Hammad15/notes_maker/releases/download/v1.2.0/LectureText_V1.2.0_Windows_x64.msi"
const MAC =
  "https://github.com/Hammad15/notes_maker/releases/download/v1.2.0/LectureText_V1.2.0_Mac.dmg"

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
        <section aria-labelledby="what-it-does">
          <h2 id="what-it-does">What it does</h2>
          <p>
            LectureText transcribes a lecture file that is already on the computer, then writes Markdown and PDF study notes.
          </p>
        </section>
        <section aria-labelledby="who-it-is-for">
          <h2 id="who-it-is-for">Who it is for</h2>
          <p>
            A student who wants notes with the recording closed, and no account. Local notes need no account. The lecture and the notes stay on the computer.
          </p>
        </section>
        <section aria-labelledby="how-to-install">
          <h2 id="how-to-install">How to install</h2>
          <p>Download the Windows MSI or the Mac disk image.</p>
          <p className="fine" id="mac-install">
            On a Mac, open the disk image, then allow LectureText once in System Settings under Privacy &amp; Security.
          </p>
        </section>
      </main>
    </div>
  )
}
