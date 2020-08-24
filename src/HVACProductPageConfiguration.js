import KamstrupBTUMeter from "./Assets/HVACProducts/kamstrup-btu-meter.png";
import EFCFanCoilUnitController from "./Assets/HVACProducts/efc-fan-coil-unit-controller.png";
import EVCVAVUnitController from "./Assets/HVACProducts/evc-vav-unit-controller.png";
import SchneiderBMS from "./Assets/HVACProducts/schneider-bms.png";
import VFDDrivers from "./Assets/HVACProducts/commander-200_50.png";
import YaskawaLowHarmonicVFD from "./Assets/HVACProducts/yaskawa-low-harmonic-vfd.png";
import ProdualSensors from "./Assets/HVACProducts/sensors.png";
import HV600 from "./Assets/HVACProducts/hv600.png";

import React from "react";

/* Child products for Kamstrup BTU meters. */
import Multical302 from "./Assets/HVACProducts/multical-302.png";
import Multical403 from "./Assets/HVACProducts/multical-403.png";
import Multical603 from "./Assets/HVACProducts/mulitcal-603.png";
import Multical803 from "./Assets/HVACProducts/multical-803.png";
import VelocitySensors from "./Assets/HVACProducts/velocity-sensor-produal.png";
import SchniederOperation from "./Assets/HVACProducts/schneider-operation.JPG";
import CommanderNidecC200 from "./Assets/HVACProducts/commander-c200-inside.png";
import LHVFDU1000 from "./Assets/HVACProducts/U1000-lhvfd.png";

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
import SchneiderBMSPDF from "./Assets/PDF/schneider-bms.pdf";
import Yaskawa600PDF from "./Assets/PDF/yaskawa-600.pdf";
/* Flags */

import Denmark from "./Assets/flags/denmark.jpg";
import Canada from "./Assets/flags/canada.jpg";
import Europe from "./Assets/flags/europe.svg";
import Finland from "./Assets/flags/finland.jpg";
import Japan from "./Assets/flags/japan.webp";

export const HVACProductImageList = [
  


  {
    id: "Kamstrup BTU Meter",
    img: Multical603,
    scale: 0.7,
    sub_header: "Heat metering with ULTRAFLOW® 54",
    sub_header_rhs: Denmark,
    sub_header_rhs_text: "Made In Denmark",
    information: [
      [
        <li>
          Your heat meter is the absolute corner stone in your network. It
          provides you with data needed for billing and optimisation. For that
          purpose, it needs to be accurate and stay accurate for many years.
        </li>,
      ],
      [
        <li style={{ marginTop: "10px" }}>
          During this time, regulations and legislation may change many times
          and your solution needs to change accordingly. This requires a high
          level of flexibility from your meters in terms of installation,
          reconfiguration and updates.
        </li>,
      ],
      [
        <li style={{ marginTop: "10px" }}>
          {" "}
          The value of the data from the intelligent heat meters goes beyond
          correct billing. Put into use, this data can be utilised to optimise
          the performance of your network. To reach the potential of this
          optimisation, you must be able to trust your infrastructure to deliver
          accurate and stable sets of data. Today, tomorrow and in the future.
        </li>,
      ],
    ],
    child_products: [
      {
        id: "MULTICAL®302 ",
        img: Multical302,
        sub_header: "The Ultra-compact meter",
        know_more_link:
          "https://www.kamstrup.com/en-en/heat-solutions/heat-meters/multical-302",
        download_content: Multical302PDF,
        information: [
          [`Small and compact design`],
          [
            `Integrated remote reading options are wired
        M-Bus or wireless M-Bus`,
          ],
          [`On-site configuration.`],
          [`Flow sensor range DN15…20`],
          [`Flow sensor cable length 1.2 m`],
          [
            `Permanent condensation accepted for flow
        sensor and temperature sensor pair`,
          ],
          [`IP68 rating.`],
          [
            `One temperature sensor is always mounted in
        the flow sensor`,
          ],
        ],
      },
      {
        id: "MULTICAL®403",
        img: Multical403,
        sub_header: "The compact and flexible meter",
        know_more_link:
          "https://www.kamstrup.com/en-en/heat-solutions/heat-meters/multical-403",
        download_content: Multical403PDF,
        information: [
          [
            `Remote reading with communication module via
        wired/wireless* M-Bus, Modbus, BACnet etc`,
          ],
          [`On-site configuration available`],
          [`Flow sensor range DN15…50`],
          [`Flow sensor cable length 1.5 m`],
          [`Permanent condensation accepted (IP68 rating)`],
          [`IP68 rating.`],
          [`Can be insulated`],
          [
            `Possibility for direct temperature sensor mounting
        in flow sensor`,
          ],
        ],
      },
      {
        id: "MULTICAL®603",
        img: Multical603,
        know_more_link:
          "https://www.kamstrup.com/en-en/heat-solutions/heat-meters/multical-603",
        sub_header: "The compact and flexible meter",
        download_content: Multical603PDF,
        information: [
          [`Auto Detect`],
          [
            `Remote reading with communication module
        via wired/wireless* M-Bus, Modbus, BACnet etc`,
          ],
          [`Direct temperature sensor mounting up to DN40`],
          [`Can be insulated`],
          [
            `Cable lengths 2.5…10 m (can be extended to 100
        m)`,
          ],
          [`Permanent condensation accepted`],
          [`On-site configuration`],
          [`IP65 rating`],
        ],
      },
      {
        id: "MULTICAL®803",
        img: Multical803,
        know_more_link:
          "https://www.kamstrup.com/en-en/heat-solutions/heat-meters/multical-803",
        sub_header: "The compact and flexible meter",
        download_content: Multical803PDF,
        information: [
          [`Auto Detect`],
          [
            `Remote reading with communication module via
        wired/wireless* M-Bus, Modbus, BACnet etc.`,
          ],
          [`4 slots for communication modules`],

          [`Direct temperature sensor mounting up to DN40`],
          [`Can be insulated`],
          [`Cable lengths 2.5…10 m (can be extended to 100 m)`],
          [`Permanent condensation accepted*`],
          [`On-site configuration`],
          [`IP65 rating`],
        ],
      },
    ],
  },
  {
    id: "EFC Fan Coilt Unit Controller",
    img: EFCFanCoilUnitController,
    scale: 0.7,
    sub_header: "Unit Controller with TFL Thermostat",
    know_more_link: "https://www.neptronic.com/Controls/Fancoils.aspx",
    download_content: EFCNeptronic,
    sub_header_rhs: Canada,
    sub_header_rhs_text: "Made In Canada",
    information: [
      [<li>Controller mounted in fan coil unit.</li>],
      [<li>Connect controller to room thermostat via 3 wires.</li>],
      [<li>BACnet MS/TP communication.</li>],
      [<li>24, 120 or 240Vac.</li>],
      [<li>Up to 10 inputs and 12 outputs.</li>],
    ],
  },
  {
    id: "Schneider BMS",
    img: SchneiderBMS,
    scale: 0.7,
    download_content: SchneiderBMSPDF,
    sub_header: "EcoStruxure™ series",
    sub_header_rhs: Europe,
    sub_header_rhs_text: "Made In Europe",
    information: [
      [
        <li>
          EcoStruxure™ Building Operation software is the edge control heart of
          the EcoStruxure Building system to monitor, manage and control
          building systems. With an open integration platform, it securely
          facilitates the exchange of data from both Schneider Electric and
          third-party energy, lighting, HVAC, fire safety, security and
          workplace management systems to create future-ready smart buildings.
        </li>,
      ],
      [
        <li style={{ marginTop: "10px" }}>
          The diverse flagship range of Building Management System products is
          what sets Schneider Electric India apart as one of the leading
          high-technology and innovation-driven brands in the country.
        </li>,
      ],
    ],

    child_products: [
      {
        id: "EcoStruxure™ Building Operation",
        know_more_link:
          "https://www.se.com/in/en/product-range/62111-ecostruxure%E2%84%A2-building-operation/?parent-subcategory-id=1210&filter=business-2-building-automation-and-control",
        download_content: SchneiderBMSPDF,
        img: SchniederOperation,
        sub_header: "A single solution for your complex needs.",
        information: [
          [
            `At the core of a EcoStruxure Building is a SmartStruxure server device, such as AS-B. AS-B performs key functionality, such as control logic, trend logging, and alarm supervision, provides builtin I/O, and supports communication and connectivity to the field buses.`,
          ],
          [
            `The distributed intelligence of the EcoStruxure Building ensures fault tolerance in the system and provides a fully featured user interface through WorkStation and WebStation.`,
          ],
        ],
      },
    ],
  },
  {
    id: "VFD",
    img: VFDDrivers,
    scale: 0.8,
    sub_header: "Nidec (Formarly Emerson) drives",
    download_content: CommanderPDF,
    sub_header_rhs: Japan,
    sub_header_rhs_text: "From Japan | UK",
    information: [
      [
        <div style={{ fontSize: "12px", color: "grey" }}>
          0.25 kW - 132 kW (0.33 hp to 200hp) <br></br>100 V | 200 V | 400 V
        </div>,
      ],
      [
        <li style={{ marginTop: "10px" }}>
          Commander variable speed drives have established the standard of
          excellence in motor control since 1983 when Control Techniques
          launched the first world commercial vector drive. Since then,
          Commander has undergone several successful reiterations, each time
          bringing new technology and innovations to the world of automation.
          The new Commander C series has been designed to be a simple and
          compact AC motor speed controller that meets advanced requirements in
          a wide range of applications and provides optimum user experience.
        </li>,
      ],
    ],
    child_products: [
      {
        id: "Nidec (Formarly Emerson) Commander Edition.",
        img: CommanderNidecC200,
        sub_header: "Nidec (Formarly Emerson) Commander C200.",
        know_more_link:
          "https://acim.nidec.com/drives/control-techniques/products/ac-drives/commander-c-general-purpose-drives",
        information: [
          [
            <div style={{ color: "grey", fontWeight: "600" }}>
              {" "}
              Commander C Highlights.{" "}
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004; Set just 4 parameters to get your drive started.
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004; Plug-in options for advanced control.{" "}
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004;Dual Safe Torque Off (STO).{" "}
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004;Equipped with the latest energy saving features.{" "}
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004;Up to 180% overload for high torque applications.
            </div>,
          ],
          [<div style={{ marginRight: "auto" }}>&#10004;On board PLC.</div>],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004;Straightforward installation and commissioning.
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004;Easy motor pairing and performance control.
            </div>,
          ],
          [
            <div style={{ marginRight: "auto" }}>
              &#10004;Robust and reliable design.
            </div>,
          ],
        ],
      },
    ],
  },
  {
    id : "VFD",
    img : HV600,
    scale :0.8,
    sub_header : "Yaskawa HV 600",
    sub_header_rhs : Japan,
    sub_header_rhs_text : "From Japan | India",
    download_content: Yaskawa600PDF,
    information : [
      [
        <li style={{ marginTop: "10px" }}>
          The HV600 was specifically designed as a variable frequency drive for HVAC, Refrigeration and weater applications.
        </li>
      ],
      [
        <li style={{ marginTop: "10px" }}>
          Its high contrast disaplay and LED status ring gives out clear indication of drive parametes and operation status.
        </li>
      ],
      [
        <li style={{ marginTop: "10px" }}>
          These features and mobile device programming combine to make the complicated seem simple.
        </li>
      ],
      [
        <li style={{ marginTop: "10px" }}>
          The HV600 also includes as standard PID functions to maintain control of set points for temperature, flow, or pressure without the need for external control devices.
        </li>
      ],
      [
        <li style={{ marginTop: "10px" }}>
          Flexible motor control is achieved through induction and permanent magnent motors and synchronous reluctance (SynRM) motors producing an output frequency of 400Hz.
        </li>
      ]
    ],
    child_products : [
      {
        id: "VFD ",
        img: HV600,
        sub_header: "Yaskawa HV 600",
        know_more_link:
        "https:https://www.yaskawa.com/documents/20197/890813/ahr2020.html/979d2fa4-5339-4c4d-afe6-50d2c1b07edb",
        download_content: Yaskawa600PDF,
        information: [
          [<li style={{ marginTop: "10px" }}>
            The HV600 comes in standard from the factory with a choice of IP20, IP55 with ambient temperature ratings upto 50C. Ratings upto 60 can be achieved with current derating.
          </li>],
          [
            <li style={{ marginTop: "10px" }}>
              Most HV600 models can be mounted side-by-side with bottom entry wiring to maximize cabinet space. 
            </li >,
          ],
          [<li style={{ marginTop: "10px" }}>
            When mounted in a seperate enclosure, heat management can be accomplished by removing detachable top and bottom covers on the drive or by "back-side" mounting the standard drive with the heatsink external to the enclosure.
          </li>],
          [
            <li>
              All the featuers expected for efficient building operation come standard with the HV600. Customer-supplied 24 VDC input control power ensures network communications are maintined even during loss of main input power.
            </li>
          ],
          [
            <li>
              A full complement of analog and digital inputs are built in for connection to sensors and safeties.
            </li>
          ],
          [
            <li>
              All HV600 IP20 and IP55 models are plenum ratd for building automation applications.
            </li>
          ]
         
        ],
      }
    ]
  },
  {
    id: "Yaskawa Low Harmonic VFD",
    img: YaskawaLowHarmonicVFD,
    scale: 0.7,
    sub_header: "U1000 Series Fan & Pump drives",
    download_content: YaskawaLHVFD,
    sub_header_rhs: Japan,
    sub_header_rhs_text: "Made In Japan",
    information: [
      [
        <div style={{ fontSize: "14px", fontWeight: "500" }}>
          Merging Green & Technology for Building Automation
        </div>,
      ],
      [<li>Capacity Range: 2.2 kW to 500 kW.</li>],
      [
        <li>
          Motor Types: Induction Motor (IM), Permanent Magnet Motor (PM), both
          with or without encoder.
        </li>,
      ],
      [<li>Current Overload: 150% for 60 seconds.</li>],
      [
        <li>
          Control Modes: V/f, Open loop Vector, Closed Loop Vector, Vector
          control for PM motors.
        </li>,
      ],
      [
        <li>
          Standard I/O:8 multi-function programmable digital inputs (24Vdc).
        </li>,
      ],
      [<li>multi-function programmable analog inputs (0-10Vdc or 4-20mA).</li>],
      [<li>programmable analog outputs (-10V to +10Vdc)</li>],
      [<li>2 programmable relays, 2 photo couplers.</li>],
      [<li>1 fault relay.</li>],
    ],
    child_products: [
      {
        id: "U1000 Low Harmonic Variable Frequency Drive.",
        img: LHVFDU1000,
        sub_header: "Yaskwaw U1000",
        know_more_link:
          "https://www.yaskawa.com/products/drives/industrial-ac-drives/general-purpose-drives/u1000-industrial-matrix-drive",
        information: [
          [
            <li style={{ marginRight: "auto", marginTop: "20px" }}>
              Yaskawa’s Matrix technology creates a variable output by switching
              directly from input power (no DC bus).
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              IEEE compliant.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Near unity power factor.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Built-in PI Feature which maintains a set point for closed loop
              control for fans and pumps for pressure, flow or temperature
              regulation and eliminates the need for a closed loop output signal
              from a BAS. Independent PI to control an external device in the
              system.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", margnTop: "5px" }}>
              Near unity power factor
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              High efficiency design provides Extra Energy Savings as compared
              to other Low Harmonics solutions
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Independent PI to control an external device in the system.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Critical frequency rejection capability: 3 selectable, adjustable
              bands
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Up/down floating point capability.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Low input Distortion across a Wide Load and Speed Range.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              S-Curve soft start/stop capability.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Sleep function in both open and closed loop operation.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Excellent low level distortions without the use of passive filters
              or multi pulse arrangements.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Motor overheat protection based on output current.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              LCD keypad: Hand-Off-Auto functions with a built-in copy feature.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              “Kinetic Energy Braking” (KEB) function stops the motor in up to
              half the time it would take without this function.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Auto restart after power loss or resettable fault, selectable,
              programmable.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Commercial Switch mode available i.e VFD bypass mode at input
              frequency (ex. 50Hz).
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Compact design.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Functional safety according (SIL3, PLe, Cat3).
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              NK, BV, DNV/GL, ABS, LR, KR, CE, RoHS certification.
            </li>,
          ],
          [
            <li style={{ marginRight: "auto", marginTop: "5px" }}>
              Upto 50% smaller footprint.
            </li>,
          ],
        ],
      },
    ],
  },
  {
    id: "EVC VAV Unit Controller",
    img: EVCVAVUnitController,
    scale: 0.7,
    sub_header: "Unit Controller with TFL Thermostat",
    know_more_link: "https://www.neptronic.com/Controls/Vav.aspx",
    download_content: NeptronicVAVPDF,
    sub_header_rhs: Canada,
    sub_header_rhs_text: "Made In Canada",
    information: [
      [<li>Built-in actuator and optional air pressure sensor.</li>],
      [<li>Mounts on jackshaft or damper.</li>],
      [<li>Connects to room thermostat via 3 wires</li>],
      [<li>BACnet MS/TP communication.</li>],
      [<li>Up to 4 inputs and 6 outputs (I/O configuration).</li>],
    ],
  },
  {
    id: "Produal Sensors",
    img: ProdualSensors,
    scale: 0.8,
    sub_header: "Produal sensors for environment monitoring.",
    know_more_link: "https://www.produal.com/",
    download_content: ProdualSensorsPDF,
    sub_header_rhs: Finland,
    sub_header_rhs_text: "Made In Finland",
    information: [
      [
        <li>
          5 Years' warranty for the Produal products from ISO 9001 DNV.GL
          certified Manufacturing . Produal is from Finland. CE Certified.
        </li>,
      ],
      [
        <li>
          We aim to be the one-stop-shop partner for measurement and control for
          all our customers operating in the evolving business of building
          automation.
        </li>,
      ],
      [
        <li>
          Our wide product offering includes over 1000 products for controlling,
          measuring, actuating and commissioning, completed with system
          components.
        </li>,
      ],
      [
        <li>
          Our design principles ensure a selection of accurate, multifunctional
          and easy-to-install products, and our quality system is ISO certified.
        </li>,
      ],
    ],
  },
];
