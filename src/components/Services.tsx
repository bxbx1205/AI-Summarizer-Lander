import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";


interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Integration Options",
    description:
      "Connect effortlessly with platforms like Google Drive, Microsoft Office, and Dropbox, allowing easy document uploads for summarization.",
    icon: <ChartIcon />,
  },
  {
    title: "Summary Quality Feedback",
    description:
      "Get user feedback on generated summaries to continuously improve the AI's accuracy and relevance for various document types..",
    icon: <WalletIcon />,
  },
  {
    title: "Data Security & Privacy",
    description:
      "Your documents are processed securely with encryption, ensuring privacy and compliance with data protection regulations like GDPR.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-12">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="https://cdn.discordapp.com/attachments/1341687232855146565/1341977490519883796/SemiColonError_8.png?ex=67b7f56e&is=67b6a3ee&hm=1a23a6e8b7751b4e46e50f68cf0d3d6541484ebe3ad28301f76e182f2824607c&"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
