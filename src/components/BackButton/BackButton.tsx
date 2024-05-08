import { cn } from '../../helpers';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
  fillColor?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, className, fillColor }) => {
  return (
    <button onClick={onClick} className={cn(className)}>
      <svg
        fill={fillColor || '#000'}
        width="20px"
        height="20px"
        viewBox="0 0 52 52"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group_132">
          <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z" />
        </g>
      </svg>
    </button>
  );
};
