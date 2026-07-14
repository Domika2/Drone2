import express, { Request, Response } from "express";

interface OrderRoutePayload {
  orderId?: string;
  dropshipperId?: string;
  vendorId?: string;
}

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "trendix-api" });
});

app.get("/explore/story-stream", (_req: Request, res: Response) => {
  res.json({
    stream: [
      {
        id: "story-remote-work",
        title: "Remote work rituals",
        summary: "Focused tools, calm lighting, and posture-friendly gear.",
        filters: ["delivery-speed", "vendor-rating", "local-source"],
      },
      {
        id: "story-travel",
        title: "Long-haul comfort",
        summary: "Carry-on essentials with verified shipping lanes.",
        filters: ["international", "fast-shipping"],
      },
    ],
  });
});

app.get("/vendors", (_req: Request, res: Response) => {
  res.json({
    vendors: [
      {
        id: "ven-astral-fabric",
        name: "Astral Fabric Studio",
        rating: 4.8,
        dropshipperAccess: "approved",
        fulfillmentTimeDays: 3,
      },
      {
        id: "ven-solar-tech",
        name: "Solar Tech Works",
        rating: 4.6,
        dropshipperAccess: "restricted",
        fulfillmentTimeDays: 5,
      },
    ],
  });
});

app.get("/dropshippers", (_req: Request, res: Response) => {
  res.json({
    dropshippers: [
      {
        id: "drop-nova-curations",
        name: "Nova Curations",
        activeCollections: 12,
        autoSyncEnabled: true,
      },
    ],
  });
});

app.post(
  "/orders/route",
  (req: Request<never, unknown, OrderRoutePayload>, res: Response) => {
    const { orderId, dropshipperId, vendorId } = req.body;

    res.json({
      orderId,
      dropshipperId,
      vendorId,
      status: "routed",
      timeline: [
        "customer-confirmed",
        "dropshipper-forwarded",
        "vendor-queued",
      ],
    });
  },
);

app.listen(port, () => {
  console.log(`Trendix API running on ${port}`);
});
