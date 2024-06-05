type HeaderProps = {
  icon?: React.ReactNode;
  navigation?: React.ReactNode;
  rightElementFirst?: React.ReactNode;
  rightElementSecond?: React.ReactNode;
};

export const Header = ({ icon, navigation, rightElementFirst, rightElementSecond }: HeaderProps) => {
  return (
    <header className="fixed top-0 z-20 w-full border-b border-appGrayLight dark:border-appGray dark:bg-gray-900 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2.5">
        <div className="flex items-center">
          <div className="mr-5 h-[40px] w-[40px] overflow-hidden">{icon}</div>
          {navigation}
        </div>
        <div className="flex items-center h-8 gap-5">
          {rightElementFirst}
          {rightElementSecond}
        </div>
      </div>
    </header>
  );
};
