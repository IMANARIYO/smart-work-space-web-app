import React from 'react'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
  }

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Contact Us</h2>
          <p className="text-xl text-primary font-semibold">Say Hello</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">Location KG 9 Ave, Kigali</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">businesscafe@info.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+250788183828</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Business Cafe</h4>
              <p className="text-muted-foreground mb-4">
                Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground">
                  f
                </div>
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground">
                  in
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <h3 className="text-xl font-semibold text-foreground mb-6">Have Question? Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />

              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                required
              />

              <Textarea
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                required
              />

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact