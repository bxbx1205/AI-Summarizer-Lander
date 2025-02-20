import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Context-Aware Summarization",
    description:
      "Provides concise summaries while preserving key details and context from the original document.",
    image: "https://cdn.discordapp.com/attachments/1341687232855146565/1341978679911256115/SemiColonError_11.png?ex=67b7f68a&is=67b6a50a&hm=d951bf6086c0634263f956a86f1da4c713afc65ef9d153b11ce11f8b88a0f1d9&",
  },
  {
    title: "Domain-Specific Customization",
    description:
      "Adapts to different fields like healthcare, law, and finance, ensuring accurate handling of technical language.",
    image: "https://cdn.discordapp.com/attachments/1341687232855146565/1341978680523624519/SemiColonError_9.png?ex=67b7f68a&is=67b6a50a&hm=cc4c307e39dde07503b415c6b19dec42c4aeb530a54e0d2816bcb3207bd7f623&",
  },
  {
    title: "Flexible Summary Length",
    description:
      "Allows users to choose the length of the summary and supports various document formats for input and output.",
    image: "https://cdn.discordapp.com/attachments/1341687232855146565/1341978680200659044/SemiColonError_10.png?ex=67b7f68a&is=67b6a50a&hm=ece3d6d2275c8cba7525ff952502ebf7f098751ac48e5b368a2ac1e0c931c54d&",
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Contact form",
  "Our team",
  "Responsive design",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-12 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
