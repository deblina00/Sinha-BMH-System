// src/app/careers/[id]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  IndianRupee,
  Users,
  Building2,
} from "lucide-react";

import ApplyForm from "@/components/careers/ApplyForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Job {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  vacancies: number;
  description: string;
  active: boolean;
  createdAt: string;
}

async function getJob(id: string): Promise<Job | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

export default async function CareerDetailsPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const job = await getJob(params.id);

  if (!job) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/careers"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ember hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_420px]">
          <div>
            <Badge className="mb-5">
              {job.department}
            </Badge>

            <h1 className="text-5xl font-bold">
              {job.title}
            </h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <Card className="flex items-center gap-3 p-5">
                <MapPin className="h-5 w-5 text-ember" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Location
                  </p>

                  <p className="font-semibold">
                    {job.location}
                  </p>
                </div>
              </Card>

              <Card className="flex items-center gap-3 p-5">
                <BriefcaseBusiness className="h-5 w-5 text-ember" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Employment
                  </p>

                  <p className="font-semibold">
                    {job.type}
                  </p>
                </div>
              </Card>

              <Card className="flex items-center gap-3 p-5">
                <Clock3 className="h-5 w-5 text-ember" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Experience
                  </p>

                  <p className="font-semibold">
                    {job.experience}
                  </p>
                </div>
              </Card>

              <Card className="flex items-center gap-3 p-5">
                <IndianRupee className="h-5 w-5 text-ember" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Salary
                  </p>

                  <p className="font-semibold">
                    {job.salary}
                  </p>
                </div>
              </Card>

              <Card className="flex items-center gap-3 p-5">
                <Users className="h-5 w-5 text-ember" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Vacancies
                  </p>

                  <p className="font-semibold">
                    {job.vacancies}
                  </p>
                </div>
              </Card>

              <Card className="flex items-center gap-3 p-5">
                <Building2 className="h-5 w-5 text-ember" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Department
                  </p>

                  <p className="font-semibold">
                    {job.department}
                  </p>
                </div>
              </Card>
            </div>

            <Separator className="my-10" />

            <div>
              <h2 className="text-3xl font-bold">
                Job Description
              </h2>

              <div
                className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-headings:font-semibold prose-a:text-ember"
                dangerouslySetInnerHTML={{
                  __html: job.description,
                }}
              />
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="rounded-3xl border-border/60 p-8 shadow-lg">
                <h2 className="text-3xl font-bold">
                  Apply Now
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Fill out the application form below and
                  upload your latest resume.
                </p>

                <Separator className="my-6" />

                <ApplyForm
                  jobId={job._id}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}