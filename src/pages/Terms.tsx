import { FC } from 'react'
import { Link } from 'react-router-dom'

const Terms: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">App Usage</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>The App is intended for educational purposes</li>
            <li>Designed for children aged 8-10 years</li>
            <li>Parent supervision is recommended</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy</h2>
          <p>Your privacy is important to us. Please review our <Link to="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p>For any questions about these terms, contact us at: mathblast@surdu.de</p>
        </section>
      </div>
    </div>
  )
}

export default Terms
