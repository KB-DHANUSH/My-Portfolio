import { Timeline } from "../components/Timeline";
import { experience } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full" id="experience">
      <Timeline data={experience} type="experience" />
    </div>
  );
};

export default Experiences;
