'use client'
import {
    Sidebar,
    SidebarContent, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail
} from "@/components/ui/sidebar"
import { CoinsIcon, Home, Layers2Icon, ShieldCheckIcon } from "lucide-react"
import { Logo } from "./logo"
import { usePathname } from "next/navigation"
import Link from "next/link"

const routes = [
    {
        href: "/",
        label: "Home",
        icon: Home,
    },
    {
        href: "/workflow",
        label: "Workflow",
        icon: Layers2Icon,
    },
    {
        href: "/credentials",
        label: "Credentials",
        icon: ShieldCheckIcon,
    },
    {
        href: "/billings",
        label: "Billings",
        icon: CoinsIcon,
    },
];

export function AppSidebar({ ...props }) {
    const pathName = usePathname();

    const activeRoute =
        routes.find((r) => pathName === r.href) || routes[0]
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <div className="p-3">

                    <Logo />
                </div>
            </SidebarHeader>
            <SidebarContent>

                <SidebarMenu>
                    {routes.map((item) => (
                        <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton asChild isActive={activeRoute.href == item.href ? true : false}>
                                <Link href={item.href}>
                                    {item.icon && <item.icon />}
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>

            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
