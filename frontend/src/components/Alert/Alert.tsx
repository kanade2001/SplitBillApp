interface AlertProps {
  title: string;
  message: string;
}

export const Info: React.FC<AlertProps> = ({ title, message }) => {
  return (
    <div
      className="border-l-4 border-blue-500 bg-blue-100 p-4 text-blue-700"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
};

export const Warn: React.FC<AlertProps> = ({ title, message }) => {
  return (
    <div
      className="border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
};

export const Danger: React.FC<AlertProps> = ({ title, message }) => {
  return (
    <div
      className="border-l-4 border-red-500 bg-red-100 p-4 text-red-700"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{message}</p>
    </div>
  );
};
