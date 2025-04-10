export default function ProductListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {Array.from({ length: count }, (_, i) => (
        <ProductItemSkeleton key={`productSkeleton-${i}`} />
      ))}
    </div>
  );
}

export const ProductItemSkeleton = () => {
  return (
    <div
      role="status"
      className="flex flex-col gap-2 max-w-sm p-[10px] h-[382px] border border-gray-200 rounded shadow animate-pulse dark:border-gray-700"
    >
      <div className="flex items-center justify-center h-[160px]  bg-gray-300 rounded dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-[60px] flex flex-col gap-2">
        <div className="h-3 w-full bg-gray-200 rounded-full dark:bg-gray-700 "></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
      </div>
      <div className="flex gap-3">
        <div className="h-4 w-2/5 bg-gray-200 rounded-md dark:bg-gray-700 "></div>
        <div className="h-4 w-2/5 bg-gray-200 rounded-md dark:bg-gray-700 "></div>
      </div>
      <div className="h-3 w-full bg-gray-200 rounded-full dark:bg-gray-700 "></div>
      <div className="h-12 w-full  bg-gray-200 rounded-lg dark:bg-gray-700 "></div>
      <div className="flex gap-3 justify-between mt-auto py-1">
        <div className="h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700 "></div>
        <div className="h-4 w-full bg-gray-200 rounded-full dark:bg-gray-700 "></div>
      </div>
    </div>
  );
};
