"use client";

import Image from "next/image";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => void;
  }
}

export default function Home() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=%2B55555481156367&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0";

  // única definição de handleClick — usa gtag_report_conversion (definido no layout.tsx),
  // depois tenta gtag como fallback e por fim redireciona direto.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = whatsappUrl;

    if (typeof window.gtag_report_conversion === "function") {
      // função definida pelo snippet de conversão no layout.tsx
      try {
        window.gtag_report_conversion(url);
      } catch {
        // fallback se algo falhar
        window.location.href = url;
      }
    } else if (typeof window.gtag === "function") {
      // alternativa usando gtag event + callback
      let called = false;
      window.gtag("event", "conversion", {
        send_to: "AW-16659228092/WHxMCPOklpsbELzL3oc-",
        value: 1.0,
        currency: "BRL",
        event_callback: () => {
          called = true;
          window.location.href = url;
        },
      });
      // timeout fallback caso callback não seja chamado
      setTimeout(() => {
        if (!called) window.location.href = url;
      }, 1000);
    } else {
      // sem tag disponível
      window.location.href = url;
    }
  };

  return (
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
          Conecte-se agora com a equipe da Policlínica e
          <br className="hidden sm:block" />
          continue seu agendamento com segurança.
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-white max-w-4xl leading-tight">
          Clique no botão abaixo para prosseguir seu atendimento
        </h1>

        <a
          href={whatsappUrl}
          onClick={handleClick}
          className="relative inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 animate-pulse-subtle shadow-lg"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c..." />
          </svg>
          Entrar em contato
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-md ring-2 ring-whatsapp">
            3
          </span>
        </a>
      </main>


      <footer className="bg-white text-gray-700 py-6 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
        <Image
          src="/logo.png"
          alt="Policlínica Logo"
          width={140}
          height={35}
          className="h-9 w-auto"
        />
        <span>® Todos direitos reservados.</span>
      </footer>
    </div>
  );
}