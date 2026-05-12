/* =========================
   CONTENIDO DE LA PÁGINA
========================= */

const topics = [
  {
    id: "mru",
    icon: "bi-arrow-right-circle",
    title: "MRU / MRUV",
    subtitle: "Movimiento rectilíneo uniforme y uniformemente variado",
    text:
      "El MRU ocurre cuando un cuerpo se mueve en línea recta con velocidad constante. El MRUV ocurre cuando la velocidad cambia de manera uniforme debido a una aceleración constante.",
    pills: ["Trayectoria recta", "Velocidad", "Aceleración", "Tiempo"],
    formulas: [
      "MRU: x = x₀ + v·t",
      "MRU: v = d/t",
      "MRUV: v = v₀ + a·t",
      "MRUV: x = x₀ + v₀·t + ½a·t²",
      "MRUV: v² = v₀² + 2a(x - x₀)"
    ]
  },
  {
    id: "caida",
    icon: "bi-arrow-down-circle",
    title: "Caída libre y tiro vertical",
    subtitle: "Movimiento vertical bajo la acción de la gravedad",
    text:
      "En ausencia de resistencia del aire, todos los cuerpos caen con la misma aceleración: g ≈ 9.8 m/s². En el tiro vertical, el objeto sube, se detiene instantáneamente en su altura máxima y luego desciende.",
    pills: ["Gravedad", "Altura máxima", "Eje y", "v = 0 arriba"],
    formulas: [
      "v = v₀ ± g·t",
      "y = y₀ + v₀·t ± ½g·t²",
      "v² = v₀² ± 2g(y - y₀)",
      "hₘₐₓ = v₀² / 2g",
      "t_subida = v₀ / g"
    ]
  },
  {
    id: "circular",
    icon: "bi-record-circle",
    title: "Movimiento circular uniforme",
    subtitle: "Trayectorias alrededor de un centro",
    text:
      "En el movimiento circular, la distancia al centro permanece constante. Aunque la rapidez pueda ser constante, la velocidad cambia continuamente de dirección, por eso existe aceleración centrípeta.",
    pills: ["Radio", "Ángulo", "Periodo", "Frecuencia"],
    formulas: [
      "s = r·θ",
      "v = ω·r",
      "a꜀ = v²/r = ω²r",
      "T = 1/f",
      "ω = 2π/T = 2πf"
    ]
  }
];

/* =========================
   COMPONENTES REACT
========================= */

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          <i className="bi bi-stars me-2 text-info"></i>
          Física<span>Orbital</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <a className="nav-link" href="#mru">MRU/MRUV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#caida">Caída libre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#circular">Movimiento circular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formulas">Fórmulas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#simulaciones">Simulación</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function SolarSystem() {
  return (
    <div className="solar-wrap" aria-label="Sistema solar animado">
      <div className="orbit o1">
        <span className="planet moon"></span>
      </div>

      <div className="orbit o2">
        <span className="planet red"></span>
      </div>

      <div className="orbit o3">
        <span className="planet ring"></span>
      </div>

      <div className="orbit o4">
        <span className="planet blue"></span>
      </div>

      <div className="earth"></div>

      <div className="satellite">
        <span className="panel left"></span>
        <span className="body"></span>
        <span className="panel right"></span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <div className="badge-space">
            <i className="bi bi-rocket-takeoff"></i>
            Cinemática interactiva
          </div>

          <h1>
            Explora la <span className="gradient-text">física</span> desde el universo
          </h1>

          <p>
            Una página web con astros en movimiento, objetos flotantes, secciones educativas,
            fórmulas esenciales y enlaces a simulaciones para comprender el movimiento.
          </p>

          <div className="hero-actions">
            <a href="#mru" className="btn btn-cosmic">
              Comenzar viaje <i className="bi bi-arrow-down ms-1"></i>
            </a>

            <a href="#simulaciones" className="btn btn-glass">
              Ver simulaciones
            </a>
          </div>
        </div>

        <SolarSystem />
      </div>
    </header>
  );
}

function TopicSection({ topic, index }) {
  return (
    <section id={topic.id}>
      <div className="floating-equation eq1">v = d/t</div>
      <div className="floating-equation eq2">g = 9.8</div>

      <div className="container">
        <div className="row align-items-center g-4">
          <div className={`col-lg-5 ${index % 2 ? "order-lg-2" : ""}`}>
            <div className="glass-card reveal">
              <div className="topic-icon">
                <i className={`bi ${topic.icon}`}></i>
              </div>

              <h2 className="section-title">{topic.title}</h2>
              <p className="section-subtitle">{topic.subtitle}</p>
              <p>{topic.text}</p>

              <div>
                {topic.pills.map((pill) => (
                  <span className="pill" key={pill}>
                    <i className="bi bi-check2-circle"></i>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="glass-card reveal">
              <h3 className="h4 fw-bold mb-3">
                <i className="bi bi-braces-asterisk me-2 text-info"></i>
                Fórmulas principales
              </h3>

              {topic.formulas.map((formula) => (
                <div className="formula" key={formula}>
                  {formula}
                </div>
              ))}

              <div className="mt-4">
                <h4 className="h5">Idea clave</h4>
                <p className="mb-0 text-white-50">
                  Identifica primero qué datos tienes, elige un sistema de referencia y revisa
                  las unidades antes de sustituir valores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormulaSummary() {
  return (
    <section id="formulas">
      <div className="floating-equation eq3">a = Δv/Δt</div>

      <div className="container">
        <div className="text-center mb-5">
          <div className="badge-space">
            <i className="bi bi-calculator"></i>
            Resumen rápido
          </div>

          <h2 className="section-title mt-3">Mapa de fórmulas</h2>

          <p className="section-subtitle mx-auto">
            Un panel tipo presentación para consultar las ecuaciones más usadas en cinemática.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="glass-card reveal">
              <h3 className="h4 text-info">MRU</h3>
              <div className="formula">v = constante</div>
              <div className="formula">x = x₀ + v·t</div>
              <p className="text-white-50 mb-0">
                No hay aceleración. En tiempos iguales se recorren distancias iguales.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="glass-card reveal">
              <h3 className="h4 text-info">MRUV / gravedad</h3>
              <div className="formula">a = constante</div>
              <div className="formula">v = v₀ + a·t</div>
              <div className="formula">x = x₀ + v₀t + ½at²</div>
              <p className="text-white-50 mb-0">
                Para caída libre se usa a = g, cuidando el signo según el eje elegido.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="glass-card reveal">
              <h3 className="h4 text-info">Circular</h3>
              <div className="formula">θ = θ₀ + ωt</div>
              <div className="formula">s = rθ</div>
              <div className="formula">v = ωr</div>
              <div className="formula">a꜀ = v²/r</div>
              <p className="text-white-50 mb-0">
                La velocidad cambia de dirección aunque su rapidez sea constante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sources() {
  return (
    <section id="fuentes">
      <div className="container">
        <div className="glass-card reveal">
          <h2 className="section-title">Documentos y fuentes</h2>

          <p className="section-subtitle">
            Esta página reúne información de distintos materiales de estudio sobre cinemática,
            movimiento rectilíneo, caída libre, tiro vertical y movimiento circular.
          </p>

          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="formula">Documento 1: MRU y MRUV</div>
            </div>

            <div className="col-md-4">
              <div className="formula">Documento 2: Caída libre y tiro vertical</div>
            </div>

            <div className="col-md-4">
              <div className="formula">Documento 3: Movimiento circular</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Simulations() {
  return (
    <section id="simulaciones">
      <div className="container">
        <div className="glass-card reveal simulation-card simulation-big-card">
          <div>
            <div className="mini-orbit"></div>

            <div className="badge-space mb-3">
              <i className="bi bi-laptop"></i>
              Simulador web
            </div>

            <h2 className="section-title">Simulador de movimiento</h2>

            <p className="section-subtitle mx-auto">
              Como parte del proyecto de Física 1 desarrollamos un simulador web de movimiento,
              una herramienta de gran ayuda para estudiantes y profesores. Este recurso permite
              visualizar y comprender de forma más clara los conceptos de cinemática estudiados
              en clase.
            </p>

            <div className="mt-4">
              <a
                className="btn btn-cosmic"
                target="_blank"
                href="https://simuladorfisica1.netlify.app/"
                rel="noreferrer"
              >
              SIMULADOR FÍSICA
                <i className="bi bi-box-arrow-up-right ms-2"></i>
              </a>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-presentation">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">Presentación final: Física en movimiento</h2>

              <p className="text-white-50 mb-0">
                Orden de exposición: MRU/MRUV → Caída libre y tiro vertical → Movimiento circular.
                El contenido fue organizado a partir de distintos documentos de física, fórmulas de
                cinemática, explicaciones teóricas y simulaciones educativas.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <p className="mb-1">
                <i className="bi bi-person-video3 me-2 text-info"></i>
                Proyecto web educativo
              </p>

              <p className="mb-0 text-white-50">
                HTML · CSS · JavaScript · Bootstrap · React
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-white-50">
          <small>© 2026 FísicaOrbital. Diseñado para aprender cinemática de forma visual.</small>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {topics.map((topic, index) => (
        <TopicSection topic={topic} index={index} key={topic.id} />
      ))}

      <FormulaSummary />
      <Sources />
      <Simulations />
      <Footer />
    </>
  );
}

/* =========================
   RENDERIZAR APP
========================= */

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* =========================
   EFECTOS CON JAVASCRIPT
========================= */

function revealCards() {
  document.querySelectorAll(".reveal").forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight * 0.84) {
      card.classList.add("visible");
    }
  });
}

function scrollProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (window.scrollY / height) * 100 : 0;

  const progressBar = document.getElementById("progressCosmic");

  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
}

function asteroidParallax() {
  document.querySelectorAll(".asteroid").forEach((asteroid, index) => {
    const speed = 0.03 + index * 0.015;
    asteroid.style.transform = `translateY(${window.scrollY * speed}px) rotate(${window.scrollY * 0.025}deg)`;
  });
}

window.addEventListener("scroll", () => {
  revealCards();
  scrollProgress();
  asteroidParallax();
});

window.addEventListener("load", () => {
  revealCards();
  scrollProgress();
});
