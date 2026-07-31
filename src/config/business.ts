export const business = {
  name: 'Vocarte',
  tagline: 'Formando artistas, inspirando personas',
  location: 'Ventanilla, Perú',
  whatsapp: {
    // PENDIENTE: reemplaza este valor por el número real, con código de país y sin "+" ni espacios.
    number: '519XXXXXXXX',
    message: 'Hola, quisiera recibir información sobre los talleres de Vocarte.',
  },
  navigation: [
    { label: 'Talleres', href: '#talleres' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Grupos', href: '#grupos' },
    { label: 'Preguntas frecuentes', href: '#preguntas' },
  ],
  workshops: [
    {
      name: 'Canto',
      teacher: 'Stefany Martinez Castañeda',
      description: 'Un espacio para explorar la voz, la escucha y la interpretación musical.',
      icon: 'mic',
      tone: 'blue',
    },
    {
      name: 'Piano',
      teacher: 'Roberto Angeles Iparraguirre',
      description: 'Primeros encuentros y práctica musical a través de las teclas.',
      icon: 'piano',
      tone: 'gold',
    },
    {
      name: 'Guitarra',
      teacher: 'Cesar Huamantumba Vargas',
      description: 'Acompañamiento para descubrir el instrumento, sus acordes y posibilidades.',
      icon: 'guitar',
      tone: 'coral',
    },
    {
      name: 'Melódica',
      teacher: 'Derek Huertas Montyoy',
      description: 'Una forma cercana y dinámica de acercarse a la melodía y al ritmo.',
      icon: 'music',
      tone: 'sky',
    },
    {
      name: 'Danza folclórica',
      teacher: 'Jordy Riva Gutierrez',
      description: 'Movimiento, expresión y encuentro con la riqueza de nuestras danzas.',
      icon: 'sparkles',
      tone: 'green',
    },
    {
      name: 'Ballet',
      teacher: 'Carlos Enrique Zúnico Flores',
      description: 'Un taller para desarrollar expresión corporal, coordinación y constancia.',
      icon: 'star',
      tone: 'rose',
    },
    {
      name: 'Teatro',
      teacher: 'Christian Neyra Cusicanqui',
      description: 'Juego escénico, imaginación y expresión para aprender junto a otros.',
      icon: 'masks',
      tone: 'violet',
    },
  ],
} as const

export const whatsappUrl = `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(
  business.whatsapp.message,
)}`
