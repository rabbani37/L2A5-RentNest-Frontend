import {
  CircleCheck,
  Clock3,
  Wallet,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { IPayment } from "@/lib/paymentTypes";
import PaymentTable from "../_components/payment/payment-table";


const payments: IPayment[] = [
  {
    id: "03ebb5d7-21f5-493d-8090-e90e3671d2d2",
    transactionId:
      "cs_test_a13V8ElJC19AI7hKXz8SJeIWWowcAzSodFnnD6Z0Gk2q5hX4JXf47AzZ4H",
    rentalRequestId:
      "0be0069b-f984-465f-8d04-d081c9b6fe9f",
    tenantId:
      "2b4a6f52-7b96-4c8e-864e-199d8b4fa113",
    amount: "38000",
    method: "card",
    provider: "STRIPE",
    status: "COMPLETED",
    paidAt: "2026-07-11T05:46:01.176Z",
    createdAt: "2026-07-11T05:45:47.943Z",

    rentalRequest: {
      property: {
        id: "aad9f089-c579-4caa-a23e-d4b75aefd7a1",
        title: "Family House in Uttara Sector 7",
        price: "38000",
      },
    },
  },
];

export default function TenantPaymentsPage() {
  const totalPaid = payments
    .filter((payment) => payment.status === "COMPLETED")
    .reduce(
      (total, payment) => total + Number(payment.amount),
      0
    );

  const pendingAmount = payments
    .filter((payment) => payment.status === "PENDING")
    .reduce(
      (total, payment) => total + Number(payment.amount),
      0
    );

  const completedCount = payments.filter(
    (payment) => payment.status === "COMPLETED"
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-medium text-primary">
          Tenant Dashboard
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Payments
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Track your rental payments and transaction history.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Paid
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                ৳{totalPaid.toLocaleString()}
              </h2>
            </div>

            <div className="rounded-xl bg-primary/10 p-3">
              <Wallet className="size-5 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Pending Amount
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                ৳{pendingAmount.toLocaleString()}
              </h2>
            </div>

            <div className="rounded-xl bg-yellow-100 p-3 dark:bg-yellow-950">
              <Clock3 className="size-5 text-yellow-600 dark:text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Completed Payments
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {completedCount}
              </h2>
            </div>

            <div className="rounded-xl bg-green-100 p-3 dark:bg-green-950">
              <CircleCheck className="size-5 text-green-600 dark:text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <PaymentTable payments={payments} />
    </div>
  );
}