import { ExternalLink } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-environmental relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect-large p-8 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Partners</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Collaborating with leading organizations to drive innovation and create sustainable solutions for
              environmental challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Information */}
      <section className="py-20 bg-tech-pattern relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hover-squircle glass-effect-large p-8 md:p-12 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Alliance Grants – Natural Sciences and Engineering Research Council of Canada (NSERC)
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Alliance Grants program, administered by the Natural Sciences and Engineering Research Council of
                  Canada (NSERC), supports collaborative research projects between academic researchers and partner
                  organizations in the natural sciences and engineering fields. These grants aim to encourage
                  partnerships that can lead to innovative solutions addressing societal challenges, including clean
                  energy, environmental sustainability, and advanced technologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Website</h3>
                <a
                  href="https://www.nserc-crsng.gc.ca/Innovate-Innover/Alliance-Alliance_eng.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  https://www.nserc-crsng.gc.ca/Innovate-Innover/Alliance-Alliance_eng.asp
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Total Funding Available</h3>
                <div className="bg-primary-50/80 p-4 rounded-lg border-l-4 border-primary-500">
                  <p className="text-gray-800 font-medium">
                    Up to $1 million per year for a duration of 1 to 5 years, depending on the project's scope and
                    partnership contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-nature-gradient relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="glass-effect-card p-6 rounded-2xl inline-block">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Partnership Benefits</h2>
              <p className="text-xl text-white/90">How our collaboration with NSERC drives innovation and impact</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="hover-squircle glass-effect-card p-6 text-center rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-white">Research Excellence</h3>
              <p className="text-white/80">
                Access to world-class research facilities and expertise in natural sciences and engineering.
              </p>
            </div>

            <div className="hover-squircle glass-effect-card p-6 text-center rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-white">Innovation Support</h3>
              <p className="text-white/80">
                Funding and resources to develop cutting-edge solutions for environmental challenges.
              </p>
            </div>

            <div className="hover-squircle glass-effect-card p-6 text-center rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-white">Societal Impact</h3>
              <p className="text-white/80">
                Collaborative approach to addressing critical environmental and sustainability challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Interested in Partnership?</h2>
          <p className="text-xl mb-8 opacity-90">
            Explore opportunities to collaborate with ReLeaf Co. and our partners on innovative environmental solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More About Us
            </a>
            <a
              href="/action-plans"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
