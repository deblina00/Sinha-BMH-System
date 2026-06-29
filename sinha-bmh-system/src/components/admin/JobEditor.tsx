// src/components/admin/JobEditor.tsx

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Highlighter,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code2,
  Undo2,
  Redo2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface JobEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export default function JobEditor({
  value,
  onChange,
}: JobEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,

    extensions: [
      // Call StarterKit as a function or use .configure()
      StarterKit.configure(),

      // Call these as functions as well
      Underline.configure(),
      Highlight.configure(),

      Link.configure({
        openOnClick: false,
      }),

      Placeholder.configure({
        placeholder: "Write complete job description here...",
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: value,

    editorProps: {
      attributes: {
        class:
          "min-h-[420px] p-6 outline-none prose prose-invert max-w-none",
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">

      {/* Toolbar */}

      <div className="flex flex-wrap gap-2 border-b border-border bg-background p-3">

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("bold")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
        >
          <Bold size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("italic")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
        >
          <Italic size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("underline")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleUnderline().run()
          }
        >
          <UnderlineIcon size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("highlight")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleHighlight().run()
          }
        >
          <Highlighter size={16} />
        </Button>

        <Separator
          orientation="vertical"
          className="mx-2 h-8"
        />

        <Button
          size="icon"
          variant={
            editor.isActive("heading", {
              level: 1,
            })
              ? "default"
              : "outline"
          }
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 1,
              })
              .run()
          }
        >
          <Heading1 size={16} />
        </Button>

        <Button
          size="icon"
          variant={
            editor.isActive("heading", {
              level: 2,
            })
              ? "default"
              : "outline"
          }
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
        >
          <Heading2 size={16} />
        </Button>

        <Button
          size="icon"
          variant={
            editor.isActive("heading", {
              level: 3,
            })
              ? "default"
              : "outline"
          }
          type="button"
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({
                level: 3,
              })
              .run()
          }
        >
          <Heading3 size={16} />
        </Button>

        <Separator
          orientation="vertical"
          className="mx-2 h-8"
        />

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("bulletList")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
        >
          <List size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("orderedList")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrdered size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("blockquote")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
        >
          <Quote size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant={
            editor.isActive("codeBlock")
              ? "default"
              : "outline"
          }
          onClick={() =>
            editor.chain().focus().toggleCodeBlock().run()
          }
        >
          <Code2 size={16} />
        </Button>

        <Separator
          orientation="vertical"
          className="mx-2 h-8"
        />

        <Button
          size="icon"
          type="button"
          variant="outline"
          onClick={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
        >
          <AlignLeft size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant="outline"
          onClick={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
        >
          <AlignCenter size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant="outline"
          onClick={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
        >
          <AlignRight size={16} />
        </Button>

        <Separator
          orientation="vertical"
          className="mx-2 h-8"
        />

        <Button
          size="icon"
          type="button"
          variant="outline"
          onClick={() => {
            const url = window.prompt("Enter URL");

            if (!url) return;

            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }}
        >
          <Link2 size={16} />
        </Button>

        <Separator
          orientation="vertical"
          className="mx-2 h-8"
        />

        <Button
          size="icon"
          type="button"
          variant="outline"
          onClick={() =>
            editor.chain().focus().undo().run()
          }
        >
          <Undo2 size={16} />
        </Button>

        <Button
          size="icon"
          type="button"
          variant="outline"
          onClick={() =>
            editor.chain().focus().redo().run()
          }
        >
          <Redo2 size={16} />
        </Button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}