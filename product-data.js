// Product Database - Complete
const products = {
  // PACKAGING - BOPP (1-6)
  1: {
    id: 1,
    name: "Transparent BOPP Tape",
    category: "Packaging",
    type: "BOPP - Transparent",
    image: "Final/PACKAGING/BOPP/Transparent/1.jpg",
    description: "Crystal clear BOPP tape offering superior clarity and strong adhesion. Perfect for general-purpose packaging where visibility is important. The transparent finish ensures a professional appearance while maintaining excellent holding power on cardboard boxes, cartons, and shipping containers.",
    features: [
      "Crystal clear transparency",
      "Strong adhesive strength",
      "Weather resistant",
      "Easy tear capability",
      "Ideal for light to medium-duty sealing",
      "Professional appearance"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.05mm",
      length: "100 yards",
      adhesive: "Synthetic Rubber",
      temperature: "-10°C to 60°C"
    }
  },
  2: {
    id: 2,
    name: "Brown BOPP Tape",
    category: "Packaging",
    type: "BOPP - Brown",
    image: "Final/PACKAGING/BOPP/Brown/USAGE.webp",
    description: "Heavy-duty brown BOPP tape designed for demanding packaging applications. Features enhanced adhesive formulation for superior holding power on corrugated boxes and cartons. Perfect for shipping, storage, and long-term protection.",
    features: [
      "Heavy-duty performance",
      "Extra strong adhesive",
      "Professional brown color",
      "UV resistant",
      "Waterproof backing",
      "Ideal for long-term storage"
    ],
    specifications: {
      width: "48mm, 72mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Acrylic",
      temperature: "-20°C to 70°C"
    }
  },
  3: {
    id: 3,
    name: "Hot Melt BOPP Tape",
    category: "Packaging",
    type: "BOPP - Hot Melt",
    image: "Final/PACKAGING/BOPP/Hotmelt/Product.jpeg",
    description: "High-temperature resistant BOPP tape with hot melt adhesive formulation. Excellent for applications requiring strong immediate bond and heat resistance. Perfect for industrial packaging and demanding environments.",
    features: [
      "Hot melt adhesive technology",
      "Immediate strong bond",
      "High temperature resistant",
      "Industrial-grade performance",
      "Excellent holding power",
      "Fast sealing capability"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Hot Melt",
      temperature: "-10°C to 80°C"
    }
  },
  4: {
    id: 4,
    name: "Milky BOPP Tape",
    category: "Packaging",
    type: "BOPP - Milky",
    image: "Final/PACKAGING/BOPP/Milky/Product.jpg",
    description: "Translucent milky white BOPP tape combining visibility with semi-opaque coverage. Ideal for boxes where you want to partially conceal contents while maintaining visibility. Great for retail packaging and general-purpose sealing.",
    features: [
      "Translucent milky appearance",
      "Semi-opaque coverage",
      "Strong adhesion",
      "Professional look",
      "Good balance of visibility and coverage",
      "Cost-effective solution"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Acrylic",
      temperature: "-15°C to 65°C"
    }
  },
  5: {
    id: 5,
    name: "Printed BOPP Tape",
    category: "Packaging",
    type: "BOPP - Printed",
    image: "Final/PACKAGING/BOPP/Printed/Product.avif",
    description: "Custom printed BOPP tape perfect for branding and corporate packaging. Enhance your brand visibility with custom printed tape on every package. Excellent for marketing and professional brand presentation.",
    features: [
      "Custom print capability",
      "Brand enhancement",
      "Professional appearance",
      "Strong adhesive",
      "Marketing tool",
      "Customizable designs"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.055mm",
      length: "100 yards",
      adhesive: "Acrylic",
      temperature: "-10°C to 60°C"
    }
  },
  6: {
    id: 6,
    name: "Rubber Based BOPP Tape",
    category: "Packaging",
    type: "BOPP - Rubber Based",
    image: "Final/PACKAGING/BOPP/Rubber Based/Product.jpg",
    description: "Strong rubber-based BOPP packaging tape providing excellent adhesion and flexibility. Ideal for irregular surfaces and high-stress applications. Superior holding power for heavy-duty packaging requirements.",
    features: [
      "Rubber-based adhesive",
      "Excellent flexibility",
      "Works on irregular surfaces",
      "Strong holding power",
      "Professional performance",
      "Heavy-duty applications"
    ],
    specifications: {
      width: "48mm, 72mm",
      thickness: "0.06mm",
      length: "100 yards",
      adhesive: "Rubber Based",
      temperature: "-20°C to 75°C"
    }
  },

  // PACKAGING - OTHER (7-13)
  7: {
    id: 7,
    name: "Aluminium Foil Tape",
    category: "Packaging",
    type: "Aluminium Foil",
    image: "Final/PACKAGING/ALUMINIUM FOIL/1.jpg",
    description: "Premium aluminium foil tape with exceptional thermal and electrical conductivity. Perfect for HVAC sealing, thermal insulation, and electromagnetic shielding. High temperature resistance makes it ideal for specialized industrial applications.",
    features: [
      "High temperature resistant",
      "Excellent thermal conductivity",
      "Electromagnetic shielding",
      "Moisture resistant",
      "Flame retardant",
      "Professional grade"
    ],
    specifications: {
      width: "50mm",
      thickness: "0.08mm",
      length: "50 yards",
      backing: "Aluminium Foil",
      temperature: "-40°C to 120°C"
    }
  },
  8: {
    id: 8,
    name: "Premium Duct Tape",
    category: "Packaging",
    type: "Duct Tape",
    image: "Final/PACKAGING/DUCK TAPE/1.webp",
    description: "Heavy-duty waterproof duct tape with reinforced mesh construction. Versatile solution for repairs, bundling, and temporary fixes on almost any surface. Weather-resistant backing makes it suitable for indoor and outdoor use.",
    features: [
      "Waterproof backing",
      "Reinforced mesh construction",
      "Exceptional tear resistance",
      "Weather resistant",
      "Multi-purpose application",
      "Strong adhesion to any surface"
    ],
    specifications: {
      width: "48mm, 72mm",
      thickness: "0.28mm",
      length: "20 yards",
      backing: "Polyethylene with mesh",
      temperature: "-10°C to 60°C"
    }
  },
  9: {
    id: 9,
    name: "Cross Filament Tape",
    category: "Packaging",
    type: "Cross Filament",
    image: "Final/PACKAGING/CROSS FILAMENT/1.webp",
    description: "Strong cross-filament reinforced tape providing superior tear resistance. The crisscross fiber pattern offers exceptional strength for heavy packages and demanding applications. Perfect for reinforcing heavy loads.",
    features: [
      "Cross-filament reinforcement",
      "Superior tear resistance",
      "Exceptional strength",
      "Heavy-duty capability",
      "Professional performance",
      "Strong adhesion"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.08mm",
      length: "50 yards",
      backing: "Polypropylene with fibers",
      temperature: "-10°C to 65°C"
    }
  },
  10: {
    id: 10,
    name: "Monofilament Tape",
    category: "Packaging",
    type: "Monofilament",
    image: "Final/PACKAGING/MONO FILAMENT/1.webp",
    description: "Single filament reinforced adhesive tape offering balanced strength and flexibility. Ideal for medium-duty applications requiring a combination of strength and ease of use. Smooth surface for clean application.",
    features: [
      "Single filament reinforcement",
      "Balanced strength and flexibility",
      "Smooth surface",
      "Easy to apply",
      "Medium-duty capability",
      "Professional appearance"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.07mm",
      length: "50 yards",
      backing: "Polypropylene with filament",
      temperature: "-10°C to 65°C"
    }
  },
  11: {
    id: 11,
    name: "Paper Reinforced Tape",
    category: "Packaging",
    type: "Paper Reinforced",
    image: "Final/PACKAGING/PAPER REINFORCE/1.webp",
    description: "Eco-friendly paper reinforced packaging tape combining sustainability with performance. The paper backing provides strength while being environmentally conscious. Perfect for eco-conscious businesses.",
    features: [
      "Eco-friendly material",
      "Paper reinforcement",
      "Biodegradable backing",
      "Strong adhesion",
      "Sustainable solution",
      "Professional packaging"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.1mm",
      length: "50 yards",
      backing: "Paper reinforced",
      temperature: "-10°C to 60°C"
    }
  },
  12: {
    id: 12,
    name: "Permacel P-254 Tape",
    category: "Packaging",
    type: "Permacel P-254",
    image: "Final/PACKAGING/PARMACELL/1.jpg",
    description: "Permacel P-254  - are primarily used for paint testing. A process of testing the adhesive strength of any paint by making use of such kind of a tape in the process.",
    features: [
      "Uniform adhesion strength",
      "Clean removal",
      "Smooth film backing",
      "Stable tack strength",
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "0.07mm",
      length: "50 yards",
      adhesive: "Medical Grade",
      temperature: "-10°C to 60°C"
    }
  },
  13: {
    id: 13,
    name: "Security Tape (Packaging)",
    category: "Packaging",
    type: "Security",
    image: "Final/PACKAGING/SECURITY/1.jpg",
    description: "Tamper-evident security adhesive tape ideal for protecting valuable shipments. Features special properties that make tampering obvious. Perfect for high-value packages and security-sensitive applications.",
    features: [
      "Tamper-evident technology",
      "Security features",
      "Anti-tampering",
      "Obvious tampering detection",
      "High security",
      "Professional protection"
    ],
    specifications: {
      width: "48mm",
      thickness: "0.07mm",
      length: "50 yards",
      adhesive: "Security Grade",
      temperature: "-10°C to 60°C"
    }
  },

  // DOUBLE SIDED - AFT (14-15)
  14: {
    id: 14,
    name: "AFT - Clear",
    category: "Double Sided Tape",
    type: "AFT (Acrylic Foam Tape)",
    image: "Final/Double Sided/AFT/Clear.jpg",
    description: "Clear acrylic foam double-sided tape ideal for strong permanent bonding. Perfect for mounting, splicing, and assembly applications. The foam backing provides excellent gap filling and conforms to uneven surfaces.",
    features: [
      "Clear appearance",
      "Strong acrylic adhesive",
      "Conformable foam backing",
      "Works on various surfaces",
      "Temperature resistant",
      "Long-lasting bonds"
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "1.0mm",
      length: "10 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 80°C"
    }
  },
  15: {
    id: 15,
    name: "AFT - Grey",
    category: "Double Sided Tape",
    type: "AFT (Acrylic Foam Tape)",
    image: "Final/Double Sided/AFT/Grey.jpg",
    description: "Grey acrylic foam double-sided tape providing excellent visibility and strong bonding. The grey color helps hide the tape for a cleaner appearance. Ideal for professional assembly and mounting applications.",
    features: [
      "Grey color for discretion",
      "Strong acrylic adhesive",
      "Conformable foam backing",
      "Professional appearance",
      "Temperature resistant",
      "Excellent holding power"
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "1.0mm",
      length: "10 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 80°C"
    }
  },

  // DOUBLE SIDED - FOAM (16-20)
  16: {
    id: 16,
    name: "Foam Tape - Blue Black",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/BLUE BLACK/1.jpg",
    description: "Blue and black colored foam tape designed for strong double-sided bonding. Ideal for mounting, sealing gaps, and assembly applications. The color combination provides visibility for alignment.",
    features: [
      "Blue and black colors",
      "Strong double-sided bond",
      "Conformable foam",
      "Easy alignment",
      "Weather resistant",
      "Gap filling capability"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },
  17: {
    id: 17,
    name: "Foam Tape - Green Black",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/GREEN BLACK/GREEN BLACK.jpg",
    description: "Green and black foam tape for professional bonding and mounting. The distinctive color helps with alignment and visibility. Perfect for assembly lines and precision mounting.",
    features: [
      "Green and black colors",
      "Strong adhesive bond",
      "Conformable foam",
      "Alignment visibility",
      "Professional application",
      "Excellent gap filling"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },
  18: {
    id: 18,
    name: "Foam Tape - Mirror Mount",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/MIRROR MOUNT TAPE/1.jpg",
    description: "Specialized foam tape designed specifically for mounting mirrors and glass. Provides strong yet removable bonding perfect for interior design applications. Holds mirrors securely without damage.",
    features: [
      "Mirror mounting optimized",
      "Removable adhesive",
      "No damage to surfaces",
      "Strong holding power",
      "Glass compatible",
      "Professional appearance"
    ],
    specifications: {
      width: "24mm",
      thickness: "2.0mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-15°C to 70°C"
    }
  },
  19: {
    id: 19,
    name: "Foam Tape - Red Black",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/RED BLACK/1.jpg",
    description: "Red and black foam bonding tape ideal for assembly and bonding applications. The contrasting colors aid in alignment and visibility. Excellent for professional manufacturing and assembly work.",
    features: [
      "Red and black colors",
      "Strong bonding power",
      "Conformable foam structure",
      "Alignment assistance",
      "Weather resistant",
      "Professional grade"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },
  20: {
    id: 20,
    name: "Foam Tape - Yellow White",
    category: "Double Sided Tape",
    type: "Foam Tape",
    image: "Final/Double Sided/FOAM/YELLOW WHITE/1.jpg",
    description: "Yellow and white foam tape for various bonding and mounting applications. The bright color combination provides excellent visibility for alignment and inspection. Perfect for quality control and assembly.",
    features: [
      "Yellow and white colors",
      "High visibility",
      "Strong double-sided bond",
      "Easy alignment",
      "Conformable foam",
      "Professional application"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "1.5mm",
      length: "5 meters",
      adhesive: "Acrylic",
      temperature: "-20°C to 60°C"
    }
  },

  // DOUBLE SIDED - OTHER (21-23)
  21: {
    id: 21,
    name: "Red Pet Tape",
    category: "Double Sided Tape",
    type: "Red Pet Tape",
    image: "Final/Double Sided/Red pet tape/Product.jpeg",
    description: "High-performance polyester double-sided tape with red coloring. Ideal for demanding bonding applications requiring excellent temperature and chemical resistance. Professional-grade performance for industrial use.",
    features: [
      "Polyester backing",
      "Temperature resistant",
      "Chemical resistant",
      "Strong adhesive",
      "Professional performance",
      "Long-lasting bonds"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "0.08mm",
      length: "50 meters",
      backing: "Polyester",
      temperature: "-10°C to 80°C"
    }
  },
  22: {
    id: 22,
    name: "Tissue Tape",
    category: "Double Sided Tape",
    type: "Tissue",
    image: "Final/Double Sided/Tissue tape/Product.webp",
    description: "Thin tissue-based double-sided adhesive tape perfect for light bonding tasks. Ideal for paper crafts, office use, and general purpose bonding. Discreet appearance and clean removal.",
    features: [
      "Thin tissue backing",
      "Perfect for paper",
      "Clean application",
      "Easy to dispense",
      "Repositionable",
      "Cost-effective solution"
    ],
    specifications: {
      width: "12mm, 24mm",
      thickness: "0.05mm",
      length: "33 meters",
      adhesive: "Rubber",
      temperature: "0°C to 40°C"
    }
  },
  23: {
    id: 23,
    name: "Transfer Tape",
    category: "Double Sided Tape",
    type: "Transfer Tape",
    image: "Final/Double Sided/Transfer tape/Product.webp",
    description: "Professional transfer tape for decals and graphics application. Perfect for vinyl decals, signage, and professional graphics work. Helps transfer designs smoothly onto various surfaces.",
    features: [
      "Professional transfer capability",
      "Decal application optimized",
      "Clean transfer process",
      "Strong adhesion",
      "Residue-free removal",
      "Signage compatible"
    ],
    specifications: {
      width: "24mm, 48mm",
      thickness: "0.08mm",
      length: "50 meters",
      adhesive: "Acrylic",
      temperature: "-10°C to 70°C"
    }
  },

  // INSULATION (24-28)
  24: {
    id: 24,
    name: "Blue TCT",
    category: "Insulation Tape",
    type: "Blue TCT",
    image: "Final/Insulation/BLUE TCT/USAGE.jpg",
    description: "High-temperature insulation tape for electrical applications. The blue color provides easy identification in electrical systems. Excellent for motor and transformer insulation.",
    features: [
      "High temperature rated",
      "Electrical insulation",
      "Easy identification",
      "Professional performance",
      "Motor compatible",
      "Transformer suitable"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "0.08mm",
      length: "20 meters",
      adhesive: "Rubber",
      temperature: "-10°C to 120°C"
    }
  },
  25: {
    id: 25,
    name: "Kapton",
    category: "Insulation Tape",
    type: "Kapton",
    image: "Final/Insulation/KAPTON/1.jpg",
    description: "High-temperature kapton insulation tape for electronics. Superior heat resistance and chemical stability. Ideal for electronics manufacturing, PCB protection, and high-temperature applications.",
    features: [
      "Exceptional heat resistance",
      "Chemical resistant",
      "Electronics grade",
      "PCB compatible",
      "Low outgassing",
      "Professional electronics use"
    ],
    specifications: {
      width: "12mm, 24mm, 50mm",
      thickness: "0.06mm",
      length: "33 meters",
      adhesive: "Acrylic",
      temperature: "-40°C to 260°C"
    }
  },
  26: {
    id: 26,
    name: "Nitto 923S",
    category: "Insulation Tape",
    type: "Nitto 923S",
    image: "Final/Insulation/NITTO 923s/1.jpg",
    description: "Professional polyester glass cloth insulation tape from Nitto brand. Superior strength and temperature resistance for demanding industrial applications. Perfect for motor and transformer winding.",
    features: [
      "Polyester glass cloth",
      "Professional grade",
      "Superior strength",
      "High temperature rated",
      "Industrial certified",
      "Motor winding compatible"
    ],
    specifications: {
      width: "18mm, 24mm, 48mm",
      thickness: "0.18mm",
      length: "25 meters",
      adhesive: "Rubber",
      temperature: "-20°C to 130°C"
    }
  },
  27: {
    id: 27,
    name: "PVC",
    category: "Insulation Tape",
    type: "PVC",
    image: "Final/Insulation/PVC/Product.webp",
    description: "Professional PVC insulation tape for electrical applications. Excellent electrical insulation properties with good moisture resistance. Ideal for electrical wiring, cable bundling, and industrial insulation.",
    features: [
      "Electrical insulation",
      "Moisture resistant",
      "Easy to apply",
      "Professional grade",
      "Cable compatible",
      "Industrial suitable"
    ],
    specifications: {
      width: "18mm, 24mm",
      thickness: "0.15mm",
      length: "10 meters",
      adhesive: "Rubber",
      temperature: "-10°C to 80°C"
    }
  },
  28: {
    id: 28,
    name: "Self-Amalgamating Tape",
    category: "Insulation Tape",
    type: "Self-Amalgamating",
    image: "Final/Insulation/self amalgamating tape/Product.jpg",
    description: "Self-fusing silicone tape for electrical sealing and waterproofing. Bonds to itself without adhesive. Perfect for cable terminations, waterproofing, and high-voltage applications.",
    features: [
      "Self-fusing property",
      "No additional adhesive",
      "Waterproof sealing",
      "High voltage compatible",
      "Flexible material",
      "Electrical safety rated"
    ],
    specifications: {
      width: "19mm, 25mm",
      thickness: "0.5mm",
      length: "4 meters",
      material: "Silicone",
      temperature: "-50°C to 260°C"
    }
  },

  // PROTECTION (29-31)
  29: {
    id: 29,
    name: "SPT Blue",
    category: "Protection Tape",
    type: "SPT Blue",
    image: "Final/Protection/SPT blue/Product.jpeg",
    description: "Blue protective tape for surface protection during manufacturing and transportation. Prevents scratches and damage to surfaces. Easy to apply and remove without residue.",
    features: [
      "Surface protection",
      "Blue color identification",
      "Easy application",
      "Residue-free removal",
      "Scratch prevention",
      "Professional use"
    ],
    specifications: {
      width: "50mm",
      thickness: "0.08mm",
      length: "100 meters",
      backing: "Polyethylene",
      temperature: "-10°C to 60°C"
    }
  },
  30: {
    id: 30,
    name: "SPT BW",
    category: "Protection Tape",
    type: "SPT BW",
    image: "Final/Protection/SPT BW/1.webp",
    description: "Black and white protection tape for marking and surface protection. The striped pattern provides high visibility for marking and identification. Ideal for safety markings and protective applications.",
    features: [
      "Black and white stripes",
      "High visibility",
      "Protection and marking",
      "Easy identification",
      "Professional application",
      "Safety compliant"
    ],
    specifications: {
      width: "48mm, 50mm",
      thickness: "0.08mm",
      length: "100 meters",
      backing: "Polyethylene",
      temperature: "-10°C to 60°C"
    }
  },
  31: {
    id: 31,
    name: "SPT TR",
    category: "Protection Tape",
    type: "SPT TR",
    image: "Final/Protection/SPT TR/1.jpg",
    description: "Transparent protective tape for all surfaces. Provides clear protection without obscuring underlying materials. Perfect for protecting sensitive surfaces and electronic components.",
    features: [
      "Clear transparent appearance",
      "Universal surface protection",
      "Non-invasive",
      "Easy to apply",
      "Component safe",
      "Professional performance"
    ],
    specifications: {
      width: "50mm",
      thickness: "0.08mm",
      length: "100 meters",
      backing: "Polyethylene",
      temperature: "-10°C to 60°C"
    }
  },

  // SAFETY (32-34)
  32: {
    id: 32,
    name: "Anti-Skit",
    category: "Safety Tapes",
    type: "Anti-Skit",
    image: "Final/SAFETY/ANTI SKIT/1.webp",
    description: "Non-slip safety tape for hazard prevention and slip resistance. Ideal for stairs, ramps, and walkways to prevent accidents. High grip surface ensures safety in wet or dry conditions.",
    features: [
      "Non-slip surface",
      "Safety certified",
      "High grip coefficient",
      "Weather resistant",
      "Easy application",
      "Hazard prevention"
    ],
    specifications: {
      width: "50mm",
      thickness: "0.8mm",
      length: "18 meters",
      surface: "Abrasive",
      temperature: "-20°C to 70°C"
    }
  },
  33: {
    id: 33,
    name: "Floor Marking",
    category: "Safety Tapes",
    type: "Floor Marking",
    image: "Final/SAFETY/FLOOR MARKING/1.jpg",
    description: "High-visibility floor marking and safety tape for facility management. Perfect for marking hazard zones, pathways, and restricted areas. Bright colors ensure maximum visibility.",
    features: [
      "High visibility colors",
      "Floor marking optimized",
      "Safety compliance",
      "Easy identification",
      "Durable material",
      "Professional appearance"
    ],
    specifications: {
      width: "50mm, 100mm",
      thickness: "0.08mm",
      length: "45 meters",
      material: "Vinyl",
      temperature: "-20°C to 70°C"
    }
  },
  34: {
    id: 34,
    name: "Security",
    category: "Safety Tapes",
    type: "Security",
    image: "Final/SAFETY/SECURITY/1.jpg",
    description: "Reflective safety tape for security markings and high-visibility warnings. Features reflective technology for day and night visibility. Perfect for security perimeters and hazard warnings.",
    features: [
      "Reflective properties",
      "Day and night visibility",
      "Security marking",
      "High visibility",
      "Weather resistant",
      "Compliance certified"
    ],
    specifications: {
      width: "50mm, 100mm",
      thickness: "0.09mm",
      length: "45 meters",
      material: "Reflective Microprism",
      temperature: "-20°C to 70°C"
    }
  }
};