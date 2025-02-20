import { Statistics } from "./Statistics";


export const About = () => {
  return (
    <section 
      id="about"
      className="container py-24 sm:py-32 pt-0 pb-20"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={"https://cdn.discordapp.com/attachments/1341687232855146565/1341709124139876422/SemiColonError_3.png?ex=67b6fb7e&is=67b5a9fe&hm=9b7ee48b674e115ed214f947791cf92793ab7d44016a2f7e33005bf8bf90816d&"}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Project
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              This project is an AI-powered tool designed to generate concise and accurate summaries from lengthy documents such as research papers, legal contracts, and news articles. It preserves essential information and context, while adapting to various domains like healthcare, finance, and education. The tool offers customizable summary lengths and supports multiple formats, making it easier for users to quickly extract key insights and save time when dealing with large amounts of information.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
