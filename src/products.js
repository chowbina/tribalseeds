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
      category: 'vegetables',
      seedCount: '50+ seeds',
      detailedDescription: 'Our Desi Tomato seeds are sourced from tribal farmers who have preserved this heirloom variety for generations. These tomatoes are known for their intense flavor, deep red color, and firm texture. Perfect for curries, chutneys, and fresh salads. They are naturally disease-resistant and thrive in Indian climatic conditions.',
      growingTips: 'Plant in well-drained soil with full sunlight. Water regularly and provide support as plants grow. Harvest when fruits are fully red and firm.',
      gallery: [productImages.tomato, productImages.tomato, productImages.tomato]
    },
    {
      id: 'veg2',
      name: 'Heritage Brinjal Seeds',
      scientificName: 'Solanum melongena',
      price: 75,
      image: productImages.brinjal,
      description: 'Purple long brinjal variety, disease resistant',
      category: 'vegetables',
      seedCount: '40+ seeds',
      detailedDescription: 'This heritage brinjal variety has been cultivated by tribal communities for its exceptional taste and natural disease resistance. The long, purple fruits are perfect for bhartha, curries, and grilling. Known for less bitterness and tender texture.',
      growingTips: 'Requires warm weather and well-drained soil. Space plants 18-24 inches apart. Protect from frost and harvest when skin is shiny and firm.',
      gallery: [productImages.brinjal, productImages.brinjal, productImages.brinjal]
    },
    {
      id: 'veg3',
      name: 'Country Okra Seeds',
      scientificName: 'Abelmoschus esculentus',
      price: 65,
      image: productImages.okra,
      description: 'Tender and less slimy traditional variety',
      category: 'vegetables',
      seedCount: '60+ seeds',
      detailedDescription: 'Our traditional okra variety produces tender, less slimy pods that are ideal for Indian cooking. This variety is known for high yields and excellent taste. Perfect for bhindi masala, sambhar, and stir-fries.',
      growingTips: 'Grows best in warm weather with full sun. Sow directly in soil after last frost. Harvest pods when 3-4 inches long for best tenderness.',
      gallery: [productImages.okra, productImages.okra, productImages.okra]
    },
    {
      id: 'veg4',
      name: 'Desi Cucumber Seeds',
      scientificName: 'Cucumis sativus',
      price: 55,
      image: productImages.cucumber,
      description: 'Crisp and refreshing local variety',
      category: 'vegetables',
      seedCount: '30+ seeds',
      detailedDescription: 'Traditional cucumber variety known for its crisp texture and refreshing taste. Perfect for raitas, salads, and summer coolers. These cucumbers are naturally heat-tolerant and produce abundantly.',
      growingTips: 'Plant in rich, well-drained soil with full sunlight. Provide climbing support or let them sprawl. Water regularly and harvest when 6-8 inches long.',
      gallery: [productImages.cucumber, productImages.cucumber, productImages.cucumber]
    },
    {
      id: 'veg5',
      name: 'Native Pumpkin Seeds',
      scientificName: 'Cucurbita moschata',
      price: 95,
      image: productImages.pumpkin,
      description: 'Sweet variety perfect for traditional sweets',
      category: 'vegetables',
      seedCount: '15+ seeds',
      detailedDescription: 'This native pumpkin variety is prized for its natural sweetness and vibrant orange flesh. Ideal for traditional Indian sweets like halwa and kheer, as well as curries and sabzis. The seeds are also nutritious and can be roasted.',
      growingTips: 'Requires ample space to spread. Plant in nutrient-rich soil with full sun. Water deeply and regularly. Harvest when skin hardens and stem dries.',
      gallery: [productImages.pumpkin, productImages.pumpkin, productImages.pumpkin]
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
      category: 'medicinal',
      seedCount: '100+ seeds',
      detailedDescription: 'Holy Basil or Tulsi is revered in Ayurveda for its medicinal and spiritual properties. These seeds produce aromatic plants with powerful adaptogenic qualities. Tulsi helps boost immunity, reduce stress, and purify the air. The leaves can be used for tea, medicine, or worship.',
      growingTips: 'Easy to grow in pots or garden. Needs full sun and well-drained soil. Pinch growing tips to encourage bushy growth. Water regularly but avoid waterlogging.',
      gallery: [productImages.tulsi, productImages.tulsi, productImages.tulsi]
    },
    {
      id: 'med2',
      name: 'Ashwagandha Seeds',
      scientificName: 'Withania somnifera',
      price: 185,
      image: productImages.ashwagandha,
      description: 'Ancient stress-relief herb',
      category: 'medicinal',
      seedCount: '50+ seeds',
      detailedDescription: 'Ashwagandha is one of the most powerful herbs in Ayurvedic healing. Known as "Indian Ginseng," it helps reduce stress, anxiety, and promotes overall vitality. The roots are used medicinally and have adaptogenic properties that help the body cope with stress.',
      growingTips: 'Drought-tolerant perennial. Grows in well-drained soil with full sun. Harvest roots after 150-180 days. Can tolerate poor soil conditions.',
      gallery: [productImages.ashwagandha, productImages.ashwagandha, productImages.ashwagandha]
    },
    {
      id: 'med3',
      name: 'Brahmi Seeds',
      scientificName: 'Bacopa monnieri',
      price: 145,
      image: productImages.brahmi,
      description: 'Memory enhancing traditional herb',
      category: 'medicinal',
      seedCount: '80+ seeds',
      detailedDescription: 'Brahmi is a renowned memory-enhancing herb used in Ayurveda for centuries. It improves cognitive function, reduces anxiety, and promotes mental clarity. The leaves can be consumed fresh, dried for tea, or used in herbal preparations.',
      growingTips: 'Prefers moist conditions and partial shade. Grows well near water sources or in consistently moist soil. Can be grown in containers with regular watering.',
      gallery: [productImages.brahmi, productImages.brahmi, productImages.brahmi]
    },
    {
      id: 'med4',
      name: 'Neem Seeds',
      scientificName: 'Azadirachta indica',
      price: 95,
      image: productImages.neem,
      description: 'Natural antiseptic and immunity booster',
      category: 'medicinal',
      seedCount: '10+ seeds',
      detailedDescription: 'Neem is called "the village pharmacy" due to its extensive medicinal uses. Every part of the neem tree has therapeutic value - leaves, bark, seeds, and oil. It has powerful antibacterial, antifungal, and immune-boosting properties.',
      growingTips: 'Hardy tree that grows in tropical and subtropical regions. Plant in well-drained soil with full sun. Drought-tolerant once established. Grows into a large tree over time.',
      gallery: [productImages.neem, productImages.neem, productImages.neem]
    },
    {
      id: 'med5',
      name: 'Giloy Seeds',
      scientificName: 'Tinospora cordifolia',
      price: 165,
      image: productImages.giloy,
      description: 'Ayurvedic immunity herb',
      category: 'medicinal',
      seedCount: '25+ seeds',
      detailedDescription: 'Giloy is known as "Amrita" or the root of immortality in Ayurveda. This climbing shrub is highly valued for boosting immunity, fighting infections, and promoting overall health. The stem is most commonly used for medicinal preparations.',
      growingTips: 'Climbing plant that needs support. Grows well in tropical climate. Plant in well-drained soil with partial shade. Water regularly during growing season.',
      gallery: [productImages.giloy, productImages.giloy, productImages.giloy]
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
      category: 'greens',
      seedCount: '100+ seeds',
      detailedDescription: 'Traditional Indian spinach variety packed with iron, vitamins, and minerals. This palak variety has tender leaves perfect for palak paneer, dal palak, and fresh salads. Known for quick growth and multiple harvests from a single sowing.',
      growingTips: 'Grows best in cool weather. Plant in rich, well-drained soil with partial shade in summer. Water regularly and harvest outer leaves first for continuous production.',
      gallery: [productImages.palak, productImages.palak, productImages.palak]
    },
    {
      id: 'grn2',
      name: 'Methi Seeds',
      scientificName: 'Trigonella foenum-graecum',
      price: 55,
      image: productImages.methi,
      description: 'Aromatic fenugreek for greens and spice',
      category: 'greens',
      seedCount: '150+ seeds',
      detailedDescription: 'Dual-purpose fenugreek that provides both nutritious greens and aromatic seeds. The leaves are rich in iron and fiber, perfect for parathas, curries, and dry vegetables. Seeds can be used as spice or for health benefits.',
      growingTips: 'Quick-growing cool-season crop. Sow directly in well-drained soil. Harvest leaves when 4-6 inches tall. Can be grown year-round in mild climates.',
      gallery: [productImages.methi, productImages.methi, productImages.methi]
    },
    {
      id: 'grn3',
      name: 'Amaranth Seeds',
      scientificName: 'Amaranthus tricolor',
      price: 65,
      image: productImages.amaranth,
      description: 'Nutritious red amaranth variety',
      category: 'greens',
      seedCount: '200+ seeds',
      detailedDescription: 'Colorful and nutritious red amaranth with stunning foliage. Both leaves and seeds are edible and highly nutritious. The tender leaves are perfect for saag, stir-fries, and salads. Rich in protein, iron, and antioxidants.',
      growingTips: 'Heat-tolerant and easy to grow. Thrives in warm weather with full sun. Sow directly or transplant. Harvest young leaves regularly for best flavor.',
      gallery: [productImages.amaranth, productImages.amaranth, productImages.amaranth]
    },
    {
      id: 'grn4',
      name: 'Coriander Seeds',
      scientificName: 'Coriandrum sativum',
      price: 40,
      image: productImages.coriander,
      description: 'Aromatic dhania for fresh greens',
      category: 'greens',
      seedCount: '100+ seeds',
      detailedDescription: 'Fresh coriander variety perfect for garnishing and flavoring Indian dishes. The aromatic leaves add freshness to curries, chutneys, and salads. Seeds can also be harvested for use as spice.',
      growingTips: 'Prefers cool weather. Plant in well-drained soil with partial shade in hot climates. Sow every 2-3 weeks for continuous harvest. Water regularly.',
      gallery: [productImages.coriander, productImages.coriander, productImages.coriander]
    },
    {
      id: 'grn5',
      name: 'Drumstick Leaf Seeds',
      scientificName: 'Moringa oleifera',
      price: 85,
      image: productImages.drumstick,
      description: 'Superfood moringa leaves',
      category: 'greens',
      seedCount: '20+ seeds',
      detailedDescription: 'Moringa is called the "miracle tree" for its exceptional nutritional value. The leaves are packed with vitamins, minerals, and protein. Both leaves and drumsticks are used in South Indian cuisine. Every part of the tree has medicinal and nutritional benefits.',
      growingTips: 'Fast-growing tropical tree. Plant in well-drained soil with full sun. Very drought-tolerant once established. Harvest tender leaves regularly to encourage new growth.',
      gallery: [productImages.drumstick, productImages.drumstick, productImages.drumstick]
    }
  ]
};
