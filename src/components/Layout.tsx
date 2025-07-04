import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Mein Headless Frontend</h1>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        &copy; {new Date().getFullYear()} cockpit4me.de
      </footer>
    </div>
  );
}
