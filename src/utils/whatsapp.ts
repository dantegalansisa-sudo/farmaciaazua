const WA_NUMBER = '18093953671';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank');
}

export function orderProductMessage(productName: string): string {
  return `Hola, me interesa consultar sobre: ${productName}`;
}

export function prescriptionMessage(): string {
  return 'Hola, quiero enviar mi receta médica para surtir medicamentos.';
}

export function priceCheckMessage(productName: string): string {
  return `Hola, quisiera saber el precio de: ${productName}`;
}

export function offerMessage(offerName: string): string {
  return `Hola, me interesa la oferta de: ${offerName}`;
}

export function articleMessage(articleTitle: string): string {
  return `Hola, quisiera más información sobre: ${articleTitle}`;
}
