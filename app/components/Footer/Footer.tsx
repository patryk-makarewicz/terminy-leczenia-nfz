type FooterProps = {
  copyright: string;
  version?: string;
};

export const Footer = ({ copyright, version }: FooterProps) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full bg-primary text-white">
      <div className="mx-auto flex items-center justify-center px-2.5 py-3">
        <p className="text-center text-xs" data-testid="copyright">
          {copyright} {year} {version}
        </p>
      </div>
    </footer>
  );
};
