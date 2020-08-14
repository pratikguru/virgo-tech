import KamstrupBTUMeter from "./Assets/HVACProducts/kamstrup-btu-meter.png";
import EFCFanCoilUnitController from "./Assets/HVACProducts/efc-fan-coil-unit-controller.png";
import EVCVAVUnitController from "./Assets/HVACProducts/evc-vav-unit-controller.png";
import SchneiderBMS from "./Assets/HVACProducts/schneider-bms.png";
import VFDDrivers from "./Assets/HVACProducts/vfd-drivers.png";
import YaskawaLowHarmonicVFD from "./Assets/HVACProducts/yaskawa-low-harmonic-vfd.png";
import ProdualSensors from "./Assets/HVACProducts/produal.png";

/* Child products for Kamstrup BTU meters. */
import Multical302 from "./Assets/HVACProducts/multical-302.png";
import Multical403 from "./Assets/HVACProducts/multical-403.png";
import VelocitySensors from "./Assets/HVACProducts/velocity-sensor-produal.png";

export const HVACProductImageList = [
  {
    id: "Kamstrup BTU Meter",
    img: KamstrupBTUMeter,
    sub_header: "Heat metering with ULTRAFLOW® 54",
    information:
      "Kamstrup’s heat meters are based on state of the art heat technology",
    child_products: [
      {
        id: "MULTICAL®302 ",
        img: Multical302,
        sub_header: "The Ultra-compact meter",
        information:
          "As with all MULTICAL® energy meters, this heat meter employs the highly accurate ultrasonic technology. Every conceivable drop is measured due to the dynamic range 1600:1 from saturation flow to start flow (250:1 from qp:qi) reducing loss of distributed energy.",
      },
      {
        id: "MULTICAL®403",
        img: Multical403,
        sub_header: "The compact and flexible meter",
        information:
          "With the new built-in 2-way communication in MULTICAL® 403 and a READy remote meter reading system, it is now possible to perform remote configuration of the ultrasonic heat meters and reading of the log without direct access to the installation. Discover the possibilities within flexible and easy remote configuration of heat meters – for less hassle for both the utility and the consumer.",
      },
    ],
  },
  {
    id: "EFC Fan Coilt Unit Controller",
    img: EFCFanCoilUnitController,
    sub_header: "Unit Controller with TFL Thermostat",
    information: "Controller mounted in fan coil unit",
  },
  {
    id: "Schneider BMS",
    img: SchneiderBMS,
    sub_header: "EcoStruxure™ series",
    information:
      "The diverse flagship range of Building Management System products is what sets Schneider Electric India apart as one of the leading high-technology and innovation-driven brands in the country.",
  },
  {
    id: "VFD Drivers",
    img: VFDDrivers,
    sub_header: "Nidec (Emerson) drives",
    information:
      "Unidrive M is designed specifically for industrial applications.",
  },
  {
    id: "Yaskawa Low Harmonic VFD",
    img: YaskawaLowHarmonicVFD,
    sub_header: "Z1000 Series Fan & Pump drives",
    information:
      "Our HVAC product family ranges from 1/2 to 500 horsepower and includes features for Building Automation Systems such as extensive parameter selection to simplify management of BAS applications for energy efficiency and closed loop control, industry-standard Hand-Off-Auto functionality, an internal PI controller and a Sleep function",
  },
  {
    id: "EVC VAV Unit Controller",
    img: EVCVAVUnitController,
    sub_header: "Unit Controller with TFL Thermostat",
    information: "Built-in actuator and optional air pressure sensor",
  },
  {
    id: "Produal Sensors",
    img: ProdualSensors,
    sub_header: "Produal sensors for environment monitoring.",
    information:
      "Modern building automation is based on versatile, precise and high quality measurements. We have learnt that achieving optimal energy efficiency or indoor comfort requires more than that.",
    child_products: [
      {
        id: "Air Velocity Sensors",
        img: VelocitySensors,
        sub_header: "Active Air Velocity Sensors.",
        information:
          "IVL air velocity transmitters are designed for measuring air velocity and temperature inside the duct",
      },
    ],
  },
];
