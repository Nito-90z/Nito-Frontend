type Props = {
  text: string;
  textColor?: string;
  bgColor?: string;
};

export default function Toast({
  text = 'Toast',
  bgColor = 'bg-dark-gray',
  textColor = 'text-white',
}: Props) {
  return (
    <div
      className={`w-[343px] h-[52px] px-2.5 rounded-sm text-center ${bgColor} ${textColor}`}
    >
      {text}
    </div>
  );
}
