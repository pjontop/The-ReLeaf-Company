export default function ActionPlansPage() {
  const actionPlans = [
    {
      category: "Sustainable ecosystems",
      title: "Drone Seeding for Trees",
      content:
        "To fight deforestation and restore ecosystems, the ReLeaf Company proposes using autonomous drones equipped with state-of-the-art Artificial intelligence. These drones can plant seeds on large scales, especially in remote or difficult terrain. The AI will detect the best possible spots to plant the trees using infrared sensors that beam to the ground. This will ensure the seeds remain in place for generations. By targeting large but specific areas using drones, we aim to enhance biodiversity and regenerate forests efficiently.",
      goal: "Goal: Plant 1 billion trees annually by 2035 to restore 10 million hectares of forest globally.",
      bgClass: "bg-forest",
    },
    {
      category: "Atoms, Elements & Compounds",
      title: "Smart Leak Detection for Uranium Sites",
      content:
        "To counter leaking uranium from storage complexes, the ReLeaf Company proposes implementing a smart leak detection system using nanosensors arranged in a radial pattern around complexes or mines. They will be made from carbon nanotubes and will be able to detect radiation, heavy metals, and pH changes in groundwater. This will then connect to specialized IoT (internet of things) controllers to deliver valuable insights to groundkeepers and suggest further action plans to support ecosystems.",
      goal: "Goal: Install smart leak detection systems at 75% of active uranium mines and tailings storage facilities worldwide by 2040, reducing radioactive groundwater contamination incidents by 80%.",
      bgClass: "bg-tech-pattern",
    },
    {
      category: "Characteristics of Electricity",
      title: "AI-Powered Solar Microgrids",
      content:
        'To fight energy inequality and provide clean power to underserved communities, the ReLeaf company proposes implementing solar-powered microgrids paired with AI battery storage systems. These "microgrids" would operate independently from the national power grid and can deliver on-demand and reliable electricity to remote villages, refugee camps, and disaster-prone areas. Our AI would predict energy need, and weather to supercharge the grid. This will ensure people have a steady clean energy supply without relying on fossil fuel generators.',
      goal: "Goal: Bring clean, affordable energy to 500 million people by 2050.",
      bgClass: "bg-energy-pattern",
    },
    {
      category: "The Study of the Universe",
      title: "Ground-Based Laser Deorbiting for Space Debris",
      content:
        "To combat the growing threat of space \"traffic jams\" in Earth's orbit, the ReLeaf Company proposed using ground-based lasers to safely deorbit hazardous debris. These high-precision lasers don't destroy objects but gently push them into lower orbits by heating one side, causing a small amount of thrust. With this technology, we hope to prevent the occurrence of chain reaction collisions (Kessler Syndrome) and keep space exploration safe.",
      goal: "Goal: Track and manage at least 10,000 pieces of high-risk space junk, and bring them to a safer place.",
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Action Plans</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Innovative solutions leveraging cutting-edge technology to address the world's most pressing environmental
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Action Plans */}
      <section className="py-20 bg-water-pattern relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {actionPlans.map((plan, index) => (
              <div key={index} className={`relative ${plan.bgClass} rounded-3xl overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 hover-squircle glass-effect-large p-8 md:p-10 rounded-2xl m-4">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-3">
                      {plan.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">{plan.title}</h2>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">{plan.content}</p>

                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-lg">
                    <p className="font-medium">{plan.goal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Help Us Implement These Solutions</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our team of innovators and scientists working to make these action plans a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
