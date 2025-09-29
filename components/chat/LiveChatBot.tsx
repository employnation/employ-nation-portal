"use client"

import { useState, useRef, useEffect } from 'react'
import { 
  ChatBubbleLeftRightIcon, 
  XMarkIcon, 
  PaperAirplaneIcon,
  UserIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export function LiveChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Employ Nation assistant. How can I help you find your dream job today?',
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const botResponses = {
    greeting: [
      "Hello! Welcome to Employ Nation. How can I assist you today?",
      "Hi there! I'm here to help you with your job search. What would you like to know?",
      "Welcome! I can help you find jobs, create your profile, or answer any questions about our platform."
    ],
    jobs: [
      "Great! We have thousands of jobs across North India. Are you looking for a specific role or location?",
      "I can help you find the perfect job. What's your field of expertise?",
      "Let me help you discover amazing opportunities. What type of position interests you?"
    ],
    salary: [
      "Salary ranges vary by role and experience. Our North India jobs typically range from ₹3L to ₹30L+ annually.",
      "We have positions across all salary ranges. Premium members get access to salary insights and negotiation tips.",
      "Salaries depend on your skills and experience. Would you like me to show you jobs in your salary range?"
    ],
    resume: [
      "I can help you with resume tips! Our AI resume builder can import from LinkedIn and optimize for ATS systems.",
      "A great resume is key to landing interviews. Our Premium plan includes AI-powered resume suggestions.",
      "Resume building made easy! You can upload, create, or import from social platforms like LinkedIn."
    ],
    pricing: [
      "We have affordable plans starting at ₹500/month for job seekers and employers.",
      "Our Basic plan (₹500), Professional (₹1000), and Premium (₹2000) plans offer great value. Which interests you?",
      "Pricing is designed for the Indian market. Would you like to see our detailed pricing comparison?"
    ],
    location: [
      "We focus on North India including Delhi, Gurgaon, Noida, Chandigarh, Lucknow, and more!",
      "Our platform covers major North Indian cities with the best job opportunities.",
      "Location-wise job search is available. Which city are you interested in?"
    ],
    support: [
      "I'm here to help! You can also reach our support team at info@employnation.in",
      "For technical issues, call us at +91-8437016711 or +91-9876873027",
      "Our support team is available Mon-Fri 9AM-6PM, Sat 10AM-2PM. Visit our office in Mohali!"
    ],
    default: [
      "That's a great question! Let me help you with that. Can you provide more details?",
      "I understand you're looking for information. Could you be more specific about what you need?",
      "I'm here to help! Try asking about jobs, salaries, resume tips, or our pricing plans."
    ]
  }

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
    }
    if (message.includes('job') || message.includes('work') || message.includes('career')) {
      return botResponses.jobs[Math.floor(Math.random() * botResponses.jobs.length)]
    }
    if (message.includes('salary') || message.includes('pay') || message.includes('money') || message.includes('₹')) {
      return botResponses.salary[Math.floor(Math.random() * botResponses.salary.length)]
    }
    if (message.includes('resume') || message.includes('cv') || message.includes('profile')) {
      return botResponses.resume[Math.floor(Math.random() * botResponses.resume.length)]
    }
    if (message.includes('price') || message.includes('cost') || message.includes('plan') || message.includes('subscription')) {
      return botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)]
    }
    if (message.includes('location') || message.includes('delhi') || message.includes('gurgaon') || message.includes('noida')) {
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)]
    }
    if (message.includes('help') || message.includes('support') || message.includes('contact')) {
      return botResponses.support[Math.floor(Math.random() * botResponses.support.length)]
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(newMessage),
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <ComputerDesktopIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Employ Nation Assistant</h3>
                <p className="text-xs text-blue-100">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-end space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.isBot ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    {message.isBot ? (
                      <ComputerDesktopIcon className="w-4 h-4 text-blue-600" />
                    ) : (
                      <UserIcon className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <ComputerDesktopIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim() || isTyping}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}