import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Olimov Abdulloh",
    experience: "6 year",
    projects: "31 project",
    technologies:
      "Java Script, Laravel PHP Framework, Yii2 PHP Framework, Postgre SQL, MuSOL, Git, PostGIS, Figma, Postman, Swagger",
    image:
      "https://progress-solution.uz/storage/teams/1705312013Chaplin_Media-385240.jpg",
    level: "Strong middle"
  },
  {
    name: "Beshimov Nodir",
    experience: "6 year",
    projects: "30 project",
    technologies:
      "Java Script, Vue.js, Git, PostGIS, Figma, Postman, Leaflet, QGIS",
    image:
      "https://progress-solution.uz/storage/teams/1705312013Chaplin_Media-385240.jpg",
    level: "Strong middle"
  },
  {
    name: "Eshturdiyev Doston",
    experience: "4 year",
    projects: "22 project",
    technologies: "Frontend, React.js, JavaScript, TypeScript, Next.js",
    image:
      "https://progress-solution.uz/storage/teams/1705312013Chaplin_Media-385240.jpg",
    level: "Middle"
  }
];

const OurTeam = () => {
  const { t } = useTranslation(); // i18n qo'llash

  return (
    <div className="pb-10 container mx-auto">
      <h2 className="text-center text-3xl font-bold mb-10">{t("our_team")}</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full">
                {member.level}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="flex items-center text-gray-600 mb-2">
                <i className="fas fa-briefcase mr-2"></i>
                <span>
                  {t("experience")}: {member.experience}
                </span>
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <i className="fas fa-project-diagram mr-2"></i>
                <span>
                  {t("projects_number")}: {member.projects}
                </span>
              </p>
              <p className="flex items-center text-gray-600">
                <i className="fas fa-code mr-2"></i>
                <span>
                  {t("technologies")}: {member.technologies}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
