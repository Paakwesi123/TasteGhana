import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { RecipeCard } from '@/components/RecipeCard';
import { Footer } from '@/components/Footer';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Sparkles, Heart, ChefHat, BookOpen, Star } from 'lucide-react';

const Index = () => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />
      <Hero />

      {/* Featured Recipes Section - Enhanced */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Star className="h-4 w-4" />
            <span>HANDPICKED FOR YOU</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
            Featured Recipes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start your culinary journey with these beloved Ghanaian dishes, 
            carefully selected to introduce you to the rich flavors of West Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRecipes.map((recipe, index) => (
            <div 
              key={recipe.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 group"
          >
            <Link to="/recipes">
              View All Recipes 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {recipes.length}+
              </div>
              <div className="text-lg opacity-90">Authentic Recipes</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-lg opacity-90">Regional Cuisines</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-lg opacity-90">Free </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Choose Tasteful Ghana?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just recipes—discover the heart of Ghanaian culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-red-100">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Free</h3>
                <p className="text-gray-600 leading-relaxed">
                  All recipes are completely free. No subscriptions, no paywalls—just authentic 
                  Ghanaian cuisine accessible to everyone, everywhere.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-orange-100">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Regional Diversity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore authentic dishes from all regions of Ghana, from the rich Ashanti 
                  traditions to the unique flavors of the Northern territories.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-yellow-100">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Cultural Heritage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Each recipe includes cultural notes and Adinkra symbols, connecting food 
                  to tradition and celebrating Ghana's rich heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section - New */}
       <section className="bg-gradient-to-br from-white to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Cook Like a Ghanaian Chef
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our detailed recipes guide you through every step, from preparation to plating. 
                Learn authentic techniques passed down through generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <ChefHat className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Step-by-Step Instructions</h4>
                    <p className="text-gray-600 text-sm">Clear, detailed guidance for every recipe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Cultural Context</h4>
                    <p className="text-gray-600 text-sm">Learn the stories behind each dish</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Difficulty Ratings</h4>
                    <p className="text-gray-600 text-sm">Find recipes matching your skill level</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl transform -rotate-1 overflow-hidden">
                <img 
                  src="https://i.ibb.co/v9YVb75/African-Female-Chef-Dicing-Onions-in-Full-Uniform-Modern-Kitchen-Stock-Photo.jpg" 
                  alt="Ghanaian chef cooking" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks discovering the authentic flavors of Ghana
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link to="/recipes">
              Explore All Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;