import TechOne from '../assets/tech-01.png';
import TechTwo from '../assets/tech-02.png';
import TechThree from '../assets/tech-03.png';
import TechFour from '../assets/tech-04.png';
import TechFive from '../assets/tech-05.png';
import TechSix from '../assets/tech-06.png';


const cardInfo = [
  {
    id: 1,
    icon: TechOne,
    heading: "Backend Development",
    BgColor: "#eaeaff",
    BorderColor: "#a2a8ff",
    content:
      ".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA",
  },
  {
    id: 2,
    icon: TechTwo,
    heading: "Frontend Development",
    BgColor: "#fff3e4",
    BorderColor: "#ffbd76",
    content:
      ".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA",
  },
  {
    id: 3,
    icon: TechThree,
    heading: "Mobile Development",
    BgColor: "#faeaff",
    BorderColor: "#eea3f0",
    content:
      ".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA",
  },
  {
    id: 4,
    icon: TechFour,
    heading: "Blockchain , AI/ML",
    BgColor: "#e8fbff",
    BorderColor: "#9aefff",
    content:
      ".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA",
  },
  {
    id: 5,
    icon: TechFive,
    heading: "Devops & LOw Code",
    BgColor: "#f8ffee",
    BorderColor: "#e1fcb4",
    content:
      ".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA",
  },
  {
    id: 6,
    icon: TechSix,
    heading: "E-commerce & CMS",
    BgColor: "#ffeae7",
    BorderColor: "#ffb3a6",
    content:
      ".NET | C/C++ | DJANGO | Firebase | GOLANG | SYMFONY | LARAVEL NODE|  PHP|PYTHON | RUBY ON RAILS | JAVA",
  },
];

const DiverseTechnology = () => {
  return (
    <section className="w-full bg-red-50">
      <div className="  max-w-7xl  mx-auto py-16   ">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl leading-tight tracking-wide font-bold mb-2 ">
           Our Diverse Technology Competency
          </h1>
          <p className=" text-base md:text-lg leading-relaxed tracking-wide  max-w-3xl mx-auto text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {cardInfo.map(
            ({ id, icon, heading, BgColor, BorderColor, content }) => (
              <div
                className={`w-full   rounded-lg p-6 border-b-7 shadow  `}
                key={id}
                style={{
                  backgroundColor: BgColor,
                  borderBottomColor: BorderColor,
                }}
              >
                <div className="flex gap-5 items-center">
                  <img src={icon} alt={heading} className="w-12" />
                  <h3 className="text-xl font-semibold">{heading}</h3>
                </div>
                <p className="mt-5 text-[0.9em] leading-6">{content}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default DiverseTechnology;
