import "./HeroVideo.css";

export default function HeroVideo() {
  return (
    <div className="hero-video-container">
      <video
        className="hero-video"
        src="/video.mp4" // Put your video in /public as video.mp4
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay">
        <h1>Dylan’s Mobile Shine</h1>
        <p>Watch the shine come to life — we come to you.</p>
        <a href="tel:+19046009050" className="hero-button">
          Call Now: (904) 600-9050
        </a>
      </div>
    </div>
  );
}
