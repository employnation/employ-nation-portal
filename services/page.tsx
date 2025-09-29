'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircleIcon, StarIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon, TruckIcon, BriefcaseIcon, HomeIcon, WrenchIcon, ShieldExclamationIcon, ArchiveBoxIcon, AcademicCapIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('professionals')

  const services = {
    professionals: {
      title: 'Professional Services',
      icon: AcademicCapIcon,
      description: 'Connect with skilled professionals across various industries',
      categories: [
        {
          name: 'IT Professionals',
          roles: ['Software Developers', 'Data Scientists', 'UI/UX Designers', 'DevOps Engineers', 'System Administrators', 'Project Managers'],
          experience: '1-15+ years',
          salary: '₹3,00,000 - ₹50,00,000/year'
        },
        {
          name: 'Business Professionals',
          roles: ['Business Analysts', 'Marketing Managers', 'Sales Executives', 'HR Specialists', 'Finance Professionals', 'Operations Managers'],
          experience: '2-20+ years',
          salary: '₹2,50,000 - ₹40,00,000/year'
        },
        {
          name: 'Healthcare Professionals',
          roles: ['Doctors', 'Nurses', 'Pharmacists', 'Lab Technicians', 'Physical Therapists', 'Medical Representatives'],
          experience: '1-25+ years',
          salary: '₹3,50,000 - ₹75,00,000/year'
        }
      ]
    },
    housekeepers: {
      title: 'Housekeeping Services',
      icon: HomeIcon,
      description: 'Reliable and trusted housekeeping professionals for your home and office',
      categories: [
        {
          name: 'Domestic Housekeepers',
          roles: ['Full-time Maids', 'Part-time Cleaners', 'Live-in Housekeepers', 'Babysitters', 'Elder Care', 'Cook-cum-Maid'],
          experience: '6 months - 10 years',
          salary: '₹8,000 - ₹25,000/month'
        },
        {
          name: 'Commercial Cleaning',
          roles: ['Office Cleaners', 'Hospital Cleaning Staff', 'Hotel Housekeeping', 'Mall Cleaners', 'Factory Cleaners', 'Event Cleaners'],
          experience: '1-8 years',
          salary: '₹12,000 - ₹30,000/month'
        },
        {
          name: 'Specialized Services',
          roles: ['Deep Cleaning Specialists', 'Carpet Cleaners', 'Window Cleaners', 'Post-construction Cleaners', 'Sanitization Experts'],
          experience: '1-5 years',
          salary: '₹15,000 - ₹35,000/month'
        }
      ]
    },
    laborers: {
      title: 'Labor Services',
      icon: BriefcaseIcon,
      description: 'Skilled and unskilled laborers for construction, manufacturing, and general work',
      categories: [
        {
          name: 'Construction Workers',
          roles: ['Masons', 'Carpenters', 'Electricians', 'Plumbers', 'Painters', 'Helpers', 'Site Supervisors'],
          experience: '6 months - 15 years',
          salary: '₹250 - ₹800/day'
        },
        {
          name: 'Manufacturing Workers',
          roles: ['Machine Operators', 'Assembly Line Workers', 'Quality Control', 'Packaging Staff', 'Warehouse Workers', 'Forklift Operators'],
          experience: '0-10 years',
          salary: '₹10,000 - ₹28,000/month'
        },
        {
          name: 'General Laborers',
          roles: ['Loading/Unloading', 'Gardeners', 'Farm Workers', 'Event Setup', 'Delivery Boys', 'Helper Staff'],
          experience: '0-8 years',
          salary: '₹200 - ₹600/day'
        }
      ]
    },
    technicians: {
      title: 'Technical Services',
      icon: WrenchIcon,
      description: 'Skilled technicians and specialists for various technical roles',
      categories: [
        {
          name: 'Engineering Technicians',
          roles: ['Mechanical Technicians', 'Electrical Technicians', 'Electronics Technicians', 'HVAC Technicians', 'Automotive Technicians'],
          experience: '1-12 years',
          salary: '₹18,000 - ₹45,000/month'
        },
        {
          name: 'IT Support Technicians',
          roles: ['Computer Repair', 'Network Technicians', 'Hardware Support', 'Software Support', 'Mobile Repair', 'CCTV Technicians'],
          experience: '6 months - 8 years',
          salary: '₹15,000 - ₹35,000/month'
        },
        {
          name: 'Specialized Technicians',
          roles: ['Medical Equipment Technicians', 'Laboratory Technicians', 'Telecom Technicians', 'Solar Panel Technicians', 'Appliance Repair'],
          experience: '1-10 years',
          salary: '₹20,000 - ₹50,000/month'
        }
      ]
    },
    security: {
      title: 'Security Services',
      icon: ShieldExclamationIcon,
      description: 'Professional security personnel for residential, commercial, and event security',
      categories: [
        {
          name: 'Commercial Security',
          roles: ['Office Security Guards', 'Mall Security', 'Bank Security', 'Hospital Security', 'Hotel Security', 'Industrial Security'],
          experience: '1-15 years',
          salary: '₹12,000 - ₹35,000/month'
        },
        {
          name: 'Residential Security',
          roles: ['Society Guards', 'Building Security', 'Personal Security', 'Gated Community Security', 'Apartment Security'],
          experience: '6 months - 10 years',
          salary: '₹10,000 - ₹25,000/month'
        },
        {
          name: 'Specialized Security',
          roles: ['Event Security', 'VIP Protection', 'Armed Guards', 'Bouncers', 'Cash Transit Security', 'Cyber Security Personnel'],
          experience: '2-20 years',
          salary: '₹18,000 - ₹60,000/month'
        }
      ]
    },
    movers: {
      title: 'Movers & Packers',
      icon: ArchiveBoxIcon,
      description: 'Professional moving and packing services for homes and offices',
      categories: [
        {
          name: 'Packing Specialists',
          roles: ['Professional Packers', 'Fragile Item Specialists', 'Electronics Packing', 'Artwork Packers', 'Document Organizers'],
          experience: '1-8 years',
          salary: '₹15,000 - ₹30,000/month'
        },
        {
          name: 'Moving Crew',
          roles: ['Loading Supervisors', 'Moving Helpers', 'Truck Drivers', 'Heavy Lifting Specialists', 'Furniture Movers'],
          experience: '6 months - 12 years',
          salary: '₹12,000 - ₹35,000/month'
        },
        {
          name: 'Logistics Coordinators',
          roles: ['Move Coordinators', 'Inventory Managers', 'Transportation Planners', 'Customer Service Reps', 'Quality Inspectors'],
          experience: '2-15 years',
          salary: '₹20,000 - ₹45,000/month'
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Connect with the right talent for your business needs. From professionals to specialized workers, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Service Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeService === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="w-6 h-6 text-current">
                  {key === 'professionals' && <AcademicCapIcon className="w-full h-full" />}
                  {key === 'housekeepers' && <HomeIcon className="w-full h-full" />}
                  {key === 'laborers' && <BriefcaseIcon className="w-full h-full" />}
                  {key === 'technicians' && <WrenchIcon className="w-full h-full" />}
                  {key === 'security' && <ShieldExclamationIcon className="w-full h-full" />}
                  {key === 'movers' && <ArchiveBoxIcon className="w-full h-full" />}
                </div>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
            {activeService === 'professionals' && <AcademicCapIcon className="w-full h-full" />}
            {activeService === 'housekeepers' && <HomeIcon className="w-full h-full" />}
            {activeService === 'laborers' && <BriefcaseIcon className="w-full h-full" />}
            {activeService === 'technicians' && <WrenchIcon className="w-full h-full" />}
            {activeService === 'security' && <ShieldExclamationIcon className="w-full h-full" />}
            {activeService === 'movers' && <ArchiveBoxIcon className="w-full h-full" />}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {services[activeService as keyof typeof services].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {services[activeService as keyof typeof services].description}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services[activeService as keyof typeof services].categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Available Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.roles.map((role, roleIndex) => (
                      <span key={roleIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{category.experience}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-1 mb-1">
                    <CurrencyRupeeIcon className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-medium">Salary Range:</span>
                  </div>
                  <p className="text-green-700 font-semibold">{category.salary}</p>
                </div>
              </div>
              
              <Link 
                href="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Find {category.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Employ Nation for Your Hiring Needs?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Verified Candidates</h4>
              <p className="text-gray-600 text-sm">All candidates are background verified and skill-tested</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Hiring</h4>
              <p className="text-gray-600 text-sm">Find and hire qualified candidates within 24-48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">30-day replacement guarantee for all placements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">Dedicated account managers for personalized service</p>
            </div>
          </div>
        </div>

        {/* Pricing for Employers */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Hiring?</h3>
          <p className="text-indigo-100 mb-6">
            Choose from our flexible pricing plans designed for businesses of all sizes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing Plans
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}