import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <img src="https://media.discordapp.net/attachments/1341687232855146565/1341714791542161501/2.png?ex=67b700c6&is=67b5af46&hm=81a1fa232cc77379b227713472615cd67e9ad490d25c8e0ea502e8c6633139fe&=&format=webp&quality=lossless&width=646&height=662" alt="" />,
    title: "Upload the Document",
    description:
      "Upload your document in a supported format (PDF, DOCX, plain text) via the tool’s interface.",
  },
  {
    icon: <img src="https://cdn.discordapp.com/attachments/1341687232855146565/1341714792209186826/3.png?ex=67b700c6&is=67b5af46&hm=e770edd4e5295fe1b7d393594ef0fd4b9aa37cd8db9c2b21a9851635d42f11fa&" alt="" />,
    title: "Set Preferences",
    description:
      "Choose the document's domain (e.g., healthcare, legal) and set summary length preferences (short, medium, detailed).",
  },
  {
    icon: <img src="https://cdn.discordapp.com/attachments/1341687232855146565/1341717605421027358/SemiColonError_4.png?ex=67b70365&is=67b5b1e5&hm=c232b666abe5ac306a4b1e2b7741b64649391134d0fce3b73e4747cd18b598f9&" alt="" />,
    title: "AI Summarization",
    description:
      "The AI processes the document, extracts key points, and generates a concise summary while preserving context.",
  },
  {
    icon: <img src="https://cdn.discordapp.com/attachments/1341687232855146565/1341714792951316513/4.png?ex=67b700c6&is=67b5af46&hm=4e994addedb4a57dac1f1ceacdcf02a8cc3d4b3b386096433104575306c24f0a&" alt="" />,
    title: "Review and Export",
    description:
      "Review the generated summary, make any adjustments if needed, and export it in your preferred format (PDF, DOCX, text).",
  },
];

export const HowItWorks = () => {
  return (
    <section 
      id="howItWorks"
      className="container text-center py-8 sm:py-5"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Operates{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      The AI tool processes uploaded documents, generates concise summaries based on selected preferences, and allows users to review and export the results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
