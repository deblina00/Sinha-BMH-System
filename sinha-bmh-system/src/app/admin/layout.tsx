// // src/app/admin/layout.tsx

// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LayoutDashboard,
//   BriefcaseBusiness,
//   Users,
//   FileText,
//   LogOut,
//   Menu,
//   X,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { Toaster } from "sonner";

// const navItems = [
//   {
//     title: "Dashboard",
//     href: "/admin/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Jobs",
//     href: "/admin/jobs",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Applications",
//     href: "/admin/applications",
//     icon: Users,
//   },
//   {
//     title: "Purchase Orders",
//     href: "/admin/purchase-orders",
//     icon: FileText,
//   },
// ];

// export default function AdminLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [loading, setLoading] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.replace("/admin/login");
//       return;
//     }

//     fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//       .then(async (r) => {
//         if (!r.ok) throw new Error();

//         return r.json();
//       })
//       .then((user) => {
//         if (user.role !== "superadmin") {
//           localStorage.removeItem("token");
//           router.replace("/admin/login");
//         } else {
//           setLoading(false);
//         }
//       })
//       .catch(() => {
//         localStorage.removeItem("token");
//         router.replace("/admin/login");
//       });
//   }, [router]);

//   const logout = () => {
//     localStorage.removeItem("token");
//     router.replace("/admin/login");
//   };

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center bg-background">
//         <div className="h-10 w-10 animate-spin rounded-full border-4 border-ember border-t-transparent" />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Toaster richColors position="top-right" />

//       <div className="flex min-h-screen bg-background">

//         {/* Sidebar */}

//         <aside
//           className={cn(
//             "fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-surface transition-transform duration-300 lg:translate-x-0",
//             sidebarOpen
//               ? "translate-x-0"
//               : "-translate-x-full"
//           )}
//         >
//           <div className="flex h-20 items-center justify-between border-b border-border px-6">

//             <div>
//               <h2 className="text-xl font-bold">
//                 SINHA BMH
//               </h2>

//               <p className="text-xs text-muted-foreground">
//                 Admin Panel
//               </p>
//             </div>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={() =>
//                 setSidebarOpen(false)
//               }
//             >
//               <X size={20} />
//             </Button>
//           </div>

//           <nav className="space-y-2 p-5">
//             {navItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={cn(
//                     "flex items-center gap-3 rounded-xl px-4 py-3 transition",
//                     pathname === item.href
//                       ? "bg-ember text-black"
//                       : "hover:bg-muted"
//                   )}
//                 >
//                   <Icon size={18} />

//                   {item.title}
//                 </Link>
//               );
//             })}
//           </nav>

//           <div className="absolute bottom-6 left-6 right-6">
//             <Button
//               variant="destructive"
//               className="w-full"
//               onClick={logout}
//             >
//               <LogOut className="mr-2 h-4 w-4" />

//               Logout
//             </Button>
//           </div>
//         </aside>

//         {/* Content */}

//         <div className="flex flex-1 flex-col lg:ml-72">

//           {/* Topbar */}

//           <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur">

//             <Button
//               size="icon"
//               variant="ghost"
//               className="lg:hidden"
//               onClick={() =>
//                 setSidebarOpen(true)
//               }
//             >
//               <Menu size={22} />
//             </Button>

//             <div>
//               <h1 className="text-2xl font-bold">
//                 Admin Dashboard
//               </h1>

//               <p className="text-sm text-muted-foreground">
//                 Welcome back 👋
//               </p>
//             </div>

//             <div className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-black">
//               Administrator
//             </div>
//           </header>

//           <main className="flex-1 p-8">
//             {children}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }





// src/app/admin/layout.tsx

"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Users,
  FileText,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/admin/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Applications",
    href: "/admin/applications",
    icon: Users,
  },
  {
    title: "Purchase Orders",
    href: "/admin/purchase-orders",
    icon: FileText,
  },
];

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // 1. Bypass authentication check if we are already on the login page
    if (pathname === "/admin/login") {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(async (r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((user) => {
        if (user.role !== "superadmin") {
          localStorage.removeItem("token");
          router.replace("/admin/login");
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        router.replace("/admin/login");
      });
  }, [router, pathname]); // Added pathname here to trigger check on route transitions

  const logout = () => {
    localStorage.removeItem("token");
    router.replace("/admin/login");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-ember border-t-transparent" />
      </div>
    );
  }

  // 2. Hide dashboard sidebars/headers entirely if rendering the clean login page form
  if (pathname === "/admin/login") {
    return (
      <>
        <Toaster richColors position="top-right" />
        <main className="flex-1">{children}</main>
      </>
    );
  }

  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="flex min-h-screen bg-background">

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-surface transition-transform duration-300 lg:translate-x-0",
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          )}
        >
          <div className="flex h-20 items-center justify-between border-b border-border px-6">
            <div>
              <h2 className="text-xl font-bold">
                SINHA BMH
              </h2>
              <p className="text-xs text-muted-foreground">
                Admin Panel
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() =>
                setSidebarOpen(false)
              }
            >
              <X size={20} />
            </Button>
          </div>

          <nav className="space-y-2 p-5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition",
                    pathname === item.href
                      ? "bg-ember text-black"
                      : "hover:bg-muted"
                  )}
                >
                  <Icon size={18} />
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <Button
              variant="destructive"
              className="w-full"
              onClick={logout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Content Panel */}
        <div className="flex flex-1 flex-col lg:ml-72">

          {/* Topbar */}
          <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur">
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() =>
                setSidebarOpen(true)
              }
            >
              <Menu size={22} />
            </Button>

            <div>
              <h1 className="text-2xl font-bold">
                Admin Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome back 👋
              </p>
            </div>

            <div className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-black">
              Administrator
            </div>
          </header>

          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}