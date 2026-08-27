import estilos from './WhatsAppFlutuante.module.css';

const NUMERO_WHATSAPP = '55 16 99769-9384';

export default function WhatsAppFlutuante() {
  const link = `https://api.whatsapp.com/message/7TSW3KSJZ7ZUE1?autoload=1&app_absent=0&utm_source=ig${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento com a SKF Arquitetura.'
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={estilos.botao}
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.2 1.28-1.98 1.44-.53.11-1.22.2-3.54-.76-2.97-1.23-4.88-4.24-5.03-4.44-.15-.2-1.2-1.6-1.2-3.05 0-1.46.75-2.16 1.02-2.46.27-.3.58-.37.78-.37.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.75 1.24 1.61 2 1.11.99 2.04 1.3 2.34 1.45.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.29.14.48.21.55.33.07.13.07.72-.17 1.4Z" />
      </svg>
    </a>
  );
}
