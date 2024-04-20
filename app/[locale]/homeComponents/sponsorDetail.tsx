import { useTranslations } from "next-intl";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import "./sponsorDetail.css";
import Image from "next/image";

type SponsorDetailsProps = {
  sponsorshipName: string;
  beneficios: string[];
  inversion: string;
  image: string;
};

const SponsorDetail: React.FC<SponsorDetailsProps> = ({
  sponsorshipName,
  beneficios,
  inversion,
  image
}: SponsorDetailsProps) => {
  const t = useTranslations("home.sponsorship.beneficios");

  return (
    <Card className="w-full bg-background-dark text-[#FFF] text-lg p-6">
      <CardHeader className="text-2xl">
        <Image className="sponsor-icon" src={`/${image}.png`} alt={sponsorshipName} width={50} height={50} />
        {sponsorshipName}</CardHeader>
      <CardBody>
        {beneficios.map((b, i) => (
          <p key={i}>{t(`${b}`)}</p>
        ))}
      </CardBody>
      <CardFooter className="text-2xl">Investment ${inversion}</CardFooter>
    </Card>
  );
};

export default SponsorDetail;
