const WINDOWS =
  "https://github.com/Hammad15/notes_maker/releases/latest/download/CreateNotes_V1.0.2_Windows_x64.msi"
const MAC =
  "https://github.com/Hammad15/notes_maker/releases/latest/download/CreateNotes_V1.0.2_Mac.dmg"

export default function Home() {
  return (
    <main>
      <p className="product">LectureText</p>
      <h1>
        Other tools help you jump back into the video.{" "}
        <span>This one helps you stop needing the video.</span>
      </h1>
      <div className="downloads">
        <a href={WINDOWS}>Download for Windows</a>
        <a className="quiet" href={MAC}>
          Download for Mac
        </a>
      </div>
      <p className="fine">
        On a Mac, open the disk image, then allow LectureText once in System Settings under Privacy &amp; Security.
      </p>
      <section>
        <h2>How it works</h2>
        <ol>
          <li>Choose a lecture video or audio file that is already on the computer.</li>
          <li>LectureText transcribes that recording on the computer and writes Markdown and PDF study notes.</li>
          <li>Read the notes. The recording can stay closed.</li>
        </ol>
      </section>
      <section>
        <h2>No account</h2>
        <p>Local notes need no account. The lecture and the notes stay on the computer.</p>
      </section>
    </main>
  )
}
