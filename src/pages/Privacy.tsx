import { FC } from 'react'

const Privacy: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Notice</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Data Controller</h2>
          <p className="whitespace-pre-line">
            Name: Razvan Andrei Surdu
            Address: Osterbrook 11b, 20537 Hamburg, Germany
            Email: mathblast@surdu.de
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Personal Data We Collect</h2>
          <p>We collect minimal data to ensure the best possible experience:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Game progress and scores (stored locally on your device)</li>
            <li>Anonymous usage statistics to improve the game</li>
            <li>Device information (type, operating system) for compatibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Children's Privacy</h2>
          <p>MathBlast! is designed for children aged 8-10 years. We are committed to protecting children's privacy and comply with COPPA (Children's Online Privacy Protection Act). We:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Do not collect personal information from children</li>
            <li>Store game data locally on the device only</li>
            <li>Do not allow external communications</li>
            <li>Have no in-app purchases or advertisements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your data. Game progress and settings are stored locally on your device and are not transmitted to our servers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights Under GDPR</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Right to Access: Request information about your data</li>
            <li>Right to Rectification: Correct inaccurate data</li>
            <li>Right to Erasure: Request data deletion</li>
            <li>Right to Restrict Processing: Limit how we use your data</li>
            <li>Right to Object: Object to data processing</li>
          </ul>
          <p className="mt-4">To exercise these rights, contact us at mathblast@surdu.de</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Privacy Notice</h2>
          <p>We may update this privacy notice occasionally. Any changes will be posted on this website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact</h2>
          <p>For privacy-related questions, please contact us at mathblast@surdu.de</p>
        </section>
      </div>
    </div>
  )
}

export default Privacy
