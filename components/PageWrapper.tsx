export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ReactNode | string;
}) {
  return <div className={`pb-64 md:pb-28 ${className}`}>{children}</div>;
}
