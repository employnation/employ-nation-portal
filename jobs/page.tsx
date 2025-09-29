'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon, CalendarIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline'
import { jobsData } from '@/data/jobsData'

// Helper function to format salary
function formatSalary(salary: string): string {
  // Remove currency symbols and clean the string
  return salary.replace(/₹/g, '').trim()
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('')
  const [salaryRange, setSalaryRange] = useState('')
  
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (job.skills && job.skills.some((skill: string) => skill.toLowerCase().includes(searchTerm.toLowerCase())))
    const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase())
    const matchesType = jobType === '' || job.type.toLowerCase().includes(jobType.toLowerCase())
    
    // Basic salary filtering (could be enhanced with proper parsing)
    let matchesSalary = true
    if (salaryRange && salaryRange !== '') {
      // Simple salary matching based on the salary string
      matchesSalary = true // For now, keep all jobs visible
    }
    
    return matchesSearch && matchesLocation && matchesType && matchesSalary
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-xl text-blue-100">Discover opportunities from top companies across North India</p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Job Types</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
            </select>
            
            <select
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Salaries</option>
              <option value="0-500000">Under ₹5L</option>
              <option value="500000-1000000">₹5L - ₹10L</option>
              <option value="1000000-2000000">₹10L - ₹20L</option>
              <option value="2000000+">Above ₹20L</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} Jobs Found
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
              <option>Most Recent</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
              <option>Company A-Z</option>
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    {job.category === 'Technology' && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <BriefcaseIcon className="w-4 h-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <CurrencyRupeeIcon className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-semibold">
                      {formatSalary(job.salary)} per year
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 5).map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 5 && (
                      <span className="text-gray-500 text-sm">+{job.skills.length - 5} more</span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 ml-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Save Job
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                <span>Posted 2 days ago</span>
                <div className="flex items-center space-x-4">
                  <span>Easy Apply</span>
                  <span>•</span>
                  <span>5 applicants</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            Load More Jobs
          </button>
        </div>
      </div>
    </div>
  )
}