// src/app/admin/applications/page.tsx (Part 1)

"use client";

import { useEffect, useMemo, useState } from "react";

import {
    Loader2,
    Search,
    Eye,
    Trash2,
    Mail,
    User,
    BriefcaseBusiness,
    CalendarDays,
    FileText,
} from "lucide-react";

import { toast } from "sonner";

import {
    Card,
} from "@/components/ui/card";

import {
    Button,
} from "@/components/ui/button";

import {
    Input,
} from "@/components/ui/input";

import {
    Badge,
} from "@/components/ui/badge";

import {
    Label,
} from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Application } from "@/types/application";

const statuses = [
    "Pending",
    "Shortlisted",
    "Interview Scheduled",
    "Selected",
    "Rejected",
];

export default function ApplicationsPage() {
    const token =
        typeof window !== "undefined"
            ? localStorage.getItem("token")
            : "";

    const [applications, setApplications] =
        useState<Application[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [statusFilter, setStatusFilter] =
        useState("All");

    const [selected, setSelected] =
        useState<Application | null>(null);

    const [deleteId, setDeleteId] =
        useState("");

    const [deleteOpen, setDeleteOpen] =
        useState(false);

    async function fetchApplications() {
        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/careers/applications`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            setApplications(data);
        } catch {
            toast.error(
                "Unable to load applications"
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApplications();
    }, []);

    async function updateStatus(
        id: string,
        status: string
    ) {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/careers/applications/${id}/status`,
                {
                    method: "PATCH",

                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        status,
                    }),
                }
            );

            const data =
                await res.json();

            if (!res.ok) {
                toast.error(data.message);

                return;
            }

            toast.success(
                "Status Updated"
            );

            fetchApplications();
        } catch {
            toast.error(
                "Unable to update"
            );
        }
    }

    async function deleteApplication() {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/careers/applications/${deleteId}`,
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
                "Application Deleted"
            );

            setDeleteOpen(false);

            fetchApplications();
        } catch {
            toast.error(
                "Delete Failed"
            );
        }
    }

    const filtered =
        useMemo(() => {
            return applications.filter(
                (app) => {
                    const matchSearch =
                        (
                            app.fullName +
                            app.email +
                            app.job.title
                        )
                            .toLowerCase()
                            .includes(
                                search.toLowerCase()
                            );

                    const matchStatus =
                        statusFilter === "All"
                            ? true
                            : app.status ===
                            statusFilter;

                    return (
                        matchSearch &&
                        matchStatus
                    );
                }
            );
        }, [
            applications,
            search,
            statusFilter,
        ]);

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
                        Applications
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Review and manage
                        candidate applications.
                    </p>

                </div>

                <Badge className="px-4 py-2 text-sm">
                    {filtered.length} Applications
                </Badge>

            </div>

            <Card className="mt-8 p-5">

                <div className="grid gap-4 md:grid-cols-[1fr_220px]">

                    <div className="relative">

                        <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

                        <Input
                            placeholder="Search candidate..."
                            className="pl-10"
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <Select
                        value={statusFilter}
                        onValueChange={
                            setStatusFilter
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>

                            <SelectItem value="All">
                                All Status
                            </SelectItem>

                            {statuses.map((status) => (
                                <SelectItem
                                    key={status}
                                    value={status}
                                >
                                    {status}
                                </SelectItem>
                            ))}

                        </SelectContent>

                    </Select>

                </div>

            </Card>

            <div className="mt-8 grid gap-6">

                {/* Continue from Part 1 */}

                {filtered.map((app) => (
                    <Card
                        key={app._id}
                        className="overflow-hidden border-border/60"
                    >
                        <div className="grid gap-6 p-6 lg:grid-cols-[1fr_240px]">

                            <div>

                                <div className="flex flex-wrap items-center gap-3">

                                    <h3 className="text-xl font-semibold">
                                        {app.fullName}
                                    </h3>

                                    <Badge>
                                        {app.status}
                                    </Badge>

                                </div>

                                <div className="mt-5 grid gap-4 md:grid-cols-2">

                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <Mail className="h-4 w-4 text-ember" />
                                        {app.email}
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <User className="h-4 w-4 text-ember" />
                                        {app.phone}
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <BriefcaseBusiness className="h-4 w-4 text-ember" />
                                        {app.job.title}
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <CalendarDays className="h-4 w-4 text-ember" />
                                        {new Date(
                                            app.createdAt
                                        ).toLocaleDateString()}
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <FileText className="h-4 w-4 text-ember" />
                                        {app.experience}
                                    </div>

                                </div>

                            </div>

                            <div className="space-y-4">

                                <div>

                                    <Label>
                                        Status
                                    </Label>

                                    <Select
                                        value={app.status}
                                        onValueChange={(value) =>
                                            updateStatus(
                                                app._id,
                                                value
                                            )
                                        }
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue />
                                        </SelectTrigger>

                                        <SelectContent>

                                            {statuses.map((status) => (
                                                <SelectItem
                                                    key={status}
                                                    value={status}
                                                >
                                                    {status}
                                                </SelectItem>
                                            ))}

                                        </SelectContent>

                                    </Select>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setSelected(app)
                                        }
                                    >
                                        <Eye className="mr-2 h-4 w-4" />
                                        View
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                    >
                                        <a
                                            href={app.resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resume
                                        </a>
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        onClick={() => {
                                            setDeleteId(app._id);

                                            setDeleteOpen(true);
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>

                                </div>

                            </div>

                        </div>
                    </Card>
                ))}

                {filtered.length === 0 && (
                    <Card className="p-12 text-center">
                        <h3 className="text-xl font-semibold">
                            No Applications Found
                        </h3>

                        <p className="mt-2 text-muted-foreground">
                            Try changing your search
                            or status filter.
                        </p>
                    </Card>
                )}

                {/* View Dialog */}

                <Dialog
                    open={!!selected}
                    onOpenChange={() =>
                        setSelected(null)
                    }
                >
                    <DialogContent className="max-w-2xl">

                        <DialogHeader>

                            <DialogTitle>
                                Candidate Details
                            </DialogTitle>

                        </DialogHeader>

                        {selected && (
                            <div className="space-y-6">

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>

                                        <Label>
                                            Name
                                        </Label>

                                        <p className="mt-1 font-medium">
                                            {selected.fullName}
                                        </p>

                                    </div>

                                    <div>

                                        <Label>
                                            Email
                                        </Label>

                                        <p className="mt-1 font-medium">
                                            {selected.email}
                                        </p>

                                    </div>

                                    <div>

                                        <Label>
                                            Phone
                                        </Label>

                                        <p className="mt-1 font-medium">
                                            {selected.phone}
                                        </p>

                                    </div>

                                    <div>

                                        <Label>
                                            Position
                                        </Label>

                                        <p className="mt-1 font-medium">
                                            {selected.job.title}
                                        </p>

                                    </div>

                                    <div>

                                        <Label>
                                            Experience
                                        </Label>

                                        <p className="mt-1 font-medium">
                                            {selected.experience}
                                        </p>

                                    </div>

                                    <div>

                                        <Label>
                                            Applied On
                                        </Label>

                                        <p className="mt-1 font-medium">
                                            {new Date(
                                                selected.createdAt
                                            ).toLocaleString()}
                                        </p>

                                    </div>

                                </div>

                                <div>

                                    <Label>
                                        Cover Letter
                                    </Label>

                                    <div className="mt-2 rounded-lg border border-border p-4 whitespace-pre-wrap text-sm text-muted-foreground">
                                        {selected.coverLetter}
                                    </div>

                                </div>

                                <Button
                                    asChild
                                    className="w-full"
                                >
                                    <a
                                        href={selected.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Resume
                                    </a>
                                </Button>

                            </div>
                        )}

                    </DialogContent>
                </Dialog>

                {/* Delete Dialog */}

                <AlertDialog
                    open={deleteOpen}
                    onOpenChange={setDeleteOpen}
                >
                    <AlertDialogContent>

                        <AlertDialogHeader>

                            <AlertDialogTitle>
                                Delete Application?
                            </AlertDialogTitle>

                            <AlertDialogDescription>
                                This action cannot be
                                undone.
                            </AlertDialogDescription>

                        </AlertDialogHeader>

                        <AlertDialogFooter>

                            <AlertDialogCancel>
                                Cancel
                            </AlertDialogCancel>

                            <AlertDialogAction
                                onClick={deleteApplication}
                            >
                                Delete
                            </AlertDialogAction>

                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialog>
            </div>

        </>
    );
}