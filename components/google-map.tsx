"use client"

import { useLanguage } from "@/lib/language-context"

export function GoogleMap() {
  const { t } = useLanguage()

  return (
    <div>
      <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">{t("contact.locations.title")}</h2>
      <p className="mb-8 text-gray-600">{t("contact.locations.subtitle")}</p>
      
      {/* Google Maps Embed - Uzbekistan with both locations */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1559667.2842856!2d67.5!3d40.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3f4d191df7c42367%3A0x8d0f5c0b5c0b5c0b!2sRegistan%2C%20Samarkand%2C%20Uzbekistan!3m2!1d39.6542861!2d66.9749731!4m5!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!3m2!1d41.2994958!2d69.2400734!5e0!3m2!1sen!2s!4v1703123456789"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Safi Hotel Collection - Samarkand and Tashkent Offices"
        />
      </div>

      {/* Location Info Cards */}
      <div className="grid gap-6 md:grid-cols-1 mt-8">
        {/* Samarkand Office */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              🏢 {t("contact.locations.samarkand")}
            </h3>
            <span className="bg-[#084b25] text-white px-3 py-1 rounded-full text-xs font-medium">
              {t("contact.locations.mainOffice")}
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#084b25] font-medium">📍</span>
              <div>
                <p className="text-gray-900 font-medium">Registan Street 15</p>
                <p className="text-gray-600">Samarkand 140100, Uzbekistan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#084b25] font-medium">📞</span>
              <a href="tel:+998221234567" className="text-gray-900 hover:text-[#084b25] font-medium transition-colors">
                +998 22 123 4567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#084b25] font-medium">✉️</span>
              <a 
                href="mailto:samarkand@safihotelcollection.com" 
                className="text-gray-900 hover:text-[#084b25] font-medium transition-colors break-all"
              >
                samarkand@safihotelcollection.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#084b25] font-medium">🕒</span>
              <p className="text-gray-900 font-medium">Mon-Fri 9:00-18:00 (UTC+5)</p>
            </div>
          </div>
        </div> */}

        {/* Tashkent Office */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              🏢 {t("contact.locations.tashkent")}
            </h3>
            <span className="bg-[#f5e6d3] text-[#084b25] px-3 py-1 rounded-full text-xs font-medium">
              {t("contact.locations.salesOffice")}
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-[#084b25] font-medium">📍</span>
              <div>
                <p className="text-gray-900 font-medium">Amir Temur Avenue 42</p>
                <p className="text-gray-600">Tashkent 100000, Uzbekistan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#084b25] font-medium">📞</span>
              <a href="tel:+998712345678" className="text-gray-900 hover:text-[#084b25] font-medium transition-colors">
                +998 71 234 5678
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#084b25] font-medium">✉️</span>
              <a 
                href="mailto:tashkent@safihotelcollection.com" 
                className="text-gray-900 hover:text-[#084b25] font-medium transition-colors break-all"
              >
                tashkent@safihotelcollection.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#084b25] font-medium">🕒</span>
              <p className="text-gray-900 font-medium">Mon-Fri 9:00-18:00 (UTC+5)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}