import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-environmental">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect-large rounded-3xl p-8 md:p-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-gradient"># ReLeaf Co.</h1>
            <p className="text-2xl md:text-3xl font-serif mb-8 text-gray-800">Cultivating a Greener Future</p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              ReLeaf Co. is dedicated to pioneering innovative solutions to address critical environmental challenges
              and foster a sustainable future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3">
                <Link href="/crisis">Explore Current Crisis</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3"
              >
                <Link href="/action-plans">View Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="py-20 bg-nature-gradient relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="glass-effect-card p-6 rounded-2xl inline-block">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Mission in Action</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Discover how we're addressing the world's most pressing environmental challenges through innovation,
                collaboration, and cutting-edge technology.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="hover-squircle glass-effect-card p-8 text-center rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Environmental Crisis</h3>
              <p className="text-white/80 mb-6">
                Understanding the critical environmental challenges facing our planet today.
              </p>
              <Button asChild variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/crisis">Learn More</Link>
              </Button>
            </div>

            <div className="hover-squircle glass-effect-card p-8 text-center rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Innovative Solutions</h3>
              <p className="text-white/80 mb-6">
                Cutting-edge action plans leveraging AI, drones, and smart technology.
              </p>
              <Button asChild variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/action-plans">Explore Plans</Link>
              </Button>
            </div>

            <div className="hover-squircle glass-effect-card p-8 text-center rounded-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Join Our Team</h3>
              <p className="text-white/80 mb-6">
                Be part of the solution with exciting career opportunities across multiple disciplines.
              </p>
              <Button asChild variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                <Link href="/careers">View Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in our mission to create innovative solutions for a sustainable future. Together, we can cultivate a
            greener world for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3"
            >
              <Link href="/partners">Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
