export const TypographyH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="mb-2 text-3xl font-bold">{children}</h1>
);

export const TypographyH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-2 text-2xl font-semibold">{children}</h2>
);

export const TypographyH3 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-2 text-lg font-semibold">{children}</h2>
);

export const TypographyP = ({ children }: { children: React.ReactNode }) => <p className="mb-2">{children}</p>;
