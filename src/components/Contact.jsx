

import { useState } from "react"
import Button from "./Button"
import Input from "./Input"
import Textarea from "./Textarea"
import { MapPinIcon, MailIcon, PhoneIcon } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const icontext = [
    {
      icon: <MapPinIcon className="h-6 w-6 text-white" />,
      title: "Address",
      text: "Location KG 9 Ave, Kigali",
    },
    {
      icon: <MailIcon className="h-6 w-6 text-white" />,
      title: "Email",
      text: "businesscafe@info.com",
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-white" />,
      title: "Phone",
      text: "+250786183628",
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })


    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}


    if (!formData.name.trim()) {
      newErrors.name = "Name is required and must be filled"
    }


    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }


    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
     
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
    
  }

  const IconText = ({ icon, title, text }) => (
    <div className="flex items-center gap-6">
      <div className="relative">
  
        <div className="w-20 h-20 border-2 border-dashed border-teal-400 rounded-full absolute inset-0"></div>

        <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center relative z-10 mx-2 my-2">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
        <p className="text-gray-600 text-base">{text}</p>
      </div>
    </div>
  )

  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row justify-around py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-12"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-teal-500">Contact Us</p>
          <h3 className="font-bold text-3xl text-black">Say Hello</h3>
        </div>
        <div className="flex flex-col gap-8">
          {icontext.map((icon, index) => (
            <IconText key={index} icon={icon.icon} title={icon.title} text={icon.text} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-md w-full">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-teal-500">Have Question ?</p>
          <h3 className="font-bold text-3xl text-black">Send a Message</h3>
        </div>

        {submitSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">Your message has been sent successfully!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label={" how  will we  call you"}
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            // required
          />
          <Input
            name="email"
            label={" your email addres  throuth  wich  we can find you"}
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            // required
          />
          <Input
            name="subject"
            label={"subject "}
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            // required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            label={"send us the message  we would  like  to hear  from you"}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            // required
          />
          <Button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
