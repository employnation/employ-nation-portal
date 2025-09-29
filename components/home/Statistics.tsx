import { BriefcaseIcon, BuildingOfficeIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline'

export function Statistics() {
  const stats = [
    { label: 'Active Jobs', value: '50,000+', icon: BriefcaseIcon },
    { label: 'Companies', value: '5,000+', icon: BuildingOfficeIcon },
    { label: 'Job Seekers', value: '1M+', icon: UserGroupIcon },
    { label: 'Success Stories', value: '100k+', icon: StarIcon },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Millions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the largest job platform connecting talent with opportunity across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 mx-auto mb-3 text-blue-600">
                <stat.icon className="w-full h-full" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}