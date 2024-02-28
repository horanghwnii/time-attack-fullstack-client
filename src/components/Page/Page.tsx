function Page({ children }: { children: React.ReactNode }) {
  return <main className='px-60 py-10 mx-auto flex flex-col'>{children}</main>;
}

export default Page;
