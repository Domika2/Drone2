import "./styles.css";

export default function App() {
  return (
    <div className="frame">
      <header>
        <div className="brand">
          <h1>Trendix</h1>
          <div className="pill-nav">
            <div className="pill">Explore Stories</div>
            <div className="pill">Vendor Hubs</div>
            <div className="pill">Dropshipper Labs</div>
            <div className="pill">Resolution Center</div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="module">
          <small>Global marketplace, human cadence</small>
          <h2>Shop by life moments, not crowded shelves.</h2>
          <p>
            Trendix connects vendors and curated dropshippers with customers who want stories, speed,
            and transparency. Each product carries its origin, delivery path, and maker-backed
            guarantees.
          </p>
          <div className="cta-row">
            <button className="cta primary">Start exploring</button>
            <button className="cta secondary">Become a vendor</button>
            <button className="cta secondary">Launch a dropship store</button>
          </div>
        </div>
        <div className="module">
          <div className="panel">
            <h3>Discovery flows</h3>
            <ul>
              <li>Browse by problem solved ("long-haul travel comfort", "remote work rituals").</li>
              <li>Live shipping pulse and vendor trust badges.</li>
              <li>Side-by-side comparison in narrative view.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="story-grid">
        <article className="panel accent">
          <div className="module">
            <small>Customer view</small>
            <h3>Guided discovery</h3>
            <p>
              Adaptive filters tune results by delivery speed, local sourcing, vendor rating, and
              sustainability. Wishlist and comparison live in a single timeline.
            </p>
          </div>
        </article>
        <article className="panel moss">
          <div className="module">
            <small>Vendor hub</small>
            <h3>Signal-first operations</h3>
            <p>
              Manage inventory, fulfillment, and pricing in one flow. Vendors can approve or restrict
              dropshippers with a single toggle.
            </p>
          </div>
        </article>
        <article className="panel">
          <div className="module">
            <small>Dropshipper hub</small>
            <h3>Curated collections</h3>
            <p>
              Pull vendor-verified products into your storefront, set margin rules, and sync timelines
              automatically. Orders route to vendors without manual handoffs.
            </p>
          </div>
        </article>
        <article className="panel">
          <div className="module">
            <small>Automation layer</small>
            <h3>Always-on orchestration</h3>
            <div className="swimlanes">
              <div className="lane">
                <span>Order routing</span> Customer → Dropshipper → Vendor → Courier.
              </div>
              <div className="lane">
                <span>Inventory sync</span> Real-time stock signals + alert thresholds.
              </div>
              <div className="lane">
                <span>Payouts</span> Scheduled vendor settlements with dispute holds.
              </div>
            </div>
          </div>
        </article>
        <article className="panel plum">
          <div className="module">
            <small>Product storytelling</small>
            <h3>Every listing is a mini brand.</h3>
            <p>
              Origin stories, quality cues, and shipping method explainers create trust. Collections
              feel like editorial features instead of catalog grids.
            </p>
          </div>
        </article>
      </section>

      <footer className="footer">
        <p>Trendix — Marketplace for momentum. Built with trust, automation, and clarity.</p>
        <p>Role-based dashboards • Secure checkout • Real-time order tracking</p>
      </footer>
    </div>
  );
}
