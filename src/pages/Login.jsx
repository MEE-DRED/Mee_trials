import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, selectAuth } from '../redux';
import { useToast } from '../hooks/useToast';
import FormField from '../components/common/FormField';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { loginSchema } from '../schemas/authSchemas';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error } = useToast();
  const { isLoading } = useSelector(selectAuth);

  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await dispatch(loginUser(values));
      if (result.meta.requestStatus === 'fulfilled') {
        success('Login successful! Welcome back.');
        navigate(values.email.includes('admin') ? '/admin-dashboard' : '/dashboard');
      } else if (result.meta.requestStatus === 'rejected') {
        error(result.payload || 'Login failed. Please try again.');
      }
    } catch (err) {
      error('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-dwm-off-white">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Visual */}
        <section className="flex-1 bg-primary text-white px-6 md:px-16 py-12 md:py-16 flex flex-col justify-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Role-aware access
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold font-serif mb-6 leading-tight max-w-2xl">
            One sign in, two smart workspaces.
          </h1>
          <p className="text-base md:text-xl mb-12 text-white/90 max-w-2xl leading-relaxed">
            Customers land in a calm wellness dashboard. Admins land in an operations view built for member growth, order flow, and platform visibility.
          </p>

          <div className="space-y-6">
            <article className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <div>
                <strong className="block text-accent mb-1">Customer dashboard</strong>
                <span className="text-white/80">Track meals, health filters, and recent orders in one place.</span>
              </div>
            </article>

            <article className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <div>
                <strong className="block text-accent mb-1">Admin dashboard</strong>
                <span className="text-white/80">Monitor users, order status mix, and platform activity at a glance.</span>
              </div>
            </article>

            <article className="flex items-start gap-4 rounded-2xl border border-white/20 bg-white/5 p-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <div>
                <strong className="block text-accent mb-1">Nutrition-first design</strong>
                <span className="text-white/80">Every view keeps health context, African meals, and operational clarity close together.</span>
              </div>
            </article>
          </div>
        </section>

        {/* Right Panel - Form */}
        <section className="flex-1 bg-white px-6 md:px-16 py-12 md:py-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 inline-block">
              Welcome back
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-primary mb-4 leading-tight">
              Sign in to your dashboard
            </h2>
            <p className="text-dwm-text-mid mb-8 leading-relaxed">
              Use your email and password to continue where you left off.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="max-w-md mx-auto w-full" noValidate>
                <FormField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  required
                  className="mb-6"
                />

                <div className="mb-6">
                  <FormField
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    placeholder="Enter your password"
                    required
                    className="mb-2"
                  />
                  <button
                    type="button"
                    className="text-sm text-dwm-text-mid hover:text-primary transition duration-300"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
                >
                  {(isSubmitting || isLoading) ? (
                    <>
                      <LoadingSpinner size="sm" />
                      Signing In...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </Form>
            )}
          </Formik>

          <div className="text-center my-8">
            <span className="text-dwm-text-mid">Need an account?</span>
          </div>
          <div className="text-center">
            <Link 
              to="/signup" 
              className="text-accent hover:text-[#b58226] font-medium transition duration-300"
            >
              Create your Dine with Mee account
            </Link>
          </div>

          <div className="mt-8 p-4 bg-dwm-green-pale rounded-xl max-w-md mx-auto w-full">
            <p className="text-sm text-dwm-text-mid text-center">
              <strong>Demo Accounts:</strong><br />
              Customer: customer@example.com<br />
              Admin: admin@example.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
