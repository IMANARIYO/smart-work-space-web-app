
import { LayoutGridIcon } from "lucide-react"
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci"

const Footer = () => {
  return (
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-12 pb-8 border-b border-gray-200">
            {/* Business Cafe Info */}
            <div className="space-y-6">
              <div className="flex gap-2 items-center">
                <LayoutGridIcon className="h-8 w-8 text-teal-500" />
                <span className="text-xl font-bold">
                  Business <span className="text-teal-500">Cafe</span>
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center hover:bg-teal-50 cursor-pointer transition-colors">
                  <CiFacebook className="h-5 w-5 text-teal-500" />
                </div>
                <div className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center hover:bg-teal-50 cursor-pointer transition-colors">
                  <CiTwitter className="h-5 w-5 text-teal-500" />
                </div>
                <div className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center hover:bg-teal-50 cursor-pointer transition-colors">
                  <CiLinkedin className="h-5 w-5 text-teal-500" />
                </div>
                <div className="w-10 h-10 border-2 border-teal-500 rounded-full flex items-center justify-center hover:bg-teal-50 cursor-pointer transition-colors">
                  <CiInstagram className="h-5 w-5 text-teal-500" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 pb-2 border-b-2 border-gray-200">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#space" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Space
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 pb-2 border-b-2 border-gray-200">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900">Location: </span>
                  <span className="text-gray-600">Kigali, </span>
                  <span className="text-teal-600">Rwanda</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Email: </span>
                  <span className="text-gray-600">businesscafe@info.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Phone: </span>
                  <span className="text-gray-600">+250783787817</span>
                </div>
                <div>
                  <a href="#" className="text-teal-600 underline hover:text-teal-700 transition-colors">
                    View Location on GoogleMap
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-center">
            <p className="text-gray-600">Copyright © 2023 Business Coffee All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
