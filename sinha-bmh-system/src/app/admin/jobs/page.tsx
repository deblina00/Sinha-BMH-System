// src/app/admin/jobs/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Loader2,
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { toast } from "sonner";
import { Switch } from "@/components/ui/switch"; // If using shadcn switch
import JobEditor from "@/components/admin/JobEditor";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Job } from "@/types/job";

const emptyJob = {
  title: "",

  department: "",

  location: "",

  type: "",

  experience: "",

  salary: "",

  vacancies: 1,

  description: "",

  active: true,
};

export default function JobsPage() {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : "";

  const [jobs, setJobs] = useState<Job[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [deleteId, setDeleteId] =
    useState("");

  const [form, setForm] =
    useState<any>(emptyJob);

  async function fetchJobs() {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      setJobs(data);
    } catch {
      toast.error("Unable to load jobs");
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
        job.location +
        job.department
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [jobs, search]);

  function openCreate() {
    setEditingId(null);

    setForm(emptyJob);

    setDialogOpen(true);
  }

  function openEdit(job: Job) {
    setEditingId(job._id);

    setForm(job);

    setDialogOpen(true);
  }

  async function saveJob() {
    try {
      setSaving(true);

      const url = editingId
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${editingId}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`;

      const method = editingId
        ? "PUT"
        : "POST";

      const res = await fetch(url, {
        method,

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(form),
      });

      const data =
        await res.json();

      if (!res.ok) {
        toast.error(data.message);

        return;
      }

      toast.success(
        editingId
          ? "Job Updated"
          : "Job Created"
      );

      setDialogOpen(false);

      fetchJobs();
    } catch {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setSaving(false);
    }
  }

  async function deleteJob() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${deleteId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        toast.error(data.message);

        return;
      }

      toast.success(
        "Job Deleted"
      );

      setDeleteOpen(false);

      fetchJobs();
    } catch {
      toast.error(
        "Unable to delete"
      );
    }
  }

  if (loading)
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-ember" />
      </div>
    );

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-5">

        <div>

          <h1 className="text-4xl font-bold">
            Jobs
          </h1>

          <p className="mt-2 text-muted-foreground">
            Create and manage
            career openings
          </p>

        </div>

        <Button
          onClick={openCreate}
        >
          <Plus className="mr-2 h-4 w-4" />

          Create Job
        </Button>
      </div>

      <Card className="mt-8 p-5">

        <div className="relative">

          <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search Jobs..."
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

      {/* ================= JOB CARDS ================= */}

      <div className="mt-8 grid gap-6">
        {filtered.length === 0 ? (
          <Card className="p-12 text-center">
            <BriefcaseBusiness className="mx-auto h-10 w-10 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">
              No Jobs Found
            </h3>
            <p className="mt-2 text-muted-foreground">
              Create your first career opening.
            </p>
          </Card>
        ) : (
          filtered.map((job) => (
            <Card
              key={job._id}
              className="overflow-hidden border-border/60 p-6 transition-all duration-300 hover:border-ember hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3">

                    <h2 className="text-2xl font-bold">
                      {job.title}
                    </h2>

                    <Badge
                      variant={
                        job.active
                          ? "default"
                          : "secondary"
                      }
                    >
                      {job.active
                        ? "Active"
                        : "Closed"}
                    </Badge>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-ember" />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness className="h-4 w-4 text-ember" />
                      {job.department}
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-ember" />
                      {new Date(
                        job.createdAt
                      ).toLocaleDateString()}
                    </div>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">

                    <Badge variant="outline">
                      {job.type}
                    </Badge>

                    <Badge variant="outline">
                      {job.experience}
                    </Badge>

                    <Badge variant="outline">
                      {job.salary}
                    </Badge>

                    <Badge variant="outline">
                      {job.vacancies} Vacancy
                      {job.vacancies > 1
                        ? "ies"
                        : ""}
                    </Badge>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Button
                    variant="outline"
                    onClick={() =>
                      openEdit(job)
                    }
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>

                  <Button
                    variant="destructive"
                    onClick={() => {
                      setDeleteId(job._id);
                      setDeleteOpen(true);
                    }}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>

                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* ================= CREATE / EDIT DIALOG ================= */}

      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      >
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-5xl">

          <DialogHeader>

            <DialogTitle>
              {editingId
                ? "Edit Job"
                : "Create Job"}
            </DialogTitle>

          </DialogHeader>

          <div className="grid gap-5">

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <Label>
                  Job Title
                </Label>

                <Input
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>
                  Department
                </Label>

                <Input
                  value={form.department}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      department:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>
                  Location
                </Label>

                <Input
                  value={form.location}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>
                  Employment Type
                </Label>

                <Input
                  value={form.type}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      type:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>
                  Experience
                </Label>

                <Input
                  value={form.experience}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      experience:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>
                  Salary
                </Label>

                <Input
                  value={form.salary}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      salary:
                        e.target.value,
                    })
                  }
                />
              </div>

              {/* <div>
                <Label>
                  Vacancies
                </Label>

                <Input
                  type="number"
                  min={1}
                  value={form.vacancies}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      vacancies:
                        Number(
                          e.target.value
                        ),
                    })
                  }
                />
              </div> */}
              <div>
                <Label>Vacancies</Label>
                <Input
                  type="number"
                  min={1}
                  value={form.vacancies}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      vacancies: Number(e.target.value),
                    })
                  }
                />
              </div>

              {/* Added Job Status Field */}
              <div className="flex flex-col justify-end pb-1">
                <div className="flex items-center space-x-3 rounded-lg border border-border bg-background p-3.5 shadow-sm">
                  <input
                    type="checkbox"
                    id="job-active-toggle"
                    className="h-4 w-4 accent-ember cursor-pointer"
                    checked={form.active ?? true}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        active: e.target.checked,
                      })
                    }
                  />
                  <div className="grid gap-0.5 leading-none cursor-pointer">
                    <Label htmlFor="job-active-toggle" className="cursor-pointer font-medium">
                      Listing Status
                    </Label>
                    <span className="text-xs text-muted-foreground">
                      {form.active ? "Active & Accept Applications" : "Closed / Hidden"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>

              <Label className="mb-3 block">
                Job Description
              </Label>

              <JobEditor
                value={form.description}
                onChange={(
                  value
                ) =>
                  setForm({
                    ...form,
                    description:
                      value,
                  })
                }
              />

            </div>

          </div>

          <DialogFooter>

            <Button
              variant="outline"
              onClick={() =>
                setDialogOpen(false)
              }
            >
              Cancel
            </Button>

            <Button
              onClick={saveJob}
              disabled={saving}
            >
              {saving && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}

              {editingId
                ? "Update Job"
                : "Create Job"}
            </Button>

          </DialogFooter>

        </DialogContent>
      </Dialog>

      {/* ================= DELETE DIALOG ================= */}

      <AlertDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
      >
        <AlertDialogContent>

          <AlertDialogHeader>

            <AlertDialogTitle>
              Delete Job?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>

          </AlertDialogHeader>

          <AlertDialogFooter>

            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={deleteJob}
            >
              Delete
            </AlertDialogAction>

          </AlertDialogFooter>

        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}