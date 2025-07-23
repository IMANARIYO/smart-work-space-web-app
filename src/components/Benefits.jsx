import React from 'react'
import {
  Building2Icon,
  WifiIcon,
  ParkingCircleIcon,
  ClockIcon,
  MapPinIcon,
  TreesIcon,
} from 'lucide-react'

// Reusable card
const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="bg-teal-50 p-6 rounded-2xl text-center h-full">
    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
)

const Benefits = () => {
  const benefitsLeft = [
    { icon: Building2Icon,   title: 'Creative Space', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: WifiIcon,        title: 'High Speed Wifi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: ParkingCircleIcon,title: 'Parking Area',     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]
  const benefitsRight = [
    { icon: ClockIcon,       title: '24/7 Access',      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: MapPinIcon,      title: 'Great Location',   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: TreesIcon,       title: 'Outdoor Space',    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="text-center space-y-4 mb-16">
        <p className="text-teal-600 font-medium text-lg">Your Benefits</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning team today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 items-strech lg:grid-cols-3">

        <div className="flex flex-col gap-8 order-2 lg:order-1">
          {benefitsLeft.map((b, i) => (
            <BenefitCard key={i} icon={b.icon} title={b.title} description={b.description} />
          ))}
        </div>

        <div className="hidden lg:block order-1 lg:order-2">
          <div className=" rounded-2xl overflow-hidden shadow-2xl h-full">
            <img
              src="https://icowork-static-prd.s3.amazonaws.com/media/spaces/89/_MG_1688_1.jpg"
              alt="Modern office interior"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>


  
        <div className="flex flex-col gap-8 order-3 lg:order-3">
          {benefitsRight.map((b, i) => (
            <BenefitCard key={i} icon={b.icon} title={b.title} description={b.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
