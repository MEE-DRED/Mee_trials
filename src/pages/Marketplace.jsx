import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMeals, selectMeals, selectMealsLoading, selectMealsError } from '../redux';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Marketplace = () => {
  const dispatch = useDispatch();
  const meals = useSelector(selectMeals);
  const loading = useSelector(selectMealsLoading);
  const error = useSelector(selectMealsError);
  const { addToCart } = useCart();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  return (
    <div className="bg-white text-dwm-text-dark">
      <div className="bg-dwm-green-pale px-6 md:px-16 py-12 md:py-16 border-b border-primary/10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-dwm-text-mid mb-4 text-sm md:text-base">
            <Link to="/" className="text-accent hover:text-[#b58226] transition duration-300">Home</Link> &#8250; Marketplace
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
            African Marketplace by Region
          </h1>
          <p className="text-base md:text-xl text-dwm-text-mid leading-relaxed">
            Shop clinically informed African meals and ingredients across West, East, and Southern Africa.
          </p>
        </div>
      </div>

      <section className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
        {loading && (
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <p className="text-center">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <div
                key={meal.id}
                className="rounded-2xl border border-primary/10 bg-white p-4 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img 
                  src={meal.image} 
                  alt={meal.name}
                  className="h-44 w-full object-cover rounded-xl"
                />
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-dwm-text-mid">{meal.emoji} {meal.country}</span>
                    <span className="text-accent font-semibold">
                      {meal.currency} {meal.price.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{meal.name}</h3>
                  <p className="text-dwm-text-mid text-sm mb-4 leading-relaxed">{meal.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {meal.healthTags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-dwm-green-pale text-dwm-green-mid text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => addToCart(meal)}
                    className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
