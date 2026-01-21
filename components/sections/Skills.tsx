import { Dictionary } from "@/getters/dictionary";

type Props = {
  dict: Dictionary;
};
export default function Skills({ dict }: Props) {
  return (
    <section id="skills" className="px-6 py-32 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold font-display">
        {dict.skills.title}
      </h2>

      <p className="mt-4 text-neutral-600 max-w-2xl">
        {dict.skills.description}
      </p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <SkillCard
          title={dict.skills.categories.frontend}
          skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"]}
        />

        <SkillCard
          title={dict.skills.categories.backend}
          skills={["Node.js", "Express", "NestJS", "REST APIs"]}
        />

        <SkillCard
          title={dict.skills.categories.databases}
          skills={["MongoDB", "DynamoDB", "PostgreSQL", "Socket.IO", "Pusher"]}
        />

        <SkillCard
          title={dict.skills.categories.cloud}
          skills={[
            "AWS (EC2, S3, EB, Lambda)",
            "API Gateway",
            "EventBridge",
            "GCP",
            "Vercel",
            "SES / SNS",
            "Alexa for Business",
            "GitHub Actions",
          ]}
        />

        <SkillCard
          title={dict.skills.categories.integrations}
          skills={[
            "HERE API",
            "Mapbox",
            "Auth0",
            "Mailgun",
            "Cloudinary",
            "cron-job.org",
          ]}
        />

        <SkillCard
          title={dict.skills.categories.observability}
          skills={["Rollbar", "ELK", "Cloudwatch"]}
        />

        <SkillCard
          title={dict.skills.categories.workflow}
          skills={["Git", "GitHub", "Scrum", "Kanban", "Jira", "Linear"]}
        />
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-black/5
        p-8
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        transition-all
        hover:-translate-y-1
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
      "
    >
      <h3 className="text-lg font-semibold mb-5">{title}</h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              px-3 py-1.5
              text-sm
              rounded-full
              bg-neutral-100
              text-neutral-700
              border border-black/5
            "
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
