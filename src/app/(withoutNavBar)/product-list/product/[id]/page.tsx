type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params: { id } }: Props) {
  return <section className="flex flex-col gap-5 h-full">{id}</section>;
}
