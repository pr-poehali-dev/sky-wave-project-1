interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "Briefly introduce yourself: your name, genre and the musical direction you work in. Tell visitors what makes your sound recognizable and why music became your path.",
      "Describe your background: where you studied, who inspired you, and the key milestones that shaped your craft as a musician.",
      "Share your creative philosophy and what drives you on stage and in the studio. This is the place to let your personality shine through.",
      "Mention current projects, collaborations or the release you are promoting right now, and invite listeners to follow your journey.",
    ],
  },
  de: {
    heading: "Über mich",
    paragraphs: [
      "Stellen Sie sich kurz vor: Ihr Name, Ihr Genre und die musikalische Richtung, in der Sie arbeiten. Erzählen Sie, was Ihren Sound unverwechselbar macht.",
      "Beschreiben Sie Ihren Werdegang: wo Sie studiert haben, wer Sie inspiriert hat und welche Meilensteine Ihr Können geprägt haben.",
      "Teilen Sie Ihre kreative Philosophie und was Sie auf der Bühne und im Studio antreibt. Hier darf Ihre Persönlichkeit durchscheinen.",
      "Erwähnen Sie aktuelle Projekte, Kollaborationen oder den Release, den Sie gerade promoten, und laden Sie zum Mitverfolgen ein.",
    ],
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Кратко представьтесь: имя, жанр и музыкальное направление, в котором вы работаете. Расскажите, что делает ваше звучание узнаваемым и почему музыка стала вашим путём.",
      "Опишите свой путь: где учились, кто вас вдохновлял и какие ключевые моменты сформировали вас как музыканта.",
      "Поделитесь своей творческой философией и тем, что движет вами на сцене и в студии. Здесь стоит дать раскрыться вашей личности.",
      "Упомяните текущие проекты, коллаборации или релиз, который вы продвигаете сейчас, и пригласите слушателей следить за вашим творчеством.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}