interface LogoIconProps {
  size?: number;
  className?: string;
}

const LogoIcon = ({ size = 24, className = "" }: LogoIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-yellow-400 ${className}`}
    >
      <path
        d="M8 4L4 12h6l-2 8 8-12h-6l2-8z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoIcon; 