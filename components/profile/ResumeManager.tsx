"use client"

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { 
  CloudArrowUpIcon, 
  DocumentIcon, 
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  LinkIcon
} from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

interface ResumeFile {
  id: string
  name: string
  size: number
  type: string
  uploadDate: Date
  url?: string
}

export function ResumeManager() {
  const [resumes, setResumes] = useState<ResumeFile[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [linkedInImporting, setLinkedInImporting] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsUploading(true)
    
    for (const file of acceptedFiles) {
      // Validate file type
      if (!file.type.includes('pdf') && !file.type.includes('doc')) {
        toast.error(`${file.name}: Only PDF and DOC files are allowed`)
        continue
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name}: File size must be less than 5MB`)
        continue
      }

      // Simulate upload
      try {
        // In real implementation, upload to cloud storage
        const newResume: ResumeFile = {
          id: Date.now().toString() + Math.random(),
          name: file.name,
          size: file.size,
          type: file.type,
          uploadDate: new Date(),
          url: URL.createObjectURL(file) // Temporary URL for demo
        }
        
        setResumes(prev => [...prev, newResume])
        toast.success(`${file.name} uploaded successfully!`)
      } catch (error) {
        toast.error(`Failed to upload ${file.name}`)
      }
    }
    
    setIsUploading(false)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: true
  })

  const deleteResume = (id: string) => {
    setResumes(prev => prev.filter(resume => resume.id !== id))
    toast.success('Resume deleted successfully')
  }

  const importFromLinkedIn = async () => {
    setLinkedInImporting(true)
    
    // Simulate LinkedIn import
    setTimeout(() => {
      const linkedInResume: ResumeFile = {
        id: Date.now().toString(),
        name: 'LinkedIn_Profile_Resume.pdf',
        size: 1024 * 300, // 300KB
        type: 'application/pdf',
        uploadDate: new Date(),
        url: '/api/resumes/linkedin-import' // Mock URL
      }
      
      setResumes(prev => [...prev, linkedInResume])
      setLinkedInImporting(false)
      toast.success('LinkedIn profile imported successfully!')
    }, 2000)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Resume</h3>
        
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <CloudArrowUpIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          
          {isDragActive ? (
            <p className="text-blue-600 font-medium">Drop your resume files here...</p>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-900">Click to upload</span> or drag and drop
              </p>
              <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB each)</p>
            </div>
          )}
          
          {isUploading && (
            <div className="mt-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-sm text-gray-500 mt-2">Uploading...</p>
            </div>
          )}
        </div>
      </div>

      {/* Social Import Options */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Import from Social Platforms</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={importFromLinkedIn}
            disabled={linkedInImporting}
            className="flex items-center justify-center space-x-3 p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <LinkIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Import from LinkedIn</p>
              <p className="text-sm text-gray-500">Auto-generate resume from profile</p>
            </div>
            {linkedInImporting && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            )}
          </button>

          <button
            className="flex items-center justify-center space-x-3 p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            onClick={() => toast.info('Coming soon!')}
          >
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <LinkIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Import from Indeed</p>
              <p className="text-sm text-gray-500">Use your Indeed profile</p>
            </div>
          </button>
        </div>
      </div>

      {/* Resume List */}
      {resumes.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Resumes</h3>
          
          <div className="space-y-3">
            {resumes.map((resume) => (
              <div key={resume.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <DocumentIcon className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{resume.name}</p>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(resume.size)} • Uploaded {resume.uploadDate.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Preview"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                    title="Download"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deleteResume(resume.id)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Resume Builder */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">AI Resume Builder</h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          Create a professional resume with our AI-powered builder. Get suggestions for content, formatting, and optimization for ATS systems.
        </p>
        
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
          Build Resume with AI
        </button>
      </div>
    </div>
  )
}