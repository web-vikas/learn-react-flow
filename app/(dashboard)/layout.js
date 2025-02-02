import { AppSidebar } from "@/components/app-sidebar"
import BreadcrumbHeader from "@/components/breadcrumb-header"
import { ModeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />

          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex justify-between w-full items-center">
            <BreadcrumbHeader />
            <ModeToggle />
          </div>
        </header>
        <div className="p-2">
          {children}
        </div>

      </SidebarInset>
    </SidebarProvider>
  )
}
