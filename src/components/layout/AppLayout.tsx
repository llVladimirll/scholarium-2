import Navbar from "../Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="scroll-smooth mt-4">
        <Navbar />
      </header>
      <div className="scroll-smooth overflow-x-hiddens">
        <main>{children}</main>
      </div>
    </>
  );
}
