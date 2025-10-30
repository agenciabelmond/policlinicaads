import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function Home() {
  return (
    <>

      <div className="min-h-screen flex flex-col bg-primary">
        <header className="bg-white py-4 px-4 flex items-center justify-center gap-3">
          <Image
            src="/logo.png"
            alt="Policlínica Logo"
            width={280}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
          <p className="text-xl md:text-2xl font-normal mb-8 text-white/95 max-w-2xl leading-relaxed">
            Conecte-se agora com a equipe da Policlínica e<br className="hidden sm:block" />
            continue seu agendamento com segurança.
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-white max-w-4xl leading-tight">
            Clique no botão abaixo para prosseguir seu atendimento
          </h1>

          <Link
            href="https://api.whatsapp.com/send/?phone=%2B55555481156367&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 animate-pulse-subtle shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Entrar em contato
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md ring-2 ring-whatsapp">
              3
            </span>
          </Link>
        </main>

        <footer className="bg-white text-gray-700 py-6 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <Image src="/logo.png" alt="Policlínica Logo" width={140} height={35} className="h-9 w-auto" />
          <span>® Todos direitos reservados.</span>
        </footer>
      </div>
    </>
  )
}

