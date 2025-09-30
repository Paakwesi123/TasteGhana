import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { RecipeCard } from '@/components/RecipeCard';
import { Footer } from '@/components/Footer';
import { recipes, regions, difficulties } from '@/data/recipes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X, Sparkles } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(true);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRegion = selectedRegion === 'All' || recipe.region === selectedRegion;
    const matchesDifficulty =
      selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesRegion && matchesDifficulty;
  });

  const hasActiveFilters = searchQuery || selectedRegion !== 'All' || selectedDifficulty !== 'All';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedDifficulty('All');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        {/* Hero Header with Pattern Background */}
        <div className="relative mb-12 md:mb-16">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span>Explore Authentic Flavors</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
              Ghanaian Recipe Collection
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From bustling street markets to family kitchens, discover the rich tapestry of Ghana's culinary heritage
            </p>
          </div>
        </div>

        {/* Enhanced Search & Filter Section */}
        <div className="mb-8 md:mb-12">
          {/* Main Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl border border-orange-100 p-4 md:p-6 mb-4 backdrop-blur-sm bg-white/90">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400 group-focus-within:text-orange-600 transition-colors" />
                <Input
                  placeholder="Search recipes, ingredients, or dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Filter Toggle Button (Mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden h-12 border-2 border-orange-200 hover:bg-orange-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-4 md:p-6 backdrop-blur-sm bg-white/90">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Filter className="h-4 w-4 text-orange-500" />
                  Filter Options
                </h3>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear all
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Region Filter */}
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-2 block">Region</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="h-11 border-2 border-gray-200 focus:border-orange-400 rounded-xl">
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region} className="cursor-pointer">
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-2 block">Difficulty Level</label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="h-11 border-2 border-gray-200 focus:border-orange-400 rounded-xl">
                      <SelectValue placeholder="Select Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((diff) => (
                        <SelectItem key={diff} value={diff} className="capitalize cursor-pointer">
                          {diff}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Tags */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {searchQuery && (
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm">
                <span>Search: "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="hover:bg-orange-200 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedRegion !== 'All' && (
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-sm">
                <span>Region: {selectedRegion}</span>
                <button onClick={() => setSelectedRegion('All')} className="hover:bg-amber-200 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedDifficulty !== 'All' && (
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-sm capitalize">
                <span>Difficulty: {selectedDifficulty}</span>
                <button onClick={() => setSelectedDifficulty('All')} className="hover:bg-red-200 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Count with Stats */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Recipe' : 'Recipes'}
            </p>
            <p className="text-sm text-gray-500">
              {filteredRecipes.length === recipes.length 
                ? 'Showing all available recipes' 
                : `Filtered from ${recipes.length} total recipes`}
            </p>
          </div>
          
          {!hasActiveFilters && (
            <div className="flex gap-4 text-sm">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-orange-100">
                <span className="text-gray-600">Regions: </span>
                <span className="font-semibold text-orange-600">{regions.length - 1}</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-orange-100">
                <span className="text-gray-600">Difficulty Levels: </span>
                <span className="font-semibold text-orange-600">{difficulties.length - 1}</span>
              </div>
            </div>
          )}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'backwards' }}
              >
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 md:py-32">
            <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-8 md:p-12 max-w-md mx-auto">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No recipes found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any recipes matching your criteria. Try adjusting your filters.
              </p>
              <Button
                onClick={clearFilters}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl shadow-lg"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Recipes;