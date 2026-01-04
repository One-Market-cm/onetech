# One Tech - Marketing Website

![One Tech](https://img.shields.io/badge/One-Tech-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

A production-ready marketing website for One Tech - the technology and development arm of One Market. Built with modern web technologies to showcase our services, portfolio, and expertise across Africa.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards for all pages
- **Dynamic Routes**: Case study pages with static generation
- **Server Actions**: Contact form with server-side validation
- **Reusable Components**: Well-structured component library
- **Production Ready**: Optimized for Vercel deployment

## 📄 Pages

- **Home** (`/`) - Landing page with hero, services overview, and CTAs
- **Services** (`/services`) - Comprehensive service offerings
- **Training** (`/training`) - Technical training programs
- **Work** (`/work`) - Portfolio and case studies
- **Case Studies** (`/work/[slug]`) - Dynamic case study pages
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form with server action
- **Privacy Policy** (`/privacy`) - Privacy policy
- **Terms of Service** (`/terms`) - Terms and conditions

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/One-Market-cm/onetech.git
cd onetech
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure email service (required for contact form):
   - Sign up for a free account at [Resend](https://resend.com)
   - Get your API key from [Resend API Keys](https://resend.com/api-keys)
   - Add the API key to `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`. The default theme uses:
- **Primary**: Red/Orange tones (typical African startup colors)
- **Accent**: Yellow/Gold tones

To customize colors, edit the `theme.extend.colors` section in `tailwind.config.ts`.

### Content

- **Case Studies**: Edit `app/work/[slug]/page.tsx` to add/modify case studies
- **Services**: Update service information in `app/services/page.tsx`
- **Training Programs**: Modify programs in `app/training/page.tsx`
- **Contact Info**: Update contact details in `app/contact/page.tsx`

### Components

Reusable UI components are located in `components/ui/`:
- `Button.tsx` - Button component with variants
- `Card.tsx` - Card components for content sections
- `Container.tsx` - Container for page layouts
- `Section.tsx` - Section wrapper with consistent spacing

Layout components are in `components/layout/`:
- `Navbar.tsx` - Navigation bar with mobile menu
- `Footer.tsx` - Footer with links and social icons
- `ThemeProvider.tsx` - Dark/light mode context

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables (if any)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/One-Market-cm/onetech)

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Railway
- Render

## 📝 Environment Variables

See `.env.example` for required and optional environment variables.

### Required
- **RESEND_API_KEY**: API key from [Resend](https://resend.com) for contact form email functionality

### Optional
- **Analytics** (Google Analytics, etc.)
- **CMS integration** for dynamic content

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile-First Design

This website is built with a mobile-first approach, ensuring optimal experience on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## ♿ Accessibility

- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## 📄 License

Copyright © 2025 One Tech. All rights reserved.

## 🤝 Contributing

This is a private marketing website. For issues or suggestions, please contact the development team.

## 📧 Contact

- **Email**: hello@onetech.cm
- **Website**: [onetech.vercel.app](https://onetech.vercel.app)
- **Location**: Cameroon, Central Africa

---

Built with ❤️ by One Tech
