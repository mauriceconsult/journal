import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

const Protectedlayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center bg-sky-500"
    >
      <Navbar/>
          {children}
    </div>
  );
}

export default Protectedlayout