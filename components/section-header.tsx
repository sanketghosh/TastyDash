export default function SectionHeader({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <h1 className="text-xl md:text-2xl font-bold text-primary py-6 text-center">
        {children}
      </h1>
    );
  }
  