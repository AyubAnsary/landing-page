
import React, { useState } from "react";
import AnimatedText from "../ui/AnimatedText";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-citivise-50/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-flex px-4 py-1 rounded-full bg-citivise-50 text-citivise-700 text-sm font-medium mb-4 opacity-0 animate-fade-down" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
            Get in Touch
          </h2>
          <AnimatedText
            text="Ready to Grow Your Local Presence?"
            className="section-title"
            delay={200}
            as="h2"
          />
          <AnimatedText
            text="Contact us today to discuss how our local SEO services can help your business attract more customers in the Middle East."
            className="section-subtitle"
            delay={300}
            as="p"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="opacity-0 animate-fade-right" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            <div className="glass-card p-8 rounded-2xl shadow-md bg-white/90">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-citivise-50 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-citivise-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      Downtown Dubai, UAE
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-citivise-50 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-citivise-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <a href="mailto:info@citivise.com" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                      info@citivise.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-citivise-50 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-citivise-600" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <a href="tel:+97144001234" className="text-muted-foreground hover:text-citivise-600 transition-colors duration-200">
                      +971 4 400 1234
                    </a>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-4">Our Service Areas</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-citivise-50 px-3 py-2 rounded-lg text-sm text-center">
                  Dubai
                </div>
                <div className="bg-citivise-50 px-3 py-2 rounded-lg text-sm text-center">
                  Abu Dhabi
                </div>
                <div className="bg-citivise-50 px-3 py-2 rounded-lg text-sm text-center">
                  Sharjah
                </div>
                <div className="bg-citivise-50 px-3 py-2 rounded-lg text-sm text-center">
                  Riyadh
                </div>
                <div className="bg-citivise-50 px-3 py-2 rounded-lg text-sm text-center">
                  Doha
                </div>
                <div className="bg-citivise-50 px-3 py-2 rounded-lg text-sm text-center">
                  Muscat
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-left" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <div className="glass-card p-8 rounded-2xl shadow-md bg-white/90">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 rounded-full bg-citivise-50 flex items-center justify-center mb-4 text-citivise-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground text-center">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Full Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="bg-white border-gray-200" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Email Address <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                className="bg-white border-gray-200" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your phone number" 
                                className="bg-white border-gray-200" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium">
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company" 
                                className="bg-white border-gray-200" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">
                            Message <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <textarea
                              rows={4}
                              className="w-full px-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-citivise-500 focus:border-transparent transition-all duration-200 resize-none"
                              placeholder="How can we help you?"
                              {...field}
                            ></textarea>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-citivise-600 text-white rounded-lg font-medium hover:bg-citivise-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
