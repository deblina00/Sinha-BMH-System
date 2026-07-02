//src/components/careers/ApplyForm.tsx

"use client";

import { FormEvent, useState } from "react";

import { Loader2, UploadCloud } from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ApplyFormProps {
  jobId: string;
}

export default function ApplyForm({
  jobId,
}: ApplyFormProps) {
  const [loading, setLoading] =
    useState(false);

  async function submit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form =
      e.currentTarget;

    const formData =
      new FormData(form);

    formData.append(
      "jobId",
      jobId
    );

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/careers/apply`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        toast.error(
          data.message ||
            "Application failed"
        );

        return;
      }

      toast.success(
        "Application submitted successfully. We'll get back to you shortly."
      );

      form.reset();
    } catch {
      toast.error(
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mt-8 rounded-3xl p-8 shadow-lg">
      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>
              Full Name
            </Label>

            <Input
              name="fullName"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>
              Phone Number
            </Label>

            <Input
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>
              Experience
            </Label>

            <Input
              name="experience"
              placeholder="5 Years"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>
            Cover Letter
          </Label>

          <Textarea
            name="coverLetter"
            rows={7}
            placeholder="Tell us why you're the right candidate..."
            required
          />
        </div>

        <div className="space-y-2">
          <Label>
            Resume / CV
          </Label>

          <Input
            type="file"
            name="resume"
            accept=".pdf,.doc,.doc,.docx"
            required
          />

          <p className="text-xs text-muted-foreground">
            Accepted:
            PDF, DOC,
            DOCX (Max 10MB)
          </p>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <UploadCloud className="mr-2 h-4 w-4" />
              Submit Application
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}