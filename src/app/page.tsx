"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
import NavbarFullscreen from '@/components/ui/NavbarFullscreen';
import HeroBillboardCreator from '@/components/sections/hero/HeroBillboardCreator';
import FeaturesGridSplit from '@/components/sections/features/FeaturesGridSplit';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import TestimonialDetailedCards from '@/components/sections/testimonial/TestimonialDetailedCards';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import FeaturesLogos from '@/components/sections/features/FeaturesLogos';

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
              { name: "Features", href: "#features" },
              { name: "Contact", href: "#contact" }
            ]}
            ctaButton={{ text: "Order Now", href: "https://wa.me/923200387685" }}
          />
        </div>

        <div id="hero" data-section="hero" data-webild-component="HeroBillboardCreator" data-webild-component-path="@/components/sections/hero/HeroBillboardCreator">
          <HeroBillboardCreator
            tag="Premium Quality"
            title="Nabiha"
            titleHighlight="Collection"
            description="Timeless elegance meets luxury. Discover our premium embroidered 3-piece suits."
            primaryButton={{ text: "Shop Now", href: "#products" }}
            items={[]}
          />
        </div>

        <div id="trust-banner" data-section="trust-banner" data-webild-component="FeaturesLogos" data-webild-component-path="@/components/sections/features/FeaturesLogos">
          <FeaturesLogos
            title="Confidence Guaranteed"
            items={[
                { icon: Award, title: "Quality Assured", description: "Premium materials only" },
                { icon: ShieldCheck, title: "30-Day Guarantee", description: "Love it or return it" },
                { icon: Sparkles, title: "Artisan Craft", description: "Hand-embroidered detail" }
            ]}
          />
        </div>

        <div id="features" data-section="features" data-webild-component="FeaturesGridSplit" data-webild-component-path="@/components/sections/features/FeaturesGridSplit">
          <FeaturesGridSplit
            tag="Our Features"
            title="Why Choose Us"
            description="Exquisite craftsmanship combined with modern design aesthetics."
            topItems={[
              { title: "Handcrafted", description: "Premium embroidery detailing", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg?_wi=1" },
              { title: "Lawn Comfort", description: "High quality breathable fabric", imageSrc: "http://img.b2bpic.net/free-photo/stylish-businesswoman-walking-posing_1328-600.jpg" }
            ]}
            bottomItem={{
              title: "Festive Collection",              description: "Luxury gold accents for special occasions.",              primaryButton: { text: "View Gallery", href: "#products" },
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-lying-yellow-cloth-nature_23-2148170289.jpg"
            }}
          />
        </div>

        <div id="products" data-section="products" data-webild-component="FeaturesRevealCardsBento" data-webild-component-path="@/components/sections/features/FeaturesRevealCardsBento">
          <FeaturesRevealCardsBento
            tag="Catalogue"
            title="Product Categories"
            description="Explore our curated collection of festive lawn outfits."
            items={Array(7).fill(0).map((_, i) => ({
              title: `Category ${i+1}`,
              description: "Premium embroidery design",              href: "#contact",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg?_wi=2"
            }))}
          />
        </div>

        <div id="testimonials" data-section="testimonials" data-webild-component="TestimonialDetailedCards" data-webild-component-path="@/components/sections/testimonial/TestimonialDetailedCards">
          <TestimonialDetailedCards
            tag="Testimonials"
            title="What Our Clients Say"
            description="Read stories from our happy customers."
            testimonials={[
              { title: "Amazing quality", quote: "The embroidery is stunning and the fabric is so soft.", name: "Fatima Zahra", role: "Designer", imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-puts-hand-waist-thumbs-up-isolated-green-background-with-copy-space_141793-67070.jpg" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact" data-webild-component="ContactSplitForm" data-webild-component-path="@/components/sections/contact/ContactSplitForm">
          <ContactSplitForm
            tag="Connect"
            title="Get in Touch"
            description="Have questions or need styling advice? Send us a message."
            inputs={[{ name: "name", type: "text", placeholder: "Full Name" }, { name: "email", type: "email", placeholder: "Email Address" }]}
            buttonText="Send Message"
            imageSrc="http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg"
          />
        </div>

        <div id="footer" data-section="footer" data-webild-component="FooterSimple" data-webild-component-path="@/components/sections/footer/FooterSimple">
          <FooterSimple
            brand="Nabiha Collection"
            columns={[{ title: "Links", items: [{ label: "Shop", href: "#products" }, { label: "About", href: "#about" }] }]}
            copyright="© 2024 Nabiha Collection"
            links={[{ label: "Privacy Policy", href: "#" }]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}