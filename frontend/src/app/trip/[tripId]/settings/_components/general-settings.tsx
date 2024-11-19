import { BlockHeaderEdit, RoundedBlock } from "@/layout/block";

const GeneralSettings = () => {
  const handleSave = () => true; // TODO: Implement handleSave

  return (
    <RoundedBlock>
      <BlockHeaderEdit title="General" handleSave={handleSave} />
      hoge
    </RoundedBlock>
  );
};

export default GeneralSettings;
