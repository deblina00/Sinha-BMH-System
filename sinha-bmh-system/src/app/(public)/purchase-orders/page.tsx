//src/app/purchase-orders/page.tsx

"use client";

import { useEffect, useState } from "react";

import {
  Loader2,
  Lock,
  FileText,
  Download,
  Search,
  CalendarDays,
  Building2,
} from "lucide-react";

import { toast } from "sonner";

import LoginForm from "@/components/admin/LoginForm";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PurchaseOrder {
  _id: string;
  poNumber: string;
  clientName: string;
  title: string;
  description: string;
  fileUrl: string;
  createdAt: string;
}

export default function PurchaseOrdersPage() {
  const [token, setToken] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [purchaseOrders, setPurchaseOrders] =
    useState<PurchaseOrder[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const stored = localStorage.getItem("token");

    if (!stored) {
      setLoading(false);
      setToken(null);
      return;
    }

    setToken(stored);
    fetchPOs(stored);
  }, []);

  async function fetchPOs(jwt: string) {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/po`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        localStorage.removeItem("token");
        setToken(null);

        toast.error(
          data.message || "Session expired. Please login again."
        );

        return;
      }

      setPurchaseOrders(data);
    } catch {
      localStorage.removeItem("token");
      setToken(null);

      toast.error("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  if (!token) {
    return (
      <section className="relative overflow-hidden bg-brand/10 py-24">
        <div className="absolute inset-0 grid-lines opacity-20" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
              <Lock className="h-4 w-4" />
              Secure Company Portal
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight">
              Purchase Order
              <br />
              Repository
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              This section contains confidential Purchase Orders,
              client documentation and project records.
              Access is restricted to authorized Sinha BMH
              administrators only.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Lock className="h-6 w-6 text-brand" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Protected Access
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Only verified administrators can view
                    Purchase Orders.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <FileText className="h-6 w-6 text-brand" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Confidential Documents
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Tender files, Purchase Orders and project
                    records are securely stored.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                  <Building2 className="h-6 w-6 text-brand" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Internal Company Portal
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    Intended exclusively for Sinha BMH
                    management and authorized personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-border/60 bg-background/80 p-2 shadow-2xl backdrop-blur-xl">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-brand" />
      </div>
    );
  }

  const filtered =
    purchaseOrders.filter((po) =>
      (
        po.poNumber +
        po.clientName +
        po.title
      )
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold">
              Purchase Orders
            </h1>

            <p className="mt-2 text-muted-foreground">
              Secure Purchase Order
              Repository
            </p>
          </div>

          <Badge className="px-4 py-2 text-sm">
            {filtered.length} Files
          </Badge>
        </div>

        <Card className="mt-8 p-5">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

            <Input
              placeholder="Search Purchase Orders..."
              className="pl-10"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />
          </div>
        </Card>

        <div className="mt-8 grid gap-6">
          {filtered.map((po) => (
            <Card
              key={po._id}
              className="rounded-3xl p-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <Badge>
                    {po.poNumber}
                  </Badge>

                  <h2 className="text-2xl font-bold">
                    {po.title}
                  </h2>

                  <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {po.clientName}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(
                        po.createdAt
                      ).toLocaleDateString()}
                    </div>
                  </div>

                  <p className="max-w-3xl text-muted-foreground">
                    {po.description}
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                >
                  <a
                    href={po.fileUrl}
                    target="_blank"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border">
                {po.fileUrl.endsWith(
                  ".pdf"
                ) ? (
                  <iframe
                    src={po.fileUrl}
                    className="h-[650px] w-full"
                  />
                ) : (
                  <img
                    src={po.fileUrl}
                    alt={po.title}
                    className="w-full"
                  />
                )}
              </div>

              <div className="mt-5 flex justify-end">
                <Button
                  variant="outline"
                  asChild
                >
                  <a
                    href={po.fileUrl}
                    target="_blank"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Full Document
                  </a>
                </Button>
              </div>
            </Card>
          ))}

          {filtered.length === 0 && (
            <Card className="py-20 text-center">
              <FileText className="mx-auto h-14 w-14 text-muted-foreground" />

              <h3 className="mt-5 text-2xl font-semibold">
                No Purchase Orders Found
              </h3>

              <p className="mt-2 text-muted-foreground">
                No matching Purchase
                Orders are available.
              </p>
            </Card>
          )}
        </div> 
      </div>
    </section>
  );
}