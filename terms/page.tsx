'use client'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Employ Nation ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Employ Nation is an online job portal that connects job seekers with employers across North India. We provide a platform for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Job seekers to create profiles and apply for positions</li>
                <li>Employers to post job openings and search for candidates</li>
                <li>Communication tools between job seekers and employers</li>
                <li>Career development resources and tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Job Seekers:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and truthful information in your profile</li>
                <li>Keep your contact information up to date</li>
                <li>Do not create multiple accounts</li>
                <li>Respect employer time and respond professionally</li>
                <li>Do not misrepresent your qualifications or experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">For Employers:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Post only legitimate job opportunities</li>
                <li>Provide accurate job descriptions and requirements</li>
                <li>Treat all candidates with respect and fairness</li>
                <li>Comply with all applicable employment laws</li>
                <li>Do not discriminate based on race, gender, religion, or other protected characteristics</li>
                <li>Respond to applications in a timely manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment and Subscription Terms</h2>
              <p className="text-gray-700 mb-4">
                Employ Nation offers both free and paid subscription plans:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Seeker Plans:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Basic (₹500/month):</strong> Limited job applications with basic features</li>
                <li><strong>Professional (₹1,000/month):</strong> Enhanced features and priority listing</li>
                <li><strong>Premium (₹2,000/month):</strong> Unlimited access with premium support</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Employer Plans:</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Starter (₹500/month):</strong> Basic job posting capabilities</li>
                <li><strong>Growth (₹1,000/month):</strong> Enhanced recruitment tools</li>
                <li><strong>Enterprise (₹2,000/month):</strong> Full-featured recruitment suite</li>
              </ul>

              <p className="text-gray-700 mb-4">
                All subscription fees are billed monthly in advance. You may cancel your subscription at any time, but no refunds will be provided for unused portions of the subscription period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                We take your privacy seriously. Your personal information is protected according to our Privacy Policy. By using our service, you consent to the collection and use of your information as outlined in our Privacy Policy.
              </p>
              <p className="text-gray-700 mb-4">
                We may use your data to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and improve our services</li>
                <li>Match job seekers with relevant opportunities</li>
                <li>Communicate important updates</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">Users are prohibited from:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Posting false, misleading, or fraudulent information</li>
                <li>Harassing or discriminating against other users</li>
                <li>Attempting to circumvent security measures</li>
                <li>Using automated tools to scrape or collect data</li>
                <li>Posting content that violates intellectual property rights</li>
                <li>Engaging in spam or unsolicited communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Employ Nation is a platform that facilitates connections between job seekers and employers. We do not guarantee employment or hiring outcomes. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>The accuracy of job postings or user profiles</li>
                <li>Employment decisions made by employers</li>
                <li>Disputes between users</li>
                <li>Loss of data or service interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend accounts that violate these terms. Users may also delete their accounts at any time. Upon termination, access to paid features will cease, but no refunds will be provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of India. Any disputes will be resolved in the courts of New Delhi, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms and Conditions, please contact us at:
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

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                By continuing to use Employ Nation, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
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

      {/* Progressive Build Solutions Credit */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          Legal framework designed by{' '}
          <a 
            href="https://www.britpunjabi.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Progressive Build Solutions
          </a>
        </p>
      </div>
    </div>
  );
}