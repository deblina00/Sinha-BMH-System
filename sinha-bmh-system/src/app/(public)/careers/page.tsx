"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";

import {
  Loader2,
  Search,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";

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

export default function CareersPage() {
  const [jobs, setJobs] =
    useState<Job[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  async function fetchJobs() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`
      );

      const data =
        await res.json();

      setJobs(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  const filtered = useMemo(() => {
    return jobs.filter((job) =>
      (
        job.title +
        job.department +
        job.location
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [jobs, search]);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the future of
            <span className="text-gradient-ember">
              {" "}
              Bulk Material Handling
            </span>
          </>
        }
        description="We're always looking for talented engineers, designers, project managers and skilled professionals who want to build world-class industrial systems."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <Reveal>

            <Eyebrow>
              Open Positions
            </Eyebrow>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <h2 className="text-4xl font-semibold">
                Current Opportunities
              </h2>

              <div className="relative w-full max-w-md">

                <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                <Input
                  placeholder="Search jobs..."
                  className="pl-10"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </Reveal>

          {loading && (
            <div className="flex justify-center py-24">
              <Loader2 className="h-10 w-10 animate-spin text-ember" />
            </div>
          )}

          {!loading &&
            filtered.length === 0 && (
              <Card className="mt-14 p-16 text-center">

                <BriefcaseBusiness className="mx-auto h-12 w-12 text-muted-foreground" />

                <h3 className="mt-5 text-2xl font-semibold">
                  No Jobs Found
                </h3>

                <p className="mt-3 text-muted-foreground">
                  There are currently no
                  openings matching your
                  search.
                </p>

              </Card>
            )}

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {filtered.map((job, index) => (

              <Reveal
                key={job._id}
                delay={index * 0.05}
              >

                <Card className="group h-full overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:border-ember hover:shadow-[0_25px_60px_-25px_oklch(0.72_0.19_45_/_0.35)]">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <Badge>
                        {job.department}
                      </Badge>

                      <h3 className="mt-4 text-3xl font-semibold transition-colors group-hover:text-ember">
                        {job.title}
                      </h3>

                    </div>

                    <Users className="h-8 w-8 text-ember" />

                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-ember" />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <BriefcaseBusiness className="h-5 w-5 text-ember" />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock3 className="h-5 w-5 text-ember" />
                      {job.experience}
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="h-5 w-5 text-ember" />
                      {job.vacancies} Vacancy
                      {job.vacancies > 1
                        ? "ies"
                        : ""}
                    </div>

                  </div>

                  {job.salary && (
                    <div className="mt-6">
                      <Badge
                        variant="secondary"
                        className="text-base"
                      >
                        {job.salary}
                      </Badge>
                    </div>
                  )}

                  <div
                    className="mt-8 line-clamp-3 text-muted-foreground"
                    dangerouslySetInnerHTML={{
                      __html:
                        job.description,
                    }}
                  />

                  <div className="mt-10">

                    <Button
                      asChild
                      className="group/button"
                    >

                      <Link
                        href={`/careers/${job._id}`}
                      >
                        Apply Now

                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Link>

                    </Button>

                  </div>

                </Card>

              </Reveal>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}