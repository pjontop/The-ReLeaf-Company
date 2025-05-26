export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-environmental relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect-large p-8 rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About ReLeaf Co.</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pioneering innovative solutions for a sustainable future through cutting-edge technology and collaborative
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-nature-gradient relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect-large p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Our Vision & Mission</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-white/90 leading-relaxed mb-6">
                Learn more about ReLeaf Co.'s vision, mission, values, and the team dedicated to cultivating a greener
                future. We believe in the power of innovation, collaboration, and community action to address the
                planet's most pressing environmental challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="hover-squircle glass-effect-card p-6 rounded-xl">
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/80">
                    A world where innovative technology and environmental stewardship work hand in hand to create
                    sustainable solutions for future generations.
                  </p>
                </div>

                <div className="hover-squircle glass-effect-card p-6 rounded-xl">
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/80">
                    To develop and implement cutting-edge solutions that address critical environmental challenges
                    through AI, sustainable technology, and strategic partnerships.
                  </p>
                </div>

                <div className="hover-squircle glass-effect-card p-6 rounded-xl">
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Our Values</h3>
                  <p className="text-white/80">
                    Innovation, sustainability, collaboration, and scientific excellence guide everything we do as we
                    work toward a greener future.
                  </p>
                </div>

                <div className="hover-squircle glass-effect-card p-6 rounded-xl">
                  <h3 className="text-xl font-serif font-bold text-white mb-4">Our Team</h3>
                  <p className="text-white/80">
                    A diverse group of scientists, engineers, and environmental experts dedicated to making a positive
                    impact on our planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how you can be part of our innovative approach to environmental sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Careers
            </a>
            <a
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn About Partnerships
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
