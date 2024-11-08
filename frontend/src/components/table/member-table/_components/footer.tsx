interface FooterProps {
  count: number;
}
const Footer: React.FC<FooterProps> = ({ count }) => {
  return (
    <tfoot className="h-10 bg-gray-600">
      <tr>
        <td className="ps-2" colSpan={4}>
          {count} members
        </td>
      </tr>
    </tfoot>
  );
};

export default Footer;
