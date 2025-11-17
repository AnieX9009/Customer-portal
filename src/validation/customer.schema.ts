import { z } from "zod";

export const customerSchema = z.object({
  customer_code: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  customer_type: z.enum(["Distributor", "Retailer", "Dealer", "Wholesaler", ""]).optional(),
  gst_number: z.string().min(1, "GST number is required"), // Made required
  pan_number: z.string().optional(),

  billing_plant: z.string().optional(),
  company_code: z.string().optional(),
  sales_org: z.string().optional(),
  distribution_channel: z.string().optional(),
  division: z.string().optional(),

  address_line1: z.string().min(1, "Address is required"),
  address_line2: z.string().optional(),
  pincode: z.string().min(1, "Pincode is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().optional(),

  contact_name: z.string().min(1, "Contact name is required"),
  mobile_number: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  alt_mobile: z.string().optional(),
  alt_email: z.string().email().optional().or(z.literal("")),

  reconciliation_account: z.string().optional(),
  payment_terms: z.string().optional(),
  credit_limit: z.number().optional(),

  sales_district: z.string().optional(),
  sales_office: z.string().optional(),
  sales_group: z.string().optional(),
  sales_rep: z.string().optional(),

  doc_gst_cert: z.boolean().optional(),
  doc_pan: z.boolean().optional(),
  gst_document: z.instanceof(File).optional(), // Added
  pan_document: z.instanceof(File).optional(), // Added
});

export type CustomerSchema = z.infer<typeof customerSchema>;
