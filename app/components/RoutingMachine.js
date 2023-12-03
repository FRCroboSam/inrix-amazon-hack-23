import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const wayPointsGas = [
    [37.77130185310476, -122.41275707082427],
    [37.76563741993847, -122.40917442689867],
    [37.77491995254837, -122.40328051303635]

]
const wayPointsShortest = [
    [37.77130185310476, -122.41275707082427],
    [37.77387109653664, -122.40859446108898],
    [37.77491995254837, -122.40328051303635]
]
const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: wayPointsShortest,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    waypointMode: 'snap',
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false
  });
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
