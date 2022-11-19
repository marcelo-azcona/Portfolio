import './Header.styles.scss';

const SectionHeader = ({
  sectionType,
  sectionExtraClass,
  text,
}: {
  sectionType: string;
  sectionExtraClass?: string;
  text: string;
}) => {
  return (
    <div className={`${sectionType}__header`}>
      <h2 className={`${sectionType}__title`}>{text}</h2>
    </div>
  );
};

export default SectionHeader;
