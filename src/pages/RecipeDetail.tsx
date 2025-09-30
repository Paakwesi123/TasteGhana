import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { RecipeCard } from '@/components/RecipeCard';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, ChefHat, MapPin, Info, BookmarkPlus, Share2, Users, Flame } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const RecipeDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-warm">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
            <Button asChild>
              <Link to="/recipes">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedRecipes = recipes
    .filter((r) => r.id !== recipe.id && (r.region === recipe.region || r.tags.some((tag) => recipe.tags.includes(tag))))
    .slice(0, 3);

  const handleSaveRecipe = () => {
    toast({
      title: "Recipe Saved!",
      description: `${recipe.title} has been saved to your favorites.`,
    });
  };

  const handleShareRecipe = () => {
    toast({
      title: "Share Link Copied!",
      description: "Recipe link has been copied to your clipboard.",
    });
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-4 hover:bg-white/60 transition-all">
          <Link to="/recipes">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
          </Link>
        </Button>

        {/* Hero Section with Parallax Effect */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8 shadow-2xl group">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-6 right-6 flex gap-3">
            <Button 
              size="icon" 
              className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/40 shadow-lg transition-all hover:scale-110"
              onClick={handleSaveRecipe}
            >
              <BookmarkPlus className="h-5 w-5 text-white" />
            </Button>
            <Button 
              size="icon" 
              className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/40 shadow-lg transition-all hover:scale-110"
              onClick={handleShareRecipe}
            >
              <Share2 className="h-5 w-5 text-white" />
            </Button>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-1.5 text-sm shadow-lg">
                <MapPin className="h-3 w-3 mr-1" />
                {recipe.region}
              </Badge>
              <Badge className="bg-white/95 backdrop-blur-sm text-gray-800 border-0 px-4 py-1.5 text-sm capitalize shadow-lg">
                <Flame className="h-3 w-3 mr-1" />
                {recipe.difficulty}
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-white drop-shadow-2xl">
              {recipe.title}
            </h1>
            <p className="text-lg text-white/90 max-w-3xl drop-shadow-lg">
              {recipe.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats - Enhanced */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-5 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">Total Time</p>
                <p className="text-2xl font-bold text-blue-900">{totalTime} min</p>
              </Card>
              <Card className="p-5 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs text-purple-600 font-medium uppercase tracking-wide">Difficulty</p>
                <p className="text-2xl font-bold text-purple-900 capitalize">{recipe.difficulty}</p>
              </Card>
              <Card className="p-5 text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Servings</p>
                <p className="text-2xl font-bold text-green-900">4-6</p>
              </Card>
            </div>

            {/* Ingredients - Enhanced */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl border-2 border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <ChefHat className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Ingredients
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Instructions - Enhanced */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl border-2 border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Flame className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Instructions
                </h2>
              </div>
              <div className="space-y-5">
                {recipe.instructions.map((instruction, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-gray-700 leading-relaxed">{instruction}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Cultural Note - Enhanced */}
            {recipe.culturalNote && (
              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Info className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-amber-900">
                      Cultural Background
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{recipe.culturalNote}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar - Enhanced */}
          <div className="space-y-6">
            {/* Adinkra Symbol - Enhanced */}
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Adinkra Symbol</h3>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <span className="text-6xl text-white">⚜</span>
                </div>
                <p className="font-bold text-xl mb-2 text-gray-800">{recipe.adinkraSymbol}</p>
                <p className="text-sm text-gray-600 italic leading-relaxed">{recipe.adinkraMeaning}</p>
              </div>
            </Card>

            {/* Tags - Enhanced */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl border-2 border-orange-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Recipe Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 border-orange-300 text-orange-700 hover:from-orange-200 hover:to-red-200 transition-all cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Time Breakdown */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl border-2 border-orange-100">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Time Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50">
                  <span className="text-sm text-gray-600">Prep Time</span>
                  <span className="font-bold text-blue-600">{recipe.prepTime} min</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-red-50">
                  <span className="text-sm text-gray-600">Cook Time</span>
                  <span className="font-bold text-red-600">{recipe.cookTime} min</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Recipes - Enhanced */}
        {relatedRecipes.length > 0 && (
          <section className="mt-16">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-orange-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 px-6 text-3xl font-bold text-gray-800">
                  You Might Also Like
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRecipes.map((relatedRecipe) => (
                <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetail;