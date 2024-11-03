import Image from "next/image";
import React from "react";

interface GalleryViewProps {
  items: {
    headerImage?: string;
    title: string;
    optionalFields?: {
      [key: string]: {
        label: string;
        value: string | number | Date | JSX.Element;
      };
    };
  }[];
}

const GalleryView: React.FC<GalleryViewProps> = ({
  items,
}: GalleryViewProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          {item.headerImage && (
            <Image
              src={item.headerImage}
              alt={item.title}
              width={300}
              height={300}
              className="h-48 w-full object-cover"
            />
          )}
          <div className="bg-blue-500  p-4">
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
    </div>
  );
};

export default GalleryView;
