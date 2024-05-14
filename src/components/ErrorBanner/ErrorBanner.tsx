interface ErrorBannerProps {
  label?: string;
}

export const ErrorBanner: React.FC<ErrorBannerProps> = ({ label }) => {
  return (
    <div className="rounded p-4 my-4 bg-primary-red">
      <p className="text-center text-primary-white">
        {label ? label : 'Error has occurred during fetching, this resource might be unavailable'}
      </p>
    </div>
  );
};
