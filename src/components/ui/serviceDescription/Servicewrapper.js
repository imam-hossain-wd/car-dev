import CarouselPage from "./Carousel";
import BetteryDetails from "./BetteryDetails";
import EngineGearOilDetails from "./EngineGearOilDetails";
import CarBrakepadDetails from "./CarBrakepadDetails";
import CarradiatorDetails from "./CarradiatorDetails";
import AcDetails from "./AcDetails";
import EngineDiagnosticDetails from "./EngineDiagnosticDetails";

const Servicewrapper = ({service}) => {
  return (
    <section>
      <div>
        <div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold">{service?.name}</h1>
          <div className="w-[700px] mx-auto">
            <CarouselPage service={service} />
          </div>
          <div className="mb-20 w-[75%] mx-auto mt-5">
            
            {
              service?.name === "Car Battery Replacement Dubai" && <BetteryDetails /> 
            }
            {
              service?.name ==="Engine & Gear Oil Change" && <EngineGearOilDetails />
            }
            {
              service?.name ==="Car Brake Pad Repair And Replacement" && <CarBrakepadDetails />
            }
            {
              service?.name ==="Car Radiator Repair and Replacement Dubai" && <CarradiatorDetails />
            }
            {
              service?.name ==="Car Ac Repair Dubai" && <AcDetails />
            }
            {
              service?.name ==="Car Engine Diagnostic Service Dubai" && <EngineDiagnosticDetails />
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicewrapper;


