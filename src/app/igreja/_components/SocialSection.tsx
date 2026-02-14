import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialSectionProps = {
  title: string;
  subtitle: string;
  socialLinks: {
    platform: "facebook" | "instagram" | "youtube" | "twitter";
    handle: string;
    url: string;
  }[];
  images: {
    image1: string;
    image2: string;
    instagramCard: string;
  };
};

const SocialSection = ({
  title,
  subtitle,
  socialLinks,
  images,
}: SocialSectionProps) => {
  const iconMap = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube,
    twitter: FaXTwitter,
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-stretch">
          {/* Coluna das imagens */}
          <div className="flex flex-col gap-4 h-full">
            <div className="w-full h-28 md:h-48 overflow-hidden rounded-3xl">
              <img
                src={images.image1}
                alt="Imagem 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-28 md:h-48 overflow-hidden rounded-3xl">
              <img
                src={images.image2}
                alt="Imagem 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card redes sociais */}
          <div className="bg-[#D9D9D9] rounded-3xl p-4 md:p-6 flex gap-2 md:gap-2 items-center justify-center shadow-md h-full">
            <div className="flex-1 flex flex-col py-2 md:py-4 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-lg md:text-3xl font-semibold text-black text-left ">
                  {title}
                </h2>
                <p className="text-sm md:text-xl text-gray-600 text-left ">
                  {subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-base">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.platform];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 hover:text-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{social.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex w-1/2 justify-center">
              <img
                src={images.instagramCard}
                alt="Instagram Card"
                className="rounded-2xl border shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SocialSection };
