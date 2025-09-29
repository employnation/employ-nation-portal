import { UserIcon, MagnifyingGlassIcon, PaperAirplaneIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      description: 'Build a comprehensive profile with our AI-powered resume builder and showcase your skills.',
      icon: UserIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Discover Opportunities',
      description: 'Browse thousands of jobs or let our smart algorithm match you with perfect opportunities.',
      icon: MagnifyingGlassIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Apply with Confidence',
      description: 'Submit applications with one click and track your progress with real-time updates.',
      icon: PaperAirplaneIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Land Your Dream Job',
      description: 'Connect with employers, ace interviews, and start your new career journey.',
      icon: ChartBarIcon,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and find your perfect job match with our streamlined process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Step Label */}
                <div className="text-sm font-semibold text-gray-400 mb-2">STEP {step.step}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}