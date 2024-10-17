type Props = {
  text: string
  textColor?: string;
  bgColor?: string;
  position? : string;
};

export default function Toast({
  text = 'Toast',
  bgColor = 'bg-dark-gray',
  textColor = 'text-white',
  position = 'flex-none'
}: Props) {
  return (
    <div
      className={`w-[343px] h-[52px] py-1 px-4 rounded-sm text-center items-center ${position} ${bgColor} ${textColor}`}
      style={{ whiteSpace: 'pre-line' }}
    >
      {text}
    </div>
  );
}
