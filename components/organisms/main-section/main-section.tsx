import { DateRangeProvider } from "../../../src/contexts/date-range-context";
// import ResizeableBar from "../../atoms/drag-timeline/drag-timeline";
import DateComponent from "../../molecules/date-component/date-component";
import ResizeableElements from "../../molecules/resizeable-elements/resizeable-elements";
import SectionHead from "../section-head/section-head";
const MainSection = () => {
  return (
    <div>
      <SectionHead />
      <DateRangeProvider>
        <DateComponent />
        <ResizeableElements />
      </DateRangeProvider>
    </div>
  );
};

export default MainSection;
