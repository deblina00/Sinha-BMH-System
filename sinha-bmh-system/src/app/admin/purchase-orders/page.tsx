// src/app/admin/purchase-orders/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import {
    Loader2,
    Search,
    Plus,
    Trash2,
    Eye,
    Download,
    FileText,
    ImageIcon,
} from "lucide-react";

import { toast } from "sonner";

import {
    Card,
} from "@/components/ui/card";

import {
    Button,
} from "@/components/ui/button";

import {
    Badge,
} from "@/components/ui/badge";

import {
    Input,
} from "@/components/ui/input";

import {
    Label,
} from "@/components/ui/label";

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
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface PurchaseOrder {
    _id: string;

    poNumber: string;

    clientName: string;

    title: string;

    description: string;

    fileUrl: string;

    publicId: string;

    createdAt: string;
}

const emptyForm = {
    poNumber: "",

    clientName: "",

    title: "",

    description: "",

    file: null as File | null,
};

export default function PurchaseOrdersPage() {
    const token =
        typeof window !== "undefined"
            ? localStorage.getItem("token")
            : "";

    const [purchaseOrders, setPurchaseOrders] =
        useState<PurchaseOrder[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [search, setSearch] =
        useState("");

    const [dialogOpen, setDialogOpen] =
        useState(false);

    const [previewOpen, setPreviewOpen] =
        useState(false);

    const [deleteOpen, setDeleteOpen] =
        useState(false);

    const [selectedPO, setSelectedPO] =
        useState<PurchaseOrder | null>(null);

    const [deleteId, setDeleteId] =
        useState("");

    const [form, setForm] =
        useState(emptyForm);

    async function fetchPOs() {
        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/po`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();

            setPurchaseOrders(data);
        } catch {
            toast.error(
                "Unable to load Purchase Orders"
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPOs();
    }, []);

    const filtered = useMemo(() => {
        return purchaseOrders.filter((po) =>
            (
                po.poNumber +
                po.clientName +
                po.title
            )
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [purchaseOrders, search]);

    async function uploadPO() {
        if (!form.file) {
            toast.error("Choose a file");

            return;
        }

        try {
            setSaving(true);

            const body =
                new FormData();

            body.append(
                "poNumber",
                form.poNumber
            );

            body.append(
                "clientName",
                form.clientName
            );

            body.append(
                "title",
                form.title
            );

            body.append(
                "description",
                form.description
            );

            body.append(
                "file",
                form.file
            );

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/po`,
                {
                    method: "POST",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },

                    body,
                }
            );

            const data =
                await res.json();

            if (!res.ok) {
                toast.error(data.message);

                return;
            }

            toast.success(
                "Purchase Order Uploaded"
            );

            setDialogOpen(false);

            setForm(emptyForm);

            fetchPOs();
        } catch {
            toast.error(
                "Upload Failed"
            );
        } finally {
            setSaving(false);
        }
    }

    async function deletePO() {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/po/${deleteId}`,
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
                "Purchase Order Deleted"
            );

            setDeleteOpen(false);

            fetchPOs();
        } catch {
            toast.error(
                "Delete Failed"
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
                        Purchase Orders
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Upload and manage secure
                        Purchase Orders.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        setDialogOpen(true)
                    }
                >
                    <Plus className="mr-2 h-4 w-4" />

                    Upload PO
                </Button>
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
                <div className="mt-8 grid gap-6">
                    {filtered.map((po) => (
                        <Card
                            key={po._id}
                            className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:items-center"
                        >
                            <div className="space-y-3">
                                <Badge>
                                    {po.poNumber}
                                </Badge>

                                <h2 className="text-2xl font-semibold">
                                    {po.title}
                                </h2>

                                <p className="font-medium text-muted-foreground">
                                    {po.clientName}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {po.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <FileText className="h-4 w-4" />

                                    {new Date(
                                        po.createdAt
                                    ).toLocaleDateString()}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        setSelectedPO(po);

                                        setPreviewOpen(true);
                                    }}
                                >
                                    <Eye className="mr-2 h-4 w-4" />

                                    Preview
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                >
                                    <a
                                        href={po.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="mr-2 h-4 w-4" />

                                        Download
                                    </a>
                                </Button>

                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        setDeleteId(po._id);

                                        setDeleteOpen(true);
                                    }}
                                >
                                    <Trash2 className="mr-2 h-4 w-4" />

                                    Delete
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <Dialog
                    open={dialogOpen}
                    onOpenChange={setDialogOpen}
                >
                    <DialogContent className="sm:max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>
                                Upload Purchase Order
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-5">
                            <div>
                                <Label>
                                    Purchase Order Number
                                </Label>

                                <Input
                                    value={form.poNumber}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            poNumber:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <Label>
                                    Client Name
                                </Label>

                                <Input
                                    value={form.clientName}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            clientName:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <Label>
                                    Title
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
                                    Description
                                </Label>

                                <textarea
                                    rows={5}
                                    className="w-full rounded-md border bg-background p-3"
                                    value={form.description}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            description:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div>
                                <Label>
                                    Upload PDF / Image
                                </Label>

                                <Input
                                    type="file"
                                    accept=".pdf,image/*"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            file:
                                                e.target.files?.[0] ||
                                                null,
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
                                disabled={saving}
                                onClick={uploadPO}
                            >
                                {saving && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}

                                Upload
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <Dialog
                open={previewOpen}
                onOpenChange={setPreviewOpen}
            >
                <DialogContent className="max-w-6xl">
                    <DialogHeader>
                        <DialogTitle>
                            Purchase Order Preview
                        </DialogTitle>
                    </DialogHeader>

                    {selectedPO && (
                        <div className="space-y-6">

                            <div className="grid gap-4 md:grid-cols-2">

                                <Card className="p-4">
                                    <Label>PO Number</Label>

                                    <p className="mt-1 font-semibold">
                                        {selectedPO.poNumber}
                                    </p>
                                </Card>

                                <Card className="p-4">
                                    <Label>Client</Label>

                                    <p className="mt-1 font-semibold">
                                        {selectedPO.clientName}
                                    </p>
                                </Card>

                            </div>

                            <Card className="p-5">

                                <h3 className="text-2xl font-bold">
                                    {selectedPO.title}
                                </h3>

                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    {selectedPO.description}
                                </p>

                            </Card>

                            <div className="overflow-hidden rounded-xl border">

                                {selectedPO.fileUrl
                                    .toLowerCase()
                                    .includes(".pdf") ? (
                                    <iframe
                                        src={selectedPO.fileUrl}
                                        className="h-[700px] w-full"
                                    />
                                ) : (
                                    <div className="relative h-[700px] w-full">

                                        <Image
                                            src={selectedPO.fileUrl}
                                            alt={selectedPO.title}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />

                                    </div>
                                )}

                            </div>

                            <div className="flex justify-end">

                                <Button asChild>

                                    <a
                                        href={selectedPO.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="mr-2 h-4 w-4" />

                                        Download
                                    </a>

                                </Button>

                            </div>

                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <AlertDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
            >
                <AlertDialogContent>

                    <AlertDialogHeader>

                        <AlertDialogTitle>
                            Delete Purchase Order?
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot be undone.
                            The Purchase Order will also be
                            permanently removed from
                            Cloudinary.
                        </AlertDialogDescription>

                    </AlertDialogHeader>

                    <AlertDialogFooter>

                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={deletePO}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Delete
                        </AlertDialogAction>

                    </AlertDialogFooter>

                </AlertDialogContent>
            </AlertDialog>

        </>
    );
}