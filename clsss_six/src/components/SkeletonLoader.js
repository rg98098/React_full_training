import SkeletonCard from "./SkeletonCard";

const SkeletonLoader = () => {
  return (
    <div class="shimmer-container">
      {Array.from({ length: 10 }, (e, i) => {
        return <SkeletonCard key={i} />;
      })}
    </div>
  );
};

export default SkeletonLoader;