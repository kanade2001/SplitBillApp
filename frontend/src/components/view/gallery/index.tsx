import React from "react";

import Image from "next/image";

interface GalleryViewProps {
  items: {
    id?: string;
    headerImage?: string;
    title: string;
    optionalFields?: {
      [key: string]: {
        label: string;
        value: string | number | Date | JSX.Element;
      };
    };
  }[];
  onClick: (id: string) => void;
  onCreate: () => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({
  items,
  onClick,
  onCreate,
}: GalleryViewProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-md"
          onClick={() => onClick(item.id || "")}
        >
          {item.headerImage && (
            <Image
              src={item.headerImage}
              alt={item.title}
              width={300}
              height={300}
              className="h-48 w-full object-cover"
            />
          )}
          <div className="bg-blue-500 p-4">
            <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
            <div className="mt-2 grid grid-cols-[auto_1fr] gap-x-2">
              {Object.entries(item.optionalFields || {}).map(
                ([key, { label, value }]) => (
                  <React.Fragment key={key}>
                    <div className="text-sm font-semibold text-gray-600">
                      {label}:
                    </div>
                    <div className="text-sm text-gray-900">
                      {value.toString()}
                    </div>
                  </React.Fragment>
                ),
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="rounded-lg border border-2 border-blue-500 shadow-md">
        <button
          className="flex h-full w-full items-center justify-center"
          onClick={onCreate}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <svg
    className="h-6 w-6 text-blue-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14m-7 7V5"
    />
  </svg>
);

export default GalleryView;
