import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, useFormikContext } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, selectAuth } from '../redux';
import { useToast } from '../hooks/useToast';
import FormField from '../components/common/FormField';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { signupSchema } from '../schemas/authSchemas';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error } = useToast();
  const { isLoading } = useSelector(selectAuth);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await dispatch(registerUser(values));
      if (result.meta.requestStatus === 'fulfilled') {
        success('Registration successful! Please check your email to verify your account.');
        navigate('/login');
      } else if (result.meta.requestStatus === 'rejected') {
        error(result.payload || 'Registration failed. Please try again.');
      }
    } catch (err) {
      error('An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const steps = [
    {
      number: 1,
      title: 'Personal Information',
      description: 'Tell us about yourself'
    },
    {
      number: 2,
      title: 'Contact Details',
      description: 'How can we reach you?'
    },
    {
      number: 3,
      title: 'Security',
      description: 'Create a secure password'
    },
    {
      number: 4,
      title: 'Agreement',
      description: 'Review and accept terms'
    }
  ];

  const StepForm = () => {
    const { values, isSubmitting } = useFormikContext();

    return (
      <Form className="max-w-md mx-auto w-full" noValidate>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <FormField
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              required
            />
            <FormField
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              required
            />
          </div>
        )}

        {/* Step 2: Contact Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <FormField
              name="email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              required
            />
          </div>
        )}

        {/* Step 3: Security */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <FormField
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                placeholder="Create a strong password"
                required
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

            <div>
              <FormField
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                label="Confirm Password"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                className="text-sm text-dwm-text-mid hover:text-primary transition duration-300"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Agreement */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <FormField
              name="agreeToTerms"
              type="checkbox"
              label={
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="text-accent hover:text-[#b58226] underline transition duration-300">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-accent hover:text-[#b58226] underline transition duration-300">
                    Privacy Policy
                  </Link>
                </span>
              }
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="rounded-xl border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 hover:border-primary/45 hover:shadow-premium-sm"
          >
            Previous
          </button>

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={
                (currentStep === 1 && (!values.firstName || !values.lastName)) ||
                (currentStep === 2 && !values.email) ||
                (currentStep === 3 && (!values.password || !values.confirmPassword || values.password !== values.confirmPassword))
              }
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting || isLoading || !values.agreeToTerms}
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
            >
              {(isSubmitting || isLoading) ? (
                <>
                  <LoadingSpinner size="sm" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          )}
        </div>
      </Form>
    );
  };

  return (
    <div className="min-h-screen bg-dwm-off-white">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Visual */}
        <section className="flex-1 bg-primary text-white px-6 md:px-16 py-12 md:py-16 flex flex-col justify-center">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-white text-primary flex items-center justify-center font-bold text-lg">D</div>
              <span className="text-lg font-semibold tracking-tight">Dine with <span className="text-accent">Mee</span></span>
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-semibold font-serif mb-6 leading-tight max-w-2xl">
              Join Our Health Community
            </h1>
            <p className="text-base md:text-xl mb-8 text-white/90 max-w-2xl leading-relaxed">
              Start your journey to better health with personalized nutrition plans and therapeutic African meals.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 p-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <strong className="block text-accent mb-1">Personalized Health Plans</strong>
                  <span className="text-white/80">Get nutrition recommendations tailored to your health goals</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 p-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <strong className="block text-accent mb-1">Therapeutic Meals</strong>
                  <span className="text-white/80">Access clinically-designed African meal plans</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 p-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <strong className="block text-accent mb-1">Expert Support</strong>
                  <span className="text-white/80">Connect with nutritionists and health professionals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel - Form */}
        <section className="flex-1 bg-white px-6 md:px-16 py-12 md:py-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full mb-8">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8 overflow-x-auto gap-1">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    currentStep >= step.number 
                      ? 'bg-accent text-primary' 
                      : 'bg-dwm-green-pale text-dwm-text-mid'
                  }`}>
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  {step.number < steps.length && (
                    <div className={`w-8 md:w-16 h-1 mx-1 md:mx-2 transition-colors ${
                      currentStep > step.number ? 'bg-accent' : 'bg-dwm-green-pale'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 inline-block">
              Step {currentStep} of {steps.length}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold font-serif text-primary mb-4 leading-tight">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-dwm-text-mid leading-relaxed">
              {steps[currentStep - 1].description}
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            <StepForm />
          </Formik>

          <div className="text-center my-8">
            <span className="text-dwm-text-mid">Already have an account?</span>
          </div>
          <div className="text-center">
            <Link 
              to="/login" 
              className="text-accent hover:text-[#b58226] font-medium transition duration-300"
            >
              Sign in to your account
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
