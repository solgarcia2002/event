import { useTranslations } from "next-intl";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import "./sponsorDetail.css";

type SponsorDetailsProps = {
  sponsorshipName: string;
  beneficios: string[];
  inversion: string;
};

const SponsorDetail: React.FC<SponsorDetailsProps> = ({
  sponsorshipName,
  beneficios,
  inversion,
}: SponsorDetailsProps) => {
  const t = useTranslations("home.sponsorship.beneficios");

  return (
    <Card className="w-full">
      <CardHeader>{sponsorshipName}</CardHeader>
      <CardBody>
        {beneficios.map((b, i) => (
          <p key={i}>{t(`${b}`)}</p>
        ))}
      </CardBody>
      <CardFooter>Investment ${inversion}</CardFooter>
    </Card>
  );
};

export default SponsorDetail;
