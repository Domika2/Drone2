# Trendix Automation Workflows

## Order routing
1. Customer checkout triggers `orders.routed` event.
2. Dropshipper receives order + forwards to vendor automatically.
3. Vendor confirms fulfillment timeline.
4. Customer timeline updates in real-time.

## Inventory sync
- Vendors publish stock updates via webhook.
- Dropshippers auto-sync pricing + availability.
- Low-stock alerts trigger product visibility updates.

## Commission + payouts
- Commission engine calculates vendor payout and dropshipper margin.
- Scheduled payout batches executed weekly.
- Dispute holds block payout release until resolution.

## Dispute handling
- Automated intake with rule-based triage.
- Escalate to human support if SLA exceeds threshold.
- Resolution updates propagate to all stakeholders.

## AI recommendations
- Behavioral signals (session intent, story interactions) feed recommendation engine.
- Prioritize relevance over popularity to avoid commodity bias.
