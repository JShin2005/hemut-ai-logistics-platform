import { Link } from "react-router-dom";


interface LogoProps {
  showText?: boolean;
  className?: string;
}

const Logo = ({ showText = true, className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      {/* Custom Lightning Bolt Icon matching the reference design */}
      {/* <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-400"
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
      
      {/* Text "emut" with bold, rounded styling */}
      {/* {showText && (
        <span className="text-yellow-400 font-bold text-xl tracking-tight">
          hemut
        </span>
      )} */}
      <img src="/hemut_logo_lightning.png" alt="hemut" width={120} height={120} />
    </Link>
  );
};

export default Logo; 