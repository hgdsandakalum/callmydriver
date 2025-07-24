import { Skeleton } from "@/components/atoms/skeleton";

export function MenuSkeleton() {
  return (
    <div className="space-y-4">
      {/* First Category */}
      <div className="space-y-2">
        <Skeleton type="custom" active className="!h-10 !w-[80%]" />
        <div className="pl-4 space-y-2">
          <Skeleton type="custom" active className="!h-10 !w-[95%]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton type="custom" active className="!h-10 !w-[80%]" />
        <div className="pl-4 space-y-2">
          <Skeleton type="custom" active className="!h-10 !w-[95%]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton type="custom" active className="!h-10 !w-[80%]" />
        <div className="pl-4 space-y-2">
          <Skeleton type="custom" active className="!h-10 !w-[95%]" />
          <Skeleton type="custom" active className="!h-10 !w-[95%]" />
          <Skeleton type="custom" active className="!h-10 !w-[95%]" />
        </div>
      </div>
    </div>
  );
}
