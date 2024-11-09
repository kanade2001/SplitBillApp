interface FooterWideProps {
  className?: string;
  colSpan: number;
  label: string;
}

const FooterWide: React.FC<FooterWideProps> = ({
  className,
  colSpan,
  label,
}) => {
  return (
    <tfoot className="h-10 bg-gray-600">
      <tr>
        <td className={className} colSpan={colSpan}>
          {label}
        </td>
      </tr>
    </tfoot>
  );
};

export default FooterWide;
