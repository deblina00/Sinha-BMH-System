// src/app/admin/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  FileText,
  Clock3,
  CheckCircle2,
  UserCheck,
  TrendingUp,
  Loader2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type DashboardData = {
  totalJobs: number;
  totalApplications: number;
  totalPurchaseOrders: number;
  pendingApplications: number;
  shortlistedApplications: number;
  selectedApplications: number;
};

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardData>({
    totalJobs: 0,
    totalApplications: 0,
    totalPurchaseOrders: 0,
    pendingApplications: 0,
    shortlistedApplications: 0,
    selectedApplications: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    async function fetchDashboard() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/admin/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // 1. Guard against HTML error pages
        if (!res.ok) {
          throw new Error(`Server responded with status: ${res.status}`);
        }

        const data = await res.json();

        setStats(data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-ember" />
      </div>
    );
  }

  const cards = [
    {
      title: "Jobs",
      value: stats.totalJobs,
      icon: BriefcaseBusiness,
    },
    {
      title: "Applications",
      value: stats.totalApplications,
      icon: Users,
    },
    {
      title: "Purchase Orders",
      value: stats.totalPurchaseOrders,
      icon: FileText,
    },
    {
      title: "Pending",
      value: stats.pendingApplications,
      icon: Clock3,
    },
    {
      title: "Shortlisted",
      value: stats.shortlistedApplications,
      icon: TrendingUp,
    },
    {
      title: "Selected",
      value: stats.selectedApplications,
      icon: UserCheck,
    },
  ];

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Overview of Careers & Purchase Orders
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              className="group overflow-hidden border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:shadow-[0_20px_60px_-20px_oklch(0.72_0.19_45_/_0.35)]"
            >
              <CardContent className="relative p-7">

                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-muted-foreground">
                      {card.title}
                    </p>

                    <h2 className="mt-3 text-5xl font-bold text-ember">
                      {card.value}
                    </h2>

                  </div>

                  <div className="rounded-2xl bg-ember/10 p-4 transition group-hover:bg-ember group-hover:text-black">
                    <Icon className="h-8 w-8" />
                  </div>

                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="border-border bg-surface">
          <CardContent className="p-8">

            <h2 className="mb-8 text-xl font-semibold">
              Recruitment Summary
            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between">
                <span>Pending Applications</span>

                <span className="font-bold text-amber-400">
                  {stats.pendingApplications}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Shortlisted</span>

                <span className="font-bold text-sky-400">
                  {stats.shortlistedApplications}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Selected</span>

                <span className="font-bold text-green-500">
                  {stats.selectedApplications}
                </span>
              </div>

            </div>

          </CardContent>
        </Card>

        <Card className="border-border bg-surface">
          <CardContent className="p-8">

            <h2 className="mb-8 text-xl font-semibold">
              Quick Summary
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-5 w-5 text-ember" />

                <span>
                  {stats.totalJobs} Active Jobs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-ember" />

                <span>
                  {stats.totalApplications} Total Applications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-ember" />

                <span>
                  {stats.totalPurchaseOrders} Purchase Orders Uploaded
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />

                <span>
                  Recruitment System Running Normally
                </span>
              </div>

            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}