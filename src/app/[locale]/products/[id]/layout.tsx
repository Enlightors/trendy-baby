export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="bg-[#f5f5f5] ">
      <div>{children}</div>
    </div>
  );
}
