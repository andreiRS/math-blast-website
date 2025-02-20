import { FC } from 'react'
import { Link } from 'react-router-dom'

const Terms: FC = () => {
  return (
    <main className="bg-background py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Scope</h2>
            <p>These Terms of Service ("Terms") govern your use of MathBlast! provided by Razvan Andrei Surdu ("we," "us," or "our"). By using MathBlast!, you agree to be bound by these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
            <p>MathBlast! is an educational game designed for children aged 8-10 years to practice math skills in an engaging way. The game is intended for educational purposes and should be used under parent or guardian supervision.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Privacy and Data Protection</h2>
            <p>We take children's privacy seriously. Please review our{' '}
              <Link to="/privacy" className="text-brand-blue hover:underline">
                Privacy Policy
              </Link>{' '}
              to understand how we handle data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>All rights, including copyrights and trademarks, in MathBlast! belong to us</li>
              <li>Game content may not be copied or distributed without permission</li>
              <li>The game is for personal, non-commercial use only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Guidelines</h2>
            <p>When using MathBlast!, you agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Use the game for its intended educational purpose</li>
              <li>Not attempt to modify or hack the game</li>
              <li>Not use the game for any illegal activities</li>
              <li>Supervise children's use of the game</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Disclaimer</h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>The game is provided "as is" without warranties</li>
              <li>We do not guarantee uninterrupted or error-free operation</li>
              <li>We may update or modify the game at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
            <p>These Terms are governed by the laws of Germany. Any disputes shall be resolved in the competent courts of Hamburg, Germany.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
            <p>We may update these Terms occasionally. Continued use of MathBlast! after changes constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact</h2>
            <p>For questions about these Terms, contact us at mathblast@surdu.de</p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Terms
