# Game Store - Next.js E-commerce Application

A modern, responsive e-commerce application built with Next.js 15, React 19, and TypeScript. This project demonstrates a scalable architecture for a game store with shopping cart functionality, promotional discounts, and comprehensive testing.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with React 19 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS and ShadCN UI
- **Shopping Cart**: Full cart functionality with add/remove items
- **Promotional System**: 3-for-2 promotion and VIP discount (15% off)
- **Real-time API**: Integration with RAWG API for game data
- **Comprehensive Testing**: Unit tests with Vitest and E2E tests with Playwright
- **Code Quality**: Biome for linting and formatting
- **Performance**: Turbopack for fast development and builds

## 📋 Prerequisites

- **Node.js**: Version 22 or higher
- **pnpm**: Version 10.8.0 or higher (recommended package manager)

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd navalia-take-home-thiagolira
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

**Note**: The application includes a demo API key for development purposes, you can skip this step if you just want to run the application to test.

Create a `.env.local` file in the root directory:

```env
RAWG_API_KEY=your_rawg_api_key_here
```

### 4. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

### End-to-End Tests

I just added E2E Tests due to time constraints, but I would have added unit tests as well mainly for helpers functions and single components.

```bash
# Run E2E tests
pnpm test:e2e

# Run E2E tests with UI
pnpm test:e2e:ui
```

## 🏗️ Architecture & Code Organization

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── components/         # Page-specific components
│   │   ├── CheckoutButton/
│   │   ├── CheckoutDrawer/
│   │   ├── ProductCard/
│   │   └── ProductGrid/
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable UI components
│   ├── atoms/             # Atomic design - basic components
│   │   ├── Button/
│   │   └── Switch/
│   └── molecules/         # Molecular design - composite components
│       ├── Card/
│       └── Drawer/
├── contexts/              # React contexts for state management
│   └── Checkout/          # Shopping cart context
├── services/              # API services and data layer
│   └── games/
│       └── get/
│           ├── api.ts     # API calls
│           └── adapters.ts # Data transformation
├── types/                 # TypeScript type definitions
├── helpers/               # Utility functions
└── tests/                 # Test files
    └── e2e/              # End-to-end tests
```

### Architectural Decisions

#### 1. **Atomic Design Pattern**
- **Why**: Promotes reusability and maintainability
- **Implementation**: Components are organized as atoms (basic) and molecules (composite)
- **Benefits**: Consistent UI, easier testing, scalable component library

#### 2. **Context API for State Management**
- **Why**: Lightweight solution for cart state without external dependencies
- **Implementation**: `CheckoutContext` manages cart items, promotions, and UI state
- **Benefits**: Simple, React-native, no bundle size overhead

#### 3. **Service Layer Pattern**
- **Why**: Separates data fetching logic from UI components
- **Implementation**: `services/games/get/api.ts` handles API calls
- **Benefits**: Reusable, testable, easy to mock

#### 4. **Adapter Pattern**
- **Why**: Transforms external API data to internal format
- **Implementation**: `adapters.ts` converts RAWG API response to `Game` interface
- **Benefits**: Decouples external API from internal data structure

#### 5. **TypeScript-First Approach**
- **Why**: Type safety and better developer experience
- **Implementation**: Comprehensive type definitions in `types/` directory
- **Benefits**: Catch errors early, better IDE support, self-documenting code

#### 6. **Component Composition**
- **Why**: Flexible and reusable component architecture
- **Implementation**: Components accept children and props for customization
- **Benefits**: DRY principle, flexible UI composition

### State Management

The application uses React Context API for state management:

- **CheckoutContext**: Manages shopping cart, promotions, and checkout UI
- **Local State**: Component-specific state (loading, error states)
- **Server State**: Game data fetched from RAWG API

### Data Flow

1. **Game Data**: RAWG API → Service Layer → Adapter → React Components
2. **Cart Operations**: User Action → Context → State Update → UI Re-render
3. **Promotions**: Cart Items → Promotion Calculator → Context → UI Update

## 🔒 Security Considerations

### ⚠️ Important Security Note

**Discount Calculation Implementation**

The promotional discount calculations are currently implemented in the frontend (`src/contexts/Checkout/helpers.ts`) for demonstration purposes. However, this approach has significant security implications, so if i had more time i would implement it in the backend:

#### Current Implementation (Frontend)
```typescript
// src/contexts/Checkout/helpers.ts
export const calculatePromotion = (items: CheckoutItem[], isVipClient = false) => {
  // Discount logic runs in browser
}