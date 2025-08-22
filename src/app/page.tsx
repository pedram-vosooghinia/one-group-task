import CompanyCategory from "./components/companyCategory/CompanyCategory";
import TopicNews from "./components/topicNews/TopicNews";
import ScrollPart from "./components/scrollPart/ScrollPart";
export default function Home() {
  return (
    <div className="flex flex-col flex-wrap">
      <CompanyCategory />
      <TopicNews />
      <ScrollPart/>
    </div>
  );
}
