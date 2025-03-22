import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-8 text-gray-300">
            <p className="text-yellow-400 font-semibold mb-2">Last Updated: October 1, 2023</p>
            <p className="mb-4">
              Welcome to Moooo Records. We are committed to protecting your privacy and providing you with a secure experience.
            </p>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-3">
                <p>We collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal information such as name, email address, and payment information when you create an account or make a purchase.</li>
                  <li>Usage data such as your IP address, browser type, pages visited, and time spent on our website.</li>
                  <li>Device information including device type, operating system, and mobile network information.</li>
                  <li>Music preferences, playlist data, and listening history when you use our music service.</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our music service.</li>
                  <li>Improve, personalize, and expand our website and services.</li>
                  <li>Understand and analyze how you use our website and services.</li>
                  <li>Develop new products, services, features, and functionality.</li>
                  <li>Communicate with you about promotions, upcoming events, and other news about our services.</li>
                  <li>Process transactions and send related information including confirmations and invoices.</li>
                  <li>Detect, prevent, and address technical issues or fraudulent activities.</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Cookies and Tracking Technologies</h2>
              <div className="text-gray-300 space-y-3">
                <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website or services.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. Data Sharing and Disclosure</h2>
              <div className="text-gray-300 space-y-3">
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who perform services for us.</li>
                  <li>To comply with legal obligations.</li>
                  <li>To protect and defend our rights and property.</li>
                  <li>With your consent or at your direction.</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Your Data Protection Rights</h2>
              <div className="text-gray-300 space-y-3">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access the personal information we hold about you.</li>
                  <li>The right to request correction of inaccurate personal information.</li>
                  <li>The right to request deletion of your personal information.</li>
                  <li>The right to restrict processing of your personal information.</li>
                  <li>The right to data portability.</li>
                  <li>The right to object to processing of your personal information.</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Contact Us</h2>
              <div className="text-gray-300 space-y-3">
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="font-medium text-white">privacy@moooorecords.com</p>
                <p>Moooo Records<br />123 Western Way<br />Nashville, TN 37203<br />United States</p>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 