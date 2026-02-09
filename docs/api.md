# Trendix API Architecture

## Core services
- **Identity & Auth**: JWT/OAuth, role-based access control.
- **Marketplace**: product stories, vendor profiles, dropshipper collections.
- **Orders**: routing, fulfillment updates, customer timeline.
- **Payments**: multi-gateway checkout + payout scheduling.
- **Automation**: inventory sync, commission engine, dispute lifecycle.

## Example endpoints
### Customer
- `GET /explore/story-stream` – use-case narrative discovery.
- `GET /products/:id/story` – story detail, shipping lane, vendor trust.
- `POST /checkout/session` – create payment intent.

### Vendor
- `POST /vendor/onboard` – identity + compliance.
- `GET /vendor/dashboard` – inventory, orders, analytics.
- `PATCH /vendor/dropshipper-access` – approve/restrict dropshipper.

### Dropshipper
- `POST /dropshipper/import` – import product into storefront.
- `PATCH /dropshipper/margin` – adjust profit margin rules.
- `POST /orders/route` – route order to vendor.

### Automation
- `POST /automation/inventory-sync` – webhook updates.
- `POST /automation/payouts/run` – scheduled payouts.
- `POST /automation/disputes/escalate` – dispute lifecycle handler.

## Eventing
Use a message broker (Kafka/SQS) with topics:
- `orders.routed`
- `inventory.updated`
- `payouts.scheduled`
- `disputes.opened`
