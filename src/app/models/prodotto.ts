export interface Prodotto {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
  }
  
  export interface Rating {
    rate: number
    count: number
  }

  export interface ProdottoACarrello {
    id: number;
    title: string;
    price: number;
    qta: number;
  }