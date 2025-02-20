import { FC } from 'react'

const Privacy: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
          <p>MathBlast! is designed with children's privacy in mind. We do not collect any personal information from users, especially those under 13 years of age.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">COPPA Compliance</h2>
          <p>We are compliant with the Children's Online Privacy Protection Act (COPPA). Our app:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Does not collect personal information</li>
            <li>Does not track user behavior</li>
            <li>Does not contain external links</li>
            <li>Has no in-app purchases</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p>For privacy concerns, contact us at: mathblast@surdu.de</p>
        </section>
      </div>
    </div>
  )
}

export default Privacy
