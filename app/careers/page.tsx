export default function CareersPage() {
  const jobs = [
    {
      title: "🌱 Urban Ecologist",
      unit: "Sustainable Ecosystems (Biology)",
      responsibilities: [
        "Study wildlife and plant ecosystems in urban settings.",
        "Advise cities on green infrastructure like parks, green roofs, and native landscaping.",
        "Monitor pollution impacts and biodiversity loss in city environments.",
        "Work with urban planners to improve ecological health in growing communities.",
      ],
      salary: "$60,000 – $120,000/year",
      requirements:
        "Bachelor's or master's degree in Ecology, Environmental Science, or Urban Planning with a focus on sustainability.",
      source:
        "Government of Canada. (2023, November 21). Biologist in Ontario – Job Bank. https://www.jobbank.gc.ca/marketreport/summary-occupation/2111/ca",
    },
    {
      title: "🔬 Chemical Safety Officer",
      unit: "Atoms, Elements & Compounds (Chemistry)",
      responsibilities: [
        "Oversee the safe storage and use of chemical substances in labs and industrial facilities.",
        "Conduct risk assessments and prepare emergency response plans.",
        "Train staff on chemical handling and WHMIS regulations.",
        "Maintain detailed chemical inventory and documentation systems.",
      ],
      salary: "$55,000 – $105,000/year",
      requirements:
        "Bachelor's degree in Chemistry, Occupational Health & Safety, or a related field; WHMIS and safety certifications preferred.",
      source:
        "Government of Canada. (2023, November 21). Chemical Technologist – Job Bank. https://www.jobbank.gc.ca/marketreport/summary-occupation/2211/ca",
    },
    {
      title: "⚡ Power Distribution Planner",
      unit: "Characteristics of Electricity (Physics)",
      responsibilities: [
        "Design efficient layouts for electrical grid expansions and upgrades.",
        "Calculate electrical loads and forecast power needs for neighborhoods or commercial areas.",
        "Collaborate with engineers and utility companies to minimize outages.",
        "Implement renewable energy into traditional grid systems.",
      ],
      salary: "$70,000 – $135,000/year",
      requirements:
        "Diploma or degree in Electrical Engineering Technology or Power Systems; certification as a CET or P.Eng is often required.",
      source:
        "Government of Canada. (2023, November 21). Electrical Engineer in Ontario – Job Bank. https://www.jobbank.gc.ca/marketreport/summary-occupation/2133/ca",
    },
    {
      title: "🪐 Planetary Data Analyst",
      unit: "The Study of the Universe (Earth & Space Science)",
      responsibilities: [
        "Analyze space telescope and satellite data related to exoplanets and celestial bodies.",
        "Write scripts and algorithms to model space phenomena.",
        "Support missions by creating data visualizations and reports.",
        "Work with international agencies like NASA or CSA on cosmic research.",
      ],
      salary: "$68,000 – $125,000/year",
      requirements:
        "Bachelor's or Master's in Physics, Astronomy, or Data Science; strong coding and data analytics experience (e.g., Python, MATLAB).",
      source:
        "Government of Canada. (2023, November 21). Astronomer – Job Bank. https://www.jobbank.gc.ca/marketreport/summary-occupation/2111/ca",
    },
    {
      title: "🧑‍💼 Operations Coordinator",
      unit: "Business/Admin (Non-Science Career)",
      responsibilities: [
        "Oversee scheduling, budgeting, and internal communication for day-to-day company operations.",
        "Handle vendor relations and ensure inventory meets project demands.",
        "Support HR, accounting, and logistics teams as needed.",
        "Report directly to project or department managers.",
      ],
      salary: "$48,000 – $87,000/year",
      requirements:
        "College diploma or bachelor's in Business Administration, Project Management, or a related field; strong organizational and communication skills required.",
      source:
        "Government of Canada. (2023, November 21). Administrative Officer – Job Bank. https://www.jobbank.gc.ca/marketreport/summary-occupation/1221/ca",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-environmental relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect-large p-8 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Be part of the solution. Explore exciting career opportunities across multiple disciplines as we work
              together to cultivate a greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-water-pattern relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {jobs.map((job, index) => (
              <div key={index} className="hover-squircle glass-effect-large p-8 md:p-10 rounded-2xl">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">{job.title}</h2>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {job.unit}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">Responsibilities</h3>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Salary Range</h3>
                      <p className="text-lg font-medium text-primary-600">{job.salary}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Requirements</h3>
                      <p className="text-gray-700">{job.requirements}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    <strong>Source:</strong> {job.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our mission to create innovative solutions for environmental sustainability. Together, we can build a
            greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn About Our Mission
            </a>
            <a
              href="/action-plans"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              See Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
