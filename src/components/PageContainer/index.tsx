import { PropsWithChildren } from "react";
import './style.scss';

interface PageContainerProps {}

const PageContainer = ({ children }: PropsWithChildren<PageContainerProps>) => {
  return <div className="page-container">{children}</div>;
}

export default PageContainer;