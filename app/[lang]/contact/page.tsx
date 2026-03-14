import Image from 'next/image'
import { t, Lang } from '@/lib/i18n'
import InquiryForm, { FormField } from '@/components/InquiryForm'

export async function generateMetadata({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  return {
    title: t(lang, 'contact_title') + ' | SunGene',
    description: t(lang, 'contact_subtitle'),
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang

  const fields: FormField[] = [
    { name: 'name', label: t(lang, 'form_name'), type: 'text', required: true },
    { name: 'phone', label: lang === 'zh' ? '手機號碼' : 'Phone Number', type: 'tel', required: true },
    { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true },
    { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true },
    { name: 'message', label: t(lang, 'form_message'), type: 'textarea', required: true, rows: 5 },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t(lang, 'contact_title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t(lang, 'contact_subtitle')}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 bg-white p-10 md:p-16 rounded-sm shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 mb-12 max-w-2xl mx-auto">
             <div className="text-center md:text-left flex-1">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '商務合作信箱' : 'Business Email'}</div>
                <div className="text-blue-600 font-medium">contact@sungenelite.com</div>
             </div>
             <div className="text-center md:text-left flex-1">
                <div className="font-bold text-gray-900 mb-1">{lang === 'zh' ? '即時聯絡' : 'Phone / LINE'}</div>
                <div className="text-blue-600 font-medium">+886 43703 2705</div>
                <div className="text-green-600 font-medium mt-1">LINE ID: @sungene</div>
             </div>
             <div className="text-center flex flex-col items-center flex-1 md:items-end">
                <div className="font-bold text-gray-900 mb-2">WhatsApp</div>
                <div className="h-24 w-24 overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-sm">
                    <Image src="/whatsapp-qr.png" alt="WhatsApp QR Code" width={96} height={96} className="h-full w-full object-cover" />
                </div>
             </div>
          </div>

          <InquiryForm 
            lang={lang}
            type="Contact"
            fields={fields}
            submitLabel={t(lang, 'contact_submit')}
            successTitle={t(lang, 'form_success_title')}
            successDesc={t(lang, 'form_success_desc')}
            errorTitle={t(lang, 'form_error_title')}
            errorDesc={t(lang, 'form_error_desc')}
          />
        </div>
      </section>
    </main>
  )
}
