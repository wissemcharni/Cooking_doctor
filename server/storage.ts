// Storage interface for tiramisu orders (webhook-based, no database storage needed)
// This app uses webhook integration instead of traditional storage

export interface IStorage {
  // Placeholder interface - orders are sent directly to webhooks
  // No storage methods needed for this implementation
}

export class MemStorage implements IStorage {
  constructor() {
    // Webhook-based architecture - no local storage needed
  }
}

export const storage = new MemStorage();
