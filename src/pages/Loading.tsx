import Logo from "@/assets/svg/logo.svg?react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <Logo className="animate-pulse"/>
    </div>
  );
};

export default LoadingPage;
