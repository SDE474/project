import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const publications = [
    {
        "title": "Spectral and thermal studies of Cd(II) 1-2 naphthoquinone oximimates",
        "authors": "S. P. Rasale",
        "journal": "IJCPS Journal, Vol 7, Special Issue 13 RTCS, April 2018",
        "abstract": "This study investigates the spectral and thermal properties of Cd(II) complexes with 1-2 naphthoquinone oximimates, providing insights into their structural and thermal stability.",
        "keywords": ["Cd(II) complexes", "Naphthoquinone oximimates", "Spectral analysis", "Thermal studies"]
      },
      {
        "title": "Removal of Cr(VI) from the Chrome Electroplating Effluent by Reduction and Adsorption Using Powdered Activated Charcoal",
        "authors": "Dnyaneshwar R. Shinde, Ramdas A. Pawar, Manohar G. Chaskar",
        "journal": "Oriental Journal of Chemistry, Vol. 34, No. 1, 2018",
        "abstract": "This research focuses on the removal of Cr(VI) from electroplating effluents using powdered activated charcoal, highlighting its efficiency in reduction and adsorption processes.",
        "keywords": ["Cr(VI) removal", "Electroplating effluent", "Activated charcoal", "Adsorption"]
      },
      {
        "title": "Synthesis and solar photocatalytic activity of Sm(III) doped ZnO",
        "authors": "G. Chaskar, R.N. Shirsat",
        "journal": "Presentation in International Conference organized by ICC (India), June 6-8, 2017, Bali (Indonesia)",
        "abstract": "This study explores the synthesis and photocatalytic activity of Sm(III) doped ZnO under solar irradiation, demonstrating its potential for environmental applications.",
        "keywords": ["Sm(III) doping", "ZnO", "Solar photocatalysis", "Environmental applications"]
      },
      {
        "title": "Dye-sensitised solar cells with a naturally occurring pigment lycopene as a photosensitiser for zirconium dioxide: an experimental and theoretical study",
        "authors": "D.R. Shinde, P.S. Tambade, K.M. Gadave, K.S. Pawar, Mu Naushad, H.M. Pathan",
        "journal": "Journal of Materials Science: Materials in Electronics, Vol. 28, Issue 15, April 2017",
        "abstract": "This research investigates the use of lycopene as a natural photosensitizer in dye-sensitized solar cells, combining experimental and theoretical approaches to evaluate its efficiency.",
        "keywords": ["Dye-sensitized solar cells", "Lycopene", "Zirconium dioxide", "Photosensitizer"]
      },
      {
        "title": "Heterostructured Ti-doped ZnO/Ag metal: an efficient photocatalyst for dye degradation in sunlight",
        "authors": "Sandeep Kanade, Dnyaneshwar R. Shinde, K.G. Kanade",
        "journal": "Desalination and Water Treatment, Vol. 71, 2017",
        "abstract": "This study demonstrates the photocatalytic efficiency of Ti-doped ZnO/Ag heterostructures in degrading dyes under sunlight, offering a sustainable solution for wastewater treatment.",
        "keywords": ["Ti-doped ZnO", "Ag metal", "Photocatalysis", "Dye degradation"]
      },
      {
        "title": "Chemical synthesis and characterization of nano-sized rare-earth ruthenium pyrochlore compounds RE2Ru2O7 (RE=rare earths)",
        "authors": "R.A. Pawar, A.K. Nikumbh, D.S. Bhange, N.J. Karale, D.V. Nighot, M.B. Khanwilkar",
        "journal": "Bulletin of Materials Science, March 2017",
        "abstract": "This research focuses on the synthesis and characterization of nano-sized rare-earth ruthenium pyrochlore compounds, highlighting their structural and chemical properties.",
        "keywords": ["Rare-earth ruthenium pyrochlore", "Nano-sized compounds", "Chemical synthesis", "Structural characterization"]
      },
      {
        "title": "Phytochemical Analysis and Antimicrobial Activity of Caesalpinia bonducella Leaves",
        "authors": "Shirish S. Pingale, Manohar G. Chaskar, Nirmala R. Kakade",
        "journal": "International Journal of Pharmaceutical Sciences and Research, Vol. 42, No. 2, January-February 2017",
        "abstract": "This study investigates the phytochemical composition and antimicrobial activity of Caesalpinia bonducella leaves, highlighting their potential medicinal applications.",
        "keywords": ["Caesalpinia bonducella", "Phytochemical analysis", "Antimicrobial activity", "Medicinal plants"]
      },
      {
        "title": "Evaluation of antimicrobial activity of Gymnema sylvestre",
        "authors": "Shirish S. Pingale, Shobha V. Rupanar, Manohar G. Chaskar",
        "journal": "International Research Journal of Pharmacy, Vol. 8, No. 3, 2017",
        "abstract": "This research evaluates the antimicrobial properties of Gymnema sylvestre, emphasizing its potential use in traditional and modern medicine.",
        "keywords": ["Gymnema sylvestre", "Antimicrobial activity", "Traditional medicine", "Phytochemicals"]
      },
      {
        "title": "Photocatalytic degradation of dyes in water by analytical reagent grades ZnO, TiO2, and SnO2: a comparative study",
        "authors": "Dnyaneshwar Shinde, Popat Tambade, Manohar G. Chaskar, Kisan Gadave",
        "journal": "Drinking Water Engineering and Science, Vol. 10, 2017",
        "abstract": "This study compares the photocatalytic efficiency of ZnO, TiO2, and SnO2 in degrading dyes in water, providing insights into their application in water treatment.",
        "keywords": ["Photocatalysis", "ZnO", "TiO2", "SnO2", "Dye degradation"]
      },
      {
        "title": "Experimental and theoretical study of 1,4-naphthoquinone based dye in dye-sensitized solar cells using ZnO photoanode",
        "authors": "Dnyaneshwar Shinde, Popat Tambade, Habib Pathan, Kisan Gadave",
        "journal": "Materials Science-Poland, 2017",
        "abstract": "This research explores the use of 1,4-naphthoquinone-based dyes in dye-sensitized solar cells with ZnO photoanodes, combining experimental and theoretical approaches.",
        "keywords": ["Dye-sensitized solar cells", "1,4-naphthoquinone", "ZnO photoanode", "Theoretical study"]
      },
      {
        "title": "Phytochemical and pharmacological review of Caesalpinia bonducella",
        "authors": "Nirmala R. Kakade, Shirish S. Pingale, Manohar G. Chaskar",
        "journal": "International Research Journal of Pharmacy, Vol. 7, No. 12, 2016",
        "abstract": "This review article summarizes the phytochemical composition and pharmacological properties of Caesalpinia bonducella, highlighting its potential therapeutic applications.",
        "keywords": ["Caesalpinia bonducella", "Phytochemicals", "Pharmacology", "Therapeutic applications"]
      },
      {
        "title": "Physico-chemical composition, phytochemical analysis, and in vitro antioxidant activity of Gymnema sylvestre root",
        "authors": "Shirish Pingale, Shobha Rupanar, Manohar Chaskar",
        "journal": "Natural Product and Plant Resources, Vol. 6, No. 6, 2016",
        "abstract": "This study investigates the physico-chemical composition, phytochemical profile, and antioxidant activity of Gymnema sylvestre root, emphasizing its medicinal potential.",
        "keywords": ["Gymnema sylvestre", "Antioxidant activity", "Phytochemical analysis", "Medicinal plants"]
      },
      {
        "title": "Non-aggregation based colorimetric detection of Cu(II) and Fe(III) using biosynthesized silver nanoparticles",
        "authors": "Mrunali Gharge, Balaprasad Ankamwar",
        "journal": "Science Review Letters, Accepted May 2016",
        "abstract": "This research demonstrates the use of biosynthesized silver nanoparticles for the colorimetric detection of Cu(II) and Fe(III) ions, offering a simple and eco-friendly approach.",
        "keywords": ["Silver nanoparticles", "Colorimetric detection", "Cu(II)", "Fe(III)", "Biosynthesis"]
      },
      {
        "title": "Solar light driven nanostructure Fe and Cu doped TiO2 photocatalyst for degradation of phenol",
        "authors": "Vishal Maharrugade, Tushar Thorve, Yogesh Hulawale, Sunil Kadam, Rajendra Panmand, Yogesh Sethi, Manohar Chaskar, Latesh Nikam",
        "journal": "Journal of Nanoengineering and Nanomanufacturing, Vol. 5, 2015",
        "abstract": "This study explores the photocatalytic degradation of phenol using Fe and Cu-doped TiO2 nanostructures under solar light, highlighting their efficiency in environmental remediation.",
        "keywords": ["Fe-doped TiO2", "Cu-doped TiO2", "Photocatalysis", "Phenol degradation", "Solar light"]
      },
      {
        "title": "Economical and eco-friendly recycling of used dry batteries for synthesis of graphene oxide by sheer exfoliation in presence of SDS",
        "authors": "Sachin Kochrekar, Mahesh Agharkar, Manjunath Salgaonkar, Mrunal Gharge, Slah Hidouri, Musibau A. Azeez",
        "journal": "AIP Conference Proceedings, Vol. 1665, 2015",
        "abstract": "This research presents an economical and eco-friendly method for recycling used dry batteries to synthesize graphene oxide using sheer exfoliation in the presence of SDS.",
        "keywords": ["Graphene oxide", "Recycling", "Dry batteries", "Sheer exfoliation", "Eco-friendly"]
      },
      {
        "title": "Evaluation of plant biomass as reducing agent to Cr(VI) from electroplating effluent and removal of Cr(III) by adsorption on hematite ore",
        "authors": "S. Modhave, D.R. Shinde",
        "journal": "Asian Journal of Chemistry, Vol. 27, No. 3, 2015",
        "abstract": "This study evaluates the use of plant biomass as a reducing agent for Cr(VI) in electroplating effluents and the subsequent removal of Cr(III) by adsorption on hematite ore.",
        "keywords": ["Plant biomass", "Cr(VI) reduction", "Hematite ore", "Adsorption", "Electroplating effluent"]
      },
      {
        "title": "Fine structural photoluminescence spectra of silica-supported zirconium oxide and its photoactivity in direct methane conversion",
        "authors": "Yoshida, M.G. Chaskar, K. Kato, T. Hattori",
        "journal": "Chemical Communications, 2002",
        "abstract": "This research investigates the photoluminescence spectra and photoactivity of silica-supported zirconium oxide in direct methane conversion, providing insights into its catalytic properties.",
        "keywords": ["Zirconium oxide", "Photoluminescence", "Methane conversion", "Catalysis"]
      },
      {
        "title": "Zinc oxide mediated photocatalytic degradation of azo dye Amido Black B-10 in channel reactor under solar irradiation",
        "authors": "Dnyaneshwar R. Shinde, Ramdas A. Pawar",
        "journal": "Journal of Nanoengineering and Nanomanufacturing, Vol. 5, 2015",
        "abstract": "This study demonstrates the photocatalytic degradation of azo dye Amido Black B-10 using zinc oxide in a channel reactor under solar irradiation, highlighting its potential for wastewater treatment.",
        "keywords": ["Zinc oxide", "Photocatalysis", "Azo dye", "Solar irradiation", "Wastewater treatment"]
      },
      {
        "title": "Enhancement of photocatalytic activity of ZnO via Nd(III) doping towards the degradation of dyes under solar irradiation",
        "authors": "R. Shinde, I. Qureashi, R.A. Pawar, R.R. Pawar",
        "journal": "Journal of Nanoengineering and Nanomanufacturing, Vol. 5, No. 3, 2015",
        "abstract": "This research explores the enhancement of photocatalytic activity of ZnO through Nd(III) doping for the degradation of dyes under solar irradiation.",
        "keywords": ["Nd(III) doping", "ZnO", "Photocatalysis", "Dye degradation", "Solar irradiation"]
      },
      {
        "title": "Photocatalytic activity of biologically synthesized silver nanoparticles using flower extract",
        "authors": "Balaprasad Ankamwar, Mrunali Gharge, Ujjal Kumar Sur",
        "journal": "Science and Engineering of Materials, Vol. 7, 2015",
        "abstract": "This study investigates the photocatalytic activity of silver nanoparticles synthesized using flower extract, highlighting their potential for environmental applications.",
        "keywords": ["Silver nanoparticles", "Photocatalysis", "Flower extract", "Biosynthesis"]
      },
      {
        "title": "Photocatalytic and surface-enhanced Raman scattering (SERS) activity of biosynthesized anisotropic gold nanoparticles",
        "authors": "Balaprasad Ankamwar, Mrunali Gharge, Ujjal Kumar Sur",
        "journal": "Advanced Science and Engineering of Materials, Vol. 7, 2015",
        "abstract": "This research explores the photocatalytic and SERS activity of biosynthesized anisotropic gold nanoparticles, demonstrating their multifunctional applications.",
        "keywords": ["Gold nanoparticles", "Photocatalysis", "SERS", "Biosynthesis", "Anisotropic"]
      },
      {
        "title": "Formulation, development, and evaluations of flexible polymeric topical antifungal film (TAF)",
        "authors": "Farhana Ataurrahman, S.P. Rasale, Haroon Ansari",
        "journal": "International Journal of Advances in Pharmacy, Medicine, and Bioallied Sciences, Vol. 3, No. 3, 2015",
        "abstract": "This study focuses on the formulation and evaluation of a flexible polymeric topical antifungal film, highlighting its potential for medical applications.",
        "keywords": ["Topical antifungal film", "Polymeric film", "Formulation", "Medical applications"]
      },
      {
        "title": "Synthesis, characterization, and evaluation of antifungal and antibacterial activities of some quinazoline derivatives",
        "authors": "A.A. Kale, K.M. Durgade",
        "journal": "International Journal of Scientific Research in Science and Technology, Vol. 3, No. 9, 2015",
        "abstract": "This research investigates the synthesis, characterization, and biological activities of quinazoline derivatives, emphasizing their antifungal and antibacterial properties.",
        "keywords": ["Quinazoline derivatives", "Antifungal activity", "Antibacterial activity", "Synthesis"]
      },
      {
        "title": "Synthesis and characterization and biological evaluation of N2-N4-dip-tolyquinazoline-2-4diamine and N2-N2 bis (4-chlorophenyl) quinazoline 2,4 diamine quinazoline derivatives",
        "authors": "A.A. Kale, K.M. Durgade",
        "journal": "International Journal of Scientific Engineering and Research, Vol. 3, 2015",
        "abstract": "This study focuses on the synthesis, characterization, and biological evaluation of quinazoline derivatives, highlighting their potential therapeutic applications.",
        "keywords": ["Quinazoline derivatives", "Synthesis", "Biological evaluation", "Therapeutic applications"]
      },
      {
        "title": "Chemical synthesis and characterization of nano-sized rare-earth ruthenium pyrochlore compounds RE2Ru2O7 (RE=rare earths)",
        "authors": "R.A. Pawar, A.K. Nikumbh, D.S. Bhange, N.J. Karale, D.V. Nighot, M.B. Khanwilkar",
        "journal": "Bulletin of Materials Science, March 2017",
        "abstract": "This research focuses on the synthesis and characterization of nano-sized rare-earth ruthenium pyrochlore compounds, highlighting their structural and chemical properties.",
        "keywords": ["Rare-earth ruthenium pyrochlore", "Nano-sized compounds", "Chemical synthesis", "Structural characterization"]
      },
      {
        "title": "Study of proximate analysis of Caesalpinia bonducella",
        "authors": "Shirish S. Pingale, Manohar G. Chaskar, Nirmala R. Kakade",
        "journal": "International Journal of Pharmaceutical Research and Development, Vol. 6, No. 10, December 2014",
        "abstract": "This study investigates the proximate analysis of Caesalpinia bonducella, providing insights into its nutritional and phytochemical composition.",
        "keywords": ["Caesalpinia bonducella", "Proximate analysis", "Nutritional composition", "Phytochemicals"]
      },
      {
        "title": "Effective removal of chromium from chrome electroplating effluents by utilization of Eichornia biomass and activated charcoal",
        "authors": "Ramdas A. Pawar, Sujata S. Modhave",
        "journal": "Journal of Bionano Frontier, Vol. 7, No. 1, 2014",
        "abstract": "This research demonstrates the effective removal of chromium from electroplating effluents using Eichornia biomass and activated charcoal, offering an eco-friendly solution.",
        "keywords": ["Chromium removal", "Eichornia biomass", "Activated charcoal", "Electroplating effluents"]
      },
      {
        "title": "Potassium hexatitanate photocatalysts prepared by a flux method for water splitting",
        "authors": "Hisao Yoshida, Masaki Takeuchi, Masumi Sato, Like Zhang, Tomoki Teshima, Manohar G. Chaskar",
        "journal": "Catalysis Today, Vol. 232, September 2014",
        "abstract": "This study explores the preparation and photocatalytic activity of potassium hexatitanate for water splitting, highlighting its potential for hydrogen production.",
        "keywords": ["Potassium hexatitanate", "Photocatalysis", "Water splitting", "Hydrogen production"]
      },
      {
        "title": "Spectral and thermal studies of Zn(II) 1,2-naphthoquinone oximimates",
        "authors": "S.P. Rasale, B.A. Kulkarni",
        "journal": "Journal of Advances in Science and Technology, Vol. 14, No. 2, December 2014",
        "abstract": "This research investigates the spectral and thermal properties of Zn(II) complexes with 1,2-naphthoquinone oximimates, providing insights into their structural stability.",
        "keywords": ["Zn(II) complexes", "Naphthoquinone oximimates", "Spectral analysis", "Thermal studies"]
      },
      {
        "title": "Removal of Cr(VI) from electroplating effluent as Cr(III) by adsorption on Fe2O3",
        "authors": "S. Modhave, D.R. Shinde, R.A. Pawar",
        "journal": "Proceedings of NCACS, 2014",
        "abstract": "This study focuses on the removal of Cr(VI) from electroplating effluents by adsorption on Fe2O3, highlighting its efficiency in chromium reduction.",
        "keywords": ["Cr(VI) removal", "Fe2O3", "Adsorption", "Electroplating effluent"]
      },
      {
        "title": "Removal of Cr(VI) from electroplating effluent as Cr(III) by adsorption on Fe2O3",
        "authors": "S. Modhave, D.R. Shinde, R.A. Pawar",
        "journal": "Proceedings of NCACS, 2014",
        "abstract": "This study focuses on the removal of Cr(VI) from electroplating effluents by adsorption on Fe2O3, highlighting its efficiency in chromium reduction.",
        "keywords": ["Cr(VI) removal", "Fe2O3", "Adsorption", "Electroplating effluent"]
      },
      {
        "title": "Biosynthesis of anisotropic gold nanoparticles",
        "authors": "B. Kamble, A. Musibau Adewuyi, S.P. Kocharekar, M.N. Gharge, B.G. Ankamwar",
        "journal": "Frontiers in Physical, Chemical, and Biological Sciences, 2013",
        "abstract": "This study explores the biosynthesis of anisotropic gold nanoparticles, highlighting their unique properties and potential applications.",
        "keywords": ["Gold nanoparticles", "Biosynthesis", "Anisotropic", "Nanotechnology"]
      },
      {
        "title": "Synthesis of cadmium sulphide nano/micro particles by co-precipitation method",
        "authors": "R. Pansare, A. Malathi, M.S. Agharkar, M.N. Gharge, S.A. Agrawal, S.D. Yadav, A. Esakkiammala, B.G. Ankamwar",
        "journal": "National Conference on Frontiers in Physical, Chemical, and Biological Sciences, 2013",
        "abstract": "This research focuses on the synthesis of cadmium sulphide nano/micro particles using the co-precipitation method, highlighting their structural and optical properties.",
        "keywords": ["Cadmium sulphide", "Co-precipitation", "Nano/micro particles", "Optical properties"]
      },
      {
        "title": "Thermal decomposition study of mixed metal Y-Ba-Cu oxalate and tartarate coprecipitate leading to superconducting YBa2Cu3O7-∂",
        "authors": "S. Gugale, R.A. Pawar, D.V. Nighot, A.K. Nikumbh",
        "journal": "Proceedings of Bio Frontiers, Vol. 6, No. 4, 2013",
        "abstract": "This study investigates the thermal decomposition of mixed metal Y-Ba-Cu oxalate and tartarate coprecipitates, leading to the formation of superconducting materials.",
        "keywords": ["Y-Ba-Cu oxalate", "Superconducting materials", "Thermal decomposition", "Tartarate coprecipitate"]
      },
      {
        "title": "The study of aspirin and copper (II) aspirinate by using small scale approaches",
        "authors": "D. Sangale, R.A. Pawar, A.S. Daptare, D.V. Nighot",
        "journal": "Weekly Science Research Journal, Vol. 1, Issue 14, 2013",
        "abstract": "This research explores the synthesis and characterization of aspirin and copper (II) aspirinate using small-scale approaches, highlighting their chemical properties.",
        "keywords": ["Aspirin", "Copper (II) aspirinate", "Small-scale synthesis", "Chemical characterization"]
      },
      {
        "title": "Synthesis of silver doped TiO2 nanoparticles for the improved photocatalytic degradation of methyl orange",
        "authors": "Roshan Nainani, Pragati Thakur, Manohar Chaskar",
        "journal": "Journal of Materials Science and Engineering B, Vol. 2, No. 1, 2012",
        "abstract": "This study investigates the synthesis and photocatalytic activity of silver-doped TiO2 nanoparticles for the degradation of methyl orange, highlighting their efficiency in environmental applications.",
        "keywords": ["Silver-doped TiO2", "Photocatalysis", "Methyl orange degradation", "Nanoparticles"]
      },
      {
        "title": "Solid phase extraction combined with headspace single-drop microextraction of chlorophenols as their methyl ethers and analysis by high performance liquid chromatography-diode array detection",
        "authors": "Nisha Sharma, Archana Jain, Vandana Kumari Singh, Krishna K. Verma",
        "journal": "Talanta, Vol. 83, 2011",
        "abstract": "This research presents a method for the extraction and analysis of chlorophenols using solid-phase extraction and headspace single-drop microextraction, coupled with HPLC-DAD.",
        "keywords": ["Chlorophenols", "Solid-phase extraction", "Microextraction", "HPLC-DAD"]
      },
      {
        "title": "Headspace solid-phase microextraction and on-fibre derivatization of primary aromatic amines for their determination by pyrolysis to aryl isothiocyanates and gas chromatography-mass spectrometry",
        "authors": "Nisha Sharma, Archana Jain, Krishna K. Verma",
        "journal": "Analytical Methods, 2011",
        "abstract": "This study explores the use of headspace solid-phase microextraction and on-fibre derivatization for the determination of primary aromatic amines using pyrolysis and GC-MS.",
        "keywords": ["Primary aromatic amines", "Microextraction", "Derivatization", "GC-MS"]
      },
      {
        "title": "Headspace single-drop microextraction and cuvetteless micro-spectrophotometry for selective determination of free and total cyanide involving reaction with ninhydrin",
        "authors": "Archana Jain, A.K.K.V. Pillai, Nisha Sharma, Krishna K. Verma",
        "journal": "Talanta, Vol. 82, 2010",
        "abstract": "This research presents a method for the selective determination of free and total cyanide using headspace single-drop microextraction and cuvetteless micro-spectrophotometry.",
        "keywords": ["Cyanide determination", "Microextraction", "Micro-spectrophotometry", "Ninhydrin reaction"]
      },
      {
        "title": "Liquid-phase microextraction and fibre-optics-based cuvetteless CCD-array micro-spectrophotometry for trace analysis",
        "authors": "Nisha Sharma, Aradhana K.K.V. Pillai, Neeraj Pathak, Archana Jain, Krishna K. Verma",
        "journal": "Analytica Chimica Acta, Vol. 648, 2009",
        "abstract": "This study explores the use of liquid-phase microextraction and fibre-optics-based cuvetteless CCD-array micro-spectrophotometry for trace analysis of chemical compounds.",
        "keywords": ["Liquid-phase microextraction", "Micro-spectrophotometry", "Trace analysis", "CCD-array"]
      },
      {
        "title": "Physico-chemical, photocatalytic, and O2-adsorption properties of TiO2 nanotubes coated with gold nanoparticles",
        "authors": "S.S. Malwadkar, R.S. Gholap, S.V. Awate, P.V. Korake, M.G. Chaskar, N.M. Gupta",
        "journal": "Journal of Photochemistry and Photobiology A: Chemistry, Vol. 203, No. 1, March 2009",
        "abstract": "This research investigates the physico-chemical, photocatalytic, and O2-adsorption properties of TiO2 nanotubes coated with gold nanoparticles, highlighting their multifunctional applications.",
        "keywords": ["TiO2 nanotubes", "Gold nanoparticles", "Photocatalysis", "O2-adsorption"]
      },
      {
        "title": "Effect of polar dopants on structure of emission spectrum of crystalline anthracene powders",
        "authors": "N. Gharge, S.L. Bhattar, G.B. Kolekar, S.R. Patil",
        "journal": "Indian Journal of Chemistry, Vol. 48A, 2009",
        "abstract": "This study explores the effect of polar dopants on the emission spectrum of crystalline anthracene powders, providing insights into their structural and optical properties.",
        "keywords": ["Anthracene powders", "Polar dopants", "Emission spectrum", "Crystalline structure"]
      },
      {
        "title": "Structural and photophysical aspects of perylene-doped anthracene crystalline powders prepared by microwave heating",
        "authors": "N. Gharge, S.L. Bhattar, G.B. Kolekar, S.R. Patil",
        "journal": "Indian Journal of Chemistry, Vol. 47A, 2008",
        "abstract": "This research investigates the structural and photophysical properties of perylene-doped anthracene crystalline powders synthesized using microwave heating.",
        "keywords": ["Perylene-doped anthracene", "Crystalline powders", "Microwave heating", "Photophysical properties"]
      },
      {
        "title": "Chemical synthesis and characterization of nanosized pyrochlore oxides, Ln2Zr2O7",
        "authors": "K. Nikumbh, R.A. Pawar, D.V. Nighot, M.D. Sangale",
        "journal": "Proceedings of DAE, Solid State Physics, Vol. 49, 2005",
        "abstract": "This study focuses on the chemical synthesis and characterization of nanosized pyrochlore oxides, highlighting their structural and chemical properties.",
        "keywords": ["Pyrochlore oxides", "Nanosized compounds", "Chemical synthesis", "Structural characterization"]
      },
      {
        "title": "Active sites on silica-supported zirconium oxide for photoinduced direct methane conversion and photoluminescence",
        "authors": "Yoshida, M.G. Chaskar, Y. Kato, T. Hattori",
        "journal": "Journal of Photochemistry and Photobiology A: Chemistry, Vol. 160, 2003",
        "abstract": "This research investigates the active sites on silica-supported zirconium oxide for photoinduced direct methane conversion and photoluminescence, providing insights into its catalytic properties.",
        "keywords": ["Zirconium oxide", "Methane conversion", "Photoluminescence", "Catalysis"]
      },
      {
        "title": "The formation, structural, electrical, magnetic, and Mossbauer properties of ferrispinels Cd1-xNixFe2O4",
        "authors": "K. Nikumbh, A.V. Nagawade, G.S. Gugle, M.G. Chaskar, P.P. Bakare",
        "journal": "Journal of Materials Science, Vol. 37, 2002",
        "abstract": "This study explores the formation, structural, electrical, magnetic, and Mossbauer properties of ferrispinels Cd1-xNixFe2O4, highlighting their multifunctional applications.",
        "keywords": ["Ferrispinels", "Cd1-xNixFe2O4", "Magnetic properties", "Mossbauer spectroscopy"]
      },
      {
        "title": "Photoinduced nanoxidative coupling of methane over silica-supported Zr-Zn catalyst",
        "authors": "M.G. Chaskar, Y. Kato, T. Hattori",
        "journal": "Shokubai Toronkai Toronkai A Yokoshu, 2001",
        "abstract": "This research investigates the photoinduced nanoxidative coupling of methane over silica-supported Zr-Zn catalysts, highlighting their catalytic efficiency.",
        "keywords": ["Methane coupling", "Zr-Zn catalyst", "Photoinduced catalysis", "Nanoxidative coupling"]
      },
      {
        "title": "Electrosynthesis of Yttrium from non-aqueous bath",
        "authors": "K.M. Mohite, K.M. Gadave, C.D. Lokhande",
        "journal": "Indian Journal of Engineering and Materials Sciences, Vol. 2, 1995",
        "abstract": "This study focuses on the electrosynthesis of yttrium from a non-aqueous bath, highlighting its electrochemical properties and applications.",
        "keywords": ["Yttrium", "Electrosynthesis", "Non-aqueous bath", "Electrochemical properties"]
      },
      {
        "title": "Electrosynthesis of Tin sulphide and Yttrium sulphide thin films",
        "authors": "A. Jodgudri, U.K. Mohite, K.M. Gadave, C.D. Lokhande",
        "journal": "Indian Journal of Pure and Applied Physics, Vol. 32, 1994",
        "abstract": "This research explores the electrosynthesis of tin sulphide and yttrium sulphide thin films, highlighting their structural and optical properties.",
        "keywords": ["Tin sulphide", "Yttrium sulphide", "Thin films", "Electrosynthesis"]
      },
      {
        "title": "Chemical deposition of PbS films from acidic bath",
        "authors": "M. Gadave, S.A. Jodgudri, C.D. Lokhande",
        "journal": "Thin Solid Films, Vol. 245, 1994",
        "abstract": "This study investigates the chemical deposition of PbS films from an acidic bath, highlighting their structural and optical properties.",
        "keywords": ["PbS films", "Chemical deposition", "Acidic bath", "Thin films"]
      },
      {
        "title": "Preparation and characterization of Bi2S3-CdS pellets prepared by co-precipitation method",
        "authors": "M. Gadave, P.P. Hankare, C.D. Lokhande",
        "journal": "Materials Chemistry and Physics, Vol. 38, 1994",
        "abstract": "This research focuses on the preparation and characterization of Bi2S3-CdS pellets using the co-precipitation method, highlighting their structural and optical properties.",
        "keywords": ["Bi2S3-CdS pellets", "Co-precipitation", "Structural properties", "Optical properties"]
      },
      {
        "title": "Characterization of CdS-Bi2S3 pellets prepared by co-precipitation method",
        "authors": "M. Gadave, C.D. Lokhande, P.P. Hankare",
        "journal": "Materials Chemistry and Physics, Vol. 38, No. 4, 1994",
        "abstract": "This study investigates the characterization of CdS-Bi2S3 pellets prepared by the co-precipitation method, highlighting their structural and optical properties.",
        "keywords": ["CdS-Bi2S3 pellets", "Co-precipitation", "Structural properties", "Optical properties"]
      },
      {
        "title": "Preparation and characterization of Pb0.68Hg0.32S pellets prepared by co-precipitation",
        "authors": "M. Gadave, P.P. Hankare, C.D. Lokhande",
        "journal": "Indian Journal of Pure and Applied Physics, Vol. 32, 1994",
        "abstract": "This research focuses on the preparation and characterization of Pb0.68Hg0.32S pellets using the co-precipitation method, highlighting their structural and optical properties.",
        "keywords": ["Pb0.68Hg0.32S pellets", "Co-precipitation", "Structural properties", "Optical properties"]
      },
      {
        "title": "Photoelectrochemical (PEC) properties of sintered Cd0.8Zn0.2 pellets",
        "authors": "M. Gadave, P.P. Hankare, C.D. Lokhande",
        "journal": "Indian Journal of Pure and Applied Physics, Vol. 32, 1994",
        "abstract": "This study investigates the photoelectrochemical properties of sintered Cd0.8Zn0.2 pellets, highlighting their potential for solar energy applications.",
        "keywords": ["Cd0.8Zn0.2 pellets", "Photoelectrochemical properties", "Sintering", "Solar energy"]
      },
      {
        "title": "Chemical deposition of MnS films from thiosulphate bath",
        "authors": "M. Gadave, C.D. Lokhande",
        "journal": "Turkish Journal of Physics, 1994",
        "abstract": "This research explores the chemical deposition of MnS films from a thiosulphate bath, highlighting their structural and optical properties.",
        "keywords": ["MnS films", "Chemical deposition", "Thiosulphate bath", "Thin films"]
      },
      {
        "title": "Preparation and characterization of Cd0.8Zn0.2S pellets prepared by co-precipitation",
        "authors": "M. Gadave, P.P. Hankare, C.D. Lokhande",
        "journal": "Indian Journal of Pure and Applied Physics, Vol. 31, 1993",
        "abstract": "This study focuses on the preparation and characterization of Cd0.8Zn0.2S pellets using the co-precipitation method, highlighting their structural and optical properties.",
        "keywords": ["Cd0.8Zn0.2S pellets", "Co-precipitation", "Structural properties", "Optical properties"]
      },
      {
        "title": "Electrochemical storage cell formed with HgS films",
        "authors": "M. Gadave, C.H. Bhosale, C.D. Lokhande",
        "journal": "Bulletin of Electrochemistry, Vol. 9, No. 5, 1993",
        "abstract": "This research investigates the electrochemical storage properties of HgS films, highlighting their potential for energy storage applications.",
        "keywords": ["HgS films", "Electrochemical storage", "Energy storage", "Thin films"]
      },
      {
        "title": "Formation of CuxS films through a chemical bath deposition process",
        "authors": "M. Gadave, C.D. Lokhande",
        "journal": "Thin Solid Films, Vol. 229, 1993",
        "abstract": "This study explores the formation of CuxS films through a chemical bath deposition process, highlighting their structural and optical properties.",
        "keywords": ["CuxS films", "Chemical bath deposition", "Thin films", "Structural properties"]
      },
      {
        "title": "Utilization of Naturally Occurring Pigment Lycopene as a Photo-sensitizer for ZnO based Dye-Sensitized Solar Cells",
        "authors": "K.M. Gadave, P.K. Bhujbal, D.R. Shinde, S.P. Rasale",
        "journal": "ES Food & Agroforestry, Vol. 6, 2021",
        "abstract": "This research explores the use of lycopene, a naturally occurring pigment, as a photosensitizer in ZnO-based dye-sensitized solar cells, highlighting its efficiency and sustainability.",
        "keywords": ["Lycopene", "Dye-sensitized solar cells", "ZnO", "Photosensitizer", "Sustainability"]
      },
      {
        "title": "An Efficient Visible Light Driven Photocatalytic Removal of Dyes from the Dye Effluent using Metal Halide Lamp Based Slurry Reactor",
        "authors": "D.R. Shinde, I.S. Quraishi, R.A. Pawar",
        "journal": "ES Energy & Environment, Vol. 14, 2021",
        "abstract": "This study demonstrates the efficient removal of dyes from effluents using a metal halide lamp-based slurry reactor under visible light, offering a sustainable solution for wastewater treatment.",
        "keywords": ["Photocatalysis", "Dye removal", "Metal halide lamp", "Slurry reactor", "Visible light"]
      },
      {
        "title": "Investigation on solid state pyrolytic decomposition of bimetallic fumarate and tartrate precursors of Co (II), Ni (II) and Zn (II) with manganese",
        "authors": "D.V. Nighot, M.B. Khanvilkar, N.J. Karale, R.A. Pawar, G.S. Gugale, S.S. Arbuj",
        "journal": "Materials Today: Proceedings, Vol. 49, 2022",
        "abstract": "This research investigates the pyrolytic decomposition of bimetallic fumarate and tartrate precursors, highlighting their structural and thermal properties for catalytic applications.",
        "keywords": ["Pyrolytic decomposition", "Bimetallic precursors", "Fumarate", "Tartrate", "Catalysis"]
      },
      {
        "title": "Structural, electrical and magnetic properties of substituted pyrochlore oxide nanoparticles synthesized by the co-precipitation method",
        "authors": "M.B. Khanvilkar, A.K. Nikumbh, S.M. Patange, R.A. Pawar, N.J. Karale",
        "journal": "Physics and Chemistry of Solid State, Vol. 22, No. 2, 2021",
        "abstract": "This study explores the structural, electrical, and magnetic properties of substituted pyrochlore oxide nanoparticles synthesized by the co-precipitation method.",
        "keywords": ["Pyrochlore oxide", "Co-precipitation", "Structural properties", "Magnetic properties", "Nanoparticles"]
      },
      {
        "title": "Preparation and Characterization of Nanosized Substituted Perovskite Compounds with Orthorhombic Structure",
        "authors": "M.B. Khanvilkar, A.K. Nikumbh, R.A. Pawar, N.J. Karale, D.V. Nighot",
        "journal": "Physics and Chemistry of Solid State, Vol. 22, No. 4, 2021",
        "abstract": "This research focuses on the preparation and characterization of nanosized substituted perovskite compounds with orthorhombic structure, highlighting their structural and functional properties.",
        "keywords": ["Perovskite compounds", "Orthorhombic structure", "Nanosized", "Structural characterization"]
      },
      {
        "title": "Biofilm inhibition in Candida albicans with biogenic hierarchical zinc-oxide nanoparticles",
        "authors": "K.M. Joshi, A. Shelar, U. Kasabe, L.K. Nikam, R.A. Pawar, J. Sangshetti",
        "journal": "Materials Science and Engineering: C, 2021",
        "abstract": "This study investigates the biofilm inhibition in Candida albicans using biogenic hierarchical zinc-oxide nanoparticles, highlighting their potential for medical applications.",
        "keywords": ["Zinc-oxide nanoparticles", "Biofilm inhibition", "Candida albicans", "Biogenic synthesis"]
      },
      {
        "title": "Sustainable Agriculture through Multidisciplinary Seed Nanopriming: Prospects of Opportunities and Challenges",
        "authors": "A. Shelar, A.V. Singh, R.S. Maharjan, P. Laux, A. Luch, D. Gemmati, V. Tisato",
        "journal": "Cells, Vol. 10, No. 9, 2021",
        "abstract": "This research explores the use of seed nanopriming for sustainable agriculture, highlighting its opportunities and challenges in improving crop yield and resilience.",
        "keywords": ["Seed nanopriming", "Sustainable agriculture", "Crop yield", "Nanotechnology"]
      },
      {
        "title": "Determination of eight endocrine disruptor pesticides in bovine milk at trace levels by dispersive liquid‐liquid microextraction followed by GC‐MS determination",
        "authors": "N. Sharma, P. Thakur, M.G. Chaskar",
        "journal": "Journal of Separation Science, Vol. 44, No. 15, 2021",
        "abstract": "This study presents a method for the determination of endocrine disruptor pesticides in bovine milk using dispersive liquid-liquid microextraction and GC-MS analysis.",
        "keywords": ["Endocrine disruptors", "Pesticides", "Bovine milk", "GC-MS", "Microextraction"]
      },
      {
        "title": "Synthesis and antifungal screening of tetramethyl hexahydro-1 H-xanthene-1, 8 (2 H)-dione derivatives as potential inhibitors of morphogenesis and biofilm formation in Candida",
        "authors": "U.I. Kasabe, K.B. Kale, N.R. Rode, A.V. Shelar, R.H. Patil, P.C. Mhaske",
        "journal": "New Journal of Chemistry, Vol. 46, No. 5, 2022",
        "abstract": "This research focuses on the synthesis and antifungal screening of tetramethyl hexahydro-1 H-xanthene-1, 8 (2 H)-dione derivatives, highlighting their potential as inhibitors of Candida morphogenesis and biofilm formation.",
        "keywords": ["Tetramethyl hexahydro-xanthene", "Antifungal activity", "Candida", "Biofilm inhibition"]
      },
      {
        "title": "6,13-pentacenequinone/zinc oxide nanocomposites for organic dye degradation",
        "authors": "V. Jawale, A. Al-fahdawi, S. Salve, S. Pandit, G. Dawange, G. Gugale",
        "journal": "Materials Today: Proceedings, Vol. 52, 2022",
        "abstract": "This study investigates the photocatalytic degradation of organic dyes using 6,13-pentacenequinone/zinc oxide nanocomposites, highlighting their efficiency in environmental remediation.",
        "keywords": ["Pentacenequinone", "Zinc oxide", "Nanocomposites", "Dye degradation", "Photocatalysis"]
      },
      {
        "title": "Morphology-dependent field emission investigations from the 2-dimensional Bi2Se3-RGO nanocomposites",
        "authors": "S.R. Bansode, K.V. Harpale, P. Mutadak, K.M. Sonawane, M.G. Chaskar",
        "journal": "Materials Science and Engineering: B, Vol. 274, 2022",
        "abstract": "This research explores the morphology-dependent field emission properties of 2-dimensional Bi2Se3-RGO nanocomposites, highlighting their potential for electronic applications.",
        "keywords": ["Bi2Se3-RGO", "Nanocomposites", "Field emission", "Morphology", "Electronic applications"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Antimicrobial and antiproliferative study of chalcone clubbed 2, 4‐dimethylpyrrole‐3‐carboxamide derivatives: Synthesis and in vitro evaluation",
        "authors": "N.K. Rasal, S.V. Jagtap, D.S. Bhange",
        "journal": "Journal of Heterocyclic Chemistry, Vol. 59, No. 1, 2022",
        "abstract": "This research focuses on the synthesis and in vitro evaluation of chalcone clubbed 2,4-dimethylpyrrole-3-carboxamide derivatives for their antimicrobial and antiproliferative properties.",
        "keywords": ["Chalcone derivatives", "Antimicrobial activity", "Antiproliferative activity", "Synthesis", "In vitro evaluation"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Antimicrobial and antiproliferative study of chalcone clubbed 2, 4‐dimethylpyrrole‐3‐carboxamide derivatives: Synthesis and in vitro evaluation",
        "authors": "N.K. Rasal, S.V. Jagtap, D.S. Bhange",
        "journal": "Journal of Heterocyclic Chemistry, Vol. 59, No. 1, 2022",
        "abstract": "This research focuses on the synthesis and in vitro evaluation of chalcone clubbed 2,4-dimethylpyrrole-3-carboxamide derivatives for their antimicrobial and antiproliferative properties.",
        "keywords": ["Chalcone derivatives", "Antimicrobial activity", "Antiproliferative activity", "Synthesis", "In vitro evaluation"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Antimicrobial and antiproliferative study of chalcone clubbed 2, 4‐dimethylpyrrole‐3‐carboxamide derivatives: Synthesis and in vitro evaluation",
        "authors": "N.K. Rasal, S.V. Jagtap, D.S. Bhange",
        "journal": "Journal of Heterocyclic Chemistry, Vol. 59, No. 1, 2022",
        "abstract": "This research focuses on the synthesis and in vitro evaluation of chalcone clubbed 2,4-dimethylpyrrole-3-carboxamide derivatives for their antimicrobial and antiproliferative properties.",
        "keywords": ["Chalcone derivatives", "Antimicrobial activity", "Antiproliferative activity", "Synthesis", "In vitro evaluation"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Antimicrobial and antiproliferative study of chalcone clubbed 2, 4‐dimethylpyrrole‐3‐carboxamide derivatives: Synthesis and in vitro evaluation",
        "authors": "N.K. Rasal, S.V. Jagtap, D.S. Bhange",
        "journal": "Journal of Heterocyclic Chemistry, Vol. 59, No. 1, 2022",
        "abstract": "This research focuses on the synthesis and in vitro evaluation of chalcone clubbed 2,4-dimethylpyrrole-3-carboxamide derivatives for their antimicrobial and antiproliferative properties.",
        "keywords": ["Chalcone derivatives", "Antimicrobial activity", "Antiproliferative activity", "Synthesis", "In vitro evaluation"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Antimicrobial and antiproliferative study of chalcone clubbed 2, 4‐dimethylpyrrole‐3‐carboxamide derivatives: Synthesis and in vitro evaluation",
        "authors": "N.K. Rasal, S.V. Jagtap, D.S. Bhange",
        "journal": "Journal of Heterocyclic Chemistry, Vol. 59, No. 1, 2022",
        "abstract": "This research focuses on the synthesis and in vitro evaluation of chalcone clubbed 2,4-dimethylpyrrole-3-carboxamide derivatives for their antimicrobial and antiproliferative properties.",
        "keywords": ["Chalcone derivatives", "Antimicrobial activity", "Antiproliferative activity", "Synthesis", "In vitro evaluation"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      {
        "title": "Antimicrobial and antiproliferative study of chalcone clubbed 2, 4‐dimethylpyrrole‐3‐carboxamide derivatives: Synthesis and in vitro evaluation",
        "authors": "N.K. Rasal, S.V. Jagtap, D.S. Bhange",
        "journal": "Journal of Heterocyclic Chemistry, Vol. 59, No. 1, 2022",
        "abstract": "This research focuses on the synthesis and in vitro evaluation of chalcone clubbed 2,4-dimethylpyrrole-3-carboxamide derivatives for their antimicrobial and antiproliferative properties.",
        "keywords": ["Chalcone derivatives", "Antimicrobial activity", "Antiproliferative activity", "Synthesis", "In vitro evaluation"]
      },
      {
        "title": "Synthesis, characterization and application development of ordered mesoporous silica in wastewater remediation",
        "authors": "M. Lolage, M. Chaskar, A. Ghosh",
        "journal": "Journal of Porous Materials, Vol. 28, No. 6, 2021",
        "abstract": "This study focuses on the synthesis, characterization, and application of ordered mesoporous silica for wastewater remediation, highlighting its efficiency in pollutant removal.",
        "keywords": ["Mesoporous silica", "Wastewater remediation", "Pollutant removal", "Synthesis", "Characterization"]
      },
      {
        "title": "Photocatalytic degradation of Rose Bengal dye over mechanochemically synthesized zinc oxide under visible light irradiation",
        "authors": "Y.D. Kaldante, R.N. Shirsat, M.G. Chaskar",
        "journal": "Наносистемы: физика, химия, математика, Vol. 12, No. 6, 2021",
        "abstract": "This research investigates the photocatalytic degradation of Rose Bengal dye using mechanochemically synthesized zinc oxide under visible light irradiation.",
        "keywords": ["Zinc oxide", "Rose Bengal dye", "Photocatalysis", "Visible light", "Mechanochemical synthesis"]
      },
      {
        "title": "Synthetic strategies in development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines: A decade update",
        "authors": "Vikrant V. Kumbhar, Bhushan B. Khairnar, Manohar G. Chaskar, Ramdas A. Pawar, Gulab S. Gugale",
        "journal": "Synthetic Communications, 2022",
        "abstract": "This review provides a comprehensive update on the synthetic strategies for the development of 3-aroylimidazo[1,2-a]pyridines and 2-aroylimidazo[1,2-a]pyridines over the past decade.",
        "keywords": ["Aroylimidazopyridines", "Synthetic strategies", "Organic synthesis", "Heterocyclic compounds"]
      },
      
];

export default function ResearchPublicationsChemistry() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-serif mb-4">Research Publications</h1>
          <p className="text-lg opacity-90">Our contributions to chemical sciences</p>
        </div>
      </div>

      {/* Publications List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-[#9E1B32] mr-3" />
            <h2 className="text-3xl font-serif text-gray-900">Recent Publications</h2>
          </div>

          <div className="space-y-8">
            {publications.map((publication, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{publication.title}</h3>
                <p className="text-[#9E1B32] mb-2">{publication.authors}</p>
                <p className="text-gray-600 mb-4">{publication.journal}</p>
                <p className="text-gray-600 mb-4">{publication.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
