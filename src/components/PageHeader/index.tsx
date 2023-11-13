import './style.scss';

interface PageHeaderProps {
  title: string;
  rightSection?: React.ReactNode;
}

const PageHeader = ({ title, rightSection }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className="title">{title}</div>
      {rightSection}
    </div>
  );
};

export default PageHeader;
