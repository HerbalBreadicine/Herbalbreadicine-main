import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-8 text-gray-300">
            <p className="text-yellow-400 font-semibold mb-2">Last Updated: October 1, 2023</p>
            <p className="mb-4">
              Please read these Terms and Conditions carefully before using the Moooo Records website and services.
            </p>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
              <div className="text-gray-300 space-y-3">
                <p>By accessing or using our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">2. Use License</h2>
              <div className="text-gray-300 space-y-3">
                <p>Permission is granted to temporarily access the materials on Moooo Records' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">3. Streaming Services</h2>
              <div className="text-gray-300 space-y-3">
                <p>Our music streaming service allows you to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Listen to music from our catalog</li>
                  <li>Create and share playlists</li>
                  <li>Download music for offline listening (Premium subscribers only)</li>
                </ul>
                <p className="mt-3">You acknowledge that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Moooo Records does not transfer ownership of any content to you</li>
                  <li>You may not redistribute or sell the content</li>
                  <li>You may not use the service for commercial purposes</li>
                  <li>You may not circumvent any technology used to protect the content</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">4. User Accounts</h2>
              <div className="text-gray-300 space-y-3">
                <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password. Moooo Records cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">5. Disclaimer</h2>
              <div className="text-gray-300 space-y-3">
                <p>The materials on Moooo Records' website are provided on an 'as is' basis. Moooo Records makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">6. Limitations</h2>
              <div className="text-gray-300 space-y-3">
                <p>In no event shall Moooo Records or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Moooo Records' website, even if Moooo Records or a Moooo Records authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">7. Governing Law</h2>
              <div className="text-gray-300 space-y-3">
                <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">8. Contact Us</h2>
              <div className="text-gray-300 space-y-3">
                <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
                <p className="font-medium text-white">legal@moooorecords.com</p>
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

export default TermsAndConditions; 