import { LoadingSpinner } from "./LoadingSpinner";

// src/components/LoadingOverlay.tsx
interface LoadingOverlayProps {
  loading: boolean;
  children: React.ReactNode;
}

export function LoadingOverlay({ loading, children }: LoadingOverlayProps) {
  if (!loading) return <>{children}</>;

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
        <LoadingSpinner />
      </div>
      <div className="opacity-50">{children}</div>
    </div>
  );
}
