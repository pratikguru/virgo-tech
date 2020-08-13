/* Importing logos and image on this page. */

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

/*--------------------------------------------------------------*/
/* START OF EXPORTS OF CENTRAL GRID PHOTS AND ICONS LINKING THE GRID.
/*--------------------------------------------------------------*/

import KamstrupBTUMeter from "./Assets/HVACProducts/kamstrup-btu-meter.png";
import EFCFanCoilUnitController from "./Assets/HVACProducts/efc-fan-coil-unit-controller.png";
import EVCVAVUnitController from "./Assets/HVACProducts/evc-vav-unit-controller.png";
import SchneiderBMS from "./Assets/HVACProducts/schneider-bms.png";
import VFDDrivers from "./Assets/HVACProducts/vfd-drivers.png";
import YaskawaLowHarmonicVFD from "./Assets/HVACProducts/yaskawa-low-harmonic-vfd.png";
import SensorsImage from "./Assets/HVACProducts/produal.png";

/*--------------------------------------------------------------*/
/* END OF EXPORTS OF PARTNER IMAGES AND LOGOS..
/*--------------------------------------------------------------*/

/*--------------------------------------------------------------*/
/* PARTNER IMAGE LIST TO BE EXPORTED.
/*--------------------------------------------------------------*/

export const PartnerListImages = [
  Kamstrup,
  Neptronic,
  Nidec,
  Produal,
  Schneider,
  Yaskawa,
];

/*--------------------------------------------------------------*/
/* CONTENT OF THE GRID ITEMS.
/*--------------------------------------------------------------*/
export const HexaGrid = [
  [
    {
      text: "VFD",
      icon: vfd,
      img: VFDDrivers,
      type: 1,
      information: [
        [
          `Control Techniques Unidrive M400 variable frequency AC drive (VFD) minimizes downtime with an optional plain-text, multi-language backlit LCD keypad enabling rapid setup and clear diagnostic help.
      The integrated PLC can execute a substantial range of sequencing and logic programs`,
        ],
        [
          `Unidrive M400 has an impressive onboard I/O count, dual Safe Torque Off (STO) inputs, and can accommodate a single SI option module for additional flexibility`,
        ],
        [
          `The SI module has options for industry standard fieldbus, Ethernet, and expanded I/O. Additionally, an AI option slot is available for parameter cloning, 24V backup, and Modbus RTU communication options.`,
        ],
        [
          `A CI-485-ADAPTOR is also available to provide additional Modbus RTU communications in place of the optional keypad.`,
        ],
      ],
      header: "VFD Drivers",
      sub_header: "Nidec (Emerson) drives",
    },
    {
      text: "BTU Meter",
      icon: BTUMeter,
      type: 1,
      img: KamstrupBTUMeter,
      information: "",
      header: "Kamstrup BTU Meter",
      sub_header: "Heat metering with ULTRAFLOW",
    },
  ],
  [
    {
      text: "Sensors",
      icon: Sensors,
      type: 1,
      img: SensorsImage,
      information: [
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
    {
      text: "Building Management System",
      icon: "",
      type: 0,
    },
    {
      text: "Water Meter",
      icon: WaterMeter,
      type: 1,
      img: KamstrupBTUMeter,
      information: [
        [
          "Kamstrup’s heat meters are based on state of the art heat technology.The advanced calculator, MULTICAL ®602, is used together with the flow sensor, ULTRAFLOW® 54, as well as two temperature sensors for calculation of energy and measurement of flow, power and temperature - with the best measuring accuracy on the market",
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
      header: "BTU water meters.",
      sub_header: "Heat metering with ULTRAFLOW.",
    },
  ],
  [
    {
      text: "VAV",
      icon: VAV,
      type: 1,
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
    {
      text: "HVAC",
      icon: HVACControl,
      type: 1,
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
      sub_header: "Z1000 series fan & pump drives.",
    },
  ],
];
