export default function Skeleton() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4">
      <div className="h-[295px] w-full bg-platinum" />
      <div className="flex flex-col gap-4">
        <div className="h-[50px] bg-platinum" />
        <div className="flex flex-col gap-[6px]">
          <div className="h-6 bg-platinum" />
          <div className="h-6 bg-platinum" />
          <div className="h-6 bg-platinum" />
          <div className="h-6 bg-platinum" />
        </div>
        <div className="h-10 bg-platinum" />
        <div className="h-[50px] bg-platinum" />
      </div>
      <div className="h-[214px] bg-platinum" />
      <div className="h-[214px] bg-platinum" />
      <div className="h-[214px] bg-platinum" />
    </div>
  );
}
