# Trendix Deployment

## Frontend (Vercel)
1. Set `apps/web` as the project root.
2. Install dependencies and run build (e.g., Next.js build).
3. Configure environment variables for API base URL.

## API (AWS or DigitalOcean)
1. Build container image for `apps/api`.
2. Provision Postgres database and set connection secrets.
3. Set environment variables:
   - `DATABASE_URL`
   - `JWT_SECRET`
   - `PAYMENT_PROVIDER_KEY`
4. Enable autoscaling + load balancer.

## Storage + CDN
- Use S3-compatible object storage for media.
- Configure CDN caching for product media and story assets.

## Observability
- Centralized logs (CloudWatch/Datadog).
- Metrics on order routing latency, payout schedules, dispute resolution time.
