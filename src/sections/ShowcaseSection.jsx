import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const biryaniRef = useRef(null);
  const travelRef = useRef(null);
  const gymRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
      biryaniRef.current,
      travelRef.current,
      gymRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="projects"
      ref={sectionRef}
      className="app-showcase px-4 py-10 md:px-16"
    >
      <div className="w-full space-y-20">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Big Project Left */}
          <div
            ref={rydeRef}
            className="col-span-1 md:col-span-2 flex flex-col gap-4"
          >
            <div className="image-wrapper w-full">
              <img
                src="/images/Xentry.png"
                alt="Xentry"
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-content space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold">XentryBook</h1>
              <h2 className="text-lg text-gray-300">
                Designed UI for Task & Worker Monitoring
              </h2>
              <p className="text-white/80 md:text-xl">
                Developed responsive frontend interfaces for the Xenterybook
                platform using React.js (web) and React Native (mobile),
                implementing interactive features like workout plan displays and
                real-time attendance tracking to ensure a consistent and
                seamless user experience across platforms.{" "}
              </p>
            </div>
          </div>
          

          {/* Two Small Right */}
          <div className="flex flex-col gap-8">
          <div ref={gymRef} className="project space-y-2">
              <div className="image-wrapper bg-[#F3E5F5] rounded-lg overflow-hidden">
                <img
                  src="/images/ADFW.png"
                  alt="Token-based Gym System"
                  className="w-full"
                />
              </div>
              <h2 className="text-xl font-semibold">
                {" "}
                AbuDhabi Finance Week (ADFW) 2024
              </h2>
              <p className="text-white/80">
                Designed responsive UI layouts for worker tracking, task
                automation, and monitoring screens for the ADFW 2024 project
                using React.js, Tailwind CSS, and Ant Design. Additionally,
                developed patient management and appointment scheduling modules
                for the Hospital Management System (HMS) using React.js,
                Bootstrap, and Ant Design, along with interactive dashboards for
                medical records and prescription management focused on seamless
                user experience.
              </p>
            </div>
            

            <div ref={ycDirectoryRef} className="project space-y-2">
              <div className="image-wrapper bg-[#FFE7EB] rounded-lg overflow-hidden">
                <img
                  src="/images/QFRESH.png"
                  alt="QFRESH App"
                  className="w-full"
                />
              </div>
              <h2 className="text-xl font-semibold">
                Q Fresh E-commerce Platform
              </h2>
              <p className="text-white/80">
                ngineered responsive e-commerce interfaces for the Q Fresh fruit
                and vegetable ordering platform using Next.js and Tailwind CSS,
                developing mobile-optimized product catalogs, intuitive shopping
                experiences, and interactive features for product browsing, cart
                management, and checkout flows.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Big Project Left */}
          <div
            ref={biryaniRef}
            className="col-span-1 md:col-span-2 flex flex-col gap-4"
          >
            <div className="image-wrapper w-full">
              <img
                src="/images/CRM.png"
                alt="CRM App"
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-content space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold">
                Customer Relationship Management (CRM)
              </h1>
              <h2 className="text-lg text-gray-300">Designed UI for Task</h2>
              <p className="text-white/80 md:text-xl">
                Engineered responsive frontend interfaces for a Customer
                Relationship Management (CRM) system using Next.js, Tailwind
                CSS, and Ant Design, implementing dynamic features like a
                real-time analytics dashboard and automated lead management with
                seamless API integration.{" "}
              </p>
            </div>
          </div>

          {/* Two Small Right */}
          <div className="flex flex-col gap-8">
          <div ref={libraryRef} className="project space-y-2">
              <div className="image-wrapper bg-[#FFEFDB] rounded-lg overflow-hidden">
                <img src="/images/hms.png" alt="HMS" className="w-full" />
              </div>
              <h2 className="text-xl font-semibold">
                Hospital Management System (HMS)
              </h2>
              <p className="text-white/80">
                Developed responsive frontend interfaces for patient management
                and appointment scheduling modules using React.js, Bootstrap,
                and Ant Design, and implemented interactive dashboards for
                medical records and prescription management with a focus on
                seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
