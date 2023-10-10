export function FormWrapper({ title, children }) {
  return (
    <>
      <h2 className="m-0 font-bold text-center mb-2">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </>
  );
}
