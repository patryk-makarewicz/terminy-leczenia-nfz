type HeaderProps = {
  icon?: React.ReactNode;
  navigation?: React.ReactNode;
  rightElementFirst?: React.ReactNode;
  rightElementSecond?: React.ReactNode;
};

export const Header = ({ icon, navigation, rightElementFirst, rightElementSecond }: HeaderProps) => (
  <header className="w-full border-b">
    <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2.5">
      <div className="flex items-center">
        <div className="mr-4 h-[40px] w-[40px] overflow-hidden">{icon}</div>
        {navigation}
      </div>
      <div className="flex h-8 items-center gap-4">
        {rightElementFirst}
        {rightElementSecond}
      </div>
    </div>
  </header>
);
