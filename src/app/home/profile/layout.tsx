import React from "react";
import {
  SidebarProvider,
  SidebarTrigger,
} from "../../../components/ui/sidebar";
import AppSidebar from "../../../presentation/home/components/AppSidebar";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
