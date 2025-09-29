'use client'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name, email address, phone number</li>
                <li>Professional experience and education</li>
                <li>Resume and portfolio documents</li>
                <li>LinkedIn and social media profile data (when connected)</li>
                <li>Location and job preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Information:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Job searches and application history</li>
                <li>Platform interaction data</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Match you with relevant job opportunities</li>
                <li>Facilitate communication with employers</li>
                <li>Improve our AI-powered job matching algorithms</li>
                <li>Send job alerts and platform notifications</li>
                <li>Provide customer support</li>
                <li>Analyze platform usage to improve our services</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>With Employers:</strong> When you apply for jobs or make your profile visible</li>
                <li><strong>Service Providers:</strong> Third-party services that help us operate the platform</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers and cloud infrastructure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and download your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Control your profile visibility</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For privacy-related questions or requests, contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>📧 Email:</strong> info@employnation.in<br/>
                  <strong>📞 Phone:</strong> +91-8437016711 & +91-9876873027<br/>
                  <strong>📍 Office Address:</strong> SCF 81, First Floor, Phase 6,<br/>
                  Near New Bus Stand, Mohali, Punjab - 160055, India
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}