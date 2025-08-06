# 🦷 Dental Ecommerce Website

A modern, responsive dental equipment and supplies ecommerce platform built with React and Vite. This comprehensive platform serves dental professionals with a wide range of products, from dental instruments to pharmaceuticals.

## 🌟 Features

### 🛍️ Core Ecommerce Features
- **Product Catalog**: Browse extensive dental equipment and supplies
- **Advanced Filtering**: Filter products by category, price, brand, and specifications
- **Shopping Cart**: Add, remove, and manage items with real-time updates
- **Checkout Process**: Streamlined checkout with multiple payment options
- **Address Management**: Save and manage multiple shipping addresses with edit/delete modals
- **Order Confirmation**: Professional order confirmation with tracking details

### 📱 User Experience
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional interface with dark theme
- **Interactive Components**: Dynamic sliders, modals, and form interactions
- **Search Functionality**: Quick product search and discovery
- **User Authentication**: Login and registration system

### 🏥 Dental-Specific Features
- **Product Categories**: Organized by dental specialties and procedures
- **Procedure Guide**: Browse products by dental procedures
- **Professional Blog**: Insights and innovations in dental care
- **Pharmaceuticals Section**: Dedicated pharmaceutical products
- **Equipment Specifications**: Detailed product information for professionals

### 📊 Analytics & Insights
- **Savings Tracker**: Visual charts showing savings over time
- **Responsive Charts**: Mobile-optimized data visualization using Recharts
- **Order History**: Track past purchases and reorder easily

## 🚀 Live Demo

- **Production**: [https://dental-ecommerce-website-b2pvnu6wc-taijul-amans-projects.vercel.app](https://dental-ecommerce-website-b2pvnu6wc-taijul-amans-projects.vercel.app)
- **Preview**: [https://dental-ecommerce-website-3evl6hwao-taijul-amans-projects.vercel.app](https://dental-ecommerce-website-3evl6hwao-taijul-amans-projects.vercel.app)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library

### Charts & Visualization
- **Recharts** - Responsive chart library for React
- **Custom Chart Components** - Mobile-optimized data visualization

### UI Components
- **Custom Components** - Reusable UI components
- **Modal System** - Edit, delete, and confirmation modals
- **Responsive Navigation** - Mobile-friendly navigation with hamburger menu
- **Form Components** - Custom checkboxes, inputs, and selectors

### Deployment
- **Vercel** - Serverless deployment platform
- **Automatic Deployments** - CI/CD pipeline with GitHub integration

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dental-ecommerce-website.git
   cd dental-ecommerce-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
# Preview deployment
npx vercel

# Production deployment
npx vercel --prod
```

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/           # Reusable components
│   │   ├── BreadCrumb.jsx
│   │   ├── Checkbox.jsx
│   │   ├── HotSellingCard.jsx
│   │   └── SectionHeading.jsx
│   └── navbar/           # Navigation components
│       └── Navbar.jsx
├── pages/
│   ├── Home/            # Homepage components
│   │   ├── MagicMoney/
│   │   │   └── SaveOverTime.jsx
│   │   ├── ProductDetails/
│   │   └── ExploreByCategory/
│   ├── Product/         # Product listing
│   │   └── Product.jsx
│   ├── checkout/        # Checkout process
│   │   └── Checkout.jsx
│   ├── shoppingCart/    # Shopping cart
│   │   └── ShoppingCart.jsx
│   ├── Blog/           # Blog section
│   ├── pharmaceuticals/ # Pharmaceuticals
│   └── procedureGuide/ # Procedure guide
├── routes/             # Route configuration
│   └── Route.jsx
└── assets/            # Static assets
```

## 🎨 Key Components

### Navigation
- **Responsive Navbar**: Mobile-first navigation with hamburger menu
- **Breadcrumb Navigation**: Context-aware breadcrumbs
- **User Authentication**: Login/signup integration

### Product Management
- **Product Cards**: Responsive product display cards
- **Filter System**: Advanced filtering with sidebar layout
- **Shopping Cart**: Real-time cart management
- **Checkout Flow**: Multi-step checkout with address management

### Modals & Interactions
- **Edit Address Modal**: Form-based address editing
- **Delete Confirmation Modal**: Safe deletion with preview
- **Success Modal**: Order confirmation with next steps
- **Mobile-Optimized**: Touch-friendly interactions

### Data Visualization
- **Savings Chart**: Responsive bar chart using Recharts
- **Mobile Optimization**: Adaptive chart sizing and styling
- **Real-time Updates**: Dynamic chart updates

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1024px

### Mobile Features
- Touch-friendly navigation
- Optimized chart sizing
- Responsive grid layouts
- Mobile-first approach
- Gesture-friendly interactions

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling with custom configurations for:
- Dark theme support
- Custom color palette
- Responsive breakpoints
- Component utilities

### Vite Configuration
- Fast HMR (Hot Module Replacement)
- Optimized build process
- Asset optimization
- Development server configuration

## 🚀 Performance Optimizations

- **Code Splitting**: Dynamic imports for better loading
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Monitoring bundle size (current: ~1.3MB)
- **Responsive Images**: Adaptive image serving
- **Efficient Rendering**: React optimization patterns

## 🧪 Testing

The application has been tested across:
- Multiple browsers (Chrome, Firefox, Safari, Edge)
- Various devices (Mobile, Tablet, Desktop)
- Different screen sizes and orientations
- Touch and mouse interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development**: SparkTech Agency
- **Design**: Modern UI/UX with dental industry focus
- **Deployment**: Vercel platform

## 📞 Support

For support, email support@sparktech.agency or create an issue in the repository.

## 🔄 Version History

- **v1.0.0** - Initial release with core ecommerce features
- **v1.1.0** - Added responsive design and mobile optimization
- **v1.2.0** - Enhanced checkout flow with modals
- **v1.3.0** - Added data visualization and charts

---

**Built with ❤️ for dental professionals worldwide**