"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Collections", id: "features" },
        { name: "Showcase", id: "video-showcase" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Nabiha Collection"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "gradient-bars" }}
      title="Nabiha Collection"
      description="Timeless elegance meets luxury. Discover our premium embroidered 3-piece suits tailored for the modern woman."
      buttons={[{ text: "Shop Now", href: "#products" }, { text: "WhatsApp Order", href: "https://wa.me/923200387685" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DhmeqNYcKFk9iaiQabHUYs5vAe/uploaded-1779017205062-palci8t4.png"
      imagePosition="right"
    />
  </div>

  <div id="video-showcase" data-section="video-showcase">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Craft in Motion"
      description="Watch our master artisans at work and see the fine details of our latest embroidery collections."
      videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
      metrics={[]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "1", title: "Handcrafted Detail", subtitle: "Premium Quality", category: "Embroidery", value: "Masterpiece" },
        { id: "2", title: "Premium Lawn", subtitle: "Soft Feel", category: "Fabric", value: "Comfort" },
        { id: "3", title: "Gold Accents", subtitle: "Festive Shine", category: "Details", value: "Luxury" },
        { id: "4", title: "Modern Cuts", subtitle: "Tailored Fit", category: "Design", value: "Contemporary" },
      ]}
      title="Featured Embroidery"
      description="Exquisite craftsmanship meets sophisticated design in our new festive collection."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Royal Gold Suit", price: "PKR 8,500", imageSrc: "http://img.b2bpic.net/free-photo/close-up-dress-with-paisley-pattern_23-2148237605.jpg?_wi=2" },
        { id: "2", name: "Midnight Lawn", price: "PKR 7,200", imageSrc: "http://img.b2bpic.net/free-photo/stylish-businesswoman-walking-posing_1328-600.jpg?_wi=2" },
        { id: "3", name: "Beige Elegance", price: "PKR 6,900", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-lying-yellow-cloth-nature_23-2148170289.jpg" },
      ]}
      title="Best Sellers"
      description="Explore our top-rated festive outfits."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="About Nabiha Collection"
      description="Inspired by the grace and beauty of Pakistani heritage, we bring you curated fashion that reflects luxury and sophistication in every thread."
      metrics={[{ value: "500+", title: "Happy Customers" }, { value: "100%", title: "Quality Assured" }]}
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/business-owners-preparing-their-store_23-2149300867.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Fatima Zahra", role: "Designer", company: "Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-brunette-caucasian-girl-puts-hand-waist-thumbs-up-isolated-green-background-with-copy-space_141793-67070.jpg" },
        { id: "t2", name: "Ayesha Khan", role: "Doctor", company: "Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe-with-shopping-bags_1157-31458.jpg" },
        { id: "t3", name: "Sana Ahmed", role: "Manager", company: "Client", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-with-clothes_23-2149241337.jpg" },
      ]}
      kpiItems={[{ value: "4.9", label: "Rating" }, { value: "99%", label: "Satisfaction" }, { value: "24/7", label: "Support" }]}
      title="What Our Clients Say"
      description="Real feedback from our valued customers."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Contact Us"
      primaryButton={{ text: "WhatsApp Us", href: "https://wa.me/923200387685" }}
      secondaryButton={{ text: "Call Now", href: "tel:+923200387685" }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      copyright="© 2024 Nabiha Collection. All rights reserved."
      socialLinks={[
        { icon: "Instagram", href: "https://instagram.com/nabihacollection" },
        { icon: "Facebook", href: "https://facebook.com/nabihacollection" }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
