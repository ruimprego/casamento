import { createTranslations } from 'react-ridge-translations'

export type TranslationLanguages = {
  pt: string
  it: string
}

const translate = createTranslations<TranslationLanguages>()({
  homeScreen: {
    weddingTitle: {
      pt: 'o casamento de',
      it: 'il matrimonio di'
    },
    april: {
        pt: 'Abril',
        it: 'Aprile'
    }
  },
  theParty: {
    title: {
        pt: 'A Festa',
        it: 'La Festa'
    },
    churchTitle: {
        pt: 'A Igreja',
        it: 'La Chiesa'
    },
    churchName: {
        pt: 'Igreja de Santa Maria',
        it: 'La Chiesa de Santa Maria'
    },
    restaurantTitle: {
        pt: 'A Quinta',
        it: 'il ristorante'
    },
    restaurantName: {
        pt: 'Quinta de Santo André',
        it: 'Quinta de Santo André'
    },
    directions: {
        pt: 'Direções',
        it: 'Indicazioni'
    },
    receptionTitle: {
        pt: 'A Recepção',
        it: 'La Reception'
    },
    receptionName: {
        pt: 'Casa da Patrícia',
        it: 'Casa di Patrícia'
    }
  },
  information: {
      title: {
          pt: 'Informações',
          it: 'Informazioni'
      },
      description: {
          pt: 'Ao falar com estes alojamentos, digam que fazem parte dos convidados do Casamento da Patrícia e do Rui para terem os preços que referimos',
          it: 'Per avere gli sconti, nel momento della prenotazione bisogna dire che venite al matrimonio di Patricia e Rui'
      },
      description2: {
          pt: 'Existem ainda estes:',
          it: 'Ci sono anche:'
      },
      hotelTitle: {
        pt: 'Hotel Turismo de Trancoso',
        it: 'Hotel Turismo de Trancoso'
      },
      hotelDescription: {
          pt: `Quarto Single: 45€\nQuarto Duplo: 60€\nQuarto Triplo: 90€\nPequeno-almoço incluído`,
          it: `Camera Singola: 45€\nCamera Doppia: 60€\nCamera Tripla: 90€\nColazione inclusa`
      },
      hotel2Title: {
          pt: 'Alojamento de São Bartolomeu',
          it: ''
      },
      hotel2Description: {
          pt: 'Quarto de Casal: 35€\nQuarto Twin: 35€\nQuarto Triplo: 45€\nApartamento para 4 pessoas: 60€\nPequeno-almoço incluído',
          it: 'Camera di Coppia: 35€\nCamera Twin: 35€\nCamera Tripla: 45€\nAppartamento per 4 persone: 60€\nColazione inclusa'
      }
  }
}, {
    language: 'pt',
    fallback: 'pt',
})
export default translate;