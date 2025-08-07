import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Webhook endpoint for order submissions
  app.post("/api/webhook/order", async (req, res) => {
    try {
      const orderData = req.body;
      
      // Log the order for debugging
      console.log("Order received:", JSON.stringify(orderData, null, 2));
      
      // In a real implementation, you would forward this to Make.com/Zapier
      // or process it according to your webhook configuration
      
      // For now, we'll just acknowledge receipt
      res.status(200).json({
        success: true,
        message: "Order received successfully",
        orderId: `ORDER_${Date.now()}`,
      });
    } catch (error) {
      console.error("Order processing error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to process order",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
