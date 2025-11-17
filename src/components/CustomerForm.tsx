import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerSchema } from "../validation/customer.schema";
import type { CustomerSchema } from "../validation/customer.schema";
import { createCustomer } from "../api/customerApi";
import { toast } from "sonner";

const INPUT_CLASS =
  "w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200";

const LABEL_CLASS = "text-sm font-medium text-foreground mb-1.5 flex items-center justify-between";

function Field({ label, required, children, error }: { label: string; required?: boolean; children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      <div className={LABEL_CLASS}>
        <span>{label}</span>
        {required && <span className="text-xs text-destructive">Required</span>}
      </div>
      {children}
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </label>
  );
}

export default function CustomerForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CustomerSchema>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      country: "India",
    },
  });

  const onSubmit = async (data: CustomerSchema) => {
    try {
      await createCustomer(data);
      toast.success("Customer created successfully and synced to SAP!");
      reset();
    } catch (err: any) {
      toast.error(err?.response?.data?.error || err.message || "Failed to create customer");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Grid: 2 columns on lg */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left column */}
        <div className="space-y-6 animate-slide-in">
          {/* Basic Details */}
          <div className="p-6 shadow-lg glass-effect rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-base font-semibold text-foreground">
              <div className="w-1 h-5 rounded-full bg-gradient-accent"></div>
              Basic Details
            </h3>

            <div className="space-y-4">
              <Field label="Customer Code" required error={errors.customer_code?.message}>
                <input className={INPUT_CLASS} {...register("customer_code")} placeholder="e.g. CUST2001" />
              </Field>

              <Field label="Name" required error={errors.name?.message}>
                <input className={INPUT_CLASS} {...register("name")} placeholder="Distributor / Customer name" />
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Type">
                  <select className={INPUT_CLASS} {...register("customer_type")}>
                    <option value="">Select Type</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Dealer">Dealer</option>
                    <option value="Wholesaler">Wholesaler</option>
                  </select>
                </Field>

                <Field label="Division / Brand">
                  <select className={INPUT_CLASS} {...register("division")}>
                    <option value="">Select Brand</option>
                    <option value="DIV01">Lux Cozi (DIV01)</option>
                    <option value="DIV02">ONN (DIV02)</option>
                    <option value="DIV03">PYNK (DIV03)</option>
                    <option value="DIV04">Parker (DIV04)</option>
                    <option value="DIV05">Mozzee (DIV05)</option>
                  </select>
                </Field>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="p-6 shadow-lg glass-effect rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-base font-semibold text-foreground">
              <div className="w-1 h-5 rounded-full bg-gradient-accent"></div>
              Contact Information
            </h3>
            <div className="space-y-4">
              <Field label="Contact Person" required error={errors.contact_name?.message}>
                <input className={INPUT_CLASS} {...register("contact_name")} placeholder="Contact full name" />
              </Field>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Mobile" required error={errors.mobile_number?.message}>
                  <input className={INPUT_CLASS} {...register("mobile_number")} placeholder="+91xxxxxxxxxx" />
                </Field>

                <Field label="Email" required error={errors.email?.message}>
                  <input className={INPUT_CLASS} type="email" {...register("email")} placeholder="contact@company.com" />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Field label="Alt Mobile">
                  <input className={INPUT_CLASS} {...register("alt_mobile")} placeholder="Optional" />
                </Field>
                <Field label="Alt Email">
                  <input className={INPUT_CLASS} type="email" {...register("alt_email")} placeholder="Optional" />
                </Field>
              </div>
            </div>
          </div>

          {/* Finance */}
          <div className="p-6 shadow-lg glass-effect rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-base font-semibold text-foreground">
              <div className="w-1 h-5 rounded-full bg-gradient-accent"></div>
              Finance Details
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <Field label="Payment Terms">
                <input className={INPUT_CLASS} {...register("payment_terms")} placeholder="NET30 / NET45" />
              </Field>

              <Field label="Credit Limit">
                <input className={INPUT_CLASS} {...register("credit_limit", { valueAsNumber: true })} placeholder="Numeric (optional)" type="number" />
              </Field>

              <Field label="Reconciliation Account">
                <input className={INPUT_CLASS} {...register("reconciliation_account")} placeholder="FI Reconciliation account" />
              </Field>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.1s" }}>
          {/* Sales & Location */}
          <div className="p-6 shadow-lg glass-effect rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-base font-semibold text-foreground">
              <div className="w-1 h-5 rounded-full bg-gradient-accent"></div>
              Sales & Location
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Billing Plant">
                  <input className={INPUT_CLASS} {...register("billing_plant")} placeholder="PLT01" />
                </Field>

                <Field label="Company Code">
                  <input className={INPUT_CLASS} {...register("company_code")} placeholder="LUX" />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Sales Org">
                  <input className={INPUT_CLASS} {...register("sales_org")} placeholder="LUX_IN" />
                </Field>

                <Field label="Distribution Channel">
                  <input className={INPUT_CLASS} {...register("distribution_channel")} placeholder="RETAIL" />
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Sales District">
                  <input className={INPUT_CLASS} {...register("sales_district")} placeholder="ASM area" />
                </Field>

                <Field label="Sales Rep">
                  <input className={INPUT_CLASS} {...register("sales_rep")} placeholder="ASM name / code" />
                </Field>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="p-6 shadow-lg glass-effect rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-base font-semibold text-foreground">
              <div className="w-1 h-5 rounded-full bg-gradient-accent"></div>
              Address
            </h3>
            <div className="space-y-4">
              <Field label="Address Line 1" required error={errors.address_line1?.message}>
                <input className={INPUT_CLASS} {...register("address_line1")} placeholder="Street, building, area" />
              </Field>

              <Field label="Address Line 2">
                <input className={INPUT_CLASS} {...register("address_line2")} placeholder="Optional" />
              </Field>

              <div className="grid grid-cols-3 gap-3">
                <Field label="Pincode" required error={errors.pincode?.message}>
                  <input className={INPUT_CLASS} {...register("pincode")} placeholder="700001" />
                </Field>
                <Field label="City" required error={errors.city?.message}>
                  <input className={INPUT_CLASS} {...register("city")} placeholder="Kolkata" />
                </Field>
                <Field label="State" required error={errors.state?.message}>
                  <input className={INPUT_CLASS} {...register("state")} placeholder="West Bengal" />
                </Field>
              </div>

              <Field label="Country">
                <input className={INPUT_CLASS} {...register("country")} placeholder="India" />
              </Field>
            </div>
          </div>

          {/* Documents */}
          <div className="p-6 shadow-lg glass-effect rounded-2xl">
            <h3 className="flex items-center gap-2 mb-4 text-base font-semibold text-foreground">
              <div className="w-1 h-5 rounded-full bg-gradient-accent"></div>
              Documents
            </h3>
            <div className="space-y-4">
              <Field label="GST Number" required error={errors.gst_number?.message}>
                <input className={INPUT_CLASS} {...register("gst_number")} placeholder="e.g. 27AABCT1234G1Z0" />
              </Field>

              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-input text-accent focus:ring-2 focus:ring-accent"
                    {...register("doc_gst_cert")}
                  />
                  <span className="text-sm text-foreground">GST Certificate</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-input text-accent focus:ring-2 focus:ring-accent"
                    {...register("doc_pan")}
                  />
                  <span className="text-sm text-foreground">PAN Document</span>
                </label>
              </div>

              <div className="pt-2 space-y-3">
                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">Upload GST Document</label>
                  <label className="flex items-center justify-center w-full px-4 py-3 transition-colors border-2 border-dashed rounded-lg cursor-pointer border-input hover:bg-card/50">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="mt-2 text-sm text-muted-foreground">GST Certificate (.pdf, .jpg, .png)</span>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" {...register("gst_document")} />
                  </label>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">Upload PAN Document</label>
                  <label className="flex items-center justify-center w-full px-4 py-3 transition-colors border-2 border-dashed rounded-lg cursor-pointer border-input hover:bg-card/50">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span className="mt-2 text-sm text-muted-foreground">PAN Document (.pdf, .jpg, .png)</span>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" {...register("pan_document")} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition-all duration-200"
        >
          Reset
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative overflow-hidden group px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 transition-all duration-200"
        >
          {/* shining sweep */}
          <span className="absolute inset-y-0 left-0 w-20 bg-white opacity-0 transform -translate-x-full rotate-12 group-hover:opacity-30 group-hover:translate-x-[200%] transition-all duration-700 pointer-events-none" />
          {isSubmitting ? "Creating..." : "Create Customer"}
        </button>
      </div>
    </form>
  );
}