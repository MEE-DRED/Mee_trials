import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../../video/dinewithmee_video.mp4';

const Home = () => {
  const clinicalFocusAreas = [
    {
      id: 'diabetes',
      title: 'Diabetes Care',
      description: 'Low glycemic meal support, fiber-first planning, and guided blood sugar nutrition strategies.',
      image: 'https://www.azpcps.com/wp-content/uploads/2024/01/Diet-for-Diabetes-Management.jpg',
      link: '/programs/diabetes'
    },
    {
      id: 'hypertension',
      title: 'Hypertension Support',
      description: 'Heart-conscious food pathways designed to lower sodium load and improve cardiometabolic outcomes.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&h=300&q=80',
      link: '/programs/hypertension'
    },
    {
      id: 'maternal',
      title: 'Maternal Health',
      description: 'Trimester-aligned nutrition protocols to support fetal development and maternal recovery.',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&h=300&q=80',
      link: '/programs/maternal'
    },
    {
      id: 'obesity',
      title: 'Weight Management',
      description: 'Portion-smart, high satiety meal pathways supporting sustainable fat loss and metabolic balance.',
      image: 'https://www.heart.org/-/media/AHA/H4GM/Article-Images/Lose-Weight-and-Keep-It-Off.jpg?sc_lang=en',
      link: '/programs/obesity'
    },
    {
      id: 'sickle-cell',
      title: 'Sickle Cell Support',
      description: 'Iron and folate aware nutrition support to improve blood health, energy levels, and recovery resilience.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&h=300&q=80',
      link: '/programs/sickle-cell'
    }
  ];

  return (
    <div className="bg-white text-dwm-text-dark font-sans">
      <section className="relative w-full h-[64vh] md:h-[72vh] lg:h-[78vh] overflow-hidden" aria-label="DineWithMee hero video">
        <video
          className="w-full h-full object-cover animate-video-fade transition duration-300 hover:scale-[1.02] hover:opacity-95"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="DineWithMee platform introduction video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/35 to-black/55 pointer-events-none" />
      </section>

      <section className="px-6 md:px-16 py-12 md:py-16 border-b border-primary/10">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-dwm-gold-pale text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-5">
            DineWithMee Clinical Nutrition Platform
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-primary leading-tight max-w-3xl">
            Healing Through Heritage, Guided by Evidence
          </h1>
          <p className="text-dwm-text-mid text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            We combine modern clinical nutrition intelligence with trusted African foods to support prevention, recovery, and long-term wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-white font-semibold transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
            >
              Explore Clinical Programs
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center rounded-xl border border-primary/25 px-6 py-3 text-primary font-semibold transition duration-300 hover:border-primary/45 hover:shadow-premium-sm"
            >
              Browse Therapeutic Meals
            </Link>
            <Link
              to="/chef-partner"
              className="inline-flex items-center justify-center rounded-xl border border-primary/25 px-6 py-3 text-primary font-semibold transition duration-300 hover:border-primary/45 hover:shadow-premium-sm"
            >
              Become a Chef Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Focus Section */}
      <section className="px-6 md:px-16 py-12 md:py-16" id="clinical-focus">
        <div className="max-w-7xl mx-auto">
          <div className="text-left max-w-3xl mb-10">
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-4">
              Clinical Nutrition First
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold text-primary leading-tight">Our Clinical Focus</h2>
            <p className="text-dwm-text-mid mt-4 leading-relaxed">
              Every care path combines personalized nutrition intelligence with culturally relevant African meals and practical expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalFocusAreas.map((area) => (
              <article
                key={area.id}
                className="group rounded-2xl border border-primary/10 bg-white p-4 md:p-6 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-48 w-full object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="pt-5">
                  <h3 className="text-xl font-semibold text-primary mb-2">{area.title}</h3>
                  <p className="text-dwm-text-mid mb-5 leading-relaxed">{area.description}</p>
                  <Link
                    to={area.link}
                    className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition duration-300 group-hover:shadow-premium-sm hover:bg-[#b58226]"
                  >
                    Explore Program
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="px-6 md:px-16 py-12 md:py-16 bg-dwm-off-white/60" id="our-purpose">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide px-4 py-2 mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
              The Dine with Mee Mission
            </h2>
            <p className="text-dwm-text-mid mb-4 leading-relaxed">
              We exist to close the gap between clinical nutrition science and the foods African families already trust. Dine with Mee translates care plans into everyday meals, empowering households to prevent disease and heal with confidence.
            </p>
            <p className="text-dwm-text-mid mb-8 leading-relaxed">
              From chronic condition management to maternal nourishment, we build tools that feel local, evidence-backed, and deeply human.
            </p>
            <Link
              to="/health#nutrition-research"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-white font-semibold transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
            >
              Explore Our Evidence Model
            </Link>
          </div>
          <div>
            <img 
              src="/images/Cooking%20with%20confidence%20and%20style.png" 
              alt="Cooking with confidence and style"
              className="w-full rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.01]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Ready CTA Section */}
      <section className="px-6 md:px-16 py-12 md:py-16 bg-dwm-green-pale" id="ready-to-heal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            Ready to Heal?
          </h2>
          <p className="text-dwm-text-mid text-lg mb-8 leading-relaxed">
            Join Dine with Mee and discover how culturally relevant African foods can transform your health, prevent NCDs, and support your wellness journey.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3 text-white font-semibold transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
