export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f5f5f5] ">
      <div>{children}</div>
    </div>
  );
}
