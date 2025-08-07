import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CountdownTimer from "@/components/ui/countdown-timer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { orderSchema, type Order } from "@shared/schema";
import { z } from "zod";

const orderFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  deliveryTime: z.string().min(1, "Delivery time is required"),
  notes: z.string().optional(),
  paymentMethod: z.literal("cash"),
  // Product selections
  classic: z.boolean().optional(),
  classicSize: z.string().optional(),
  classicQuantity: z.string().optional(),
  pistachio: z.boolean().optional(),
  pistachioSize: z.string().optional(),
  pistachioQuantity: z.string().optional(),
  strawberry: z.boolean().optional(),
  strawberrySize: z.string().optional(),
  strawberryQuantity: z.string().optional(),
  nutella: z.boolean().optional(),
  nutellaSize: z.string().optional(),
  nutellaQuantity: z.string().optional(),
  lotus: z.boolean().optional(),
  lotusSize: z.string().optional(),
  lotusQuantity: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

export default function Order() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      deliveryAddress: "",
      deliveryDate: "",
      deliveryTime: "",
      notes: "",
      paymentMethod: "cash",
    },
  });

  const submitOrderMutation = useMutation({
    mutationFn: async (data: Order) => {
      const webhookUrl = process.env.VITE_WEBHOOK_URL || "https://your-webhook-url.com/order";
      return apiRequest("POST", webhookUrl, data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Order Submitted!",
        description: "We'll contact you shortly to confirm your order.",
      });
    },
    onError: (error) => {
      toast({
        title: "Order Failed",
        description: "There was an error submitting your order. Please try again.",
        variant: "destructive",
      });
      console.error("Order submission error:", error);
    },
  });

  const onSubmit = (data: OrderFormData) => {
    const products = [];
    const pricing = { small: 6, medium: 10, party: 25 };

    // Process selected products
    if (data.classic && data.classicSize && data.classicQuantity) {
      products.push({
        name: "Classic Tiramisu",
        size: data.classicSize as "small" | "medium" | "party",
        quantity: parseInt(data.classicQuantity),
        price: pricing[data.classicSize as keyof typeof pricing] * parseInt(data.classicQuantity),
      });
    }

    if (data.pistachio && data.pistachioSize && data.pistachioQuantity) {
      products.push({
        name: "Pistachio Dreams",
        size: data.pistachioSize as "small" | "medium" | "party",
        quantity: parseInt(data.pistachioQuantity),
        price: pricing[data.pistachioSize as keyof typeof pricing] * parseInt(data.pistachioQuantity),
      });
    }

    if (data.strawberry && data.strawberrySize && data.strawberryQuantity) {
      products.push({
        name: "Strawberry Bliss",
        size: data.strawberrySize as "small" | "medium" | "party",
        quantity: parseInt(data.strawberryQuantity),
        price: pricing[data.strawberrySize as keyof typeof pricing] * parseInt(data.strawberryQuantity),
      });
    }

    if (data.nutella && data.nutellaSize && data.nutellaQuantity) {
      products.push({
        name: "Nutella Heaven",
        size: data.nutellaSize as "small" | "medium" | "party",
        quantity: parseInt(data.nutellaQuantity),
        price: pricing[data.nutellaSize as keyof typeof pricing] * parseInt(data.nutellaQuantity),
      });
    }

    if (data.lotus && data.lotusSize && data.lotusQuantity) {
      products.push({
        name: "Lotus Caramel",
        size: data.lotusSize as "small" | "medium" | "party",
        quantity: parseInt(data.lotusQuantity),
        price: pricing[data.lotusSize as keyof typeof pricing] * parseInt(data.lotusQuantity),
      });
    }

    if (products.length === 0) {
      toast({
        title: "No Products Selected",
        description: "Please select at least one tiramisu product.",
        variant: "destructive",
      });
      return;
    }

    const orderData: Order = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      deliveryAddress: data.deliveryAddress,
      products,
      deliveryDate: data.deliveryDate,
      deliveryTime: data.deliveryTime,
      notes: data.notes || "",
      paymentMethod: "cash",
    };

    submitOrderMutation.mutate(orderData);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-warmWhite min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-gold/10 border-gold shadow-xl">
              <CardContent className="p-12">
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
                <h1 className="font-playfair text-3xl font-bold text-espresso mb-4">Thank You!</h1>
                <p className="text-lg text-espresso/80 mb-6">
                  We've received your order and will contact you shortly to confirm the details. 
                  Get ready for an amazing tiramisu experience!
                </p>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-espresso"
                >
                  Place Another Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-espresso">
              Place Your Order
            </h1>
            <p className="text-xl text-espresso/70 max-w-2xl mx-auto">
              Just a few details and your premium tiramisu will be on its way
            </p>
          </div>
          
          <CountdownTimer />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-cream rounded-2xl p-8 shadow-xl space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-espresso mb-4">Personal Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-espresso">Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-warmWhite border-espresso/20 focus:border-gold" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-espresso">Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} className="bg-warmWhite border-espresso/20 focus:border-gold" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="deliveryAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-espresso">Delivery Address</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} className="bg-warmWhite border-espresso/20 focus:border-gold resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Order Details */}
                <div className="space-y-6">
                  <h3 className="font-playfair text-2xl font-bold text-espresso mb-4">Order Details</h3>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-espresso">Select Your Tiramisu</h4>
                    
                    {/* Classic Tiramisu */}
                    <div className="flex items-center justify-between p-4 bg-warmWhite rounded-lg border border-espresso/20">
                      <FormField
                        control={form.control}
                        name="classic"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="font-medium">Classic Tiramisu</FormLabel>
                          </FormItem>
                        )}
                      />
                      <div className="flex space-x-2">
                        <FormField
                          control={form.control}
                          name="classicSize"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="small">Small (€6)</SelectItem>
                                  <SelectItem value="medium">Medium (€10)</SelectItem>
                                  <SelectItem value="party">Party Box (€25)</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="classicQuantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input type="number" min="1" max="10" placeholder="Qty" className="w-16" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Repeat similar pattern for other products */}
                    {/* Pistachio Dreams */}
                    <div className="flex items-center justify-between p-4 bg-warmWhite rounded-lg border border-espresso/20">
                      <FormField
                        control={form.control}
                        name="pistachio"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="font-medium">Pistachio Dreams</FormLabel>
                          </FormItem>
                        )}
                      />
                      <div className="flex space-x-2">
                        <FormField
                          control={form.control}
                          name="pistachioSize"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-32">
                                    <SelectValue placeholder="Size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="small">Small (€6)</SelectItem>
                                  <SelectItem value="medium">Medium (€10)</SelectItem>
                                  <SelectItem value="party">Party Box (€25)</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="pistachioQuantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input type="number" min="1" max="10" placeholder="Qty" className="w-16" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Add similar blocks for strawberry, nutella, and lotus */}
                  </div>
                </div>
              </div>
              
              {/* Delivery Schedule */}
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="deliveryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-espresso">Delivery Date</FormLabel>
                      <FormControl>
                        <Input type="date" min={today} {...field} className="bg-warmWhite border-espresso/20 focus:border-gold" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="deliveryTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-espresso">Preferred Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} className="bg-warmWhite border-espresso/20 focus:border-gold" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Additional Notes */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-espresso">Special Notes (allergies, occasion, etc.)</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={3} className="bg-warmWhite border-espresso/20 focus:border-gold resize-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Payment Method */}
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-espresso font-semibold">Payment Method</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex items-center p-4 bg-warmWhite rounded-lg border border-espresso/20"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cash" id="cash" />
                          <label htmlFor="cash" className="flex items-center font-medium">
                            <i className="fas fa-money-bill-wave mr-2 text-gold"></i>
                            Cash on Delivery
                          </label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Submit Button */}
              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={submitOrderMutation.isPending}
                  className="w-full md:w-auto bg-gold text-espresso px-12 py-4 rounded-full font-bold text-lg hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {submitOrderMutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Place Your Order
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
