/* eslint-disable @next/next/no-img-element */

const CDN = "https://cdn.prod.website-files.com/6764524f1a49aef4f46affb6";
const CDN2 = "https://cdn.prod.website-files.com/677a0ee1c4d0c3a0dc5ba81b";

const LOGO = `${CDN}/6764524f1a49aef4f46affd5_Logo.svg`;
const STAR = `${CDN}/67849eada62ce8f6d5dab3a6_Star%201.svg`;
const HERO_GLOW = `${CDN}/67b8bc416a77dec2e919427f_00125c5f458a908380559a871066db3d_hero-glow.avif`;
const HERO_DOTS = `${CDN}/6981f929d8584b6e213af9a9_8303d1cb8065a123058c7304cdde47f9_dots.png`;
const HERO_BG = `${CDN}/6777fec42d2676a6e73da23d_9288550dc8dddd240c8e6bea14faa712_BG%20images.avif`;
const HERO_BEAM = `${CDN}/67b8bc42edeb1544a0197868_3da599ac4b0c6d5b6b6b5e6db9ed36dc_hero-light-beam.avif`;
const VIDEO_THUMB = `${CDN}/6784bc8beb844945c9f7d241_814358f01198bdd42b6cacd8d418c9f2_hero%20video%20thumbnail.avif`;
const VIDEO_ICON = `${CDN}/6784b6065653051425c66d2f_video-icon.svg`;
const CURSOR_BG = `${CDN}/67bca84134f178d312777cbe_bg%20cursos.avif`;

const CHRIS_WALKER = `${CDN}/67cf581f2cd59d1481ee3f70_Chris%20Walker%20Headshot%203%20WEB%20(sds1)%201%201.avif`;
const CHRIS_DOTS = `${CDN}/67cf56c67421be3aaa11e34b_dots.avif`;
const PASSETTO_LOGO = `${CDN}/67cf57c6256b02fb6e8199d7_Logo.svg`;
const CHRIS_FRAME = `${CDN}/67cf5924b07303ca857f8ab0_Frame%202147227102.avif`;

const ICON_NO = `${CDN}/6779f60c9e727788007f80b4_icon-no3.avif`;
const ICON_YES = `${CDN}/6779fb84d675eb5ae7cda7d1_icon-yes.avif`;
const QUOTE_ICON = `${CDN}/6791deed3e04e8ef0a95f3b8_Union.svg`;

const CTA_ICON = `${CDN}/677aabc2de5b11e08b7c873a_Cta%20Icon%20(2).avif`;
const CTA_BG1 = `${CDN}/677b70b37e7befb056a4abd9_image%2063346850.avif`;
const CTA_BG2 = `${CDN}/677b70b3b2b7a9e0a45ef25a_image%2063346848.avif`;

// Marquee logos (unique set of 16)
const MARQUEE_LOGOS = [
  `${CDN}/67ce1624b0a55050e6453e61_dell.svg`,
  `${CDN}/67ce16248f2c435d4976d169_zenhub.svg`,
  `${CDN}/67ce1623c9ed6f3ae0d36507_anvilogic.svg`,
  `${CDN}/67ce1624b096a4729b7d485b_anvilogic-1.svg`,
  `${CDN}/67ce162378e6d8f70b77cd97_dell-1.svg`,
  `${CDN}/67ce1624c9ed6f3ae0d36568_zenhub-1.svg`,
  `${CDN}/67ce16245f3e0b875bf5fe39_Frame%202085660705.svg`,
  `${CDN}/687fdf7fafd372fe01805a44_zenhub.svg`,
  `${CDN}/67ce162447d6a369c99aacd3_Frame%202085660704.svg`,
  `${CDN}/67ce162432c401d798b80084_zenhub-2.svg`,
  `${CDN}/67ce1624402a352f4c315d1a_Frame%202085660705-1.svg`,
  `${CDN}/67ce16243c238822c453c259_Frame%202085660706.svg`,
  `${CDN}/67ce1624c4d8d852d851fc97_dell-2.svg`,
  `${CDN}/67ce1624fd8e05a730fbd736_zenhub-3.svg`,
  `${CDN}/67ce1623e965c5b385b9de1d_Frame%202085660705-2.svg`,
  `${CDN}/67ce1624b79a58c7bde57055_Frame%202085660706-1.svg`,
];

// Service card data
const SERVICES = [
  {
    icon: `${CDN}/6778ddd1633bd6ebc95ac929_BoundingBox.svg`,
    title: "B2B Web Design",
    desc: "On-brand web design that not only looks great but is optimized to engage and convert",
    image: `${CDN}/67794fc885338dcb91a46a55_graphic%20(1).avif`,
  },
  {
    icon: `${CDN}/677949e1ddcd2517062f0462_BoundingBox.svg`,
    title: "Webflow Development",
    desc: "Scale faster with a performant and optimized Webflow website",
    image: `${CDN}/67794d5e458ca4e6bbf02b98_graphic%20(3).avif`,
  },
  {
    icon: `${CDN}/6779e47faf27bc8264bf66b2_BoundingBox%20(1).svg`,
    title: "Ongoing Support",
    desc: "A fast and reliable extension of your team",
    image: `${CDN}/67792dfb981c4d87af1d2a19_projects%20ss1.avif`,
  },
  {
    icon: `${CDN}/6779e5cd458ca4e6bb532cf7_BoundingBox%20(2).svg`,
    title: "Website Strategy",
    desc: "Expert strategy to get the most out of your website",
    image: `${CDN}/67792e14c557169d4faf46c2_projects%20ss2.avif`,
  },
  {
    icon: `${CDN}/6779e5cd32efbfd3219ec2f8_BoundingBox%20(3).svg`,
    title: "Website Migration",
    desc: "Seamlessly migrate to the best website platform, Webflow",
    image: `${CDN}/67792e37de9ca7ca6cc8c052_projects%20ss3.avif`,
  },
];

// Work/Projects data
const PROJECTS = [
  {
    name: "Awardco",
    subtitle: "Employee recognition software",
    image: `${CDN2}/6839572314ddc1966f8e6709_Awardco%20main.avif`,
    quote:
      '"Working with Amply on our website redesign wasn\'t just a cosmetic update. It helped us tell a bigger story and set the stage for what\'s next. The Amply team brought sharp strategy, creativity and solid execution, building a beautiful, fast and scalable Webflow platform that reflects who Awardco is today and where we\'re headed."',
    author: "Dave Christison",
    authorRole: "VP Marketing",
    authorImage: `${CDN2}/687fe3b353232df957280f9d_Dave%20Christison%2C%20VP%20Marketing%2C%20Awardco.avif`,
    link: "/project/awardco",
  },
  {
    name: "Anvilogic",
    subtitle: "Detection Engineering Platform",
    image: `${CDN2}/683741803680738135d22c09_Work%20Example.avif`,
    quote:
      "Conversion rates have gone up. Time on the website has increased. Organic traffic has also grown significantly over the last year, largely driven by the stronger brand we've built with the help of AMPLY and our ability to differentiate ourselves from competitors",
    author: "Joseph Himinkool",
    authorRole: "Marketing Director, Anvilogic",
    authorImage: `${CDN2}/6880f28657dcb76361a4a1d3_joe.avif`,
    link: "/project/anvilogic",
  },
  {
    name: "Zeni",
    subtitle: "Financial Operations Platform",
    image: `${CDN2}/67bcbd84c2925cbe172dc9cf_Work%20Example%20(1).avif`,
    quote:
      "Big thanks to the whole Amply team! We launched with no bugs, on time, and with a gorgeous website. That really never happens except when everyone is working on the same page.",
    author: "Jesse Boland",
    authorRole: "VP of Growth Marketing",
    authorImage: `${CDN2}/687feaef283948a9ee4fd6e1_Jesse.avif`,
    link: "/project/zeni",
  },
];

// Video testimonials
const VIDEO_TESTIMONIALS = [
  {
    quote:
      '"Amply did a fabulous job building our Webflow site the right way so maintaining it is super simple for us..."',
    name: "David Nivati",
    role: "VP of Marketing at Nivati",
    image1: `${CDN}/677a62023388b2ebd9a19e91_client%20image1.avif`,
    image2: `${CDN}/677a594e36f0a6df3a5caf9e_david-frame-2.avif`,
  },
  {
    quote:
      '"Amply was able make all our website dreams come true without being astronomically expensive. It was great collaboration between their strategy and expertise with our vision and message."',
    name: "Jordan Wilson",
    role: "Digital Marketing Director at BanQu",
    image1: `${CDN}/677a85a6afc0ef4f9d787938_image%20(3).avif`,
    image2: `${CDN}/677a594e36f0a6df3a5caf7e_jordan-frame-2.avif`,
  },
  {
    quote:
      '"When you arrive on our new site, it immediately establishes credibility..."',
    name: "Dave Christison",
    role: "Co-founder/COO at Status",
    image1: `${CDN}/677a85e1115e12eff6e2dfcb_image%20(2).avif`,
    image2: `${CDN}/677a594e36f0a6df3a5caf8a_dave-frame-2.avif`,
  },
];

// Text testimonials
const TEXT_TESTIMONIALS = [
  {
    text: "Our new site increased conversions by 10x. We were driving traffic to our previous site but conversions were low. Amply came in and provided a strategic approach in redesigning our new site to align with our audience.",
    name: "Lou Leporace",
    role: "CMO",
    headshot: `${CDN}/67bc67f09289802c37a73b69_649d86b70342982d3569a777_lou-leporace-headshot-p-500.avif`,
    companyLogo: `${CDN}/67bc67a646b7a4286c56c818_6453f215aecfc94253834bfa_mymeta%201.svg`,
  },
  {
    text: "Big thanks to the whole Amply team! We launched with no bugs, on time, and with a gorgeous website. That really never happens except when everyone is working on the same page.",
    name: "Jesse Boland",
    role: "VP of Growth Marketing",
    headshot: `${CDN}/67bc69ede7b11ca43754a2df_64a745192578ef0463f1d461_jesse-boland-zeni.avif`,
    companyLogo: `${CDN}/67bc6a048e7ff1e5c4c7121f_6453ef8bd668ebd6011e036b_Group%20217.svg`,
  },
  {
    text: "The Amply team has done an amazing job of working with us to do a complete redesign and launch of the new WorkSpan website. They were a joy to work with and were able to complete the project within the very tight timeline we set. If and when you need the help of an agency like Amply, there's no one I'd recommend more highly.",
    name: "Chip Rogers",
    role: "CMO",
    headshot: `${CDN}/67bc6ae9211f86b40264b301_64a7455f54ea30a53af37c32_chip-rogers-workspan-p-500.avif`,
    companyLogo: `${CDN}/67bc6afc5bfb88cd7e7a7986_644839ef3b4b575f8f1fed50_Logo%20(1).svg`,
  },
  {
    text: "Our site went from an outdated/broken WordPress site that didn't align with our messaging to an on-brand site that the marketing team can own and scale. The move to Webflow was definitely worth it.",
    name: "Brian Czarny",
    role: "CMO",
    headshot: `${CDN}/67bc684f3e2febfd7ad8647e_64a74b6620f10f4fe58026da_brian-czarny-headshot-p-500.avif`,
    companyLogo: `${CDN}/67bc6d0b2533b5b76670063f_6448397274acd9e229b12392_jupiter_logo_2%201.svg`,
  },
  {
    text: "If you've followed our website prior to this update, then you can appreciate what a leap in quality this is for us. Amply is the best at what they do and are great to work with. It's exciting to see the contrast and the new possibilities that this advanced website opens up!",
    name: "Jonathan Engle",
    role: "CEO",
    headshot: `${CDN}/67bc6a8a54ccc15cbabc518f_64a8436f97b3c9ea732c13d0_jonathan-engle-p-500.avif`,
    companyLogo: `${CDN}/67bc6a9e162f5cf85d28585c_641d9049c43e99833239c36b_startupstack-logo.svg`,
  },
  {
    text: "When you arrive on our new site, it immediately established credibility. We couldn't recommend the Amply team more if you're a B2B SaaS.",
    name: "Dave Christison",
    role: "Co-Founder & COO",
    headshot: `${CDN}/67bc6bc8e8ddb4368196a218_64a74bd428805b21f08ce878_dave-christison-p-500.avif`,
    companyLogo: `${CDN}/67bc6bae9f9dbaabdb9e3c1f_641d8fabf4195b4b8331ae2b_status%20(1).svg`,
  },
  {
    text: "Our new website and branding have really helped take our marketing to the next level and appeal to the right audience and capture more leads. Our previous site's look and feel was also very outdated and left customers confused about what we did and how to take action. Overall the project went very smoothly and we had a great time working with Amply! They were able to make all our website dreams come true without being astronomically expensive.",
    name: "Jordan Wilson",
    role: "Director of Marketing",
    headshot: `${CDN}/67bc69559820dc40e762729d_64a84032254922f413750a2a_jordan-wilson%201.avif`,
    companyLogo: `${CDN}/67bc68c1b0a4fd1b3c07a874_641d8dad4a7d2072ac2b181c_banqu-logo.svg`,
  },
  {
    text: "The new Webflow website Amply built for us is a massive improvement from our old WordPress site. We can now make updates to the site without getting IT involved or being worried about anything breaking. Plus, site conversion has grown 10x since launching. We couldn't be happier with the results!",
    name: "McKay Allen",
    role: "VP of Marketing",
    headshot: `${CDN}/67bc6c4ad6c8b423e280a0b2_64a74380ac1f95509baf1f69_Ellipse%207274%20(1).avif`,
    companyLogo: `${CDN}/67bc6c1bbede32d3308d78d3_641d2919e2e2c66c29826451_kenect-logo.avif`,
  },
];

// Scrolling small logos
const SMALL_LOGOS_ROW1 = [
  `${CDN}/677a451ee7a8f7ec31961a99_image%20(1).avif`,
  `${CDN}/677a472a85338dcb91311cf6_image2.avif`,
  `${CDN}/677a489b8c4e46abad0c5d86_image.avif`,
  `${CDN}/677a4920132b0c763252cf88_image5.avif`,
  `${CDN}/677a49274b4b7dca207bea28_image6.avif`,
  `${CDN}/677a494640474787291c9393_image7.avif`,
];

const SMALL_LOGOS_ROW2 = [
  `${CDN}/677a4a7c92b4b170ba3285a7_image8.avif`,
  `${CDN}/677a4a7c32efbfd321c96c89_image9.avif`,
  `${CDN}/677a4a7cd0c9a47a0a989b5e_image10.avif`,
  `${CDN}/677a4a7c6f12ef31a56f02ac_image11.avif`,
  `${CDN}/677a4a7c8c4e46abad0d7267_image12.avif`,
  `${CDN}/677a4a7c21d40497cbc7ccb5_image13.avif`,
];

// Footer link columns
const FOOTER_LINKS = {
  Services: [
    { label: "Webflow Agency", href: "#" },
    { label: "Webflow Development", href: "#" },
    { label: "Web Design", href: "#" },
    { label: "Webflow Enterprise", href: "#" },
    { label: "Branding", href: "#" },
    { label: "CRO", href: "#" },
    { label: "Maintenance", href: "#" },
    { label: "Technical SEO", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Migrations", href: "#" },
    { label: "Work", href: "#" },
  ],
  Pricing: [
    { label: "Packages", href: "#" },
    { label: "Retainers", href: "#" },
  ],
  "Use cases": [
    { label: "SaaS", href: "#" },
    { label: "AI", href: "#" },
    { label: "Fintech", href: "#" },
    { label: "Cybersecurity", href: "#" },
    { label: "Manufacturing", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "VC", href: "#" },
    { label: "Crypto", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Tools", href: "#" },
    { label: "About", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Why Amply", href: "#" },
    { label: "Comparisons", href: "#" },
    { label: "Book a Call", href: "#" },
  ],
};

function LogoMarquee() {
  return (
    <div className="marquee-fade overflow-hidden">
      <div className="flex animate-marquee w-max">
        {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="marquee logo"
            className="mx-6 h-6 w-auto opacity-50 md:mx-8 md:h-7"
          />
        ))}
      </div>
    </div>
  );
}

function StarBadge({
  text,
  variant = "dark",
}: {
  text: string;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
        isDark
          ? "border-white/10 bg-white/5"
          : "border-text-dark/10 bg-text-dark/5"
      }`}
    >
      <img src={STAR} alt="Star" className="h-4 w-4" />
      <span
        className={`text-sm font-medium ${isDark ? "text-white" : "text-text-dark"}`}
      >
        {text}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== ANNOUNCEMENT BAR ===== */}
      <nav className="relative z-50">
        <a
          href="#"
          className="block bg-gradient-to-r from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] px-4 py-2.5 text-center text-xs font-medium text-white/90 transition-colors hover:text-white"
        >
          New: Get Your Free Webflow Answer Engine Optimization (AEO) Starter
          Kit🔥
        </a>

        {/* ===== NAVBAR ===== */}
        <div className="border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="/" className="flex-shrink-0">
              <img src={LOGO} alt="Amply Logo" className="h-6" />
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <button className="text-sm text-white/60 transition-colors hover:text-white">
                Services
              </button>
              <button className="text-sm text-white/60 transition-colors hover:text-white">
                Pricing
              </button>
              <a
                href="#"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Work
              </a>
              <button className="text-sm text-white/60 transition-colors hover:text-white">
                Use Cases
              </button>
              <button className="text-sm text-white/60 transition-colors hover:text-white">
                Resources
              </button>
            </div>

            <a
              href="#"
              className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-bg-dark transition-opacity hover:opacity-90"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden bg-bg-dark pb-16 pt-20 md:pb-24 md:pt-28">
          {/* Background layers */}
          <img
            src={HERO_GLOW}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <img
            src={HERO_DOTS}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <img
            src={HERO_BG}
            alt=""
            className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-5xl -translate-x-1/2 object-contain"
          />
          <img
            src={HERO_BEAM}
            alt=""
            className="pointer-events-none absolute left-1/2 top-0 w-full max-w-4xl -translate-x-1/2 object-contain opacity-70"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <StarBadge text="Design and Webflow Agency" />

            <h1 className="mb-6 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Webflow websites that convert and scale for high-growth B2B
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base text-white/60 md:text-lg">
              We are experts in creating websites that resonate with and convert
              your ICP, build your brand, and scale on Webflow.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-md bg-white px-7 py-3 text-sm font-medium text-bg-dark transition-opacity hover:opacity-90"
              >
                Book a Call
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md border border-white/10 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/20"
              >
                See Work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Video Thumbnail */}
            <a
              href="https://player.vimeo.com/video/838832238"
              className="group relative mx-auto block max-w-2xl overflow-hidden rounded-xl"
            >
              <img
                src={VIDEO_THUMB}
                alt="Amply video"
                className="w-full rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-sm">
                  <img src={VIDEO_ICON} alt="" className="h-5 w-5" />
                  <div className="text-left text-sm leading-tight text-white">
                    <div>See the Amply Advantage</div>
                    <div className="text-xs text-white/60">
                      90 Second Video
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Cursor decoration */}
          <img
            src={CURSOR_BG}
            alt=""
            className="pointer-events-none absolute bottom-20 right-4 hidden w-48 lg:block"
          />
        </section>

        {/* ===== LOGO MARQUEE ===== */}
        <section className="bg-bg-darker py-10">
          <LogoMarquee />
        </section>

        {/* ===== TRUSTED BY INDUSTRY LEADERS ===== */}
        <section className="relative overflow-hidden bg-bg-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <h3 className="mb-12 text-center text-2xl font-medium text-white md:text-3xl">
              Trusted by industry leaders
            </h3>

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              {/* Left: Quote */}
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                <img
                  src={CHRIS_DOTS}
                  alt=""
                  className="pointer-events-none absolute right-0 top-0 h-32 opacity-20"
                />
                <img
                  src={PASSETTO_LOGO}
                  alt="Passetto"
                  className="mb-6 h-6 opacity-60"
                />
                <p className="mb-8 text-sm leading-relaxed text-white/70 md:text-base">
                  Amply knocked it out of the park with our new website. Working
                  with them was easy, and they just got us. They helped us switch
                  from Wordpress to Webflow and it&apos;s been a total
                  game-changer in driving traffic, telling our story, and
                  converting visitors into high-quality sales meetings.
                  They&apos;re the real deal!
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-sm font-medium text-white">
                      Chris Walker
                    </div>
                    <div className="text-xs text-white/40">Founder/CEO</div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <img
                  src={CHRIS_WALKER}
                  alt="Chris Walker"
                  className="h-auto w-full rounded-2xl object-cover"
                />
                <img
                  src={CHRIS_FRAME}
                  alt=""
                  className="absolute -bottom-4 -right-4 hidden w-64 lg:block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES - WHAT WE DO ===== */}
        <section className="bg-bg-dark py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <StarBadge text="Agency Services" />
              <h3 className="text-3xl font-medium text-white md:text-4xl">
                What we do
              </h3>
            </div>

            {/* Top row: 2 cards */}
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              {SERVICES.slice(0, 2).map((s) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#181118] p-8"
                >
                  <div className="relative z-10">
                    <img
                      src={s.icon}
                      alt=""
                      className="mb-4 h-10 w-10 rounded-lg border border-white/10 p-2"
                    />
                    <h3 className="mb-2 text-lg font-medium text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/50">{s.desc}</p>
                  </div>
                  <img
                    src={s.image}
                    alt=""
                    className="mt-6 w-full rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Bottom row: 3 cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {SERVICES.slice(2).map((s) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#181118] p-8"
                >
                  <div className="relative z-10">
                    <img
                      src={s.icon}
                      alt=""
                      className="mb-4 h-10 w-10 rounded-lg border border-white/10 p-2"
                    />
                    <h3 className="mb-2 text-lg font-medium text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/50">{s.desc}</p>
                  </div>
                  <img
                    src={s.image}
                    alt=""
                    className="mt-6 w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMPARISON: OLD WAY vs AMPLY WAY ===== */}
        <section className="bg-bg-light py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <StarBadge text="The Amply Difference" variant="light" />
              <h3 className="text-3xl font-medium text-text-dark md:text-4xl">
                Setting a new standard for B2B
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* The Old Way */}
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h4 className="mb-6 text-lg font-semibold text-text-dark">
                  The Old Way
                </h4>
                <div className="space-y-4">
                  {[
                    "Marketing doesn't own the site and can't scale it without breaking",
                    "Slow time to market due to delayed website updates",
                    "ICP leaves because they don't understand the value of the product",
                    "Outdated messaging and design that doesn't resonate with your ICP",
                    "Low conversation rates",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <img src={ICON_NO} alt="" className="mt-0.5 h-5 w-5" />
                      <span className="text-sm text-text-dark/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Amply Way */}
              <div className="rounded-2xl bg-bg-dark p-8">
                <h2 className="mb-6 text-lg font-semibold text-white">
                  The Amply Way
                </h2>
                <div className="space-y-4">
                  {[
                    "Scalable site that's owned by the marketing team with Webflow",
                    "Faster time to market with a performant Webflow website",
                    "Highly experienced experts in B2B design and storytelling",
                    "On-brand designs that connect with your ICP and set you apart",
                    "High Converting Websites",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <img src={ICON_YES} alt="" className="mt-0.5 h-5 w-5" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WORK / PROJECTS ===== */}
        <section className="bg-bg-light py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <StarBadge text="Recent Webflow Projects" variant="light" />
              <h3 className="text-3xl font-medium text-text-dark md:text-4xl">
                Driving impact for marketing and web teams
              </h3>
            </div>

            <div className="space-y-12">
              {PROJECTS.map((project) => (
                <div
                  key={project.name}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Left: Info */}
                    <div className="flex flex-col justify-between p-8 md:p-10">
                      <div>
                        <div className="mb-1 flex items-center gap-3">
                          <h4 className="text-2xl font-semibold text-text-dark">
                            {project.name}
                          </h4>
                          <a
                            href={project.link}
                            className="flex items-center gap-1 text-sm text-text-dark/60 transition-colors hover:text-text-dark"
                          >
                            See Project
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M1 7h12M8 2l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <p className="text-sm text-text-muted">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-6 rounded-xl bg-bg-light p-6">
                        <p className="mb-4 text-sm italic leading-relaxed text-text-dark/70">
                          {project.quote}
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src={project.authorImage}
                            alt={project.author}
                            className="h-8 w-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-text-dark">
                              {project.author}
                            </div>
                            <div className="text-xs text-text-muted">
                              {project.authorRole}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative min-h-[300px]">
                      <a href={project.link}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="h-full w-full object-cover"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUE B2B EXPERTS CTA ===== */}
        <section className="bg-bg-light py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 text-3xl font-medium text-text-dark md:text-4xl">
              True B2B design and Webflow experts. It&apos;s all we do.
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-bg-dark px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              See More Work
            </a>
          </div>
        </section>

        {/* ===== VIDEO TESTIMONIALS ===== */}
        <section className="bg-bg-darkest py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <StarBadge text="We love our clients" />
              <h3 className="text-3xl font-medium text-white md:text-4xl">
                What our clients say about us
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {VIDEO_TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/5"
                >
                  {/* Background image */}
                  <div className="relative aspect-[3/4]">
                    <img
                      src={t.image1}
                      alt={t.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play button */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="white"
                      >
                        <polygon points="2,0 12,6 2,12" />
                      </svg>
                      <span className="text-xs text-white">View Video</span>
                    </div>

                    {/* Content at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="mb-2 text-sm font-medium leading-snug text-white md:text-base">
                        {t.quote}
                      </h2>
                      <div className="mt-3">
                        <h2 className="text-sm font-medium text-white">
                          {t.name}
                        </h2>
                        <span className="text-xs text-white/50">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUSTED BY 100+ B2B ===== */}
        <section className="bg-bg-darkest py-16">
          <p className="mb-8 text-center text-sm text-white/40">
            Trusted by 100+ B2B companies
          </p>
          <LogoMarquee />
        </section>

        {/* ===== TEXT TESTIMONIALS (scrolling) ===== */}
        <section className="bg-bg-darkest py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <StarBadge text="Testimonials" />
              <h3 className="text-3xl font-medium text-white md:text-4xl">
                What our clients say
              </h3>
            </div>

            {/* Testimonial columns */}
            <div className="marquee-fade overflow-hidden">
              <div className="flex animate-marquee gap-6">
                {[...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS].map((t, i) => (
                  <div
                    key={i}
                    className="w-[350px] flex-shrink-0 rounded-2xl border border-white/5 bg-white/[0.02] p-6"
                  >
                    <p className="mb-6 text-sm leading-relaxed text-white/60">
                      {t.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.headshot}
                          alt={t.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-white">
                            {t.name}
                          </div>
                          <div className="text-xs text-white/40">{t.role}</div>
                        </div>
                      </div>
                      <img
                        src={t.companyLogo}
                        alt=""
                        className="h-5 w-auto opacity-40"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="relative overflow-hidden bg-bg-dark py-20 md:py-28">
          {/* Background images */}
          <img
            src={CTA_BG1}
            alt=""
            className="pointer-events-none absolute bottom-0 left-0 w-72 opacity-40"
          />
          <img
            src={CTA_BG2}
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 w-72 opacity-40"
          />

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <img src={CTA_ICON} alt="" className="mx-auto mb-6 h-16 w-16" />
            <h2 className="mb-4 text-3xl font-medium text-white md:text-4xl">
              Let&apos;s work together!
            </h2>
            <p className="mb-10 text-white/50">
              Schedule a call with us to start your brand&apos;s trip to the
              stars...or maybe just to talk shop.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <p className="text-sm text-white/40">
                Book a call with
                <br />
                Amply founders
              </p>
              <a
                href="#"
                className="rounded-md bg-white px-7 py-3 text-sm font-medium text-bg-dark transition-opacity hover:opacity-90"
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-bg-footer py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Left: Logo + Description + Social */}
            <div>
              <a href="/">
                <img src={LOGO} alt="Amply Logo" className="mb-6 h-6" />
              </a>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/40">
                We are a team of Webflow, brand, and design experts passionate
                about building sites that accelerate growth for B2B brands.
              </p>
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/joinamply"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/join.amply/"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/joinamply"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:text-white"
                  aria-label="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Link columns */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                <div key={title}>
                  <h4 className="mb-4 text-sm font-semibold text-white/60">
                    {title}
                  </h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-white/30 transition-colors hover:text-white/60"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
