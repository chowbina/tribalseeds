# TribalSeeds - E-commerce Platform

A modern e-commerce platform for selling traditional Indian heirloom seeds, built with React and Vite.

## Features

- 🌱 Beautiful, modern design with vibrant color scheme (yellow, pink, cyan, green)
- 🛒 Full shopping cart functionality with persistent storage
- 💳 Indian payment methods (UPI, Cards, Net Banking, COD)
- 📱 Fully responsive design
- 🎨 Realistic SVG illustrations for all products
- 🔍 Search and category filtering
- ✨ Smooth animations and transitions

## Tech Stack

- React 18
- Vite
- Lucide React Icons
- CSS3 with custom properties
- LocalStorage for cart persistence

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build and deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Using GitHub

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite configuration
6. Click "Deploy"

### Option 3: Direct Upload

1. Build the project:
```bash
npm run build
```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `dist` folder

## Project Structure

```
tribalseeds/
├── public/
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── CartContext.jsx
│   │   ├── CartSidebar.jsx
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── products.js
│   └── productImages.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Product Categories

1. **Vegetables**: Tomato, Brinjal, Okra, Cucumber, Pumpkin
2. **Medicinal Herbs**: Tulsi, Ashwagandha, Brahmi, Neem, Giloy
3. **Greens/Soppu**: Palak, Methi, Amaranth, Coriander, Drumstick

## Features Included

- Cart management with add/remove/update quantity
- Persistent cart using localStorage
- Indian payment integration UI
- Search functionality
- Category filtering
- Responsive mobile menu
- Product cards with realistic SVG illustrations
- Smooth animations and transitions
- Clean, minimal design with light colors
- No sound effects (as requested)

## Environment Variables

No environment variables required for basic functionality.

## License

MIT

## Contact

Email: info@tribalseeds.in
Phone: +91 98765 43210
