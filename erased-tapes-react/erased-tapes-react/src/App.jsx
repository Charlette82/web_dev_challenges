
import { useState } from "react";

import logo from "./Assests/logo.svg";
import blurred from "./Assests/blurred.jpg";
import encores from "./Assests/encores-2.jpg";
import eulogy from "./Assests/eulogy-for-evolution.jpg";
import cell from "./Assests/the-cell.jpg";
import encore1 from "./Assests/all-encores.jpg";
import picture from "./Assests/profile_picture.jpg";
import facebook from "./Assests/facebook-icon.png";
import instagram from "./Assests/instagram-icon.svg";
import twitter from "./Assests/twitter-icon.svg";

const albums = [
  {
    title: "Blurred",
    artist: "Erased Tapes",
    image: blurred,
  },
  {
    title: "Encounters",
    artist: "Erased Tapes",
    image: encores,
  },
  {
    title: "Eulogy for Evolution",
    artist: "Ólafur Arnalds",
    image: eulogy,
  },
  {
    title: "The Cell",
    artist: "Erased Tapes",
    image: cell,
  },
];

const initialComments = [
  {
    name: "Jamie R.",
    text: "A lovely introduction to a label that always seems to find a new sound.",
  },
  {
    name: "Morgan",
    text: "The balance between acoustic detail and electronics makes these records special.",
  },
  {
    name: "Alex W.",
    text: "Adding a few of these albums to my weekend listening list. Thank you!",
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={className}>
      <a href="https://www.facebook.com/" aria-label="Facebook">
        <img src={facebook} alt="Facebook" />
      </a>

      <a href="https://www.instagram.com/" aria-label="Instagram">
        <img src={instagram} alt="Instagram" />
      </a>

      <a href="https://twitter.com/" aria-label="Twitter">
        <img src={twitter} alt="Twitter" />
      </a>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(initialComments);
  const [feedback, setFeedback] = useState("");

  function handleCommentSubmit(event) {
    event.preventDefault();

    if (!commentName.trim() || !commentText.trim()) {
      setFeedback("Please enter your name and a comment.");
      return;
    }

    setComments((previousComments) => [
      ...previousComments,
      {
        name: commentName.trim(),
        text: commentText.trim(),
      },
    ]);

    setCommentName("");
    setCommentText("");
    setFeedback("Thank you! Your comment has been added.");
  }

  return (
    <div className="page-shell">
      {/* Website header and logo */}
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Erased Tapes home">
          <img
            className="logo-image"
            src={logo}
            alt="Erased Tapes Records logo"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close menu −" : "Menu +"}
        </button>

        <nav
          id="site-nav"
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
        >
          <a href="#article" onClick={() => setMenuOpen(false)}>
            Our Blog
          </a>
          <a href="#albums" onClick={() => setMenuOpen(false)}>
            Our Artists
          </a>
          <a href="#author" onClick={() => setMenuOpen(false)}>
            Our Story
          </a>
        </nav>
      </header>

      {/* Main blog content */}
      <main id="top" className="content">
        <article id="article" className="article">
          <header className="article-header">
            <p className="kicker">LISTENING NOTES / ISSUE 08</p>

            <h1>Erased Tapes:</h1>

            <p className="subtitle">
              Exploring the Sonic Frontier
            </p>

            <p className="intro">
              Some labels release records. Others build worlds.
              Erased Tapes has spent years making room for music
              that lives between the familiar and the unexpected.
              Where piano, strings, texture and electronics meet,
              the result is a sound that tells stories without
              needing words.
            </p>

            <p>
              Erased Tapes Records is known for its adventurous
              approach to contemporary music. Bringing together
              modern classical, ambient and electronic influences,
              the label gives artists the freedom to explore
              distinctive sounds and create something personal.
            </p>
          </header>

          <div className="article-columns">
            <section className="article-section">
              <h2>A Label Without Borders</h2>

              <p>
                Founded in London, Erased Tapes has developed
                a catalogue that moves freely between modern
                classical, ambient and experimental electronics.
                Its releases share a sense of curiosity rather
                than a single musical formula.
              </p>

              <p>
                The artists are encouraged to develop their
                own musical language. The result is a collection
                of records connected by atmosphere, emotion
                and attention to detail.
              </p>

              <p>
                Listen closely and small details begin to emerge:
                a piano note fading into silence, a gentle rhythm
                changing shape, or a melody returning in a new form.
              </p>

              <h2>Listening Beyond the Obvious</h2>

              <p>
                Some of the most interesting moments happen
                at the edges of a composition. Acoustic sounds
                blend with electronics, and familiar instruments
                begin to feel new.
              </p>

              <p>
                Try listening with headphones, taking a quiet
                walk, or spending a few minutes away from
                distractions. Each listen can reveal something
                different.
              </p>
            </section>

            <section className="article-section">
              <h2>Sound as a Place</h2>

              <p>
                Many releases feel architectural. Layers rise,
                open up and leave space around the listener.
                Silence is not empty; it becomes part of
                the composition.
              </p>

              <p>
                This sense of space connects artists who
                approach music in very different ways.
                Acoustic instruments can feel intimate, while
                electronic textures suggest something vast.
              </p>

              <p>
                Artwork, sound and physical presentation
                all contribute to the listening experience.
                Every detail has room to breathe.
              </p>

              <h2>Start Listening</h2>

              <p>
                Choose an album and listen without skipping
                ahead. Notice which sounds draw your attention
                and which quietly disappear into the background.
              </p>

              <p>
                The sonic frontier is not a destination.
                It is a willingness to stay curious and let
                music surprise you.
              </p>
            </section>

            <aside className="article-aside">
              <h2>Three Ways In</h2>

              <ul className="listening-list">
                <li>
                  <span>01</span>
                  <div>
                    <strong>Start with piano</strong>
                    <p>Listen to the spaces between the notes.</p>
                  </div>
                </li>

                <li>
                  <span>02</span>
                  <div>
                    <strong>Follow a texture</strong>
                    <p>Choose one sound and notice how it changes.</p>
                  </div>
                </li>

                <li>
                  <span>03</span>
                  <div>
                    <strong>Listen again</strong>
                    <p>Give the details time to emerge.</p>
                  </div>
                </li>
              </ul>

              <blockquote>
                The best discoveries happen when you listen
                with curiosity.
              </blockquote>
            </aside>
          </div>
        </article>

        {/* Album image gallery */}
        <section
          id="albums"
          className="album-gallery"
          aria-label="Selected album artwork"
        >
          <div className="featured-album">
            <img
              src={encore1}
              alt="Featured Erased Tapes album artwork"
            />
            <div className="featured-overlay">
              <p>FEATURED ALBUM</p>
              <h2>Sound in Space</h2>
            </div>
          </div>

          {albums.map((album) => (
            <button
              className="album-card"
              type="button"
              key={album.title}
              onClick={() =>
                window.alert(
                  `${album.title}\nArtist: ${album.artist}`
                )
              }
              aria-label={`View ${album.title} by ${album.artist}`}
            >
              <img src={album.image} alt={`${album.title} album artwork`} />
              <span className="album-caption">
                <strong>{album.title}</strong>
                <small>{album.artist}</small>
              </span>
            </button>
          ))}
        </section>

        {/* Author information */}
        <section id="author" className="author-section">
          <div className="author-copy">
            <p className="kicker">BEHIND THE WORDS</p>
            <h2>The Author</h2>

            <p>
              Ahmed Webb writes about sounds, scenes and small
              discoveries that make music worth returning to.
              This blog is a space for curious listeners and
              open-minded explorers.
            </p>
          </div>

          <img
            className="author-photo"
            src={picture}
            alt="Portrait of the blog author"
          />

          <SocialLinks className="author-socials" />
        </section>

        {/* Comments and interactive form */}
        <section
          className="comments-section"
          aria-labelledby="comments-title"
        >
          <h2 id="comments-title">
            Comments <span className="comment-count">{comments.length}</span>
          </h2>

          <div className="comments-list">
            {comments.map((comment, index) => (
              <article
                className="comment"
                key={`${comment.name}-${index}`}
              >
                <div className="comment-avatar" aria-hidden="true">
                  {comment.name.charAt(0).toUpperCase()}
                </div>

                <div className="comment-body">
                  <h3>{comment.name}</h3>
                  <p>{comment.text}</p>
                </div>
              </article>
            ))}
          </div>

          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <h3>Join the Conversation!</h3>

            <label htmlFor="comment-name">Your name</label>
            <input
              id="comment-name"
              type="text"
              value={commentName}
              onChange={(event) => setCommentName(event.target.value)}
              placeholder="Enter your name"
              maxLength={60}
            />

            <label htmlFor="comment-text">Your comment</label>
            <textarea
              id="comment-text"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              placeholder="Share your thoughts!..."
              rows={4}
              maxLength={500}
            />

            <div className="form-bottom">
              <p className="form-feedback" aria-live="polite">
                {feedback}
              </p>

              <button className="submit-button" type="submit">
                Post Comment 
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Website footer */}
      <footer className="site-footer">
        <nav aria-label="Footer navigation">
          <a href="#article">Our Blog</a>
          <a href="#albums">Our Artists</a>
          <a href="#author">Our Story</a>
        </nav>

        <p>Copyright© 2026 Ahmed Webb.</p>

        <SocialLinks className="footer-socials" />
      </footer>
    </div>
  );
}

export default App;
