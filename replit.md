# Tiramisu by Cooking Doctor - E-commerce Website

## Overview

This is a premium tiramisu ordering website built for "Tiramisu by Cooking Doctor", a homemade Italian dessert business. The application features an elegant, mobile-responsive design focused on showcasing artisanal tiramisu products with online ordering capabilities. The site emphasizes brand aesthetics with a warm color palette (cream, espresso, gold) and premium typography to reflect the handcrafted, authentic nature of the products.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for brand colors
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility
- **Typography**: Google Fonts integration (Playfair Display for headings, Inter for body text)
- **State Management**: TanStack React Query for server state and form management with React Hook Form
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful webhook endpoint for order processing
- **Development**: Hot module replacement via Vite integration in development mode
- **Storage**: In-memory storage for user data with extensible interface for future database integration

### Data Management
- **Schema Validation**: Zod for runtime type validation and schema definition
- **Forms**: React Hook Form with Zod resolver for client-side validation
- **Order Processing**: Webhook-based order submission designed for external automation tools

### Design System
- **Color Palette**: Custom CSS variables for brand consistency (cream, espresso, gold, warm white)
- **Component Structure**: Modular architecture with reusable UI components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: CSS transitions and transforms for enhanced user experience

### Development Workflow
- **Type Safety**: Full TypeScript coverage across client, server, and shared modules
- **Code Quality**: Consistent file structure with shared schema definitions
- **Build Process**: Separate client and server build pipelines with esbuild for server bundling

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript setup with path mapping and strict mode
- **Build Tools**: Vite with React plugin and development utilities

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **Shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible component primitives for complex UI elements
- **Google Fonts**: Web font integration for brand typography
- **Font Awesome**: Icon library for consistent iconography

### Form and Data Handling
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Schema validation for forms and API data
- **TanStack React Query**: Server state management and caching

### Server Dependencies
- **Express.js**: Web application framework for Node.js
- **Database**: Drizzle ORM with PostgreSQL support (configured but not actively used)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Development and Utilities
- **Date Handling**: date-fns for date manipulation and formatting
- **Utility Libraries**: clsx and class-variance-authority for conditional styling
- **Development Tools**: ESBuild for server bundling, Replit-specific development plugins

### External Integrations
- **Webhook Processing**: Order data forwarded to external automation services (Make.com/Zapier)
- **Database Provider**: Neon Database (PostgreSQL) configured via environment variables
- **Image Hosting**: Unsplash for product and gallery images
- **Analytics**: Ready for Google Analytics or similar tracking solutions