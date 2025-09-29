"use client"

import { useState, useEffect } from 'react'
import { XMarkIcon, DevicePhoneMobileIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export function AppDownloadPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if user is on mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)
      setIsMobile(mobile)
      
      // Show prompt only on mobile devices
      if (mobile) {
        // Check if user has already dismissed the prompt
        const dismissed = localStorage.getItem('app-download-dismissed')
        if (!dismissed) {
          setTimeout(() => setShowPrompt(true), 3000) // Show after 3 seconds
        }
      }
    }

    checkMobile()
  }, [])

  const dismissPrompt = () => {
    setShowPrompt(false)
    localStorage.setItem('app-download-dismissed', 'true')
  }

  const handleDownload = (platform: 'android' | 'ios') => {
    // In a real app, these would be actual app store links
    const links = {
      android: 'https://play.google.com/store/apps/details?id=com.employnation.app',
      ios: 'https://apps.apple.com/app/employ-nation/id123456789'
    }
    
    // For demo purposes, we'll just show a toast
    const link = links[platform]
    window.open(link, '_blank')
  }

  if (!showPrompt || !isMobile) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center p-4">
        {/* Prompt Modal */}
        <div className="bg-white rounded-t-3xl w-full max-w-md transform transition-all duration-300 animate-slide-up">
          {/* Header */}
          <div className="relative p-6 pb-4">
            <button
              onClick={dismissPrompt}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get the Employ Nation App
              </h3>
              
              <p className="text-gray-600 mb-6">
                Access thousands of jobs, apply instantly, and get real-time notifications - all from your phone!
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="px-6 pb-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Apply to jobs with one tap</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Get instant job alerts</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Chat with recruiters on-the-go</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">Offline access to saved jobs</span>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="p-6 pt-4 space-y-3">
            <button
              onClick={() => handleDownload('android')}
              className="w-full bg-black text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors"
            >
              <div className="w-6 h-6">
                {/* Google Play Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>

            <button
              onClick={() => handleDownload('ios')}
              className="w-full bg-black text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors"
            >
              <div className="w-6 h-6">
                {/* App Store Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>

            <button
              onClick={dismissPrompt}
              className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
            >
              Continue in browser
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}