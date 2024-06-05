type PlaceholderProps = {
  hide: boolean;
};

export const Placeholder = ({ hide }: PlaceholderProps) => (
  <div className={`${hide ? 'hidden' : 'block'} h-full w-full bg-appGrayLight animate-pulse rounded-lg`} />
);
