import { ThemeProvider } from "@/shared/context/ThemeProvider";
import { Header } from "./Header";
import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};
