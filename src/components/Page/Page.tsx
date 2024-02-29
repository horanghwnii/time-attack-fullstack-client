function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-white lg:px-40 md:px-20 sm:px-0 px-10 py-10 min-w-[605px] mx-auto flex flex-col'>
      {children}
    </main>
  );
}

export default Page;
