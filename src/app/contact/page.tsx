export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">We'd love to hear from you! Please reach out with any questions.</p>
      
      {/* We will make this form work later with a service like Formspree */}
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded"/>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded"/>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" rows={5} className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">
          Send Message
        </button>
      </form>
    </div>
  )
}