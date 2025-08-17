# replit.md

## Overview

This project is an investor pitch website for an AI automation agency targeting small and medium businesses (SMB) in Russia. The site presents a comprehensive business case for attracting 700-800k RUB in investment to launch and scale an AI consulting agency that implements custom automation solutions using n8n platform. The website features financial modeling, market analysis, product offerings, marketing strategies, risk assessment, and investment breakdown - all designed to demonstrate the business viability and growth potential to potential investors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with a clean page-based structure
- **UI Components**: shadcn/ui component library built on top of Radix UI primitives
- **Styling**: Tailwind CSS with a dark theme optimized for professional/premium presentation
- **Charts**: Recharts library for interactive financial and market data visualization
- **State Management**: TanStack Query for server state management and data fetching

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database as the provider
- **API Design**: RESTful API structure with routes defined in `/server/routes.ts`
- **Storage**: Abstract storage interface with in-memory implementation, designed to be easily replaceable with database persistence

### Data Management
- **Schema Validation**: Zod schemas for type-safe data validation across the application
- **Static Data**: JSON files in `attached_assets/` containing market research, financial projections, and business data
- **Data Processing**: Transformation and validation of business data through utility functions in `/client/src/lib/data.ts`

### Component Structure
- **Layout System**: Responsive layout with sticky navigation and mobile-friendly design
- **Chart Components**: Reusable chart components (LineChart, BarChart, ComboChart, PieChart) with consistent theming
- **Data Visualization**: Interactive tables and cards for presenting financial metrics and business data
- **Responsive Design**: Mobile-first approach with desktop optimization for investor presentations

### Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for server compilation
- **Type Safety**: Full TypeScript implementation with strict configuration
- **Code Quality**: ESLint and Prettier for code formatting and linting
- **Development Server**: Hot module replacement and error overlay for development efficiency

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe database toolkit for schema management and queries

### UI & Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Icon library for consistent iconography

### Data Visualization
- **Recharts**: React-based charting library for financial and market data visualization
- **Chart.js ecosystem**: For advanced chart customization and interactivity

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **Zod**: Runtime type validation and schema definition

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development environment integration

### Business Data Sources
- Market research data from Russian AI industry reports
- Financial modeling based on MSB automation case studies
- Marketing metrics from Russian digital advertising platforms
- Investment analysis data for technology startups in Russia