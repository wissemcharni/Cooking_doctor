import { z } from "zod";

export const orderSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  products: z.array(z.object({
    name: z.string(),
    size: z.enum(["small", "medium", "party"]),
    quantity: z.number().min(1),
    price: z.number(),
  })).min(1, "At least one product must be selected"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  deliveryTime: z.string().min(1, "Delivery time is required"),
  notes: z.string().optional(),
  paymentMethod: z.literal("cash"),
});

export type Order = z.infer<typeof orderSchema>;

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  pricing: z.object({
    small: z.number(),
    medium: z.number(),
    party: z.number(),
  }),
  badge: z.string().optional(),
});

export type Product = z.infer<typeof productSchema>;
