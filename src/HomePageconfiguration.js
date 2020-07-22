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
import SensorsImage from "./Assets/HVACProducts/sensors.jpg";

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
      information: "",
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
      information: "",
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
      information: "",
      header: "BTU water meters.",
      sub_header: "Heat metering with ULTRAFLOW.",
    },
  ],
  [
    {
      text: "VAV",
      icon: VAV,
      type: 1,
      information: "",
      header: "EVC VAV Unit controller.",
      img: EVCVAVUnitController,
      sub_header: "Unit controller with TFL Thermostat.",
    },
    {
      text: "HVAC",
      icon: HVACControl,
      type: 1,
      information: "",
      img: YaskawaLowHarmonicVFD,
      header: "Yaskawa Low Harmonic VFD.",
      sub_header: "Z1000 series fan & pump drives.",
    },
  ],
];
