import React from "react";
import CustomerForm from "../components/CustomerForm";
import { UserPlus } from "lucide-react";

const CreateCustomerPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col items-center justify-center gap-3 py-6 mb-2 text-center md:flex-row md:justify-start md:text-left">
          <div className="p-2 shadow-md md:p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700">
        <UserPlus className="w-5 h-5 text-white md:w-6 md:h-6" />
          </div>
          <div>
        <h1 className="text-2xl font-bold md:text-3xl text-foreground">Create Customer</h1>
        <p className="mt-1 text-xs md:text-sm text-muted-foreground">Add a new customer to the system and sync with SAP</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="p-8 glass-effect rounded-2xl shadow-elevated">
        <CustomerForm />
      </div>
    </div>
  );
};

export default CreateCustomerPage;
