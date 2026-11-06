import { useState } from "react";
import "./App.css";

const GENRES = ["Action", "Comedy", "Romance", "Drama"];

// Order matters on desktop:
// 1st = featured, 2nd and 3rd = side by side, the rest = wide cards
const MOVIES = [
  {
    id: 1,
    title: "Barbie",
    image: "/assets/barbie.jpg",
    heroImage: "/assets/hero.png", // wide image for the desktop featured card
    description: "Barbie lives a perfect life in Barbieland until an existential crisis sends her into the real world. Ken tags along, and both of them learn what it means to be human.",
  },
  {
    id: 2,
    title: "La La Land",
    image: "/assets/la-la-land.jpg",
    description: "An aspiring actress and a jazz pianist fall in love in Los Angeles. Can their romance survive their dreams?",
  },
  {
    id: 3,
    title: "Palm Springs",
    image: "/assets/palm-springs.jpg",
    description: "Two wedding guests get stuck reliving the same day in the desert. They make the most of it, and fall for each other along the way.",
  },
  {
    id: 4,
    title: "Hidden Figures",
    image: "/assets/hidden-figures.jpg",
    description: "Three brilliant mathematicians break barriers at NASA during the space race. Their work helps send an astronaut into orbit.",
  },
  {
    id: 5,
    title: "Hook",
    image: "/assets/hook.jpg",
    description: "A grown-up Peter Pan has forgotten who he used to be. When Captain Hook kidnaps his children, he must return to Neverland to save them..",
  },
  {
    id: 6,
    title: "Who Framed Roger Rabbit",
    image: "/assets/who-framed-roger-rabbit.jpg",
    description: "A hard-boiled detective teams up with a cartoon rabbit accused of murder. Together they uncover a plot that threatens Toontown.",
  },
];

function getVariant(index) {
  if (index === 0) return "card--featured";
  if (index <= 2) return "";
  return "card--wide";
}

function Header() {
  return (
    <header className="site-header">
      <h1 className="logo">watch.it</h1>
      <nav className="main-nav" aria-label="Genres">
        <ul>
          {GENRES.map((genre) => (
            <li key={genre}>
              <a href="#">{genre}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="btn search-btn" type="button">
        Search
      </button>
    </header>
  );
}

function MovieCard({ movie, variant }) {
  // If the wide hero image fails to load, fall back to the normal poster
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <article className={`card ${variant}`.trim()}>
      <picture>
        {movie.heroImage && !heroFailed && (
          <source media="(min-width: 1024px)" srcSet={movie.heroImage} />
        )}
        <img
          src={movie.image}
          alt={`Movie poster for ${movie.title}`}
          onError={() => setHeroFailed(true)}
        />
      </picture>
      <div className="card-body">
        <div className="card-text">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
        <a className="btn" href="#">
          Watch now
        </a>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        {MOVIES.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} variant={getVariant(index)} />
        ))}
      </main>
    </>
  );
}