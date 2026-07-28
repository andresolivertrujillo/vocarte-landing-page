import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Drama,
  Guitar,
  HeartHandshake,
  MapPin,
  Mic2,
  Music2,
  Piano,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Header } from './components/Header'
import { WhatsAppLink } from './components/WhatsAppLink'
import { business } from './config/business'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const workshopIcons: Record<string, IconComponent> = {
  mic: Mic2,
  piano: Piano,
  guitar: Guitar,
  music: Music2,
  sparkles: Sparkles,
  star: Star,
  masks: Drama,
}

const benefits = [
  ['Creatividad', 'Abrir espacio para imaginar, crear y encontrar nuevas formas de ver el mundo.', Sparkles],
  [
    'Expresión y confianza',
    'Descubrir recursos para comunicar ideas, emociones y una voz propia.',
    HeartHandshake,
  ],
  ['Disciplina y constancia', 'Aprender a disfrutar el proceso y sostener la práctica paso a paso.', Clock3],
  ['Trabajo en equipo', 'Compartir, escuchar y construir junto a otras personas.', Users],
  [
    'Habilidades artísticas',
    'Explorar distintos lenguajes para reconocer intereses y capacidades.',
    Star,
  ],
] as const

const faqs = [
  {
    question: '¿Desde qué edad se puede participar?',
    answer:
      'Vocarte recibe a niños de 8 a 12 años y a jóvenes desde los 13 años en adelante.',
  },
  {
    question: '¿Las clases son presenciales?',
    answer: 'Sí. Los talleres se desarrollan de forma presencial y grupal.',
  },
  {
    question: '¿Dónde se encuentra Vocarte?',
    answer: 'Vocarte se encuentra en el distrito de Ventanilla, Perú.',
  },
  {
    question: '¿Es necesario tener experiencia previa?',
    answer:
      'Puedes escribirnos por WhatsApp para recibir orientación según el taller que te interesa y tu experiencia actual.',
  },
  {
    question: '¿Cómo puedo solicitar información?',
    answer:
      'Escríbenos por WhatsApp. Allí podrás consultar por los talleres y la disponibilidad actual.',
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>
      <Header />

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                <span aria-hidden="true">✦</span> Escuela de arte en Ventanilla
              </p>
              <h1>
                Un lugar para <em>descubrir</em> el artista que llevas dentro
              </h1>
              <p className="hero-tagline">{business.tagline}</p>
              <p className="hero-description">
                Clases artísticas presenciales y grupales para niños y jóvenes que quieren
                aprender, expresarse y crecer a través del arte.
              </p>
              <div className="hero-actions">
                <WhatsAppLink className="button button-gold">Consultar por WhatsApp</WhatsAppLink>
                <a className="button button-ghost" href="#talleres">
                  Conocer los talleres <ArrowDown aria-hidden="true" size={18} />
                </a>
              </div>
              <ul className="hero-facts" aria-label="Características de las clases">
                <li>
                  <Check aria-hidden="true" /> Desde 8 años
                </li>
                <li>
                  <Check aria-hidden="true" /> Clases grupales
                </li>
                <li>
                  <Check aria-hidden="true" /> Modalidad presencial
                </li>
              </ul>
            </div>

            <div className="hero-art" aria-label="Vocarte, arte que inspira">
              <div className="art-note note-one" aria-hidden="true">
                <Music2 />
              </div>
              <div className="art-note note-two" aria-hidden="true">
                <Sparkles />
              </div>
              <div className="art-card">
                <span className="art-card-kicker">Tu talento tiene una voz</span>
                <div className="art-logo-wrap">
                  <img
                    src="/logo-vocarte.jpg"
                    alt="Vocarte, formando artistas, inspirando personas"
                    width="620"
                    height="300"
                  />
                </div>
                <div className="art-stages" aria-hidden="true">
                  <span>Crea</span>
                  <i />
                  <span>Expresa</span>
                  <i />
                  <span>Comparte</span>
                </div>
              </div>
              <div className="art-caption">
                <span className="art-caption-icon" aria-hidden="true">
                  <Drama />
                </span>
                <span>
                  <strong>7 talleres</strong>
                  Música, danza y teatro
                </span>
              </div>
            </div>
          </div>
          <div className="hero-wave" aria-hidden="true" />
        </section>

        <section className="trust-strip" aria-label="Lo que encontrarás en Vocarte">
          <div className="container trust-grid">
            <div>
              <Sparkles aria-hidden="true" />
              <span>Formación artística</span>
            </div>
            <div>
              <HeartHandshake aria-hidden="true" />
              <span>Ambiente familiar</span>
            </div>
            <div>
              <MapPin aria-hidden="true" />
              <span>Clases presenciales</span>
            </div>
            <div>
              <Users aria-hidden="true" />
              <span>Niños y jóvenes</span>
            </div>
          </div>
        </section>

        <section className="section workshops-section" id="talleres">
          <div className="container">
            <SectionHeading
              eyebrow="Encuentra tu forma de crear"
              title="Talleres para explorar tu talento"
              description="Siete caminos para acercarse al arte, aprender con otros y disfrutar cada descubrimiento."
              align="center"
            />
            <div className="workshop-grid">
              {business.workshops.map((workshop) => {
                const Icon = workshopIcons[workshop.icon]
                return (
                  <article className={`workshop-card tone-${workshop.tone}`} key={workshop.name}>
                    <div className="workshop-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <h3>{workshop.name}</h3>
                      <p>{workshop.description}</p>
                    </div>
                    <a
                      href="#contacto"
                      aria-label={`Consultar información sobre el taller de ${workshop.name}`}
                    >
                      Consultar taller <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section age-section" id="grupos">
          <div className="container age-layout">
            <div className="age-intro">
              <SectionHeading
                eyebrow="Cada etapa tiene su ritmo"
                title="Grupos pensados para aprender y disfrutar"
                description="Las actividades y el acompañamiento se adaptan a cada etapa, respetando la manera de aprender y expresarse de niños y jóvenes."
              />
              <div className="age-illustration" aria-hidden="true">
                <span className="age-line line-a" />
                <span className="age-line line-b" />
                <Music2 />
                <Sparkles />
              </div>
            </div>
            <div className="age-cards">
              <article className="age-card age-card-kids">
                <div className="age-number">8–12</div>
                <p className="age-label">años</p>
                <h3>Niños</h3>
                <p>
                  Un entorno cercano para explorar, jugar con la creatividad y acercarse a nuevos
                  lenguajes artísticos.
                </p>
              </article>
              <article className="age-card age-card-youth">
                <div className="age-number">13+</div>
                <p className="age-label">años</p>
                <h3>Jóvenes</h3>
                <p>
                  Un espacio para profundizar intereses, expresarse con autenticidad y compartir
                  el proceso con otros jóvenes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section about-section" id="nosotros">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="about-frame">
                <img
                  src="/logo-vocarte.jpg"
                  alt="Logo de la escuela de arte Vocarte"
                  width="620"
                  height="300"
                  loading="lazy"
                />
              </div>
              <div className="about-badge">
                <MapPin aria-hidden="true" />
                <span>
                  <strong>Estamos en</strong>
                  Ventanilla, Perú
                </span>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="Sobre Vocarte"
                title="Arte, confianza y acompañamiento"
              />
              <p className="about-lead">
                Vocarte es un espacio donde niños y jóvenes pueden explorar, aprender y expresarse
                mediante el arte.
              </p>
              <p>
                Nos mueve crear un ambiente familiar y acogedor, donde cada estudiante pueda
                sentirse acompañado mientras descubre nuevas formas de crear y compartir lo que
                lleva dentro.
              </p>
              <ul className="about-points">
                <li>
                  <ShieldCheck aria-hidden="true" />
                  Un entorno de confianza y cercanía
                </li>
                <li>
                  <Users aria-hidden="true" />
                  Experiencias grupales y presenciales
                </li>
                <li>
                  <Sparkles aria-hidden="true" />
                  Espacio para explorar distintos lenguajes artísticos
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section benefits-section">
          <div className="container">
            <SectionHeading
              eyebrow="Crecer a través del arte"
              title="Mucho más que aprender una disciplina"
              description="La práctica artística abre oportunidades para conocerse, conectar y construir habilidades valiosas para la vida."
              align="center"
            />
            <div className="benefit-grid">
              {benefits.map(([title, description, Icon], index) => (
                <article className="benefit-card" key={title}>
                  <span className="benefit-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contacto">
          <div className="container cta-inner">
            <div className="cta-copy">
              <p className="eyebrow eyebrow-light">El primer paso puede ser un mensaje</p>
              <h2>¿Qué taller despierta tu curiosidad?</h2>
              <p>
                Si eres padre, madre, niño o joven, escríbenos para consultar por los talleres y
                la disponibilidad actual.
              </p>
            </div>
            <WhatsAppLink className="button button-gold button-large">
              Consultar por WhatsApp
            </WhatsAppLink>
          </div>
          <Music2 className="cta-note cta-note-one" aria-hidden="true" />
          <Sparkles className="cta-note cta-note-two" aria-hidden="true" />
        </section>

        <section className="section faq-section" id="preguntas">
          <div className="container faq-layout">
            <div className="faq-intro">
              <SectionHeading
                eyebrow="Resolvemos tus dudas"
                title="Preguntas frecuentes"
                description="Información clara para ayudarte a dar el siguiente paso."
              />
              <p className="faq-help">
                ¿Tienes otra consulta?{' '}
                <a href="#contacto">Escríbenos y conversemos.</a>
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo-vocarte.jpg" alt="Vocarte" width="184" height="74" loading="lazy" />
            <p>{business.tagline}</p>
          </div>
          <div className="footer-location">
            <p className="footer-label">Encuéntranos</p>
            <p>
              <MapPin aria-hidden="true" size={18} />
              {business.location}
            </p>
          </div>
          <div className="footer-contact">
            <p className="footer-label">Conversemos</p>
            <WhatsAppLink showIcon>WhatsApp</WhatsAppLink>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Vocarte. Todos los derechos reservados.</p>
          <a href="#inicio">Volver al inicio ↑</a>
        </div>
      </footer>

      <WhatsAppLink
        className="whatsapp-float"
        ariaLabel="Abrir WhatsApp para consultar por los talleres de Vocarte"
      >
        <span className="float-label">Conversemos</span>
      </WhatsAppLink>
    </>
  )
}

export default App
