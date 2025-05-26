export default function CrisisPage() {
  const crises = [
    {
      category: "Sustainable ecosystems",
      title: "Deforestation",
      content:
        "Deforestation, the large-scale clearing of forests, poses a significant threat to the variety of Earth's biodiversity. When forests disappear for agriculture, logging, or development, countless species lose their homes. Trees absorb carbon dioxide from the atmosphere, and when they are cut down, this carbon is released, contributing to global warming. Deforestation disrupts the delicate balance of ecosystems, affecting everything from water cycles to climate regulation.",
      citation:
        "Anderson, L. O., Domingues, F. M., & Sitch, S. (2022). The unseen effects of deforestation: Biophysical effects on climate. Frontiers in Forests and Global Change, 4, 756115. https://doi.org/10.3389/ffgc.2022.756115",
      bgClass: "bg-forest",
    },
    {
      category: "Atoms, Elements & Compounds",
      title: "Uranium Mining",
      content:
        "Uranium mining and refining generate radioactive waste that can contaminate air, water, and soil if not properly managed. Conventional mining methods (like open pit) disturb large areas of land, while in situ leaching (ISL) risks groundwater contamination by injecting chemicals into the earth to extract uranium. The refining process leaves behind radioactive tailings, which can contain most of the original radioactivity and require secure storage to prevent long-term environmental harm. Living near a mine or a refining plant can also lead to radiation poisoning if not planned properly.",
      citation: null,
      bgClass: "bg-tech-pattern",
    },
    {
      category: "Characteristics of Electricity",
      title: "Clean, Affordable Electricity",
      content:
        "Many people around the world still don't have access to clean and affordable energy, which affects education, healthcare, and safety. In some places, people rely on dangerous, polluting sources like diesel generators and open fires. This energy gap leads to an inequality between developed and developing countries.",
      citation:
        "World Health Organization: WHO. (2024, June 12). Progress on basic energy access reverses for first time in a decade. WHO. https://www.who.int/news/item/12-06-2024-progress-on-basic-energy-access-reverses-for-first-time-in-a-decade",
      bgClass: "bg-energy-pattern",
    },
    {
      category: "The Study of the Universe",
      title: "The threat of space junk traffic",
      content:
        "Earth's orbit is becoming increasingly crowded with decommissioned satellites, rocket fragments, and other space debris. This space junk poses a major threat to active satellites, future space endeavors, and even the ISS (International Space Station). The smallest pieces, travelling at around 30,000 km/h can cause a catastrophic collision. As the number of satellites grows, so does the risk of a chain reaction (Kessler Syndrome) - where debris collisions create more debris, making orbit unusable.",
      citation:
        "What is space junk and why is it a problem? | Natural History Museum. (2019, November 14). https://www.nhm.ac.uk/discover/what-is-space-junk-and-why-is-it-a-problem.html",
      bgClass: "bg-space",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-environmental relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect-large p-8 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Current Crisis</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Understanding the critical environmental challenges that threaten our planet's future and demand immediate
              action.
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Items */}
      <section className="py-20 bg-water-pattern relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {crises.map((crisis, index) => (
              <div key={index} className={`relative ${crisis.bgClass} rounded-3xl overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 hover-squircle glass-effect-large p-8 md:p-10 rounded-2xl m-4">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                      {crisis.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">{crisis.title}</h2>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">{crisis.content}</p>

                  {crisis.citation && (
                    <div className="border-l-4 border-primary-200 pl-4 bg-gray-50/80 p-4 rounded-r-lg">
                      <p className="text-sm text-gray-600 italic">
                        <strong>Citation:</strong> {crisis.citation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Be Part of the Solution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our innovative action plans designed to address these critical challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/action-plans"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Action Plans
            </a>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
