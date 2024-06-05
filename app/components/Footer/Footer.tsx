type FooterProps = {
  copyright: string;
  version?: string;
};

export const Footer = ({ copyright, version }: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full border-t border-appGrayLight dark:border-appGray">
      <div className="mx-auto flex items-center justify-center px-2.5 py-3">
        <p className="text-center text-xs text-appGray dark:text-white" data-testid="copyright">
          {copyright} {year} {version}
        </p>
      </div>
    </footer>
  );
};
