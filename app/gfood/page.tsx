// app/gfood/page.tsx
import Slider from '../components/Slider';
import Main from '../components/Main';
import Legend from '../components/Legend';
import TeamSlider from '../components/TeamSlider';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';

export default function GFoodHome() {
  return (
    <div className="min-h-screen">
      <Slider isGFood={true} /> {/* Pass a prop to differentiate the content */}
      <Main />
      <Legend />
      <TeamSlider />
      <Pricing />
      <ContactForm />
      <footer className="bg-white dark:bg-gray-900 shadow py-6 mt-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2023 Ваша компания
          </p>
        </div>
      </footer>
    </div>
  );
}
