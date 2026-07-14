-- Trendix core schema (PostgreSQL)

CREATE TABLE users (
  id UUID PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('customer', 'vendor', 'dropshipper')),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  locale TEXT DEFAULT 'en-US',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE vendor_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  brand_name TEXT NOT NULL,
  verification_status TEXT NOT NULL,
  rating NUMERIC(2,1) DEFAULT 0,
  payout_schedule TEXT DEFAULT 'weekly'
);

CREATE TABLE dropshipper_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  storefront_name TEXT NOT NULL,
  auto_sync_enabled BOOLEAN DEFAULT true,
  rating NUMERIC(2,1) DEFAULT 0
);

CREATE TABLE customer_profiles (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  wishlist JSONB DEFAULT '[]',
  preferences JSONB DEFAULT '{}'
);

CREATE TABLE vendor_dropper_access (
  id UUID PRIMARY KEY,
  vendor_id UUID REFERENCES vendor_profiles(id),
  dropshipper_id UUID REFERENCES dropshipper_profiles(id),
  status TEXT NOT NULL CHECK (status IN ('approved', 'restricted', 'pending')),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE products (
  id UUID PRIMARY KEY,
  vendor_id UUID REFERENCES vendor_profiles(id),
  title TEXT NOT NULL,
  use_case TEXT NOT NULL,
  story TEXT NOT NULL,
  base_price NUMERIC(10,2) NOT NULL,
  inventory_count INT NOT NULL,
  shipping_method TEXT NOT NULL,
  active BOOLEAN DEFAULT true
);

CREATE TABLE dropshipper_listings (
  id UUID PRIMARY KEY,
  dropshipper_id UUID REFERENCES dropshipper_profiles(id),
  product_id UUID REFERENCES products(id),
  margin_percent NUMERIC(5,2) NOT NULL,
  custom_price NUMERIC(10,2) NOT NULL,
  synced_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  customer_id UUID REFERENCES customer_profiles(id),
  dropshipper_id UUID REFERENCES dropshipper_profiles(id),
  vendor_id UUID REFERENCES vendor_profiles(id),
  status TEXT NOT NULL,
  total_amount NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_events (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  status TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE payouts (
  id UUID PRIMARY KEY,
  vendor_id UUID REFERENCES vendor_profiles(id),
  order_id UUID REFERENCES orders(id),
  amount NUMERIC(10,2) NOT NULL,
  status TEXT NOT NULL,
  scheduled_for TIMESTAMP
);

CREATE TABLE disputes (
  id UUID PRIMARY KEY,
  order_id UUID REFERENCES orders(id),
  opened_by UUID REFERENCES users(id),
  status TEXT NOT NULL,
  resolution_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  channel TEXT NOT NULL,
  payload JSONB NOT NULL,
  sent_at TIMESTAMP
);
