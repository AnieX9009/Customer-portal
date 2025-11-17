export type CustomerFormData = {
  customer_code?: string;
  name: string;
  customer_type?: "" | "Distributor" | "Retailer" | "Dealer" | "Wholesaler";
  gst_number?: string;
  pan_number?: string;

  billing_plant?: string;
  company_code?: string;
  sales_org?: string;
  distribution_channel?: string;
  division?: string;

  address_line1: string;
  address_line2?: string;
  pincode: string;
  city: string;
  state: string;
  country?: string;

  contact_name: string;
  mobile_number: string;
  email: string;
  alt_mobile?: string;
  alt_email?: string;

  reconciliation_account?: string;
  payment_terms?: string;
  credit_limit?: number;

  sales_district?: string;
  sales_office?: string;
  sales_group?: string;
  sales_rep?: string;

  doc_gst_cert?: boolean;
  doc_pan?: boolean;
  gst_document?: File;
  pan_document?: File;
};
