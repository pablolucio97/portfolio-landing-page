export function sendWhatsAppMessage() {
    const number = process.env.NEXT_PUBLIC_PHONE
    const msg = 'Olá, acessei o seu website e gostaria de saber mais sobre seu trabalho.'
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(msg)}`
    window.open(whatsappUrl, '_blank')
}
