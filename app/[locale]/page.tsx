import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ContactCTA from "@/components/sections/ContactCTA";
import { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

export default async function Home({
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const awaitedParams = await params;
  const dict = await getDictionary(awaitedParams.locale);

  return (
    <>
      <Hero dict={dict} />
      <Experience dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <ContactCTA dict={dict} />
    </>
  );
}
