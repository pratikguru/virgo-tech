/* Importing logos and image on this page. */
import React from "react";

/*--------------------------------------------------------------*/
/* START OF EXPORTS OF CLIENT PHOTO AND ICONS.
/*--------------------------------------------------------------*/

import Kamstrup from "./Assets/Partners/kamstrup.png";
import Neptronic from "./Assets/Partners/neptronic.png";
import Nidec from "./Assets/Partners/nidec.png";
import Produal from "./Assets/Partners/produal.png";
import Schneider from "./Assets/Partners/schneider.png";
import Yaskawa from "./Assets/Partners/yaskawa.png";
import MyAppleCustomer from "./Assets/Partners/yaskawa.png";

/*--------------------------------------------------------------*/
/* START OF EXPORTS OF CENTRAL GRID PHOTS AND ICONS.
/*--------------------------------------------------------------*/

import BTUMeter from "./Assets/BMSImages/btu-meter.svg";
import HVACControl from "./Assets/BMSImages/hvac-control-system.svg";
import Sensors from "./Assets/BMSImages/sensors.svg";
import VAV from "./Assets/BMSImages/vav.svg";
import vfd from "./Assets/BMSImages/vfd.svg";
import WaterMeter from "./Assets/BMSImages/water-meter.svg";
import HV600 from "./Assets/HVACProducts/hv600_new.jpg";

/*--------------------------------------------------------------*/
/* START OF EXPORTS OF CENTRAL GRID PHOTS AND ICONS LINKING THE GRID.
/*--------------------------------------------------------------*/

import WaterMeterBTU from "./Assets/HVACProducts/meter.svg";
import KamstrupBTUMeter from "./Assets/HVACProducts/mulitcal-603.png";
import EFCFanCoilUnitController from "./Assets/HVACProducts/efc-fan-coil-unit-controller.png";
import EVCVAVUnitController from "./Assets/HVACProducts/evc-vav-unit-controller.png";
import SchneiderBMS from "./Assets/HVACProducts/schneider-bms.png";
import VFDDrivers from "./Assets/HVACProducts/commander-200.png";
import YaskawaLowHarmonicVFD from "./Assets/HVACProducts/U1000-lhvfd.png";
import SensorsImage from "./Assets/HVACProducts/sensors.jpg";

/*--------------------------------------------------------------*/
/* END OF EXPORTS OF PARTNER IMAGES AND LOGOS..
/*--------------------------------------------------------------*/

/* PDF's. */
import CommanderPDF from "./Assets/PDF/commander.pdf";
import YaskawaLHVFD from "./Assets/PDF/yaskawa-data-sheet.pdf";
import Multical302PDF from "./Assets/PDF/multical-302.pdf";
import Multical403PDF from "./Assets/PDF/multical-403.pdf";
import Multical603PDF from "./Assets/PDF/multical-603.pdf";
import Multical803PDF from "./Assets/PDF/multical-803.pdf";
import EFCNeptronic from "./Assets/PDF/neptronic-efc.pdf";
import NeptronicVAVPDF from "./Assets/PDF/neptronic-vav.pdf";
import ProdualSensorsPDF from "./Assets/PDF/produal-sensors.pdf";
import MulticalSeries from "./Assets/PDF/multical-series.pdf";
import SchneiderBMSPDF from "./Assets/PDF/schneider-bms.pdf";
import HV600PDF from "./Assets/PDF/yaskawa-600.pdf";

/* Flags */

import Denmark from "./Assets/flags/denmark.jpg";
import Canada from "./Assets/flags/canada.jpg";
import Europe from "./Assets/flags/europe.svg";
import Finland from "./Assets/flags/finland.jpg";
import Japan from "./Assets/flags/japan.jpeg";

/*--------------------------------------------------------------*/
/* PARTNER IMAGE LIST TO BE EXPORTED.
/*--------------------------------------------------------------*/

export const PartnerListImages = [
  {
    img: Kamstrup,
    link: "https://www.kamstrup.com/en-en",
  },
  {
    img: Neptronic,
    link: "https://www.neptronic.com/home.aspx",
  },
  {
    img: Nidec,
    link: "https://www.nidec.com/en/",
  },
  {
    img: Produal,
    link: "https://www.produal.com/",
  },
  {
    img: Schneider,
    link: "https://www.se.com/in/en/",
  },
  {
    img: Yaskawa,
    link: "https://www.yaskawa.eu.com/",
  },
];

/*--------------------------------------------------------------*/
/* CONTENT OF THE GRID ITEMS.
/*--------------------------------------------------------------*/
export const HexaGrid = [
  [
    {
      text: "VFD",
      type: 1,
      icon: vfd,

      items: [
        {
          sub_header_rhs_text: "From Japan | UK",
          sub_header_rhs: Japan,
          img: VFDDrivers,
          scale: 0.5,
          download_content: CommanderPDF,
          information: [
            [
              `Control Techniques Unidrive C200 variable frequency AC drive (VFD) minimizes downtime with an optional plain-text, multi-language backlit LCD keypad enabling rapid setup and clear diagnostic help.
      The integrated PLC can execute a substantial range of sequencing and logic programs`,
            ],
            [
              `Unidrive C200 has an impressive onboard I/O count, dual Safe Torque Off (STO) inputs, and can accommodate a single SI option module for additional flexibility`,
            ],
            [
              `The SI module has options for industry standard fieldbus, Ethernet, and expanded I/O. Additionally, an AI option slot is available for parameter cloning, 24V backup, and Modbus RTU communication options.`,
            ],
            [
              `A CI-485-ADAPTOR is also available to provide additional Modbus RTU communications in place of the optional keypad.`,
            ],
          ],
          header: "VFD",
          sub_header: "Nidec (Formarly Emerson) drives",
        },
        {
          sub_header_rhs_text: "From Japan | India",
          sub_header_rhs: Japan,
          img: HV600,
          scale: 0.7,
          download_content: HV600PDF,
          header: "VFD",
          sub_header: "Yaskawa HV600",
          information: [
            [
              `The HV600 comes in standard from the factory with a choice of
                IP20, IP55 with ambient temperature ratings upto 50C. Ratings
                upto 60 can be achieved with current derating.`,
            ],
            [
              `
                Most HV600 models can be mounted side-by-side with bottom entry
                wiring to maximize cabinet space.`,
            ],
            [
              `When mounted in a seperate enclosure, heat management can be
                accomplished by removing detachable top and bottom covers on the
                drive or by "back-side" mounting the standard drive with the
                heatsink external to the enclosure.`,
            ],
            [
              `All the featuers expected for efficient building operation come
                standard with the HV600. Customer-supplied 24 VDC input control
                power ensures network communications are maintined even during
                loss of main input power`,
            ],
            [
              `A full complement of analog and digital inputs are built in for
                connection to sensors and safeties.`,
            ],
            [
              `All HV600 IP20 and IP55 models are plenum ratd for building
                automation applications.`,
            ],
          ],
        },
      ],
    },
    {
      text: "BTU Meter",
      icon: BTUMeter,
      items: [
        {
          sub_header_rhs_text: "Made in Denmark",
          sub_header_rhs: Denmark,
          scale: 1,
          img: KamstrupBTUMeter,
          download_content: MulticalSeries,
          header: "Kamstrup BTU Meter",
          sub_header: "Heat metering with ULTRAFLOW",
          information: [
            [
              "Kamstrup’s heat meters are based on state of the art heat technology.The advanced calculator, MULTICAL ®603, is used together with the flow sensor, ULTRAFLOW® 54, as well as two temperature sensors for calculation of energy and measurement of flow, power and temperature - with the best measuring accuracy on the market",
            ],
            [
              `The energy calculations and flow, power and temperature measurements are data logged and can be read directly from the display or through remote reading in a wireless network.`,
            ],
            [
              `The Kamstrup MULTICAL® 603 heat meter comes with a built-in Auto Detect function, making it possible to replace the ULTRAFLOW® when needed, without having to manually re-configure the calculator.`,
            ],
            [
              `This increases flexibility and allows you to keep only one type of calculator in stock that can then be used for all Kamstrup ultrasonic flow meters`,
            ],
            [
              `Auto Detect is compatible with fourth generation ULTRAFLOW®, which has been produced since 2008.`,
            ],
            [
              `Imagine that utilities’ heat meters can be configured with new settings adjusted to the current needs – without logistical challenges and direct access to the meters and without legal registers, meter readings or network control being affected.
          Imagine, that the meter’s log can be read in order for abnormal consumption patterns to be investigated – without having to disturb the customer unnecessarily`,
            ],
          ],
        },
      ],
      type: 1,
    },
  ],
  [
    {
      text: "Sensors",
      icon: Sensors,
      type: 1,
      items: [
        {
          scale: 1.5,
          img: SensorsImage,
          sub_header_rhs_text: "Made in Finland",
          sub_header_rhs: Finland,
          download_content: ProdualSensorsPDF,
          information: [
            [
              `5 Years' warranty for the Produal products from ISO 9001 DNV.GL certified Manufacturing .
              Produal is from Finland. CE Certified.`,
            ],
            [
              `We aim to be the one-stop-shop partner for measurement and control for all our customers operating in the evolving business of building automation.`,
            ],
            [
              `Our wide product offering includes over 1000 products for controlling, measuring, actuating and commissioning, completed with system components.`,
            ],
            [
              `Our design principles ensure a selection of accurate, multifunctional and easy-to-install products, and our quality system is ISO certified.`,
            ],
          ],
          header: "Produal Sensors",
          sub_header: "Efficient solutions for high quality OEM products.",
        },
      ],
    },
    {
      text: "Building Management System",
      icon: "",
      type: 0,
      items: [
        {
          scale: 0.8,
          img: SchneiderBMS,
          sub_header_rhs_text: "Made in Europe",
          sub_header_rhs: Europe,
          download_content: SchneiderBMSPDF,
          information: [
            [
              `SmartStruxure™ solution enables you to monitor, measure, and optimize your building’s performance throughout its life cycle — saving you money. You can’t control what you don’t measure. SmartStruxure solution, powered by StruxureWare™ Building Operation software, facilitates the exchange and analysis of data from energy, lighting, fire safety, and HVAC`,
            ],
            [
              `At the core of a EcoStruxure Building is a SmartStruxure server device, such as AS-B. AS-B performs key functionality, such as control logic, trend logging, and alarm supervision, provides builtin I/O, and supports communication and connectivity to the field buses.`,
            ],
            [
              `The distributed intelligence of the EcoStruxure Building ensures fault tolerance in the system and provides a fully featured user interface through WorkStation and WebStation.`,
            ],
          ],
          header: "Building Management System",
          sub_header: "Optimum solutions for Building Management Systems.",
        },
      ],
    },
    {
      text: "Water Meter",
      icon: WaterMeter,
      type: 1,
      items: [
        {
          img: WaterMeterBTU,
          scale: 0.5,

          sub_header_rhs_text: "Made in Denmark",
          sub_header_rhs: Denmark,
          information: [
            [
              `MULTICAL® 21 / flowIQ® 210x is the state-of-art and future proof smart water meter that employs ultrasonic technology which kamstrup has expertise over 21 years.`,
            ],
            [
              `Intelligent alarms from the ultrasonic water meter lets you detect leaks and bursts or other irregularities such as tampering attempts or reverse flows quickly and effectively. This limits water loss as well as any collateral damage.`,
            ],
            [
              `As an ultasonic water meter, MULTICAL® 21 / flowIQ® 210x has a low start flow down to 2 l/hour which ensures that even very low flows are measured.`,
            ],
          ],
          header: "Kamstrup Ultrasonic Water Meter",
          sub_header: "Heat metering with ULTRAFLOW.",
        },
      ],
    },
  ],
  [
    {
      text: "VAV",
      icon: VAV,
      type: 1,
      items: [
        {
          scale: 0.7,
          sub_header_rhs_text: "Made in Canada",
          sub_header_rhs: Canada,
          information: [
            [
              `The VAV unit controllers from Neptronic are packed with the most sophisticated features bringing the best in class technology for building management systems.`,
            ],
            [
              `The controller has numerous features such as Field configured VAV algorithms, built-in actuator 70in.lb [8nM], on board differential pressure sensor (pressure independent models), manual or automatic pressure mode selection, configurable input and outputs, configurable PI function, Simple air balancing and commissioning via digital room sensor`,
            ],
            [`Selectable internal or external temperature sensor (10KΩ)`],
            [
              `Activate output with CO2 from digital room sensor or external CO2 sensor.`,
            ],
            [`Change over by contact or external temperature sensor`],
            [`24Vac operation.`],
            [`Removable, raising clamp, non-strip terminals.`],
            [`24Vac thermal fuse for overheat protection.`],
          ],
          header: "EVC VAV Unit controller.",
          img: EVCVAVUnitController,
          sub_header: "Unit controller with TFL Thermostat.",
        },
      ],
    },
    {
      text: "LH-VFD",
      icon: HVACControl,
      type: 1,
      items: [
        {
          scale: 0.2,
          sub_header_rhs_text: "From Japan | India",
          sub_header_rhs: Japan,
          information: [
            [
              `Yaskawa is the largest global variable frequency drives manufacturer with over 30 years of Building Automation System (BAS) and HVAC experience. Our variable frequency drives are designed for HVAC applications, which include air handlers, cooling towers, and pumps, by combining reduced size and cost with advances in performance and quality.`,
            ],
            [
              `Our HVAC product family ranges from 1/2 to 500 horsepower and includes features for Building Automation Systems such as extensive parameter selection to simplify management of BAS applications for energy efficiency and closed loop control, industry-standard Hand-Off-Auto functionality, an internal PI controller and a Sleep function.`,
            ],
            [
              `The drives have embedded BACnet communications, Metasys®, and APOGEE™. LonWorks®, EtherNet/IP, and Modbus TCP/IP are optional.`,
            ],
            [
              `We offer a selection of various building automation networks to help get your drive connected. Find out more about the support we provide and how it can fit your needs.`,
            ],
            [
              `This collection of PC software support tools can be used for uploading and downloading drive parameters, calculating energy savings, or identifying how to reduce your operating costs and meet the harmonics compliance requirements.`,
            ],
          ],
          img: YaskawaLowHarmonicVFD,
          header: "Yaskawa Low Harmonic VFD.",
          sub_header: "U1000 series fan & pump drives.",
        },
      ],
    },
  ],
];
