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
      name: 'Canto Kids',
      teachers: [{ group: null, name: 'Derek Huertas Montyoy' }],
      description: 'Un espacio para que los niños exploren su voz, la escucha y la interpretación musical.',
      icon: 'mic',
      tone: 'blue',
    },
    {
      name: 'Canto Juvenil',
      teachers: [{ group: null, name: 'Stefany Martinez Castañeda' }],
      description: 'Técnica vocal, interpretación y confianza para que los jóvenes desarrollen su propia voz.',
      icon: 'mic',
      tone: 'violet',
    },
    {
      name: 'Piano',
      teachers: [{ group: null, name: 'Roberto Angeles Iparraguirre' }],
      description: 'Primeros encuentros y práctica musical a través de las teclas.',
      icon: 'piano',
      tone: 'gold',
    },
    {
      name: 'Guitarra',
      teachers: [{ group: null, name: 'Cesar Huamantumba Vargas' }],
      description: 'Acompañamiento para descubrir el instrumento, sus acordes y posibilidades.',
      icon: 'guitar',
      tone: 'coral',
    },
    {
      name: 'Cajón',
      teachers: [{ group: null, name: 'José de la Cruz' }],
      description: 'Ritmo, coordinación y expresión a través de uno de nuestros instrumentos más representativos.',
      icon: 'drum',
      tone: 'gold',
    },
    {
      name: 'Metalófono',
      teachers: [{ group: null, name: 'Derek Huertas Montyoy' }],
      description: 'Una forma cercana y dinámica de acercarse a las notas, la melodía y el ritmo.',
      icon: 'music',
      tone: 'sky',
    },
    {
      name: 'Flauta dulce',
      teachers: [{ group: null, name: 'Axel Zapata' }],
      description: 'Respiración, melodía y lectura musical para descubrir el instrumento paso a paso.',
      icon: 'wind',
      tone: 'green',
    },
    {
      name: 'Danza folclórica',
      teachers: [{ group: null, name: 'Jordy Riva Gutierrez' }],
      description: 'Movimiento, expresión y encuentro con la riqueza de nuestras danzas.',
      icon: 'sparkles',
      tone: 'green',
    },
    {
      name: 'Ballet',
      teachers: [{ group: null, name: 'Carlos Enrique Zúnico Flores' }],
      description: 'Un taller para desarrollar expresión corporal, coordinación y constancia.',
      icon: 'star',
      tone: 'rose',
    },
    {
      name: 'Teatro',
      teachers: [{ group: null, name: 'Christian Neyra Cusicanqui' }],
      description: 'Juego escénico, imaginación y expresión para aprender junto a otros.',
      icon: 'masks',
      tone: 'violet',
    },
  ],
} as const

export const whatsappUrl = `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(
  business.whatsapp.message,
)}`
