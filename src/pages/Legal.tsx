import { FC } from 'react'

const Legal: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">Legal Notice (Impressum)</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information according to § 5 TMG</h2>
          <p className="whitespace-pre-line">
            Name: Razvan Andrei Surdu
            Address: Osterbrook 11b
            20537 Hamburg
            Germany / Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p>Email: mathblast@surdu.de</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">VAT ID</h2>
          <p>VAT identification number according to § 27 a of the German VAT law:</p>
          <p>DE322720879</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">EU Dispute Resolution</h2>
          <p>The European Commission provides a platform for online dispute resolution (ODR):{' '}
            <a href="https://ec.europa.eu/consumers/odr/" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-2">Our email address can be found above in the impressum.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consumer Dispute Resolution</h2>
          <p>We are not willing or obliged to participate in dispute settlement proceedings before a consumer arbitration board.</p>
        </section>
      </div>
    </div>
  )
}

export default Legal
