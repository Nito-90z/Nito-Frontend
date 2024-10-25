import Image from 'next/image';
import upIcon from '../../../public/images/up.svg';
import downIcon from '../../../public/images/down.svg';

type Props = {
  size?: 'sm' | 'lg';
  icon?: boolean;
  direction: 'up' | 'down';
  children: React.ReactNode;
};

export default function Badge({
  size = 'sm',
  direction,
  children,
  icon = false,
}: Props) {
  return (
    <div className={getBadgeStyle(size, direction, icon)}>
      {icon && (
        <Image
          src={direction === 'up' ? upIcon : downIcon}
          alt={
            icon ? `${children}% ${direction} badge` : JSON.stringify(children)
          }
          className={
            size === 'sm' ? 'h-[10.04px] w-[9.5px]' : 'h-3 w-[11.36px]'
          }
        />
      )}
      <span>{children}</span>
    </div>
  );
}

function getBadgeStyle(
  size: 'sm' | 'lg',
  direction: 'up' | 'down',
  icon: boolean,
) {
  const baseStyle =
    'flex justify-center items-center shrink-0 py-[1px] px-1 w-fit rounded-sm';
  const sizeStyle = size === 'sm' ? ' text-xs' : 'text-base';
  const directionStyle =
    direction === 'up'
      ? 'text-green bg-light-green'
      : icon
        ? 'text-brand bg-light-brand'
        : 'text-white bg-brand';

  return `${baseStyle} ${sizeStyle} ${directionStyle}`;
}
