interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Achievements & Awards",
  },
  de: {
    heading: "Erfolge & Auszeichnungen",
  },
  ru: {
    heading: "Достижения и награды",
  },
}

const achievements = {
  en: [
    {
      year: "2025",
      title: "1st Prize, International Competition",
      detail: "Add the name of the award and the jury or organization that recognized you.",
      tag: "Award",
    },
    {
      year: "2024",
      title: "Headline Performance",
      detail: "Describe a major concert, festival or stage where you performed.",
      tag: "Stage",
    },
    {
      year: "2023",
      title: "Album / Release",
      detail: "Mention a release, single or project that became a milestone for you.",
      tag: "Release",
    },
    {
      year: "2022",
      title: "Notable Collaboration",
      detail: "Add a collaboration, feature or project with another artist or label.",
      tag: "Project",
    },
  ],
  de: [
    {
      year: "2025",
      title: "1. Preis, Internationaler Wettbewerb",
      detail: "Fügen Sie den Namen der Auszeichnung und die Jury oder Organisation hinzu.",
      tag: "Auszeichnung",
    },
    {
      year: "2024",
      title: "Headline-Auftritt",
      detail: "Beschreiben Sie ein großes Konzert, Festival oder eine Bühne.",
      tag: "Bühne",
    },
    {
      year: "2023",
      title: "Album / Release",
      detail: "Erwähnen Sie einen Release, eine Single oder ein Projekt als Meilenstein.",
      tag: "Release",
    },
    {
      year: "2022",
      title: "Bemerkenswerte Kollaboration",
      detail: "Fügen Sie eine Zusammenarbeit mit einem Künstler oder Label hinzu.",
      tag: "Projekt",
    },
  ],
  ru: [
    {
      year: "2025",
      title: "1-е место, международный конкурс",
      detail: "Добавьте название награды и жюри или организацию, которая её вручила.",
      tag: "Награда",
    },
    {
      year: "2024",
      title: "Сольное выступление",
      detail: "Опишите крупный концерт, фестиваль или сцену, где вы выступали.",
      tag: "Сцена",
    },
    {
      year: "2023",
      title: "Альбом / релиз",
      detail: "Упомяните релиз, сингл или проект, ставший для вас важной вехой.",
      tag: "Релиз",
    },
    {
      year: "2022",
      title: "Заметная коллаборация",
      detail: "Добавьте совместный проект с другим артистом или лейблом.",
      tag: "Проект",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const list = achievements[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {list.map((item, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-gold mb-1">{item.year}</h3>
                  <span className="inline-block text-xs uppercase tracking-widest text-taupe border border-taupe/40 rounded-full px-3 py-1">
                    {item.tag}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/70">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}