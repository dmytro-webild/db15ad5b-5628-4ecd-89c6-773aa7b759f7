import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
import NavbarFullscreen from '@/components/ui/NavbarFullscreen';
import HeroBillboardCreator from '@/components/sections/hero/HeroBillboardCreator';
import FeaturesLogos from '@/components/sections/features/FeaturesLogos';
import FeaturesGridSplit from '@/components/sections/features/FeaturesGridSplit';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import TestimonialDetailedCards from '@/components/sections/testimonial/TestimonialDetailedCards';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav" data-webild-component="NavbarFullscreen" data-webild-component-path="@/components/ui/NavbarFullscreen">
          <NavbarFullscreen
            logo="Nabiha Collection"
            navItems={[
              { name: "Home", href: "#hero" },
              { name: "Products", href: "#products" },
              { name: "Gallery", href: "#gallery" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" }
            ]}
            ctaButton={{ text: "Order Now", href: "https://wa.me/923200387685" }}
          />
        </div>

        <div id="hero" data-section="hero" data-webild-component="HeroBillboardCreator" data-webild-component-path="@/components/sections/hero/HeroBillboardCreator">
          <HeroBillboardCreator
            tag="Premium Luxury Fashion"
            title="Nabiha"
            titleHighlight="Collection"
            description="Discover timeless elegance with our handcrafted, premium embroidered 3-piece suits tailored for the modern woman."
            primaryButton={{ text: "Shop Latest", href: "#products" }}
            secondaryButton={{ text: "View Gallery", href: "#gallery" }}
            items={[
              { imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg?_wi=1" },
              { imageSrc: "http://img.b2bpic.net/free-photo/stylish-businesswoman-walking-posing_1328-600.jpg?_wi=1" }
            ]}
          />
        </div>

        <div id="trust-banner" data-section="trust-banner" data-webild-component="FeaturesLogos" data-webild-component-path="@/components/sections/features/FeaturesLogos">
          <FeaturesLogos
            title="Our Promise"
            items={[
                { icon: Award, title: "Premium Quality", description: "High-grade fabrics and intricate threads" },
                { icon: ShieldCheck, title: "Satisfaction", description: "30-day exchange policy" },
                { icon: Sparkles, title: "Artisan Detail", description: "Hand-embroidered precision" }
            ]}
          />
        </div>

        <div id="products" data-section="products" data-webild-component="FeaturesRevealCardsBento" data-webild-component-path="@/components/sections/features/FeaturesRevealCardsBento">
          <FeaturesRevealCardsBento
            tag="Catalogue"
            title="Featured Collection"
            description="Explore our seasonal luxury lawn and festive wear catalogue."
            items={Array(6).fill(0).map((_, i) => ({
              title: `Luxury Set ${i+1}`,
              description: "Embroidered 3-piece ensemble",              href: "#contact",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg?_wi=2"
            }))}
          />
        </div>

        <div id="gallery" data-section="gallery" data-webild-component="FeaturesGridSplit" data-webild-component-path="@/components/sections/features/FeaturesGridSplit">
          <FeaturesGridSplit
            tag="Gallery"
            title="Instagram Moments"
            description="See how our community styles Nabiha Collection."
            topItems={[
              { title: "Festive Chic", description: "Trending summer styles", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-lying-yellow-cloth-nature_23-2148170289.jpg" },
              { title: "Elegant Detail", description: "Close-up embroidery shots", imageSrc: "http://img.b2bpic.net/free-photo/stylish-businesswoman-walking-posing_1328-600.jpg" }
            ]}
            bottomItem={{
              title: "Follow us on Instagram",              description: "Join our community for styling inspiration and new drops.",              primaryButton: { text: "Follow @nabiha", href: "#" },
              imageSrc: "http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg?_wi=1"
            }}
          />
        </div>

        <div id="testimonials" data-section="testimonials" data-webild-component="TestimonialDetailedCards" data-webild-component-path="@/components/sections/testimonial/TestimonialDetailedCards">
          <TestimonialDetailedCards
            tag="Testimonials"
            title="What Our Clients Say"
            description="Experience why we are trusted for special occasions."
            testimonials={[
              { title: "Absolutely Stunning", quote: "The fabric quality and embroidery detail were beyond expectations.", name: "Fatima Zahra", role: "Customer", imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-puts-hand-waist-thumbs-up-isolated-green-background-with-copy-space_141793-67070.jpg" },
              { title: "My Favorite Shop", quote: "Nabiha Collection always hits the right balance between modern and traditional.", name: "Zara Khan", role: "Influencer", imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-shopping-bags_23-2148897587.jpg" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact" data-webild-component="ContactSplitForm" data-webild-component-path="@/components/sections/contact/ContactSplitForm">
          <ContactSplitForm
            tag="Contact"
            title="Get in Touch"
            description="Reach out to our styling consultants for orders and inquiries."
            inputs={[{ name: "name", type: "text", placeholder: "Name" }, { name: "email", type: "email", placeholder: "Email" }, { name: "message", type: "text", placeholder: "How can we help?" }]}
            buttonText="Send Inquiry"
            imageSrc="http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg?_wi=2"
          />
        </div>

        <div id="footer" data-section="footer" data-webild-component="FooterSimple" data-webild-component-path="@/components/sections/footer/FooterSimple">
          <FooterSimple
            brand="Nabiha Collection"
            columns={[{ title: "Shop", items: [{ label: "Catalog", href: "#products" }, { label: "Gallery", href: "#gallery" }] }, { title: "Support", items: [{ label: "Contact", href: "#contact" }, { label: "Terms", href: "#" }] }]}
            copyright="© 2024 Nabiha Collection. All Rights Reserved."
            links={[{ label: "Privacy Policy", href: "#" }]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}