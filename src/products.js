import { productImages } from './productImages';

export const products = {
  vegetables: [
    {
      id: 'veg1',
      name: 'Desi Tomato Seeds',
      scientificName: 'Solanum lycopersicum',
      price: 89,
      image: productImages.tomato,
      description: 'Traditional variety with rich flavor, perfect for Indian cooking',
      category: 'vegetables'
    },
    {
      id: 'veg2',
      name: 'Heritage Brinjal Seeds',
      scientificName: 'Solanum melongena',
      price: 75,
      image: productImages.brinjal,
      description: 'Purple long brinjal variety, disease resistant',
      category: 'vegetables'
    },
    {
      id: 'veg3',
      name: 'Country Okra Seeds',
      scientificName: 'Abelmoschus esculentus',
      price: 65,
      image: productImages.okra,
      description: 'Tender and less slimy traditional variety',
      category: 'vegetables'
    },
    {
      id: 'veg4',
      name: 'Desi Cucumber Seeds',
      scientificName: 'Cucumis sativus',
      price: 55,
      image: productImages.cucumber,
      description: 'Crisp and refreshing local variety',
      category: 'vegetables'
    },
    {
      id: 'veg5',
      name: 'Native Pumpkin Seeds',
      scientificName: 'Cucurbita moschata',
      price: 95,
      image: productImages.pumpkin,
      description: 'Sweet variety perfect for traditional sweets',
      category: 'vegetables'
    }
  ],
  medicinal: [
    {
      id: 'med1',
      name: 'Tulsi Seeds',
      scientificName: 'Ocimum sanctum',
      price: 120,
      image: productImages.tulsi,
      description: 'Sacred basil with powerful medicinal properties',
      category: 'medicinal'
    },
    {
      id: 'med2',
      name: 'Ashwagandha Seeds',
      scientificName: 'Withania somnifera',
      price: 185,
      image: productImages.ashwagandha,
      description: 'Ancient stress-relief herb',
      category: 'medicinal'
    },
    {
      id: 'med3',
      name: 'Brahmi Seeds',
      scientificName: 'Bacopa monnieri',
      price: 145,
      image: productImages.brahmi,
      description: 'Memory enhancing traditional herb',
      category: 'medicinal'
    },
    {
      id: 'med4',
      name: 'Neem Seeds',
      scientificName: 'Azadirachta indica',
      price: 95,
      image: productImages.neem,
      description: 'Natural antiseptic and immunity booster',
      category: 'medicinal'
    },
    {
      id: 'med5',
      name: 'Giloy Seeds',
      scientificName: 'Tinospora cordifolia',
      price: 165,
      image: productImages.giloy,
      description: 'Ayurvedic immunity herb',
      category: 'medicinal'
    }
  ],
  greens: [
    {
      id: 'grn1',
      name: 'Palak Seeds',
      scientificName: 'Spinacia oleracea',
      price: 45,
      image: productImages.palak,
      description: 'Iron-rich traditional spinach variety',
      category: 'greens'
    },
    {
      id: 'grn2',
      name: 'Methi Seeds',
      scientificName: 'Trigonella foenum-graecum',
      price: 55,
      image: productImages.methi,
      description: 'Aromatic fenugreek for greens and spice',
      category: 'greens'
    },
    {
      id: 'grn3',
      name: 'Amaranth Seeds',
      scientificName: 'Amaranthus tricolor',
      price: 65,
      image: productImages.amaranth,
      description: 'Nutritious red amaranth variety',
      category: 'greens'
    },
    {
      id: 'grn4',
      name: 'Coriander Seeds',
      scientificName: 'Coriandrum sativum',
      price: 40,
      image: productImages.coriander,
      description: 'Aromatic dhania for fresh greens',
      category: 'greens'
    },
    {
      id: 'grn5',
      name: 'Drumstick Leaf Seeds',
      scientificName: 'Moringa oleifera',
      price: 85,
      image: productImages.drumstick,
      description: 'Superfood moringa leaves',
      category: 'greens'
    }
  ]
};
