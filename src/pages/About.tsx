import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Heart, Users, Globe, Sparkles, BookOpen, Award, Shield, Compass } from 'lucide-react';

const About = () => {
  const adinkraSymbols = [
    {
      name: 'Sankofa',
      meaning: 'Return and get it',
      description: 'Symbolizes learning from the past. We preserve recipes to honor our ancestors.',
    },
    {
      name: 'Nkyinkyim',
      meaning: 'Twisting',
      description: 'Represents dynamism and versatility in our cooking traditions.',
    },
    {
      name: 'Dwennimmen',
      meaning: "Ram's horns",
      description: 'Symbol of strength and humility, values we bring to our cuisine.',
    },
    {
      name: 'Aya',
      meaning: 'Fern',
      description: 'Represents endurance and resourcefulness in Ghanaian cooking.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section - Enhanced */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 blur-3xl -z-10"></div>
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl animate-pulse">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
            About TasteGhana
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to preserve and celebrate Ghana's rich culinary heritage, making
            authentic recipes accessible to everyone, everywhere—<span className="font-bold text-orange-600">for free</span>.
          </p>
        </div>

        {/* Mission Cards - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-100 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cultural Pride</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Celebrating the diversity and richness of Ghanaian cuisine across all regions
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Community</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Bringing people together through authentic recipes and shared traditions
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Globe className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Global Reach</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sharing Ghanaian cuisine with the world, one recipe at a time
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-100 group">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Free Forever</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              No paywalls, no subscriptions—just authentic recipes for everyone
            </p>
          </Card>
        </div>

        {/* Our Story - Enhanced */}
        <Card className="p-10 md:p-12 mb-20 bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-orange-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Story
            </h2>
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-orange-600 first-letter:mr-2 first-letter:float-left">
              Ghana's culinary traditions are more than just recipes—they're stories, memories, and
              cultural treasures passed down through generations. Each dish tells a tale of our
              ancestors, our regions, and our values.
            </p>
            <p>
              TasteGhana was born from a simple but powerful idea: these recipes deserve to be
              preserved, celebrated, and shared freely with the world. In an age where food culture
              is increasingly commercialized, we believe authentic culinary knowledge should remain
              accessible to all.
            </p>
            <p>
              From the bustling streets of Accra to the northern territories, from coastal fishing
              communities to the Ashanti heartland—we document, preserve, and share authentic
              recipes that represent the true diversity of Ghanaian cuisine.
            </p>
            <p className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
              Our platform integrates Adinkra symbols, traditional wisdom passed through visual
              language, connecting each recipe to its cultural roots. Every dish becomes a gateway to
              understanding Ghanaian values, history, and identity.
            </p>
          </div>
        </Card>

        {/* Adinkra Symbols - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Compass className="h-4 w-4" />
              <span>CULTURAL WISDOM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Understanding Adinkra Symbols</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Adinkra symbols are visual representations of concepts and aphorisms from Ghana's Akan
              people. We use them to connect our recipes to deeper cultural meanings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adinkraSymbols.map((symbol, index) => (
              <Card 
                key={symbol.name} 
                className="p-8 hover:shadow-2xl transition-all hover:-translate-y-1 bg-white border-2 border-orange-100 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-4xl text-white">⚜</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">{symbol.name}</h3>
                    </div>
                    <p className="text-base text-orange-600 italic mb-3 font-medium">"{symbol.meaning}"</p>
                    <p className="text-gray-600 leading-relaxed">{symbol.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values - Enhanced */}
        <Card className="p-10 md:p-12 bg-gradient-to-br from-white to-orange-50 shadow-2xl border-2 border-orange-100">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Award className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Authenticity</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Every recipe is researched and verified to ensure it represents true Ghanaian
                culinary traditions passed down through generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Accessibility</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe food knowledge should be free and accessible to everyone, regardless of
                location or income. No barriers, just culture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cultural Preservation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We're not just sharing recipes—we're preserving cultural heritage for future
                generations and keeping traditions alive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Community Driven</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our recipes come from real Ghanaian homes, markets, and communities across the
                nation, ensuring authenticity in every dish.
              </p>
            </div>
          </div>
        </Card>

        {/* Bottom CTA - New */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Preserving Ghanaian Culture
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Every recipe you cook is a step toward keeping our traditions alive
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Recipes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Regions</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm">Free</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;